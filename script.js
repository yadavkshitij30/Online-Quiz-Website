"use strict";

const quizData = [
 {
  question: "How many bones do sharks have in their body?",
  a: "Zero",
  b: "30",
  c: "35",
  d: "none of the above",
  correct: "a"
 },

 {
  question: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d"
 },
 {
  question: "What does CSS stand for?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b"
 },
 {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
 },
 {
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b"
 },
 {
  question: "Who is the father of Computers?",
  a: "James Gosling",
  b: "Charles Babbage",
  c: "Dennis Ritchie",
  d: "Bjarne Stroustrup",
  correct: "b"
 },
 {
  question: "Which of the following is the correct abbreviation of COMPUTER?",
  a: "Commonly Occupied Machines Used in Technical and Educational Research",
  b: "Commonly Operated Machines Used in Technical and Environmental Research",
  c: "Commonly Oriented Machines Used in Technical and Educational Research",
  d: "Commonly Operated Machines Used in Technical and Educational Research",
  correct: "d"
 },
 {
  question: "Which of the following is the correct definition of Computer?",
  a: "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
  b: "Computer understands only binary language which is written in the form of 0s & 1s",
  c: "Computer is a programmable electronic device that stores, retrieves, and processes the data",
  d: "All of the mentioned",
  correct: "d"
 },
 {
  question: "What is the full form of CPU?",
  a: "Computer Processing Unit",
  b: "Computer Principle Unit",
  c: "Central Processing Unit",
  d: "Control Processing Unit",
  correct: "c"
 },
 {
  question: "Which of the following language does the computer understand?",
  a: "Computer understands only C Language",
  b: "Computer understands only Assembly Language",
  c: "Computer understands only Binary Language",
  d: " Computer understands only BASIC",
  correct: "c"
 },
 {
  question: "Which of the following computer language is written in binary codes only?",
  a: "pascal",
  b: "machine language",
  c: "C",
  d: "C#",
  correct: "b"
 },
 {
  question: " Which of the following is the brain of the computer?",
  a: " Central Processing Unit",
  b: "Memory",
  c: " Arithmetic and Logic unit",
  d: "Control unit",
  correct: "a"
 },
 {
  question: " Which of the following is not a characteristic of a computer?",
  a: "Versatility",
  b: "Accuracy",
  c: "Diligence",
  d: "I.Q.",
  correct: "d"
 },
 {
  question: "Which of the following is the smallest unit of data in a computer?",
  a: "Bit",
  b: "KB",
  c: "Nibble",
  d: "Byte",
  correct: "a"
 },
 {
  question: "Which is responsible for converting the data received from the user into a computer understandable format?",
  a: "Output Unit",
  b: " Input Unit",
  c: "Memory Unit",
  d: "Arithmetic & Logic Unit",
  correct: "b"
 },
 {
  question: "Which of the following monitor looks like a television and are normally used with non-portable computer systems?",
  a: "LED",
  b: "LCD",
  c: "CRT",
  d: "Flat Panel Monitor",
  correct: "c"
 },
 {
  question: "Which of the following is not a type of computer code?",
  a: "EDIC",
  b: "ASCII",
  c: "BCD",
  d: " EBCDIC",
  correct: "a"
 },
 {
  question: "Which part of a processor contains the hardware necessary to perform all the operations required by a computer?",
  a: "Controller",
  b: "Registers",
  c: " Cache",
  d: "Data path",
  correct: "d"
 },
 {
  question: "Which of the following is designed to control the operations of a computer?",
  a: "User",
  b: "Application Software",
  c: "System Software",
  d: " Utility Software",
  correct: "c"
 },
 {
  question: "Which of the following device use positional notation to represent a decimal number?",
  a: "Pascaline",
  b: "Abacus",
  c: "Computer",
  d: " Calculator",
  correct: "b"
 },
 {
  question: "Which of the following is used in EBCDIC?",
  a: "Super Computers",
  b: "Mainframes",
  c: "Machine Codes",
  d: " Programming",
  correct: "b"
 },
 {
  question: "Which of the following are physical devices of a computer?",
  a: "Hardware",
  b: "Software",
  c: "System Software",
  d: "Package",
  correct: "a"
 },
 {
  question: "Which of the following defines the assigned ordering among the characters used by the computer?",
  a: "Accumulation",
  b: " Sorting",
  c: "Collating Sequence",
  d: "Unicode",
  correct: "c"
 },
 {
  question: "Which storage is a system where a robotic arm will connect or disconnect off-line mass storage media according to the computer os?",
  a: "Magnetic",
  b: "Secondary",
  c: "Virtual",
  d: "Tertiary",
  correct: "d"
 },
 {
  question: "Which of the following devices provides the communication between a computer and the outer world?",
  a: "Compact",
  b: "I/O",
  c: "Drivers",
  d: "Storage",
  correct: "b"
 },
 {
  question: "Which of the following are the input devices that enable direct data entry into a computer system from source documents?",
  a: "System Access devices",
  b: "Data acquiring devices",
  c: "Data retrieving devices",
  d: "Data Scanning devices",
  correct: "d"
 },
 {
  question: "Which device used for converting maps, pictures, and drawings into digital form for storage in computers?",
  a: "Image Scanner",
  b: "Digitizer",
  c: "MICR",
  d: "Scanner",
  correct: "b"
 },
 {
  question: "Which of the following can access the server?",
  a: "Web Client",
  b: "User",
  c: "Web Browser",
  d: "Web Server",
  correct: "a"
 },
 {
  question: " Which of the following is known as the language made up of binary-coded instructions?",
  a: "High Level",
  b: "BASIC",
  c: "C",
  d: "Machine",
  correct: "d"
 },
 {
  question: "Which of the following is created when a user opens an account in the computer system?",
  a: "SFD",
  b: "MFD",
  c: "Sundirectory",
  d: "RFD",
  correct: "c"
 }
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
 deselectAnswers();
 const currentQuizData = quizData[currentQuiz];
 questionEl.innerText = currentQuizData.question;
 a_txt.innerText = currentQuizData.a;
 b_txt.innerText = currentQuizData.b;
 c_txt.innerText = currentQuizData.c;
 d_txt.innerText = currentQuizData.d;
 quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
 answerEl.forEach((answerEl) => {
  answerEl.checked = false;
 });
}

// get selected
function getSelected() {
 let answer;
 answerEl.forEach((answerEls) => {
  if (answerEls.checked) {
   answer = answerEls.id;
  }
 });
 return answer;
}

btnSubmit.addEventListener("click", function () {
 const answers = getSelected();

 if (answers) {
  if (answers === quizData[currentQuiz].correct) {
   score++;
  }
  nextQuestion();
 }
});

// next Slide
function nextQuestion() {
 currentQuiz++;

 if (currentQuiz < quizData.length) {
  loadQuiz();
 } else {
  quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
  footerEl.style.display = "none";
 }
}

// Timer
var time=document.getElementsByClassName("timer")
 
var timings=30;
var i=0;
    var myInterval = setInterval(Timeout, 1000);
function Timeout(){
    if((timings*60-i)%60>=10){
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
    }
    else{
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
    }
      
         
i++;
    }