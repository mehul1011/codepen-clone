import { useState, useEffect } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(key, initialValue) {
  const prefixedkey = PREFIX + key;
  console.log(prefixedkey, "Ini", initialValue);
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedkey);
    console.log("The json value", jsonValue);

    if (jsonValue != null) {
      console.log("Heck", JSON.parse(jsonValue));
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      console.log("was a function");
      return initialValue();
    } else {
      console.log("else part");
      return initialValue;
    }
  });

  console.log("Value", value);

  useEffect(() => {
    localStorage.setItem(prefixedkey, JSON.stringify(value));
    console.log("Effect", prefixedkey);
  }, [prefixedkey, value]);
  return [value, setValue];
}
