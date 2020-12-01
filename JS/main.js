let h1 = document.querySelector('.under_block h1');
let underHeader = document.querySelector('.under_header');
let prev = document.querySelector('.under_block.arrow .fas.fa-arrow-left');
let next = document.querySelector('.under_block.arrow .fas.fa-arrow-right');
let images = ["url('images/bgs/slider-1.jpg')","url('images/bgs/slider-9.jpg')","url('images/bgs/slider-10.jpg')","url('images/bgs/slider-11.jpg')"];
let headerNames = ["Hearst Business Center","Los Angeles Kindergarten","Eastwood Hotel and Spa","National Culture Museum"];
let index = 0;
let outputSpan = document.querySelector('#output');

setTimeout(printWord,150);
let charPosition = 0;
let wordTurn = 0;
function printWord () {
    if (headerNames[wordTurn].length > charPosition) {
        outputSpan.innerText += headerNames[wordTurn].charAt(charPosition);
        charPosition++;
        setTimeout(printWord,150);
    } 
    else  {
        outputSpan.nextSibling.style.display = "none";
    }
}


// NEXT AND PREVIOUS BUTTONS
next.addEventListener('click',() => {
    index += 1;
    if (index >= images.length) {
        index = 0;
    }  
    h1.innerText = headerNames[index];
    underHeader.style.backgroundImage = images[index];
})

prev.addEventListener('click',() => {
    index -= 1;
    if (index <= -1) {
        index = images.length - 1;
    }
    h1.innerText = headerNames[index];
    underHeader.style.backgroundImage = images[index];
})

//TESTIMONIALS BUTTONS
let testimonialsQuoteTexts = document.querySelectorAll('.testimonials_item > p');
let testimonialsQuoteNames = document.querySelectorAll('.testimonials_bottom>.names>p');
let testimonialsQuoteImg = document.querySelectorAll('.testimonials_bottom img');
let owlDots = document.querySelectorAll('.owl_dots button');

owlDots[1].addEventListener("click", (e)=>{

     testimonialsQuoteTexts[0].innerText = "I have worked with many architecture companies offering design & construction services, and out of all you were one who really stood out from the rest.";
     testimonialsQuoteTexts[1].innerText = "Working with your team was a pleasure. You balanced the architectural vision and the project realities beautifully and had a deep understanding of our priorities.";
     
     testimonialsQuoteNames[0].innerText = "Sam Wilson";
     testimonialsQuoteNames[2].innerText = "Harold Barnett";

     testimonialsQuoteImg[0].src = "images/testimonials/testimonials-person3.jpg";
     testimonialsQuoteImg[1].src = "images/testimonials/testimonials-person4.jpg";
});

owlDots[0].addEventListener("click", (e)=>{
    testimonialsQuoteTexts[0].innerText = "We selected R&CO because of their architects’ rigorous design background and education. They exceeded our expectations and emerged as leaders of our project.";
    testimonialsQuoteTexts[1].innerText = "When we needed design and architecture specialists, your team was there for us. You took all our ideas and demands into consideration and made a great project.";
    
    testimonialsQuoteNames[0].innerText = "Albert Webb";
    testimonialsQuoteNames[2].innerText = "Kelly McMillan";

    testimonialsQuoteImg[0].src = "images/testimonials/testimonials-person.jpg";
    testimonialsQuoteImg[1].src = "images/testimonials/testimonials-person2.jpg";
});

// LEFT HIDDEN NAVIGATION MENU
let toggleBtn = document.querySelector('#toggle');
let headerShow = document.querySelector('.header_hidden');
toggleBtn.addEventListener("click",()=>{
    if (headerShow.style.left == "0px") {
        headerShow.style.left = "-300px";
    } else {
        headerShow.style.left = "0px";
    }
})

//HIDDEN SEARCH INPUT

let searchBtn = document.querySelector(".searchBtn");
let searchInput = document.querySelector('.search');
let switcher = 0;
searchBtn.addEventListener("click", () => {
    if (switcher === 0) {
         switcher += 1;
         searchInput.style.opacity = "1";
         return 1;
    } else {
        switcher -= 1;
        searchInput.style.opacity = "0";
        return 0;
    }
})



