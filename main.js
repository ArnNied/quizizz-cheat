// LAST UPDATED 24 OCT 2021
// IF NOT WORKING
// THEN THIS CODE IS OUT OF DATE
// CONTACT YOUR DEALER

var ROOT = document.querySelector("body > div");

function getRoomHash() {
  const roomHash = ROOT.__vue__.$store.state.game.data.roomHash;

  return roomHash;
}

function getCurrentQuestionID() {
  const id = ROOT.__vue__.$store.state.game.questions.currentId;

  return id;
}

async function getGameData(roomHash) {
  const data = await (
    await fetch(`https://quizizz.com/_api/main/game/${roomHash}`)
  ).json();

  return data;
}

function getAnswer(answers) {
  const options = document.getElementsByClassName("options-grid")[0];

  // MULTI SELECT QUESTION | CHECKBOX
  if (Array.isArray(answers)) {
    for (const option of options.childNodes) {
      if (!answers.includes(option.__vue__._props.optionData.actualIndex)) {
        option.children[0].children[0].style.opacity = "20%";
      }
    }
    return;
  }

  // MULTI CHOICE QUESTION
  if (typeof answers === "number") {
    for (const option of options.childNodes) {
      if (option.__vue__._props.optionData.actualIndex != answers) {
        option.children[0].children[0].style.opacity = "20%";
      }
    }
    return;
  }
}

function getFillInTheBlank(options) {
  // FILL IN THE BLANK
  console.log("PICK ONE OF BELOW:");
  for (const option of options) {
    console.log(option.text);
  }
}

async function main() {
  const game = await getGameData(getRoomHash());
  const questions = await game.data.questions;

  for (const question of questions) {
    if (question._id == getCurrentQuestionID()) {
      if (question.structure.kind == "BLANK") {
        getFillInTheBlank(question.structure.options);
      } else if (question.structure.settings.hasCorrectAnswer) {
        getAnswer(question.structure.answer);
      } else {
        console.log("POLL OR OPEN-ENDED QUESTION: UNABLE TO GET ANSWER");
      }
    }
  }
}

function start() {
  alert("KEEP THE CONSOLE OPEN");
  setInterval(main, 1000);
}

start();
