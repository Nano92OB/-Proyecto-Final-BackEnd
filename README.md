#Proyecto-Final
****

GET('/getPokemons') : Este endpoint devuelve la lista de pokemons
    RESPONSE
    [
        {
                "id",
                "img",
                "name",
                "weight",
                "height",
                "moves": [],
                "description",
                "type": [],
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

    
POST('/Login') : Este endpoint permite autenticar el usuario que intenta ingresar a la aplicacion.
RESPONSE
{
   success: true/false
}

POST('/addNew') : Este endpoint nos permite agregar un nuevo pokemon a la aplicacion, una vez el usuario haya ingresado.
RESPONSE
{
 'message': 'Pokemon has been added successfully'
}


GET('/getSpecific/:id') : Este endpoint nos devuelve un pokemon por su ID.
RESPONSE
{
    "id"
}

DELETE('/dltPokemon/:id') : Este endpoint nos permite como ususario eliminar un pokemon creado.
RESPONSE
{
    'message' : Pokemon deleted successfully!
}








