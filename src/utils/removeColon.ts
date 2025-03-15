export const removeColon = (str:string) :string => {
  const colonIndex = str.indexOf(':');
  return str.substring(colonIndex + 1, str.length);
}