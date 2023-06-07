const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const plusOneDigit = () => {
  rl.question(`Input: digits = `, digits => {
    if(digits[0] !== "[" && digits[digits.length -1] !== "]"){
      console.log('Masukkan data array ([ ... ])');
      return;
    };
    
    // Menghapus karakter kurung siku ( [] ) dan koma ( , )
    digits = parseInt(digits.substring(1, digits.length-1).replace(/,/g, ''));

    // Menambahkan Angka
    digits += 1;

    console.log(digits.toString().split(''));

    rl.close();
  });
}

plusOneDigit();