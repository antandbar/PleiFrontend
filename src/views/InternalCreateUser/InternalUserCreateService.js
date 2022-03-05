import { constNames } from '../../const/index.js';
export class InternalUserCreateService {
    // eslint-disable-next-line no-useless-constructor
    constructor(){}
  
    // Se crea Usuario
    async createUser(user) {
      const url = constNames.routeNames.internalUserExt;
      //debugger;
      let usersResponse;
      let errorResponse = null;
/*       let userPrueba =         {
        "username": "plei6",
        "email": "plei@plei.games",
        "password":"123456",
        "person": {
            "tipo_user": "GAM",
            "wallet": "perro gato",
            "t_wallet": "Ether"
        }
    } */
      //debugger;
      try {
        usersResponse = await fetch(url,{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
      });
      } catch (error) {
        throw new Error("no he podido guardar el usuario");
      }
  
       // Se evalua si la respuesta fue exitosa
      if (!usersResponse.ok) {
        // Se captura la respuesta del tipo de error
        try {
          errorResponse = await usersResponse.json();
          return Object.values(errorResponse)[0][0];
        } catch (error) {
          throw new Error("no he podido transformar la respuesta a json");
        }
      }
      
      // se retorna error false
      return false;
    }

  }
  
export const internalUserCreateService = new InternalUserCreateService();