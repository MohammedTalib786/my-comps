// console.log(2)
let strii = 'igb         ig       ig   sdbcec          f    '


function remExtra(str) {
    let regex = /\s+/gi;
    let res = str.replace(regex, ' ')
    return res;
}

console.log(remExtra(strii))