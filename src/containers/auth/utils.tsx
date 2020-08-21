import AsyncStorage from '@react-native-community/async-storage';

export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('USER_TOKEN', token);
  } catch (e) {
    console.log(e);
  }
  return token;
};

export const getToken = async () => {
  let token = null;
  try {
    token = await AsyncStorage.getItem('USER_TOKEN');
  } catch (e) {
    console.log(e);
  }
  return token;
};

export const deleteToken = async () => {
  let token = null;
  try {
    token = await AsyncStorage.removeItem('USER_TOKEN');
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const toQueryString = (params: string) => {
  return (
    '?' +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  );
};
