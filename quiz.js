/*TIMER*/

localStorage.clear();
const start = 20;
let time = start * 60;
const countdown = document.getElementById('countdown');
const interval = setInterval(updateCount, 1000);
let popup = document.getElementById("popup");
let h2 = document.getElementById("popup-h2");
let p = document.getElementById("popup-p");
let popButton = document.getElementById("pop-button");

function updateCount(){

    const min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec;
    countdown.innerHTML = `${min}:${sec}`;
    time--;
    let cont_2 = document.getElementById('quiz-container');

    if(time < 0){
        clearInterval(interval);
        cont_2.style.display = "none";
        cont_2.classList.add('point-ev');
        popup.style.visibility = "visible";
        h2.innerHTML = "Se acabo el tiempo. 😔";
        p.innerHTML = "La evaluacion finalizara.";
        popButton.addEventListener('click', () => {
            window.location.href = "results.html";
        })
        setTimeout(() => { showScore(); }, 0);
    }

}

/*TIMER*/

/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*QUIZ*/

const questions = [
    { // 1
        question: "Indique si la camioneta azul comete una infracción.",
        media: "./img/video_1.mp4",
        answers:[
            {text: "No comete infraccion", correct: false},
            {text: "Senda peatonal", correct: true},
            {text: "Carril incorrecto", correct: false},
            {text: "Ninguna de las anteriores", correct: false},
        ]
    },
    { // 2
        question: "¿Qué infracción está cometiendo el conductor de la moto?",
        media: "./img/video_2.mp4",
        answers:[
            {text: "Senda peatonal", correct: true},
            {text: "Sin casco", correct: false},
            {text: "Carril incorrecto", correct: false},
            {text: "Ninguna es correcta", correct: false},
        ]
    },
    { //3
        question: "Indique cuál es la infracción que comete la segunda moto que se puede observar en el video.",
        media:"./img/video_6.mp4",
        answers:[
            {text: "Sin casco", correct: true},
            {text: "Carril incorrecto", correct: false},
            {text: "No hay infracciones", correct: false},
            {text: "Senda peatonal", correct: false},
        ]
    },
    { // 4
        question: "¿El vehículo gris está cometiendo una infracción?",
        media:"./img/video_7.mp4",
        answers:[
            {text: "Senda peatonal", correct: false},
            {text: "Semaforo en rojo", correct: true},
            {text: "Carril incorrecto", correct: false},
            {text: "No comete infraccion", correct: false},
        ]
    }, 
    { // 5
        question: "¿La moto está cometiendo una infracción?",
        media: "./img/video_12.mp4",
        answers:[
            {text: "Si ", correct: true},
            {text: "No", correct: false},
        ]
    },  
    { //6
        question: "Indique qué infracción está cometiendo el vehículo que aparece por la derecha.",
        media:"./img/video_13.mp4",
        answers:[
            {text: "Semaforo en rojo", correct: false},
            {text: "Senda peatonal", correct: true},
        ]
    },
    { //7
        question: "¿El primer vehículo gris oscuro comete una infracción?",
        media: "./img/video_16.mp4",
        answers:[
            {text: "Senda peatonal", correct: true},
            {text: "Semaforo en rojo", correct: false},
            {text: "Carril incorrecto", correct: false},
            {text: "No comete infraccion", correct: false},
        ]
    },
    { //8
        question: "¿El vehículo gris de la izquierda comete una infracción?",
        media: "./img/video_21.mp4",
        answers:[
            {text: "Senda peatonal", correct: true},
            {text: "Semaforo en rojo", correct: false},
            {text: "Carril incorrecto", correct: false},
            {text: "No comete infraccion", correct: false},
        ]
    },
    { // 9
        question: "Las sanciones se encuentran expresadas en U.F., que equivalen a...",
        media:"",
        answers:[
            {text: "1L de nafta super", correct: false},
            {text: "1L de nafta premium", correct: false},
            {text: "1L de nafta de mayor anclaje informado por ACA", correct: true},
            {text: "1L de nafta de mayor octanaje informado por ACA", correct: false},
        ]
    },    
    { //10
        question: "Indique si la utilitaria blanca comete una infracción.",
        media:"./img/video_3.mp4",
        answers:[
            {text: "Senda peatonal", correct: false},
            {text: "Semáforo en rojo", correct: false},
            {text: "Carril incorrecto", correct: false},
            {text: "Semáforo en rojo y carril incorrecto", correct: true},
        ]    
    },
    { //11
        question: "Indique si la primera moto de la izquierda comete una infracción.",
        media:"./img/video_4.mp4",
        answers:[
            {text: "Si", correct: true},
            {text: "No", correct: false},
        ]
    },
    { // 12
        question: "¿Cómo auditaría este video?",
        media:"./img/video_5.mp4",
        answers:[
            {text: "Senda peatonal", correct: false},
            {text: "Otro", correct: false},
            {text: "Problemas con la cámara", correct: true},
            {text: "Semáforo en rojo", correct: false},
        ]
    },  
    { // 13
        question: "Indique si el vehículo gris de la derecha comete una infracción.",
        media: "./img/video7.mp4",
        answers:[
            {text: "Senda peatonal", correct: false },
            {text: "Semaforo en rojo", correct: true},
            {text: "Carril incorrecto", correct: false},
            {text: "No comete infracción", correct: false},
        ]  
    },
    { // 14
        question: "¿Cómo auditaría el último auto en cruzar la línea de detención?",
        media:"./img/video_9.mp4",
        answers:[
            {text: "No comete infracción", correct: false},
            {text: "Carril incorrecto", correct: false},
            {text: "Semáforo en Rojo", correct: true},
            {text: "Problemas con la camara", correct: false},
        ]
    },    
    { //15
        question: "Indique si en el siguiente video se comete una infracción.",
        media:"./img/video_10.mp4",
        answers:[
            {text: "Senda peatonal", correct: true},
            {text: "Cámara obstruida", correct: false},
            {text: "No hay infracción", correct: false},
            {text: "Semáforo en rojo", correct: false}
        ]
    },
    { // 16
        question: "¿El vehículo negro que dobla a la derecha está cometiendo una infracción?",
        media:"./img/video_15.mp4",
        answers:[
            {text: "Carril incorrecto", correct: false},
            {text: "Giro indebido", correct: false},
            {text: "Semáforo en rojo", correct: true},
            {text: "No comete infracción", correct: false},
        ]
    },    
    { //17
        question: "Observe el segundo vehículo negro que cruza la calle y marque la opción que corresponda.",
        media: "./img/video_19.mp4",
        answers:[
            {text: "Carril incorrecto", correct: false},
            {text: "Giro indebido", correct: false},
            {text: "Semáforo en rojo", correct: true},
            {text: "No comete infracción", correct: false},
        ]
    },
    { //18
        question: "¿El primer vehículo gris de la derecha está cometiendo una infracción?",
        media: "./img/video_20.mp4",
        answers:[
            {text: "Semáforo en rojo", correct: true},
            {text: "Carril incorrecto", correct: false},
            {text: "Senda peatonal", correct: false},
            {text: "No comete infracción", correct: false},
        ]
    },
    { //19
        question: "¿Cómo auditaría este video?",
        media: "./img/video_11.mp4",
        answers:[
            {text: "Problemas con la cámara", correct: true},
            {text: "Otros", correct: false},
            {text: "Cámara obstruida", correct: false},
        ]
    },
    { //20
        question: "Indique cuál es la infracción que comete la última camioneta blanca.",
        media: "./img/video_14.mp4",
        answers:[
            {text: "Carril incorrecto", correct: false},
            {text: "Senda peatonal", correct: false},
            {text: "Semáforo en rojo", correct: true},
            {text: "Ninguna es correcta", correct: false},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

    localStorage.clear();

    currentQuestionIndex = 0;
    score = 0;

    shuffleQuestions(questions);
    
    showQuestion();

}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ") " + currentQuestion.question;

    const mediaContainer = document.getElementById('media-container');

    if (currentQuestion.media){

        if (currentQuestion.media.endsWith('.mp4')){
            const video = document.createElement('video');
            video.src = currentQuestion.media;
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            mediaContainer.appendChild(video);
        } else if (currentQuestion.media.endsWith('.jpg') || currentQuestion.media.endsWith('.png')){
            const img = document.createElement('img');
            img.src = currentQuestion.media;
            img.alt = 'Media content';
            mediaContainer.appendChild(img);
        }

    }

    const answerTexts = currentQuestion.answers.map(answer =>
        answer.text.trim().toLowerCase());
    if(!(answerTexts.includes('si') && answerTexts.includes('no') && answerTexts.length === 2)){
        shuffleQuestions(currentQuestion.answers)
    } else {
        console.log('Try Again');
    }

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);

    });

}

function shuffleQuestions(array){
    let currentIndex = array.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function resetState(){

    const mediaContainer = document.getElementById('media-container');

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    while (mediaContainer.firstChild) {
        mediaContainer.removeChild(mediaContainer.firstChild);
    }

}

function selectAnswer(e){

    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === 'true';

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    if (!isCorrect){
        selectedBtn.classList.add('incorrect');
    }

    if (isCorrect){
        score++;
    }

    const selectedAnswer = questions[currentQuestionIndex].answers.find(
        answer => answer.text === selectedBtn.innerHTML
    );

    if (selectedAnswer){
        storeAnswer(currentQuestionIndex, selectedAnswer);
    }

    setTimeout(() => {
        handleNextButton();
    }, 1500);

}

function storeAnswer(questionIndex, selectedAnswer){

    let quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];

    const correctAnswers = questions[questionIndex].answers
        .filter(answer => answer.correct)
        .map(answer => answer.text);
    
    const newAnswer = {
        questionIndex: questionIndex,
        question: questions[questionIndex].question,
        selectedAnswer: selectedAnswer.text,
        correctAnswers: correctAnswers,
        isCorrect: selectedAnswer.correct,
        media: questions[questionIndex].media,
    };

    const existingIndex = quizAnswers.findIndex(q => q.questionIndex === questionIndex);

    if (existingIndex !== -1) {
        quizAnswers[existingIndex] = newAnswer;
    } else {
        quizAnswers.push(newAnswer);
    }

    localStorage.setItem('quizAnswers', JSON.stringify(quizAnswers));

}

function handleNextButton(){

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }

}

function showScore(){

    clearInterval(interval)

    resetState();

    currentQuestionIndex = questions.length;

    localStorage.setItem('quizScore', JSON.stringify({
        correct: score,
        total: questions.length
    }));

    questionElement.innerHTML = "Conoce tus resultados";
    questionElement.style.fontSize = "2rem"
    nextButton.innerHTML = "Ver";
    nextButton.style.display = 'block';

}

nextButton.addEventListener('click', () => {

    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        window.location.href = 'results.html';
    }

});

startQuiz();
/*QUIZ*/