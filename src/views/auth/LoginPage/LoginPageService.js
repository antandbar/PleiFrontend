import { constNames } from '../../../const/index';
import storage from '../../../utils/storage';

const login = async (...credencials) => {
  const url = constNames.routeNames.auth;
  let loginResponse;
  let token;
    /* debugger; */
  try {
    loginResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(...credencials),
    });
  } catch (error) {
    throw new Error('No he podido ir a por el token');
  }

  // Se evalua si la respuesta fue exitosa
  if (!loginResponse.ok) {
    throw new Error('token no encontrado');
  }

  try {
    token = await loginResponse.json();
    storage.set('auth', token);
  } catch (error) {
    throw new Error('no he podido transformar la respuesta a json');
  }

  return token;
};

export default login;
