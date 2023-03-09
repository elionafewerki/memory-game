const gameContainer = document.getElementById("game");

const colors = [   
    "red",
    "blue",
    "green",
    "yellow",
    "grey",
    "red",
    "blue",
    "green",
    "yellow",
    "grey",
];

function shuffle(array){
    let counter = array.length;

    while (counter > 0){
        let index = Math.floor(Math.random() * counter);
        counter --;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp
    }

    return array;
}

let shuffledColors= shuffle(colors);

function createDivsForColors(colorArray) {
for(let color of colorArray){
    const newDiv = document.createElement("div");

    newDiv.classList.add(color);

    newDiv.addEventListener("click",handleCardClick);

    gameContainer.append(newDiv);
    }
}
function handleCardClick(e) {
        console.log("you just clicked", e.target);
}


function handleCardClick(e) {
    if(noClicking) return;
    if(e.target.classList.contains("flipped")) return;

    let currentCard = e.target;
    currentCard.style.backgroundColor = currentCard.classList[0];

    if (!card1 || !card2){
        currentCard.classList.add("flipped");
        card1=card2 || currentCard;
        card2 = currentCard === card1 ? null: currentCard;
    }

    if (card1 && card2) {
        noClicking = true;

        let gif1 = card1.className;
        let gif2 = card2.className;

        if (gif1 === gif2){
            cardsFlipped +=2;
            card1.removeEventListener("click",handleCardClick);
            card2.removeEventListener("click",handleCardClick);
            card1= null;
            card2= null;
            noClicking = false;
        } else{
            setTimeout(function(){
                card1.style.backgroundColor = "";
                card2.style.backgroundColor = "";
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1 = null;
                card2 = null;
                noClicking = false;
            }, 1000);
        }
    }
    if(cardsFlipped === colors.length) alert("congratulations the game is finished");
}

//function handleCardClick(event) {
        //console.log("you just clicked", event.target);
//}

createDivsForColors(shuffledColors);

document.addEventListener("DOMContentLoaded", function (){
   
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");

 todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "x";

    let newTodo = document.createElement("li");
    newTodo.innerText= document.getElementById("task").value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
 });

 todoList.addEventListener("click", function(event){
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if(targetTagToLowerCase === "li"){
        event.target,style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button"){
        event.target.parentNode.remove();
    }
 });
});


