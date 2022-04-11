export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getDataFromLocalStorage = (key: string) => localStorage.getItem(key);

export const removeDataFromLocalStorage = (key: string) => localStorage.removeItem(key);

export const resetLocalStorage = () => localStorage.clear();
