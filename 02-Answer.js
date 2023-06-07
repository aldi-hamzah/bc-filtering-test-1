const stairs1 = () => {
  let str = '';
  let v = 1;
  for(let i = 1; i <= 7; i ++){
    for(let j = 1; j <= i; j++){

      str += `${v} `
      v++;

    }
    str += '\n';
    v = i+1;
  }
  console.log(str);
}

const stairs2 = () => {
  let str = '';
  let v = 5;
  for(let i = 5; i <= 11; i ++){
    for(let j = 5; j <= i; j++){

      str += `${v} `
      v++;

    }
    str += '\n';
    v = i+1;
  }
  console.log(str);
}

stairs1();
stairs2();