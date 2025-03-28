window.onload = function (){

    const resultsContainer = document.getElementById('results-container');
    const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    const quizScore = JSON.parse(localStorage.getItem('quizScore')) || { correct: 0, total: 0 };

    if (quizAnswers.length === 0){
        resultsContainer.innerHTML = "<p>No hay resultados disponibles.</p>";
        return;
    }

    const scoreElement = document.createElement('h2');
    scoreElement.textContent = `Tienes ${quizScore.correct} ${quizScore.correct <= 1 ? "respuesta correcta" : "respuestas correctas"} de ${quizScore.total}`;
    resultsContainer.appendChild(scoreElement);

    quizAnswers.forEach((answer) => {

        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';

        const questionElem = document.createElement('h3');
        questionElem.style.fontSize = "1.4rem";
        questionElem.style.maxWidth = "800px";
        questionElem.textContent = `${answer.questionIndex + 1}) ${answer.question}`;
        resultDiv.appendChild(questionElem);

        if (answer.media){
            const mediaContainer = document.createElement('div');
            let mediaContent;
            if (answer.media.endsWith('.mp4')){
                mediaContent = document.createElement('video');
                mediaContent.src = answer.media;
                mediaContent.controls = true;
            } else {
                mediaContent = document.createElement('img');
                mediaContent.src = answer.media;
            }
            mediaContainer.appendChild(mediaContent);
            resultDiv.appendChild(mediaContainer);
        }

        const selectedElem = document.createElement('p');
        selectedElem.innerHTML = `Tu respuesta: <span class="${answer.isCorrect ? 'correcto' : 'incorrecto'}">${answer.selectedAnswer}</span>`;
        resultDiv.appendChild(selectedElem);

        if(!answer.isCorrect){
            const correctElem = document.createElement('p');
            correctElem.textContent = `Respuesta correcta: ${answer.correctAnswers.join(', ')}`;
            resultDiv.appendChild(correctElem);
        }

        resultsContainer.appendChild(resultDiv);

    });
};