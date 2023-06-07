const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const isPalindrome = () => {
  rl.question(`input array : `, array => {

    if(array[0] !== "[" && array[array.length -1] !== "]"){
      console.log('Masukkan data array ([ ... ])');
      return;
    };

    array = array.substring(1, array.length-1).replaceAll('"', '').split(',');

    const str = array.map(a => a.toLowerCase());
    const reverse = [...str].reverse();
    
    console.log(`output : ${str.join('') === reverse.join('')}`);

    rl.close();
  })
}

isPalindrome();