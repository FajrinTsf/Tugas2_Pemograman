//Nama : Muhammad Fajrin Tsinan F (202030040086)
//Kelas : TI23C
//Mata Kuliah : Pemograman Berbasis Platform


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumOfPrimes(start, end) {
    let total = 0;
    const primeNumbers = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            total += num;
            primeNumbers.push(num);
        }
    }
    return { total, primeNumbers };
}

const inputStart = parseInt(prompt("Masukkan input awal: "));
const inputEnd = parseInt(prompt("Masukkan input akhir: "));
const { total, primeNumbers } = sumOfPrimes(inputStart, inputEnd);

console.log(`Jumlah bilangan prima dari ${inputStart} sampai ${inputEnd} adalah ${total}.`);
console.log(`Bilangan prima tersebut adalah: ${primeNumbers.join(" + ")}.`);
