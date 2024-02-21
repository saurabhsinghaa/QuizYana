const quizData = [
    {
      question: "Who had composed the original Ramayana?",
      options: ["Rishi Valmiki", "Tulsi Das", "Sant Ek Nath", "Anhinanda"],
      correctAnswer: "Rishi Valmiki"
    },
    {
      question: "Lakshmana is considered to be the incarnation of whom?",
      options: ["Lord Vishnu", "Lord Shiva", "Lord Brahma", "Sheshnag"],
      correctAnswer: "Sheshnag"
    },
    {
      question: "What was the name of the forest where Lord Rama, Lakshmana and Goddess Sita stayed during exile?",
      options: ["Aranya", "Aranyak", "Dandakaranya", "Karanya"],
      correctAnswer: "Dandakaranya"
    },
    {
        question: "Ravana was a devotee of who among the following God?",
        options: ["Vishnu", "Brahma", "Shiva", "Ganesha"],
        correctAnswer: "Shiva"
    },
    {
        question: "What was the name of Lord Rama's father?",
        options: ["Shalishuka", "Nahapana", "Rajadhiraj", "Dasaratha"],
        correctAnswer: "Dasaratha"
    },
    {
        question: "Who has written Bhavartha Ramayana?",
        options: ["Madhava Kandali", "Eknath", "Krittibas", "Buddha Reddy"],
        correctAnswer: "Eknath"
    },
    {
        question: "What was the name of a bow that was used by Lord Rama in Goddess Sita swayamvar to marry her?",
        options: ["Pinaka", "Pindaka", "Anandaka", "Rulapand"],
        correctAnswer: "Pinaka"
    },
    {
        question: "Which city did Lord Rama rule as the king?",
        options: ["Lanka", "Ayodhya", "Mithila", "Kishkindha"],
        correctAnswer: "Ayodhya"
    },
    {
        question: "Who is the wife of Lord Rama?",
        options: ["Sita", "Radha", "Draupadi", "Parvati"],
        correctAnswer: "Sita"
    },
    {
        question: "Who is the loyal and devoted monkey companion of Lord Rama?",
        options: ["Hanuman", "Sugriva", "Jambavan", "Vali"],
        correctAnswer: "Hanuman"
    }
];
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextbutton = document.getElementById('next-btn');

let currentQueInd = 0;
nextbutton.disabled = true;
nextbutton.classList.add('cursor-not-allowed');
function loadQuestion(){
    const currentQuestion = quizData[currentQueInd];
    questionElement.textContent = currentQuestion.question;
    questionElement.classList.add('text-white');
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index)=>{
        const optionElement = document.createElement('div');
        optionElement.classList.add("options", "bg-slate-800", "hover:bg-slate-900", "hover:pl-1", "hover:rounded-md", "text-slate-100", "cursor-pointer");
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.addEventListener("click", ()=>checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption){
    const currentQuestion = quizData[currentQueInd];
    feedbackElement.classList.remove("bg-green-400", "bg-red-400");
    if(selectedOption === currentQuestion.correctAnswer){
        feedbackElement.textContent = "Correct Answer!";
        feedbackElement.classList.add("bg-green-400", "text-white");
    }else{
        feedbackElement.textContent = "Incorrect Answer!";
        feedbackElement.classList.add("bg-red-400", "text-white");
    }
    nextbutton.disabled = false;
    nextbutton.classList.remove("cursor-not-allowed");
}

function nextQuestion(){
    currentQueInd++;
    if(currentQueInd < quizData.length){
        loadQuestion();
        feedbackElement.textContent = "";
        nextbutton.disabled = true;
        nextbutton.classList.add("cursor-not-allowed");
    }else{
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        feedbackElement.textContent = "";
        nextbutton.style.display = "none";
    }
}

loadQuestion();
nextbutton.addEventListener("click", nextQuestion);