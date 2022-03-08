import { constNames } from '../../const/index.js';
export class InternalUserEditService {
    // eslint-disable-next-line no-useless-constructor
    constructor(){}
  
    // Se devulve usuario según ID
    async getUser(userId) {
      const url = constNames.routeNames.internalUserExt;
      let usersResponse;
      let user;

      try {
        usersResponse = await fetch(`${url}${userId}`);
      } catch (error) {
        throw new Error("No he podido ir a el usuario");
      }
  
       // Se evalua si la respuesta fue exitosa
      if (!usersResponse.ok) {
        throw new Error("Usuario no encontrado");
      }
        
      try {
        user = await usersResponse.json();
      } catch (error) {
        throw new Error("no he podido transformar la respuesta a json");
      }
  
      return user;
    }

    // Se actualiza Usuario
    async updateUser(user) {
      const url = constNames.routeNames.internalUserExt;
      //debugger;
      let usersResponse;
      let errorResponse = null;
/*          let userPrueba =         {
        "username": "plei66",
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
        usersResponse = await fetch(`${url}${user.id}/`,{
          method: "PUT",
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
  
export const internalUserEditService = new InternalUserEditService();