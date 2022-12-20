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
POST('/addPokemon') : Este endpoint nos permite agregar un nuevo pokemon a la aplicacion, una vez el usuario haya ingresado.
RESPONSE
{
 'message': 'Pokemon has been added successfully'
}


GET('/getPokemons/:ID') : Este endpoint nos devuelve un pokemon por su ID.
RESPONSE
{
    "id"
}








