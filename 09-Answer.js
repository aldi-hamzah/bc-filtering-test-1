const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const minMaxArray = () => {
  rl.question(`input array : `, array => {
    if(array[0] !== "[" || array[array.length -1] !== "]"){
      console.log('Masukkan data array ([ ... ])');
      return;
    };

    array = array.substring(1, array.length-1).replaceAll('"', '').split(',');
    array = array.map(a => parseInt(a));

    let min = array[0];
    let max = array[0];

    for(let i = 0; i < array.length; i++){
      if(array[i] < min){
        min = array[i];
      }
      if(array[i] > max){
        max = array[i];
      }
    }

    console.log(`output : min = ${min}, max = ${max}`);

    rl.close();
  })
}

minMaxArray();