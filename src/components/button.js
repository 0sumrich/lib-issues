import React from 'react'
import pure from "purecss";
console.log(pure)

export default ({ children }) => {
  return <button className="pure-button">{children}</button>;
};
