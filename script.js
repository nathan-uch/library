let myLibrary = [];

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const bookGrid = document.querySelector('.bookGrid');
const bookCard = document.querySelector('.bookCard');
const submitBtn = document.querySelector('.submitBtn');
const formContainer = document.querySelector('.formContainer');
const openForm = document.querySelector('.addBookBtn');
const closeForm = document.querySelector('.closeForm');
const resetBtn = document.querySelector('.resetBtn');

function doneReading() {
    let yesOrNo = document.getElementsByName('readOrNot');
    for (let j = 0; j < yesOrNo.length; j++) {
        if (yesOrNo[j].checked) {
            return yesOrNo[j].value;
        }
    }
}

function Book(title, author, pages, doneReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.doneReading = doneReading;
}

function createBookCard() {
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('bookCard');
    bookGrid.appendChild(newBookCard);
    
    let bookInfo = document.createElement('div');
    bookInfo.classList.add('bookInfo');

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = 'Remove';
    newBookCard.appendChild(removeBtn);
    let removeBook = document.getElementsByClassName('removeBtn');
    for (let i = 0; i < removeBook.length; i++) {
        removeBook[i].addEventListener('click', function() {
            this.parentNode.remove();
        });
    };

    let readToggle = document.createElement('input');
    readToggle.classList.add('readToggle');
    readToggle.type = 'checkbox';
    readToggle.name = 'readCheck';
    newBookCard.appendChild(readToggle);
    
    Book.prototype.readBook = function() {
        readToggle.checked = true;
    }

    let bookT = document.createElement('div');
    bookT.classList.add('bookTitle')
    let bookA = document.createElement('div');
    bookA.classList.add('bookAuthor')
    let bookP = document.createElement('div');
    bookP.classList.add('bookPages')
    let bookR = document.createElement('div');
    bookR.classList.add('bookRead')
    let bookStyling = document.createElement('div');
    bookStyling.classList.add('bookLook');

    let currentBook = myLibrary[0];
    
    if (currentBook.title == '' || currentBook.author == '' || currentBook.pages == '') {
        bookGrid.removeChild(bookGrid.lastChild);
        alert('ERROR - PLEASE TYPE BOOK TITLE, AUTHOR AND PAGES');
    } else {
        for (let k = 0; k < myLibrary.length; k++) {
            bookT.textContent = currentBook.title;
            bookA.textContent = 'by ' + currentBook.author;
            bookP.textContent = 'Pages: ' + currentBook.pages;
            bookR.textContent = 'Read:';
            bookInfo.appendChild(bookT);
            bookInfo.appendChild(bookA);
            bookInfo.appendChild(bookP);
            bookInfo.appendChild(bookR);
            newBookCard.appendChild(bookStyling);
            newBookCard.appendChild(bookInfo);
        }

        if (currentBook.doneReading == "yes") {
            currentBook.readBook();
        }
    }
}

function addToLibrary(book) {
    myLibrary.unshift(book);
    createBookCard();
}

submitBtn.addEventListener('click', () => {
    let newBook = new Book(title.value, author.value, pages.value, doneReading());
    newBook.prototype = Object.create(Book.prototype);
    addToLibrary(newBook);
    resetBtn.click();
    formContainer.style.display = "none";
})

openForm.addEventListener('click', () => {
    formContainer.style.display = "flex";
})

closeForm.addEventListener('click', () => {
    formContainer.style.display = "none";
})



const theHungerGames = new Book('the Hunger Games', 'Suzanne Collins', '374', 'yes');
addToLibrary(theHungerGames);

const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', '284', 'yes');
addToLibrary(toKillAMockingbird);

const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austenn', '384', 'no');
addToLibrary(prideAndPrejudice);

