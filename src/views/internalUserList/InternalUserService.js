export class InternalUserService {
    // eslint-disable-next-line no-useless-constructor
    constructor(){}
  
    // Se devulven los usuarios
    async getUsers() {
      const url = `http://13.38.85.64:8000/internal/api/1.0/user_internal/`
  
      let usersResponse;
      let users;
  
      try {
        usersResponse = await fetch(url);
      } catch (error) {
        throw new Error("No he podido ir a por los usuarios");
      }
  
       // Se evalua si la respuesta fue exitosa
      if (!usersResponse.ok) {
        throw new Error("Usuarios no encontrados");
      }
        
      try {
        users = await usersResponse.json();
      } catch (error) {
        throw new Error("no he podido transformar la respuesta a json");
      }
  
      return users;
    }

  }
  
export const internalUserService = new InternalUserService();