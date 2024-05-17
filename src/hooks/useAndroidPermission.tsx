import { useCallback } from 'react';
import { Permission, PermissionsAndroid } from 'react-native';
import { requestPermissionOptions } from '../models/requestPermission';

export const useAndroidPermission = () => {
  const requestPermission = useCallback(
    async (permission: Permission, options: requestPermissionOptions, callback: any) => {
      try {
        const granted = await PermissionsAndroid.request(permission, options);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          if (typeof callback === 'function') {
            callback(true);
          } else {
            console.warn('The callback function isnt valid:', callback);
          }
        } else {
          if (typeof callback === 'function') {
            callback(false);
          } else {
            console.warn('The callback function isnt valid: ', callback);
          }
        }
      } catch (error) {
        console.error('Error al solicitar permiso:', error);
      }
    },
    [],
  );

  return requestPermission;
};
