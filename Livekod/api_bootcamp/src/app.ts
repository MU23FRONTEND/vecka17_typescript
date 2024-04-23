window.addEventListener('load', async () : Promise<void> => {
    // one();
    // two();
    // const bookResponse = await three();
    four();
});

// Övning 1 API Bootcamp
function one() {
    console.log('Ett!'); 
    fetch('https://santosnr6.github.io/Data/pokemons.json') 
        .then((response : Response) => {
            return response.json();
        })
        .then((pokemonList : Pokemon[]) => {
            pokemonList.forEach((pokemon : Pokemon) => {
                console.log(pokemon);
                const sectionRef = document.querySelector('section') as HTMLElement;
                const pRef = document.createElement('p');
                pRef.textContent = capitalizeWords(pokemon.name);
                sectionRef.appendChild(pRef);
            });
        }) 
        .catch(error => console.log(error)); 

    type Pokemon = {
        name : string,
        url : string
    }
}

// Övning 2 API Bootcamp
async function two() : Promise<void> {
    console.log('Två!');
    
    try {
        const response = await fetch('https://santosnr6.github.io/Data/dogs.json');
        console.log(response);
        if(!response.ok) {
            throw new Error('Anropet returnerade false');
        }

        const data : Dog[] = await response.json();
        data.forEach(dog => {
            console.log(dog);
            const sectionRef = document.querySelector('section') as HTMLElement;
            const pRef = document.createElement('p');
            pRef.textContent = dog.name;
            sectionRef.appendChild(pRef);
        })

    } catch(error) {
        console.log(error);
    }

    type Dog = {
        name : string,
        breed : String,
        img : string,
        chipNumber : string
    }
}

// Övning 3 API Bootcamp
async function three() : Promise<Book[]> {
    console.log('Tre!');
    const response : Response = await fetch('https://santosnr6.github.io/Data/books.json');
    const data : Book[] = await response.json();
    
    // Båda varianterna nedan funkar utmärkt!!!
    const filteredBooks : Book[] = data.filter(book => book.pages < 500);
    
    // const filteredBooks : Book[] = [];

    // data.forEach(book => {
    //     if(book.pages < 500) {
    //         filteredBooks.push(book);
    //     }
    // })

    filteredBooks.forEach(book => {
        const sectionRef = document.querySelector('section') as HTMLElement;
        const pRef = document.createElement('p');
        pRef.textContent = `Title: ${book.title}, pages: ${book.pages}`;
        sectionRef.appendChild(pRef);
    });

    return filteredBooks;
}

type Book = {
    title: string,
    author : string,
    pages : number
}

// Globala typer ersätts av lokala vid namnkonflikter!!!
// type Book = {
//     title: string,
//     author : string,
//     pages : number
// }

// Övning 4 API Bootcamp
async function four() : Promise<void> {
    console.log('Fyra!');
    const response : Response = await fetch('https://santosnr6.github.io/Data/attendees.json');
    const data : Attendees[] = await response.json();

    const filteredGuests = data.filter(guest => guest.attending && guest.allergies.length > 0);
    console.log(data);
    console.log(filteredGuests);
    
}

type Attendees = {
    name : string,
    age : number,
    attending : boolean,
    allergies : string[]
}


function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}