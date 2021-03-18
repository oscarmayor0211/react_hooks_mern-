import { getHeroeById } from "./bases/08-import-export";


// const promesa = new Promise( (resolve, reject) => {
//    setTimeout(() => {
//       /// console.log('2 segundo despues');
//       const heroe = getHeroeById(2);
//       console.log(heroe);
//       resolve(heroe)
//    },2000) 
// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa' ,heroe);
// })


const getHeroeByIdAsync = ( id ) => {
    return  new Promise( (resolve, reject) => {
        setTimeout(() => {
           /// console.log('2 segundo despues');
           const heroe = getHeroeById(id);
          
           if(heroe){
            console.log(heroe);
            resolve(heroe)
           }else{
             reject('No se pudo encontrar al heroe')  
           }
          
        },2000) 
     });
}

getHeroeByIdAsync(3)
            // .then(heroe => console.log('heroe', heroe))
            // .catch(err => console.warn(err))
            .then(console.log)
            .catch(console.war)