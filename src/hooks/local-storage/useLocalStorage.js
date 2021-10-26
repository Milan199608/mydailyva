import {useCallback, useState} from "react";

const useLocalStorage = key => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  });

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
    setValue(undefined);
  }, []);

  const set = useCallback(newValue => {
    window.localStorage.setItem(key, JSON.stringify(newValue || defaultValue));
    setValue(newValue || defaultValue);
  }, []);

  return [value, set, remove];
};

export default useLocalStorage;

const defaultValue = 1;