import heroes from './heroes'
export const impHeroe = (id) => {return heroes.find((heroe) =>  heroe.id === id)}
