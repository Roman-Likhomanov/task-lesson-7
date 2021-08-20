export function addage(user) {
  const input = prompt('enter number');
  user.age = +input;
}

export function clone(user) {
  const admin = { ...user, role: 'admin' };
  return admin;
}

export function destructurization(user) {
  const admin = { ...user, role: 'admin' };
  const { name, role } = admin;
  console.log(name, role);
}
