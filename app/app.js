const body = document.querySelector(".blockBlack");
const buttons = document.querySelectorAll(".quesButton");
let click = [];

function QuesActive(box) {
    if (click.includes(box)) {
        console.log("Элемент существует или массив пуст.");

    } else {
        console.log("Элемент добавлен:", box);

        let element = document.getElementById(`elm${box}`);
        console.log(element.id);
        element.classList.remove("nonen");
        // element.classList.add("nonenOn");
        element.classList.add("scale-up-center");  
        body.classList.add("opsity");
    }
}
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


// document.querySelectorAll(".quesButton").forEach(div => {
//     div.addEventListener("click", function() {
//         const [_, colon, box] = div.id.match(/elm(\d+)-(\d+)/) || []; //elem - hissesinden sonra hansi reqem oldugunu tapir ve colon, box hissesinesave edir
//         if (colon && box) {
//             QuesActive(Number(colon), Number(box));
//         }else{
//             console.log("Colon yada box tapılmadı");
//         }
//     });
// });
