const persona = {
    name:'tony',
    lastName:'Stark',
    age:45,
    address:{
        city:'New York',
        zip:1301155,
        lat:14.3232,
        lng:-74.286      
    }
}

// console table it's for show the information in a table 
// console.table(persona);

console.log(persona);

// this type of clonations it's not avalaible because this change to memory space of the firts value, then if you see the console.log of persona 
// and persona 2 you will see what de value of persona.name is peter in both objets 
const persona2 = persona
persona2.name = 'peter'
console.log(persona2);

// for create a true clone you need create a new object for this save the information in a new space memory 

const persona3 = {...persona}
persona3.name = "thor"

console.log(persona);
console.log(persona3);