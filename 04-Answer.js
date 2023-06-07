const addSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[j] + arr[i] === target){
        let answer = [];
        answer.push(j);
        answer.push(i);
        console.log(answer);
        return;
      }
    }
  }
  console.log(null);
}

addSum([3, 2, 3], 6) // output : [0,2]
addSum([3, 2, 4], 6) // output : [1,2]
addSum([3,3], 6) // output : [0,1]