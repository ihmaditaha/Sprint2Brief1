const questarr = [
  {
    question: "Who am I?",
    option: ["Me", "You", "Yu", "Mi"],
    corop: "You",
    info: "explanation",
  },
  {
    question: "Which of these planets is known for its prominent rings?",
    option: ["Mars", "Venus", "Saturn", "Jupiter"],
    corop: "Saturn",
    info: "explanation",
  },
  {
    question: "What is the chemical symbol for gold?",
    option: ["Ag", "Fe", "Pb", "Au"],
    corop: "Au",
    info: "explanation",
  },
  {
    question: "Who painted the Mona Lisa?",
    option: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    corop: "Leonardo da Vinci",
    info: "explanation",
  },
  {
    question: "In which year did the Titanic sink?",
    option: ["1905", "1912", "1923", "1931"],
    corop: "1912",
    info: "explanation",
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    option: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    corop: "Nitrogen",
    info: "explanation",
  },
  {
    question: "What is the capital city of Australia?",
    option: ["Sydney", "Melbourne", "Canberra", "Perth"],
    corop: "Canberra",
    info: "explanation",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    option: ["Quartz", "Topaz", "Corundum", "Diamond"],
    corop: "Diamond",
    info: "explanation",
  },
  {
    question: "The novel *To Kill a Mockingbird* was written by which author?",
    option: [
      "J.K. Rowling",
      "Harper Lee",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    corop: "Harper Lee",
    info: "explanation",
  },
  {
    question: "How many sides does a heptagon have?",
    option: ["6", "7", "8", "9"],
    corop: "7",
    info: "explanation",
  },
  {
    question:
      "What is the primary function of the red blood cells in the human body?",
    option: [
      "Fighting infection",
      "Clotting blood",
      "Carrying oxygen",
      "Producing antibodies",
    ],
    corop: "Carrying oxygen",
    info: "explanation",
  },
];
const CONTAINER = document.getElementById("quiz");
const sou2al = document.getElementById("questaff");
const ikhtiyarat = document.querySelector("#optaff");
const questionNumber = document.getElementById("question-num");
const bar = document.getElementById("progress-bar");
const score = document.getElementById("score");
const end = document.getElementById("end-btn");
const suiv = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
let counter = 0;
let points = 0;
let passed = questarr.map(() => false);
addEventListener("DOMContentLoaded", loading);
suiv.addEventListener("click", nextFun);
prev.addEventListener("click", prevFun);
end.addEventListener("click", calculateScore);

function loading() {
  questionNumber.innerText = counter + 1;
  bar.max = questarr.length * 10;
  bar.value = (counter + 1) * 10;
  bar.setAttribute("percentage", ((bar.value / bar.max) * 100).toFixed(2));
  score.innerText = points;
  sou2al.innerText = questarr[counter].question;
  ikhtiyarat.innerHTML = ``;
  questarr[counter].option.forEach((opt) => {
    const ikhtiyar = document.createElement("button");
    ikhtiyar.innerHTML = opt;
    ikhtiyar.classList.add("option");
    ikhtiyarat.appendChild(ikhtiyar);
    if (opt == questarr[counter].corop) {
      // ikhtiyarat.innerHTML += `<button class="option" correct="true" id="${opt}">${opt}</button>`;
      ikhtiyar.dataset.correct = true;
    } else {
      // ikhtiyarat.innerHTML += `<button class="option" correct="false" id="${opt}">${opt}</button>`;
      ikhtiyar.dataset.correct = false;
    }
    ikhtiyar.addEventListener("click", selectAnswer);
  });
  buttons();
}

function selectAnswer(e) {
  const selected = e.target;
  const isCorrect = selected.dataset.correct === "true";
  if (isCorrect) {
    selected.style.border = "1px solid green";
    selected.style.background = "lightgreen";
    if (!passed[counter]) {
      points += 100;
      passed[counter] = true;
    }
  } else {
    selected.style.border = "1px solid red";
    selected.style.background = "red";
    if (!passed[counter]) {
      passed[counter] = true;
    }
  }
  ikhtiyarat.innerHTML += `<span class="question" style="background: black; color:green ;border-radius: 5px;padding: 1%;height: fit-content;">${questarr[counter].info}</span>`;
  Array.from(ikhtiyarat.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.style.border = "1px solid green";
      btn.style.background = "lightgreen";
    }
    btn.disabled = true;
  });
  // passed[counter]=true;
  // let questNum = parseInt(localStorage.getItem("questNum")) || 0;
  // const Data = {
  //   questNum: questNum,
  //   optstat: ikhtiyarat,
  //   answer: selected,
  //   score: points,
  // };
  // localStorage.setItem("questNum", questNum + 1);
  // localStorage.setItem("Data" + Data.questNum, JSON.stringify(Data));
}

// function loadsave() {
//   const questNum = parseInt(localStorage.getItem("questNum")) || 0;
//   const savedData = JSON.parse(localStorage.getItem("Data" + questNum));
//   score.innerText = savedData.score;
//   sou2al.innerText = questarr[counter].question;
//   ikhtiyarat.innerHTML = ``;
//   ikhtiyarat.append(savedData.optstat);

//   buttons();
// }

function prevFun() {
  if (counter > 0) {
    counter--;
  } else {
    return;
  }
  // if (!passed[counter]) {
  loading();
  // } else {
  //   loadsave();
  // }
}

function calculateScore() {
  CONTAINER.innerHTML = `<div class="quiz-title"><h1>Test Quiz</h1></div>
      <div id="questaff" class="question">Votre score est : ${points} sur ${
    questarr.length * 100
  }</div>`;
  // const btn = document.createElement("button");
  // btn.innerHTML = "Encore";
  // btn.classList.add("pse-btn");
  // CONTAINER.appendChild(btn);
  // btn.addEventListener("click", reset);
}

// function reset() {
//   counter = 0;
//   points = 0;
//   loading();
// }

function nextFun() {
  if (counter < questarr.length - 1) {
    counter++;
  } else {
    return;
  }
  // if (!passed[counter]) {
  loading();
  // } else {
  //   loadsave();
  // }
}

function buttons() {
  if (counter == questarr.length - 1) {
    suiv.style.display = "none";
    end.style.display = "flex";
  }
  if (counter == 0) {
    prev.style.display = "none";
    suiv.style.display = "flex";
    end.style.display = "none";
  }
  if (0 < counter && counter < questarr.length - 1) {
    prev.style.display = "flex";
    suiv.style.display = "flex";
    end.style.display = "none";
  }
}
