import { useState, useEffect } from 'react';

/*
  Cookie Hook
- Lets you check for a specific cookie by key
- Lets you update a cookie by key
*/

export const useCookie = (key, defaultValue) => {
  const getItem = key => {
    return document.cookie.split('; ').reduce((total, currentCookie) => {
      const item = currentCookie.split('=');
      const storedKey = item[0];
      const storedValue = item[1];
      return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, '');
  };

  const setItem = (key, value, numberOfDays) => {
    const now = new Date();
    now.setTime(now.getTime() + (numberOfDays * 60 * 60 * 24 * 1000));
  
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
  };

  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };
  return [cookie, updateCookie];
};

/* --------------------------------- */


/*
  Debounce Hook
- Lets you debounce any kind of value by a specified delay
*/

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

/* --------------------------------- */