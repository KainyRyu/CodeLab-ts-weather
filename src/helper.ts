export const setSessionStorage = (key: string, value: any) =>
  sessionStorage.setItem(key, value);

export const getDataFromSessionStorage = (key: string) =>
  sessionStorage.getItem(key);

export const removeDataFromSessionStorage = (key: string) =>
  sessionStorage.removeItem(key);

export const resetSessionStorage = () => sessionStorage.clear();
