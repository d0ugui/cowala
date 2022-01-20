export default function dateFormat() {
  const now = new Date();
  const register = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;

  return register;
}
