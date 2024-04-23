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

window.addEventListener('load', () => {
    setupPage();
});

function setupPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchBooks();
        renderBooks(books);
        const cart = [];
        let cartItems = 0;
        const buttonRefs = document.querySelectorAll('.button');
        buttonRefs.forEach(button => {
            button.addEventListener('click', (event) => {
                const parentNode = event.target.parentNode;
                const book = parentNode.dataset.product;
                if (book) {
                    const cartIndex = cart.findIndex(item => item.title === book);
                    if (cartIndex !== -1) {
                        cart[cartIndex].qty++;
                    }
                    else {
                        const newItem = {
                            title: book,
                            qty: 1
                        };
                        cart.push(newItem);
                    }
                    cartItems++;
                    updateCart(cartItems);
                }
            });
        });
        const cartRef = document.querySelector('#openCart');
        cartRef.addEventListener('click', () => {
            var _a;
            (_a = document.querySelector('#cart')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide');
            listProductsInCart(cart);
        });
    });
}

function listProductsInCart(cart) {
    const listRef = document.querySelector('#products');
    listRef.innerHTML = '';
    cart.forEach(item => {
        const listItemRef = document.createElement('li');
        listItemRef.textContent = `Title: ${item.title}, qty: ${item.qty}`;
        listRef.appendChild(listItemRef);
    });
}

function updateCart(cartItems) {
    const totalRef = document.querySelector('#productsInCart');
    totalRef.textContent = cartItems.toString();
}

function renderBooks(books) {
    const cardsRef = document.querySelector('#cards');
    books.forEach(book => {
        const cardRef = createCard(book);
        cardsRef.appendChild(cardRef);
    });
}

function createCard(book) {
    const cardRef = document.createElement('article');
    cardRef.classList.add('card');
    cardRef.dataset.product = book.title;
    const cardTemplate = `
        <h3 class="title">${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="about">
            ${book.about}
        </p>
        <button class="button" id="add-to-cart-button">Add to cart</button>
    `;
    cardRef.innerHTML = cardTemplate;
    return cardRef;
}

function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://santosnr6.github.io/Data/books.json');
        const data = yield response.json();
        return data;
    });
}
