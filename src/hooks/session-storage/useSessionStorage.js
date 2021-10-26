import {useCallback, useState} from "react";

const useSessionStorage = key => {
  const [value, setValue] = useState(() => {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  });

  const remove = useCallback(() => {
    window.sessionStorage.removeItem(key);
    setValue(undefined);
  }, []);

  const set = useCallback(newValue => {
    window.sessionStorage.setItem(key, JSON.stringify(newValue || defaultValue));
    setValue(newValue || defaultValue);
  }, []);

  return [value, set, remove];
};

export default useSessionStorage;

const defaultValue = 1;