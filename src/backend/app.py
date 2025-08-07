from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, Table, select, insert
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:461315@localhost:3306/app_renault'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

with app.app_context():
    metadata = MetaData()
    metadata.reflect(bind=db.engine)

    equipos = Table('equipos', metadata, autoload_with=db.engine)
    invitados = Table('invitados', metadata, autoload_with=db.engine)

@app.route("/invitados_registro", methods=["GET"])
def invitados_registro():
    with db.engine.connect() as conn:
        result = conn.execute(select(invitados))
        data = []
        for row in result:

            equipos_result = conn.execute(
                select(equipos).where(equipos.c.id == row.id_equipo)
            )

            equipos_result = equipos_result.first()
            if equipos_result:
                equipo_nombre = equipos_result.nombre

            invitado_data = {
                "dni": row.dni,
                "nombre_apellido": row.nombre_apellido,
                "dieta": row.dieta,
                "nombre_equipo": equipo_nombre if equipos_result else None
            }
            data.append(invitado_data)
        return jsonify(data)

@app.route("/equipos_registro", methods=["GET"])
def equipos_registro():
    with db.engine.connect() as conn:
        result = conn.execute(select(equipos))
        data = []
        for row in result:
            equipo_id = row.id

            # Obtener invitados de ese equipo
            invitados_result = conn.execute(
                select(invitados).where(invitados.c.id_equipo == equipo_id)
            )
            invitados_list = [
                {
                    "dni": i.dni,
                    "nombre_apellido": i.nombre_apellido,
                    "dieta": i.dieta
                }
                for i in invitados_result
            ]

            # Obtener nombres de responsables si están definidos
            responsable_1_nombre = None
            responsable_2_nombre = None

            if row.responsable_1_id:
                res1 = conn.execute(
                    select(invitados.c.nombre_apellido).where(invitados.c.dni == row.responsable_1_id)
                ).first()
                responsable_1_nombre = res1.nombre_apellido if res1 else None

            if row.responsable_2_id:
                res2 = conn.execute(
                    select(invitados.c.nombre_apellido).where(invitados.c.dni == row.responsable_2_id)
                ).first()
                responsable_2_nombre = res2.nombre_apellido if res2 else None

            equipo_data = {
                "id": row.id,
                "nombre": row.nombre,
                "categoria": row.categoria,
                "deporte": row.deporte,
                "puntaje": row.puntaje,
                "responsable_1": responsable_1_nombre,
                "responsable_2": responsable_2_nombre,
                "invitados": invitados_list
            }
            data.append(equipo_data)
        return jsonify(data)

@app.route("/subir_equipo", methods=["POST"])
def registrar_equipo():
    data = request.get_json()

    nombre = data.get("nombre")
    categoria = data.get("categoria")
    deporte = data.get("deporte")
    puntaje = data.get("puntaje", 0)
    responsable_1_id = data.get("responsable_1_id")
    responsable_2_id = data.get("responsable_2_id")
    #invitados_data = data.get("invitados", [])

    with db.engine.begin() as conn:
        result = conn.execute(
            insert(equipos).values(
                nombre=nombre,
                categoria=categoria,
                deporte=deporte,
                puntaje=puntaje,
                responsable_1_id=responsable_1_id,
                responsable_2_id=responsable_2_id
            )
        )

        # Obtener el ID del equipo recién insertado
        equipo_id = result.inserted_primary_key[0]
    return jsonify({"message": "Equipo registrado correctamente", "equipo_id": equipo_id}), 201


if __name__ == "__main__":
    app.run(debug=True)