#Proyecto-Final
****

Servidor corriendo en puerto 8080
Configuracion de base de datos desde variables de entorno. En archivo '.env.example.txt'

** Scripts Disponibles **
Para iniciliazar el backend:
    npm i
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    nodemon app.js


** Rutas públicas **
GET('/pokedex/getPokemons') : Este endpoint devuelve la lista de pokemons
    RESPONSE
    [
        {
                "id":,
                "img":,
                "name":,
                "weight":,
                "height":,
                "moves": [],
                "description",
                "type": [],
                "userId":
                "isDefault":
                "base": {
                            "HP",
                            "Attack",
                            "Defense",
                            "Spa",
                            "Spd",
                            "Speed"
                }
        },
		
{
	...
}]

GET('/getSpecific/:id') : Este endpoint nos devuelve un pokemon por su ID.
RESPONSE
{
    {
                "id":,
                "img":,
                "name":,
                "weight":,
                "height":,
                "moves": [],
                "description",
                "type": [],
                "userId":
                "isDefault":
                "base": {
                            "HP",
                            "Attack",
                            "Defense",
                            "Spa",
                            "Spd",
                            "Speed"
                }
        },
}
    
POST('/auth/Login') : Este endpoint permite autenticar el usuario que intenta ingresar a la aplicacion.
RESPONSE
{
   success: true/false
}



** Rutas Protegidas por Middleware **
POST('/pf/addNew') : Este endpoint nos permite agregar un nuevo pokemon a la aplicacion, una vez el usuario haya ingresado.
RESPONSE
{
 'message': 'Pokemon has been added successfully'
}

DELETE('/pf/dltPokemon/:id') : Este endpoint nos permite como usuario eliminar un pokemon creado.
RESPONSE
{
    'message' : Pokemon deleted successfully!
}

POST('/pf/defaultPoks') : Este endpoint nos permite añadir pokemones por defecto a la pokedex del usuario logueado.
{
    message: 'Default Pokemons added succesfully!'
}







