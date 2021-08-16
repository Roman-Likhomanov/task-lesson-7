export function diff(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
} 

export function isWord() {
    let word = prompt('enter text');
    let arr = word.split(' ');
    if (arr.length > 1) {
        return false;
    } else {
        return true;
    }
} 

export function pow(a, x) {
    let res = 1;
    for (let i = 1; i <= x; i++) {
        res = res * a;
    }
    return res;
}
