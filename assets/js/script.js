import { questionsData } from "./questions.js";

const quiz = document.getElementById("quiz");
const answerR = document.querySelectorAll(".answer");
const questionH = document.getElementById("question");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers();

    const currentQuizData = questionsData[currentQuiz];
    
    questionH.innerText = currentQuizData.question;
    answer_a.innerText = currentQuizData.a;
    answer_b.innerText = currentQuizData.b;
    answer_c.innerText = currentQuizData.c;
    answer_d.innerText = currentQuizData.d;

}

function deselectAnswers(){
    answerR.forEach((answerW) => (answerW.checked = false));
}

function getSelected(){
    let answer;
    answerR.forEach((answerW) => {
        if(answerW.checked){
            answer = answerW.id;
        }
    });

    return answer;
};

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer === questionsData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;

    if(currentQuiz < questionsData.length){
        loadQuiz();
    } 
    else{
        quiz.innerHTML = `<h2>Your score:
        <br>
        ${score}/${questionsData.length}
        <h2>
        
        <button onclick = "location.reload()">Reload</button>
        `;
    }

});