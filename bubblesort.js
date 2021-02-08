let suitsCards = ["♦", "♥", "♣", "♠"]
let numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let cardsArray = []

let drawButton = document.getElementById("drawButton");
drawButton.addEventListener("click", function () {
    let Input = document.getElementById("input")
    let numberCard = Input.value
    let container = document.getElementById("container")
    container.innerHTML = "";
    let card_container_sort = document.getElementById("card_container_sort")
    card_container_sort.innerHTML = "";
    cardsArray = randomCard(numberCard)
    for (let i = 0; i < cardsArray.length; i++) {
        if (cardsArray[i].suits == "♦" || cardsArray[i].suits == "♥") {
            container.innerHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits redsuits" id="suit_top">${cardsArray[i].suits}</p>
                    </div>
                    <div class="number" id="number">
                        <p>${cardsArray[i].number}</p>
                    </div>
                    <div class="suit-bottom">
                        <p class="suits redsuits" id="suit_bottom">${cardsArray[i].suits}</p>
                    </div>
               </div>`
        } else {
            container.innerHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits blacksuits" id="suit_top">${cardsArray[i].suits}</p>
                    </div>
                    <div class="number" id="number">
                        <p>${cardsArray[i].number}</p>
                    </div>
                    <div class="suit-bottom">
                        <p class="suits blacksuits" id="suit_bottom">${cardsArray[i].suits}</p>
                    </div>
               </div>`
        }
    }
})


class Card {
    constructor(suits, number) {
        this.suits = suits
        this.number = number
    }
}

function randomCard(numberCard) {
    let cardsArray = []
    for (let index = 0; index < numberCard; index++) {
        let suit = suitsCards[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        let number = numberCards[Math.floor(Math.random() * (12 - 0 + 1)) + 0];
        let cardObject = new Card(suit, number)
        cardsArray.push(cardObject)
    }
    console.log(cardsArray)
    return cardsArray;
}

let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", function () {
    let cardsSort = bubbleSort(cardsArray);
    console.log(cardsSort);

})

const bubbleSort = (cardsArray) => {
    let wall = cardsArray.length - 1;
    let iteration = 0;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (numberCards.indexOf(cardsArray[index].number) > numberCards.indexOf(cardsArray[index + 1].number)) {
                let aux = cardsArray[index];
                cardsArray[index] = cardsArray[index + 1];
                cardsArray[index + 1] = aux;
                renderSortCards(cardsArray, iteration)
                iteration++;
            }
            index++;
        }
        wall--;
    }
    return cardsArray;
};

function renderSortCards(cardsArray, iteration) {
    let card_container_sort = document.getElementById("card_container_sort")
    let cardsInHTML = " ";
    for (let i = 0; i < cardsArray.length; i++) {
        if (cardsArray[i].suits == "♦" || cardsArray[i].suits == "♥") {
            cardsInHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits redsuits" id="suit_top">${cardsArray[i].suits}</p>
                    </div>
                    <div class="number" id="number">
                        <p>${cardsArray[i].number}</p>
                    </div>
                    <div class="suit-bottom">
                        <p class="suits redsuits" id="suit_bottom">${cardsArray[i].suits}</p>
                    </div>
               </div>`
        } else {
            cardsInHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits blacksuits" id="suit_top">${cardsArray[i].suits}</p>
                    </div>
                    <div class="number" id="number">
                        <p>${cardsArray[i].number}</p>
                    </div>
                    <div class="suit-bottom">
                        <p class="suits blacksuits" id="suit_bottom">${cardsArray[i].suits}</p>
                    </div>
               </div>`
        }
    }
    card_container_sort.innerHTML += `<div class="card_container-sort-row">
                    <div class="iteration_num_container">
                    <p class="iteracion">${iteration}</p>
                    </div>
                    ${cardsInHTML}
                </div>`;
}