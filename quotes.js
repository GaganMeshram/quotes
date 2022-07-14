async function getData() {
const response = await fetch('https://type.fit/api/quotes')
const data = await response.json()

/* Accessing Dom elements*/

let author = document.querySelector('.author')
let quote = document.querySelector('.quote')


/* Getting random quotes */

let dataLength = data.length
let random = Math.floor(Math.random() * 
dataLength)


const dataQuote = data[random].text
const dataAuthor = data[random].author

if (data[random].author == null){
    author.textContent = `― Unknown`
}else{author.textContent =`― ${dataAuthor}` }

quote.textContent = `"${dataQuote}"` /*' "' +dataQuote + '" '*/

}

let quoteBtn = document.querySelector('.btn')

quoteBtn.addEventListener('click', ()=>{

    /* Getting random color */

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
    }
    let container = document.querySelector('.container')
    container.style.backgroundColor = color

    getData()

}
)
