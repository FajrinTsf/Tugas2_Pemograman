//Nama : Muhammad Fajrin Tsinan F ( 20230040086 )
//Kelas : TI23C
//Mata Kuliah : Pemograman berbasis platform


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function nextPrime(n) {
    let num = n + 1;
    while (true) {
        if (isPrime(num)) {
            return num;
        }
        num++;
    }
}

const inputNumber = parseInt(prompt("Masukkan bilangan: "));
const outputPrime = nextPrime(inputNumber);
console.log(`Bilangan prima setelah ${inputNumber} adalah ${outputPrime}.`);
