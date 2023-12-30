const quizData = [
    {
        question: "Who created Linux?",
        a: "Linus Tornvald",
        b: "Andrey Karpathy",
        c: "Joe Rogan",
        d: "Chris Lattner",
        correct: "a"
    },
    {
        question: "What are three must-known for Front-end development?",
        a: "React - Angular - Vue",
        b: "NodeJS, Go",
        c: "HTML, CSS, Javascript",
        d: "Java, Kotlin",
        correct: "c"
    },
    {
        question: "Guess the NodeJS framework",
        a: "Angular",
        b: "Express",
        c: "Mongoose",
        d: "SQL",
        correct: "b"
    },

    {
        question: "In JS for HTML element manipulation we use?",
        a: "Objects",
        b: "Functions",
        c: "Async",
        d: "DOM",
        correct: "d"
    },


];

//uzmiamo iy HTML sve sto nam treba:
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let score = 0; //skor
let currentQuiz = 0; //od kog pitanja pocinje

loadQuiz();


//funkcija za prikazivanje odgovora i pitanja u HTML-u
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();


//funkcija za selektovanje odgovora:

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
//deselektovanje:

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});