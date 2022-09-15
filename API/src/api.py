# API para proyecto IG2      http://127.0.0.1:5000/
'''
pasos:
    python -m venv venv             creamos el entorno virtual 
    venv\Scripts\activate           activamos el entorno vritual 
    pip install flask
    pip install flask-pymongo
    
''' 
# pip install flask pymongo  
# pip install flask-pymongo    
# pip install flask-cors      

#librerias

from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__) #inicializamos flask
CORS(app)
# conectamos a la base de datos
app.config['MONGO_URI'] = 'mongodb+srv://Admin:TacosAlPastor12345678910@cluster0.sismnd1.mongodb.net/IG2DB' 

mongo = PyMongo(app) #mongo es nuestra base de datos (mongo.db)
#--------------------------------

# -------------CREAMOS USUARIOS--------------
# tenemos que recibir nombre, usuario y contraseña
@app.route('/create/user', methods=['POST'])
def create_user():
    
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']
    
    if mongo.db.users.find_one({'username':username}) != None:
        return {'ERROR': 'ya existe este username'}

    if mongo.db.users.find_one({'email':email}) != None:
        return {'ERROR': 'ya esta en uso este correo'}
    
    if username and password and email:
        
        id = mongo.db.users.insert_one(
            {'username' : username,'email': email,'password': password}    
        )   #guardamos en la coleccion users
        response = {
            'id' : str(id),
            'username': username,
            'email': email,
            'password': password
        }
        return response
    else:
        return {'mesage': 'Faltan campos'}
#=============================================


#--------------INICIO DE SESION-----------
@app.route('/login/user', methods = ['POST'])
def login():
    username = request.json['username']
    password = request.json['password']
    data = mongo.db.users.find_one({'username':username, 'password': password})
    if  data == None:
        if  mongo.db.users.find_one({'username':username}) == None:
            return {'ERROR': "usuario no existe"}
        else:
            return {'ERROR': "contraseña incorrecta"}
    else:
        return{
            '_id': str(data['_id']),
            'username': data['username'],
            'email': data['email']
        }



#---------------Buscamos un usuario-----------------
@app.route("/user/<name>", methods=['GET'])
def find_user(name):
    data = mongo.db.users.find_one({'username':name}) #buscamos usuario y lo guardamos en data
    if data == None: # si no se encontro el usuario 
        return{'ERROR':404} # regresamos error 404
    # si si se encontro mostramos su id, nombre y correo
    return{ 
        '_id': str(data['_id']),
        'username': data['username'],
        'email': data['email']
    } 
#===================================================

#-------------ELIMINAMOS USUARIO------------------
@app.route('/del/user', methods=['POST'])
def del_user():
    username = request.json['username']
    password = request.json['password']
    query = {'username': username, 'password': password}
    xd = mongo.db.users.delete_one(query)
    return {'mesage':'user deleted'}
#================================================


#--------------SUBIR IMAGENES-------------------
@app.route('/subir/img', methods=['POST'])
def sub_img():
    username = request.json['username']
    link = request.json['link']
    text = request.json['text']
    
    id = mongo.db.img.insert_one(
        {'username': username,'link': link, 'text': text}    
    )   #guardamos en la coleccion users
    response = {
        'id' : str(id),
        'username': username,
        'link': link,
        'text': text
    }
    return response
#===============================================

#--------------CONSEGUIR IMAGENES---------------
@app.route('/get/img', methods = ['GET'])
def get_img():
    datas = mongo.db.img.find()
    
    result = []
    
    for data in datas:
        result.append({
            '_id': str(data['_id']),
            'username': data['username'],
            'link': data['link'],
            'text': data['text']
        })
    return result

#================================================


if __name__ == "__main__":
    app.run(debug=True)  #debug True hace que cuando tengamos cambios se reinicie 