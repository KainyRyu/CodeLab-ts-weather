interface LocalStorageProps {
  readonly key: string;
  readonly value?: string[];
}

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const setLocalStorage = ({ key, value }: LocalStorageProps) =>
  localStorage.setItem(key, JSON.stringify(value));
