window.addEventListener('load', () : void => {
    setupPage();
});

type Book = {
    title : string,
    author : string,
    pages : number,
    genre : string,
    about : string
}

type CartItem = {
    title : string,
    qty : number
}


async function setupPage() : Promise<void> {
    const books : Book[] = await fetchBooks();
    renderBooks(books);
    const cart : CartItem[] = [];
    let cartItems : number = 0;

    const buttonRefs = document.querySelectorAll('.button') as NodeListOf<HTMLButtonElement>;
    buttonRefs.forEach(button => {
        button.addEventListener('click', (event : MouseEvent) : void =>{
            const parentNode = (event.target as HTMLElement).parentNode as HTMLElement;
            const book : string | undefined = parentNode.dataset.product;
            
            if(book) {
                const cartIndex : number = cart.findIndex(item => item.title === book);

                if(cartIndex !== -1) {
                    cart[cartIndex].qty++;
                } else {
                    const newItem : CartItem = {
                        title : book,
                        qty : 1
                    };
                    cart.push(newItem);
                }
                cartItems++;
                updateCart(cartItems);
            }
        });
    });
    
    const cartRef = document.querySelector('#openCart') as HTMLAnchorElement;
    cartRef.addEventListener('click', () : void => {
        document.querySelector<HTMLElement>('#cart')?.classList.toggle('hide');
        listProductsInCart(cart);
    });
}

// Listar alla produkter i kundvagnen
function listProductsInCart(cart : CartItem[]) : void {
    const listRef = document.querySelector('#products') as HTMLUListElement;
    listRef.innerHTML = '';

    cart.forEach(item => {
        const listItemRef = document.createElement('li') as HTMLElement;
        listItemRef.textContent = `Title: ${item.title}, qty: ${item.qty}`;
        listRef.appendChild(listItemRef);
    });
}

// Uppdaterar antalet varor i kundvagnen
function updateCart(cartItems : number) : void {
    const totalRef = document.querySelector('#productsInCart') as HTMLSpanElement;
    totalRef.textContent = cartItems.toString();
}

// Renderar ut alla böcker i webbshoppen
function renderBooks(books : Book[]) : void {
    const cardsRef = document.querySelector('#cards') as HTMLElement;
    books.forEach(book => {
        const cardRef = createCard(book);
        cardsRef.appendChild(cardRef);
    })
}

// Skapar och returnerar ett kort
function createCard(book : Book) : HTMLElement {
    const cardRef = document.createElement('article') as HTMLElement;
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

// Hämtar och returnerar alla böcker i APIet
async function fetchBooks() : Promise<Book[]> {
    const response = await fetch('https://santosnr6.github.io/Data/books.json');
    const data : Book[] = await response.json();
    return data;
}
