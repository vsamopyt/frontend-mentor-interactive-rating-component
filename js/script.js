// varuiable
let ratingItems = document.querySelectorAll(".rating-item");
let thankRate = document.querySelector(".thank-rate");
let rattingBbutton = document.querySelector(".ratting-button");
let ratingCard = document.querySelector(".rating-card");
let thankCard = document.querySelector(".thank-card");
let rating = 0;


// app
// to set rating
ratingItems.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        clearClass();
        element.classList.add("grey");
        setRate(index);
    })
})

// to chage modules
rattingBbutton.addEventListener("click", ()=>{
    ratingCard.style.display = "none";
    thankCard.style.display = "block";

})

// functions
//  clear class grey before adding 
function clearClass() {
    ratingItems.forEach(element => {
        element.classList.remove("grey");
    })
}

// to set selected rating to dom element
function setRate(index) {
    rating=0;
    rating = index+1;
    thankRate.textContent = rating;
}