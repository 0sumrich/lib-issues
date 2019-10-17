import pure from "purecss";
console.log(pure.getFilePath("pure-button"));
export default ({ children }) => {
  return <button>{children}</button>;
}
