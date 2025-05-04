let you = 0;
let comp = 0;
let yd;
let cd;
let draw = document.body.querySelector(".draw");
let choicee = document.body.getElementsByClassName("choice");
const choices = Array.from(choicee);
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let yd = choice.getAttribute("id");
    let rndm = 0 + Math.ceil(Math.random() * 10);
    if (rndm < 4) {
      cd = "rock";
    } else if (rndm >= 4 && rndm < 7) {
      cd = "paper";
    } else if (rndm >= 7) {
      cd = "scissor";
    }
    console.log("You choosed " + yd);
    console.log("Computer choosed " + cd);
    if (yd == "rock") {
      if (cd == "rock") {
        draw.innerText = "Draw";
        draw.style.backgroundColor = "black";
      } else if (cd == "paper") {
        draw.innerText = "You Lost";
        draw.style.backgroundColor = "red";
        comp = parseInt(comp) + 1;
      } else if (cd == "scissor") {
        draw.innerText = "You Won";
        draw.style.backgroundColor = "green";
        you = parseInt(you) + 1;
      }
    } else if (yd == "paper") {
      if (cd == "rock") {
        draw.innerText = "You Won";
        draw.style.backgroundColor = "green";
        you = parseInt(you) + 1;
      } else if (cd == "paper") {
        draw.innerText = "Draw";
        draw.style.backgroundColor = "black";
      } else if (cd == "scissor") {
        draw.innerText = "You Lost";
        draw.style.backgroundColor = "red";
        comp = parseInt(comp) + 1;
      }
    } else if (yd == "scissor") {
      if (cd == "rock") {
        draw.innerText = "You Lost";
        draw.style.backgroundColor = "red";
        comp = parseInt(comp) + 1;
      } else if (cd == "paper") {
        draw.innerText = "You Won";
        draw.style.backgroundColor = "green";
        you = parseInt(you) + 1;
      } else if (cd == "scissor") {
        draw.innerText = "Draw";
        draw.style.backgroundColor = "black";
      }
    }
    console.log(you);
    console.log(comp);
    document.body.querySelector(".you").innerText = `${you}`;
    document.body.querySelector(".comp").innerText = `${comp}`;
  });
});
