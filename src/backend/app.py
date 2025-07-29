from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, Table, select, insert
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@localhost:3306/app_renault'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

"""class Invitado(db.Model):
    __tablename__ = 'invitados'
    
    dni = db.Column(db.BigInteger, primary_key=True)
    id_equipo = db.Column(db.BigInteger, db.ForeignKey('equipos.id'))
    nombre_apellido = db.Column(db.String(255), nullable=False)
    dieta = db.Column(db.String(255), nullable=False)

class Equipo(db.Model):
    __tablename__ = 'equipos'

    id = db.Column(db.BigInteger, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    categoria = db.Column(db.String(255), nullable=False)
    responsable_1_id = db.Column(db.BigInteger, db.ForeignKey('invitados.dni'), nullable=True)
    responsable_2_id = db.Column(db.BigInteger, db.ForeignKey('invitados.dni'), nullable=True)
    deporte = db.Column(db.String(255), nullable=False)
    puntaje = db.Column(db.BigInteger, nullable=False)
    
    invitados = db.relationship('Invitado', backref='equipo', lazy=True, foreign_keys='Invitado.id_equipo')

    responsable_1 = db.relationship('Invitado', foreign_keys=[responsable_1_id], backref='equipos_como_responsable1')
    responsable_2 = db.relationship('Invitado', foreign_keys=[responsable_2_id], backref='equipos_como_responsable2')


#with app.app_context():
#    db.create_all()"""

with app.app_context():
    metadata = MetaData()
    metadata.reflect(bind=db.engine)

    equipos = Table('equipos', metadata, autoload_with=db.engine)
    invitados = Table('invitados', metadata, autoload_with=db.engine)


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


"""@app.route("/nuevo_equipo", methods=["POST"])
def nuevo_equipo():
    if request.method == "OPTIONS":
        return '', 204
    data = request.json
    print(data)
    nuevo = Equipo(
        nombre=data["nombre"],
        categoria=data["categoria"],
        deporte=data["deporte"],
        puntaje=data["puntaje"],
        responsable_1_id=None,
        responsable_2_id=None
    )
    db.session.add(nuevo)
    db.session.commit()
    return jsonify({"mensaje": "Equipo creado"})

@app.route("/nuevo_invitado", methods=["POST"])
def nuevo_invitado():
    data = request.json
    nuevo = Invitado(
        dni=data["dni"],
        nombre_apellido=data["nombre_apellido"],
        dieta=data["dieta"],
        id_equipo=data["id_equipo"]
    )
    db.session.add(nuevo)
    db.session.commit()
    return jsonify({"mensaje": "Invitado creado correctamente"})"""

if __name__ == "__main__":
    app.run(debug=True)