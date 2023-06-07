const findTarget = (arr, num) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
      console.log(i);
      return;
    }
  }
  console.log(null)
}

findTarget([1, 2, 4], 4) // output : 2
findTarget([-1, 2, 5, 6, 7], 6) // output : 3

