function flipCard(card) {
    document.getElementById(`flipBox${card}`).classList.toggle("flip");
    if(card == 1){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "8";}, 350)
    }else if(card == 2){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "7";}, 350)
    }else if(card == 3){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "8";}, 350)
    }else if(card == 4){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "10-21-16";}, 350)
    }else if(card == 5){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "71";}, 350)
    }else if(card == 6){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "79";}, 350)
    }else if(card == 7){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "1";}, 350)
    }else if(card == 8){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "20";}, 350)
    }else if(card == 9){
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "65";}, 350)
    }else{
        setTimeout(()=>{document.querySelector(`.Answer${card} span`).textContent = "⁶⁄₅";}, 350)
    }
    return card;
}

function newTheme() {
    // const content = document.querySelector('.obDiv');

    // content.classList.add('fade-out');
    // console.log("themee")
    // setTimeout(function () {
    //   window.location.href = './Riyaziyat.html';
    // }, 1000);
    alert("This function has not been added!")
};