let i;

for(i = 1; i <= 10; i++){
    const NewDiv = document.createElement("div");
    NewDiv.className = "quesButton";
    NewDiv.innerHTML = `
        <button onclick="QuesActive(${i})" class="butTon  noHover" id="butt${i}"><span>${i}</span></button>
        <div class="nonen" id="elm${i}">
        <span>Answer the question</span>
        <div class="container">
            <div id="flipBox${i}" class="flip-box">
                <div class="side front">
                    <!-- <img src="img/məntiq/ques/q${0}.jpeg" alt="Лицевая сторона"> -->
                    <div class="Question${i}"><span></span></div>
                </div>
                <div class="side back">
                    <!-- <img src="img/məntiq/ansver/q${0}.jpeg" alt="Обратная сторона"> -->
                    <div class="Answer${i} colorAn">Answer: <span></span></div>
                </div>
            </div>
        </div>
        <div class="questButtons">
            <button class="geri" onclick="back(${i})"><p>«</p></button>
            <button class="cavab" onclick="flipCard(${i}); banCard(${i});">Cavab</button>
        </div>
    `; 

    document.querySelector(".block").appendChild(NewDiv);
    console.log("New Block!")
}

function QuesActive(num){
    const quests = {
        1: `Question number - ${num}`,
        2: `Question number - ${num}`,
        3: `Question number - ${num}`,
        4: `Question number - ${num}`,
        5: `Question number - ${num}`,
        6: `Question number - ${num}`,
        7: `Question number - ${num}`,
        8: `Question number - ${num}`,
        9: `Question number - ${num}`,
        10: `Question number - ${num}`,
    }

    const questText = quests[num] || "";
    document.querySelector(`.Question${num} span`).textContent = questText;
    console.log("question active");

    if (click.includes(num)) {
        console.log("The element exists or the array is empty.");

    } else {
        console.log("Element added:", num);

        let element = document.getElementById(`elm${num}`);
        console.log(element.id);
        element.classList.remove("nonen");
        element.classList.add("scale-up-center");  
        body.classList.add("opsity");
    }
    return num;
}

function flipCard(card) {
    const answers = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10"
    }

    document.getElementById(`flipBox${card}`).classList.toggle("flip");

    const answerText = answers[card] || "";
    setTimeout(() => {
        document.querySelector(`.Answer${card} span`).textContent = answerText;
    }, 350);

    return card;
}