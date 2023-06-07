const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const insertInt = () => {
  console.log(`Gunakan Spasi Untuk Pemisahan Array`)
  rl.question(`input array : `, array => {
    rl.question(`target : `, target => {
      if(array[0] !== "[" || array[array.length -1] !== "]"){
        console.log('Masukkan data array ([ ... ])');
        return;
      };

      array.replaceAll(",", '');

      target = parseInt(target);
      
      array = array.substring(1, array.length-1).replaceAll('"', '').split(' ');
      array = array.map(a => parseInt(a));

      array.push(target);

      for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i; j < array.length; j++){
          if(array[j] < array[min]){
            min = j;
          }
        }
        if (min != i){
          let tmp = array[i];
          array[i] = array[min];
          array[min] = tmp;
        }
      }

      console.log(`result : [${array.toString().replaceAll(',',' ')}]`);
      
      rl.close();
    });
  });
}

insertInt();