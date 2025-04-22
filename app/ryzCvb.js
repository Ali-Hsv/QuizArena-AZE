function nextTheme() {
    const content = document.querySelector('.obDiv');
    content.classList.add('fade-out');
    console.log("themee")
    setTimeout(function () {
      window.location.href = './TəbiyyatElimləri.html';
    }, 1000);
};

function flipCard(card) {
    document.getElementById(`flipBox${card}`).classList.toggle("flip");
}
