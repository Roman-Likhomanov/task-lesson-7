export function addage(user) {
    let input = prompt('enter number');
    user.age = +input;
} 

export function clone(user) {
    let admin = Object.assign({}, user, {role: 'admin'});
    return admin;
} 

export function destructurization(user) {
    let admin = Object.assign({}, user, {role: 'admin'});
    let {name, role} = admin;
    console.log(name, role);
} 