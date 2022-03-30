import { constNames } from '../../const/index.js';
import storage from '../../utils/storage';
export class InternalUserDetailService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  // Se devulve usuario según ID
  async getUser(userId) {
    const url = constNames.routeNames.internalUserExt;
    let usersResponse;
    let user;

    try {
      usersResponse = await fetch(`${url}${userId}`, {
        headers: {
          Authorization: `Token ${storage.get('auth').token}`,
        },
      });
    } catch (error) {
      throw new Error('No he podido ir a el usuario');
    }

    // Se evalua si la respuesta fue exitosa
    if (!usersResponse.ok) {
      throw new Error('Usuario no encontrado');
    }

    try {
      user = await usersResponse.json();
    } catch (error) {
      throw new Error('no he podido transformar la respuesta a json');
    }

    return user;
  }

  // Se elimina Usuario según ID
  async deleteUser(userId) {
    const url = constNames.routeNames.internalUserExt;
    let usersResponse;

    try {
      usersResponse = await fetch(`${url}${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${storage.get('auth').token}`,
        },
      });
    } catch (error) {
      throw new Error('no he podido ir a el usuario a eliminar');
    }

    // Se evalua si la respuesta fue exitosa
    if (!usersResponse.ok) {
      throw new Error('usuario a eliminar no encontrado');
    }
  }
}

export const internalUserDetailService = new InternalUserDetailService();
