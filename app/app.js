const body = document.querySelector(".blockBlack");
const buttons = document.querySelectorAll(".quesButton");
let click = [];

function banCard(card){
    click.push(card);
    document.getElementById(`butt${card}`).classList.add("redButt");
    document.getElementById(`butt${card}`).classList.remove("noHover");

}

function back(box){
    let element = document.getElementById(`elm${box}`);
    element.classList.add("scale-down-center");
    element.classList.remove("scale-up-center");
    setTimeout(()=>{
        element.classList.add("nonen");
        body.classList.remove("opsity");
        element.classList.remove("scale-down-center");
    }, 150)  
}

window.addEventListener('load', function() {
    document.querySelector('.obDiv').classList.add('loaded');
});


document.querySelectorAll(".quesButton").forEach(div => {
    div.addEventListener("click", function() {
        const [_, colon, box] = div.id.match(/elm(\d+)-(\d+)/) || []; //elem - hissesinden sonra hansi reqem oldugunu tapir ve colon, box hissesinesave edir
        if (colon && box) {
            QuesActive(Number(colon), Number(box));
        }else{
            console.log("Colon yada box tapılmadı");
        }
    });
});

function newTheme() {
    // const content = document.querySelector('.obDiv');

    // content.classList.add('fade-out');
    // console.log("themee")
    // setTimeout(function () {
    //   window.location.href = './Riyaziyat.html';
    // }, 1000);
    alert("This function has not been added!")
};