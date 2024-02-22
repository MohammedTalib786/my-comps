let str = 'SHAIKH MOHAMMED TALIB shaikh mohammed talib'

function cap(s) {
    let a = s.split(' ')
    let emp = [];
    for (let k of a) {
        let i = k.toUpperCase().slice(0, 1) + k.slice(1).toLowerCase()
        emp.push(i)
    }
    let res = emp.join(' ');
    return res;
}

console.log(cap(str))
