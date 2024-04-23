
// const movies = fetchData();
// console.log(movies);
// window.addEventListener('load', async () => {
//     const movies = await fetchMovies();
//     console.log(movies);
// });

// Template för asynkrona fetch-anrop, bäst om man vill returnera data
async function asyncfunction() {
    const response = await fetch('');
    const data =  await response.json();
}

// Template för asynkrona fetch-anrop, bra om man vill agera på datan direkt, inte retur
fetch('')
    .then(response =>{ })
    .then(data => { })
    .catch(error => console.log(error));


// const movies = fetchMovies();
//     console.log(movies);


// async function fetchMovies() : Promise<Movie[]> {
//     const response = await fetch('https://santosnr6.github.io/Data/movies_long.json');
//     console.log(response);
//     const data : Movie[] = await response.json();
//     console.log(data);

    
//     data.forEach((movie : Movie) => {
//         const titleRef = document.createElement('p') as HTMLParagraphElement;
//         titleRef.textContent = movie.title;
//         document.querySelector<HTMLElement>('section')?.appendChild(titleRef);
//     });
//     return data;
// }


// function fetchData() : void {
//     fetch('https://santosnr6.github.io/Data/movies_long.json')
//         .then((response : Response) => {
//             return response.json();
//         })
//         .then((data : Movie[]) => {            
//             data.forEach((movie : Movie) => {
//                 const titleRef = document.createElement('p') as HTMLParagraphElement;
//                 titleRef.textContent = movie.title;
//                 document.querySelector<HTMLElement>('section')?.appendChild(titleRef);
//             })
//         })
//         .catch((error : Error) => {
//             console.log(error);
//         });
// }


// type Movie = {
//     imdbid : string,
//     title : string,
//     poster : string,
//     trailer_link : string
// }