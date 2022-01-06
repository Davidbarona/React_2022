import { getHeoreById, getHeroesByOwner } from "./bases/08-Imports-Exports";

//  const promise = new Promise ((resolved,reject)=>{
//      setTimeout(() => {

//      const hero = getHeoreById(2)
//      resolved(hero)
//      // Error
//      // reject('hero not found')
//      },2000);
//  })

//  promise.then((hero)=>{
//       console.log('Then about promise',hero);
//  }).catch (err => console.warn(err))

const getHeroByIdAsync = (id) => {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      const hero = getHeoreById(id);

      if (hero) {
        resolved(hero);
      } else {
        reject("hero not found");
      }
    }, 2000);
  });
};

getHeroByIdAsync(4)
  .then(console.log)
  .catch(console.warn);
