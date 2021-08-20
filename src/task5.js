export function sumarr(arr) {
    let sum = 0;
    arr.forEach(function(el) {
    sum = sum + el;
    })
    console.log(sum);
} 

export function arrx2(arr) {
    let newArr = arr.map(function(el) {
    let modified = el * 2;
    return modified;
    });
    return newArr;
} 

export function maxmin(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if ( max < arr[i]) {
            max = arr[i];
        }
    }
    
    let min = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if ( min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(max, min);
} 