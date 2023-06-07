const sumZero = (arr) => {
  let plus = [];
  let minus = [];

  arr.forEach(a => {
    if(a > 0){
      plus.push(a);
    } else if (a < 0){
      minus.push(a);
    }
  })

  const findSame = (plus, minus, j, i) => {
    for(let k = 0; k < j; k++){
      if(plus[i] === Math.abs(minus[k] + minus[j])){
        console.log(minus[k], minus[j], plus[i]);
        return;
      }
    }
  }

  const minusLoop = (plus, minus, i) => {
    for(let j = 0; j < minus.length; j++){
      findSame(plus, minus, j, i);
    }
  }

  for(let i = 0; i < plus.length; i++){
    minusLoop(plus, minus, i)
  }

  if(arr.length === 0){
    console.log(arr)
  }
}

sumZero([-1, 0, 1, 2, -1, 4]);
sumZero([2, 3, 4, -1, -2]);
sumZero([]);
