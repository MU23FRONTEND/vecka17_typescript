"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    four();
}));
function one() {
    console.log('Ett!');
    fetch('https://santosnr6.github.io/Data/pokemons.json')
        .then((response) => {
        return response.json();
    })
        .then((pokemonList) => {
        pokemonList.forEach((pokemon) => {
            console.log(pokemon);
            const sectionRef = document.querySelector('section');
            const pRef = document.createElement('p');
            pRef.textContent = capitalizeWords(pokemon.name);
            sectionRef.appendChild(pRef);
        });
    })
        .catch(error => console.log(error));
}
function two() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Två!');
        try {
            const response = yield fetch('https://santosnr6.github.io/Data/dogs.json');
            console.log(response);
            if (!response.ok) {
                throw new Error('Anropet returnerade false');
            }
            const data = yield response.json();
            data.forEach(dog => {
                console.log(dog);
                const sectionRef = document.querySelector('section');
                const pRef = document.createElement('p');
                pRef.textContent = dog.name;
                sectionRef.appendChild(pRef);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
function three() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Tre!');
        const response = yield fetch('https://santosnr6.github.io/Data/books.json');
        const data = yield response.json();
        const filteredBooks = data.filter(book => book.pages < 500);
        filteredBooks.forEach(book => {
            const sectionRef = document.querySelector('section');
            const pRef = document.createElement('p');
            pRef.textContent = `Title: ${book.title}, pages: ${book.pages}`;
            sectionRef.appendChild(pRef);
        });
        return filteredBooks;
    });
}
function four() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Fyra!');
        const response = yield fetch('https://santosnr6.github.io/Data/attendees.json');
        const data = yield response.json();
        const filteredGuests = data.filter(guest => guest.attending && guest.allergies.length > 0);
        console.log(data);
        console.log(filteredGuests);
    });
}
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
