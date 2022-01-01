// Array 

//  const array = new Array(100)

const array = [1,2,3,4]


// don't is recomendable use push because it's change the struture original 
//array.push(1)

let array2 = [...array,5];

const array3 =  array2.map((number)=>{
    return number * 2    
})

console.log(array);
console.log(array2);
console.log(array3);