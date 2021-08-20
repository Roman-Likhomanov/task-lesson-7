export function sum(a, b) {
    console.log(a + b);
    console.log(a * b);
    } 

export function sumstr(str1, str2) {
    const str = str1 + str2;
    console.log(str.length);
    };
    
export function sumnum() {
    const num = window.prompt('Enter number');
    const digit3 = num % 10;
    const digit1 = (num - num % 100) / 100;
    const digit2 = (num - digit1 * 100 - digit3) / 10;
    console.log(digit1 + digit2 + digit3);
    }; 