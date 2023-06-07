const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];

const comparedArray = (arr1, arr2) => {
  let same = [];
  let different = [];

  for(let i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])&& !same.includes(arr1[i])){
      same.push(arr1[i]);
    } else if (!arr2.includes(arr1[i])&& !different.includes(arr1[i])){
      different.push(arr1[i]);
    }
  }

  for(let i = 0; i < arr2.length; i++){
    if(arr1.includes(arr2[i])&& !same.includes(arr2[i])){
      same.push(arr2[i]);
    } else if (!arr1.includes(arr2[i])&& !different.includes(arr2[i])){
      different.push(arr2[i]);
    }
  }

  console.log(`Same = ${same}`);
  console.log(`Different = ${different}`);
}

comparedArray(array1,array2);

//Same = ["Mangga","Tomat","Nangka","Timun"]
//Different = ["Apel","Melon","Pisang","Sirsak","Nanas","Bayam","Wortel","Kangkung","Kembang Kol"]
