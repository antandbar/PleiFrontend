import { constNames } from '../../const/index.js';
export class InternalEditUserService {
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

  }
  
export const internalEditUserService = new InternalEditUserService();