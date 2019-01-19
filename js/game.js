 // VARIABLES
let imgA, imgB, imgC, imgD, scrambledWord, ansWord, nextBtn, score, timer, responseMsg, progressBar, clinicalInfo, clinicalSummary, clinicalEtiology, clinicalSymptoms, source, sourceLink, scoreCount, ansCheckWord, startBtn, gameEndTotal, gameEndDynamicMessage, userSpeed, resetBtn, highScore, bestSpeed;

//variables from the homepage
let clinicalCheck, generalCheck, mixedCheck, cnsCheck, gitCheck, cvsCheck, anatomyCheck, pathologyCheck, level1Check, level2Check;

// this value is set to true when the givePoints runs, to avoid running it again when the timer hits zero
let checkIfPoints = false;

// this will be given a value of false each time createGame runs and will be set to true once the nextBtn is clicked, to avoid running checkAns again when the timer hits zero
let nextClicked;

// declare the timer variable so that it can be accessed globally
let timerInterval;

// replace the spaces with a hyphen if the name has two parts and use that to fetch the images
let imageFetcher;

// for calculating time left after each question for speed analysis
let timeLeft = 0;

// declare the speedPrecise variable for global use;
let speedPrecise = 0;

// set the initial width of the progress bar to 0%;
let progressBarWidth = 0;

// to keep count of the number of questions solved
let noOfQuestionsSolved = 0; 

// Keep count of the number of correct and wrong questions
let noOfCorrect = 0;
let noOfWrong = 0;

// set to false to avoid restarting the timer once reset is clicked
let resetClicked = false;

// for the timer functions use
let seconds = 20

// to trigger the noMatchModal
let noMatchModal = document.getElementById('no-match-modal');

// set the first time high score and best score values
if(localStorage.getItem('highScore') === null){
    let highScoreValue = 0;
    localStorage.setItem('highScore', highScoreValue);
}
if(localStorage.getItem('bestSpeed') === null){
    let bestSpeedValue = 0;
    localStorage.setItem('bestSpeed', bestSpeedValue);
}


ansCheckWord = '';
// get the corresponding html components of the variables
startBtn = document.getElementById('start-btn');

imgA = document.getElementById('img-a');
imgB = document.getElementById('img-b');
imgC = document.getElementById('img-c');
imgD = document.getElementById('img-d');

scrambledWord = document.getElementById('scrambled-word');
ansWord = document.getElementById('answer-word');
nextBtn = document.getElementById('next-btn')

score = document.getElementById('score');
timer = document.getElementById('timer');
responseMsg = document.getElementById('response-msg');
progressBar = document.getElementById('progress-bar');
clinicalInfo = document.getElementById('clinical-info');
clinicalSummary = document.getElementById('clinical-summary');
clinicalEtiology = document.getElementById('clinical-etiology');
clinicalSymptoms = document.getElementById('clinical-symptoms');
source = document.getElementById('source')
sourceLink = document.getElementById('source-link');

gameEndTotal = document.getElementById('game-end-total-score');
gameEndDynamicMessage = document.getElementById('game-end-dynamic-message');
userSpeed = document.getElementById('user-speed');
resetBtn = document.getElementById('reset-btn');

highScore = document.getElementById('high-score');
bestSpeed = document.getElementById('best-speed');

clinicalCheck = localStorage.getItem('clinicalCheck');
generalCheck = localStorage.getItem('generalCheck');
mixedCheck = localStorage.getItem('mixedCheck');
cnsCheck = localStorage.getItem('cnsCheck');
gitCheck = localStorage.getItem('gitCheck');
cvsCheck = localStorage.getItem('cvsCheck');
anatomyCheck = localStorage.getItem('anatomyCheck');
pathologyCheck = localStorage.getItem('pathologyCheck');
level1Check = localStorage.getItem('level1Check');
level2Check = localStorage.getItem('level2Check');

// set the initial score to 0
scoreCount = 0;

// set the initial textcontent of the progress bar to 0%
progressBar.textContent = '0%';

//variables for filters
let topic1 = anatomyCheck;
let topic2 = pathologyCheck;
let system1 = gitCheck;
let system2 = cvsCheck;
let system3 = cnsCheck;
let level1 = level1Check;
let level2 = level2Check;
let type1 = clinicalCheck;
let type2 = generalCheck;

//create the filter
let newGameList = gameList.filter(function(game) {
    return (game.topic === topic1 || game.topic === topic2) && (game.system === system1 || game.system === system2 || game.system === system3) && (game.level === level1 || game.level === level2) && (game.type === type1 || game.type === type2);
});

// create the function that ramdomizes the game anytime you start;
let gameRandomList = [];
let randomGameNumber;
let valueRemoved
for (let i=0; i<newGameList.length; i++) {
        gameRandomList.push(i);
    }

function RandomizeGame() {
    
    randomGameNumber = Math.floor(Math.random() * gameRandomList.length);
    valueRemoved = gameRandomList.splice(randomGameNumber, 1);
    //console.log(valueRemoved);
    //console.log('valueRemoved: ' + valueRemoved)
}
RandomizeGame();
//console.log('randomGameNumber: ' + randomGameNumber);
//console.log('gameRandomList: ' + gameRandomList);

// create the game object, constructor
function gameObject(name, imgA, imgB, imgC, imgD, summary, etiology, symptoms, source, sourceLink) {
    this.name = name;;
    this.imgA = imgA;
    this.imgB = imgB;
    this.imgC = imgC;
    this.imgD = imgD;
    this.summary = summary; 
    this.etiology = etiology;
    this.symptoms = symptoms;
    this.source = source; 
    this.sourceLink = sourceLink;  
}

if(newGameList.length === 0) {
    alert('Sorry we do not have any terms that match your selection at the moment, you can contact Us to request for it to be added. Thank You');    window.location.assign('index.html');
}

// create an instance of the game object
let currentGame;
function fetchImage (){
    imageFetcher = newGameList[valueRemoved].name.replace(' ', '-');
}
fetchImage();

//console.log(imageFetcher);
function createInstance (){
    currentGame = new gameObject(newGameList[valueRemoved].name, `img/${imageFetcher}-a.jpg`, `img/${imageFetcher}-b.jpg`, `img/${imageFetcher}-c.jpg`, `img/${imageFetcher}-d.jpg`, newGameList[valueRemoved].summary, newGameList[valueRemoved].etiology, newGameList[valueRemoved].symptoms, newGameList[valueRemoved].source, newGameList[valueRemoved].sourceLink);
}
createInstance();

// listen for the document loaded and launch this function 
window.addEventListener('load', function(){createGame(currentGame)});

// create the createGame function
function createGame(currentGame) {
    //console.log('the createGame function is working function is working');
    
    nextClicked = false;
      
    // dynamically set the html conponents
    imgA.src = currentGame.imgA;
    imgB.src = currentGame.imgB;
    imgC.src = currentGame.imgC;
    imgD.src = currentGame.imgD;
    
    // start the timer
    function startTimer(){

        // Update the count down every 1 second
        timerInterval = setInterval(timerFunction, 1000);
        
    }
    if (resetClicked !== true) {
        startTimer();
    } 
    
    
    // called by the startTimer function
    function timerFunction() {

  
        // Output the result in an element with id="demo"
        timer.textContent = `${seconds}s`   
        
        seconds -= 1;
        
        // change the color of the timer based on the time left
        function ChangeTimerColor() {
            if (seconds < (0.5 * 20)) {
                timer.style.color = '#f99';
                } 
            if (seconds < (0.2 * 20)) {
                timer.style.color = 'red';
                timer.classList.add('almost-time-up')
                    //console.log('the else if block run');
                }
        }
        ChangeTimerColor();    
            
        // If the count down is over, do the following
        if (seconds < -1) {
           clearInterval(timerInterval);    
            // change the timer number to 'time up'
           timer.textContent = 'Time Up!';
            // reduce the size of the results and make the color red
            timer.style.fontSize = '3rem';
            timer.style.color = 'red';
            // add animation to the timer
            timer.classList.add('time-up');
            
            // Only run if nextBtn has not been clicked already
            if(nextClicked === false) {
               checkAns(); 
            }
            
        }
      }
    
    // disable the next button while not needed
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled-btn');
    // set the initial values of the content
    score.textContent = `Score: ${scoreCount}`;
    
    // scramble the word and use it to create the scrambled word buttons
    let newWord = '';
    (function makeScrambledWord(word) {
        let wordLength = word.length;
        for(x=0;  x<wordLength; x++) {
            holderNo = Math.floor(Math.random() * word.length);
            let holderWord = word[holderNo];
            newWord += holderWord;
            word = word.replace(holderWord, '');
            
         }
    }(currentGame.name));
    //console.log(newWord);
      
    // create the buttons that form the word
    for(let i=0; i<newWord.length; i++) {
        //console.log(currentGame.name[i]);
        //console.log(document.querySelector('.scrambled-word .btn'));
        let scrambledWordBtn = document.createElement('button');
        scrambledWordBtn.classList = 'btn btn-primary letter mr-1 mt-1';
        //console.log(scrambledWordBtn);
        scrambledWordBtn.textContent = newWord[i];
        scrambledWord.appendChild(scrambledWordBtn);
    }
    
    // catch the clicked letter
    let clickedEl;
    document.onclick = function(e) {
        //console.log('the document has been clicked');
        if(e.target.classList.contains('letter')) {
            clickedEl = e.target;
            
            clickedEl.classList.remove('letter');
            clickedEl.classList.remove('btn-primary');
            clickedEl.classList.add('check');
            clickedEl.classList.add('btn-success');
        } else {
            return false;
        }
        
        // append the new letter to the new div
        ansWord.appendChild(clickedEl);
        
        
        // once the new word is formed, run the checkAns function
        let originalWord = document.getElementsByClassName('letter');
        
        if(originalWord.length === 0) {
            checkAns();
        }
        
    }

    // check if the answer is correct 
    function checkAns() {
        clearInterval(timerInterval);
        timer.classList.remove('almost-time-up');
        
        // for speed analysis
        timeLeft += seconds + 1;
        
         noOfQuestionsSolved += 1;
        progressBarWidth = (Math.floor((noOfQuestionsSolved/newGameList.length)* 100));
        progressBar.style.width = `${progressBarWidth}%`;
        progressBar.textContent = `${progressBarWidth}%`;
        
        let ansCheck = document.querySelectorAll('.check');
        
        for(i=0; i<ansCheck.length; i++){
            ansCheckWord += ansCheck[i].textContent;
            ansCheck[i].classList.remove('check');
        }
        
        //console.log(ansCheckWord);
        
        if(ansCheckWord === currentGame.name) {
            noOfCorrect += 1;
            responseMsg.classList.add = 'text-success'; 
            clinicalInfo.style.display = 'block';
            clinicalSummary.textContent = currentGame.summary;
            clinicalEtiology.textContent = currentGame.etiology;
            clinicalSymptoms.textContent = currentGame.symptoms;
            clinicalSummary.classList.add('addScroll');
            clinicalEtiology.classList.add('addScroll');
            clinicalSymptoms.classList.add('addScroll');
            source.textContent = `Source: ${currentGame.source}`;
            sourceLink.textContent = 'read more? click here' 
            sourceLink.href = `${currentGame.sourceLink}`;
            sourceLink.onclick = () => window.open(`${currentGame.sourceLink}`);
            sourceLink.target = '_blank';
            sourceLink.classList.add('btn');
            sourceLink.classList.add('btn-primary');
            
            
            // call the function to give points
            if(ansCheckWord === currentGame.name && !checkIfPoints) {
                givePoints();
            // reactivate the nextBtn 
            nextBtn.disabled = false;
            nextBtn.classList.remove('disabled-btn');
            }      
            //disable the reset button
            resetBtn.disabled = true;
            resetBtn.classList.add('disabled-btn');
                
        } else {
            noOfWrong += 1;
            responseMsg.textContent = '0pts'
            responseMsg.classList.add = 'text-danger';
            responseMsg.innerHTML += '<i class="fas fa-times"></i>';
            responseMsg.style.marginLeft = '30px';
            clinicalInfo.style.display = 'block';
            clinicalSummary.textContent = currentGame.summary;
            clinicalEtiology.textContent = currentGame.etiology;
            clinicalSymptoms.textContent = currentGame.symptoms;
            clinicalSummary.classList.add('addScroll');
            clinicalEtiology.classList.add('addScroll');
            clinicalSymptoms.classList.add('addScroll');
            source.textContent = `Source: ${currentGame.source}`;
            sourceLink.textContent = 'read more? click here' 
            sourceLink.href = `${currentGame.sourceLink}`;
            sourceLink.onclick = () => window.open(`${currentGame.sourceLink}`);
            sourceLink.target = '_blank';
            sourceLink.classList.add('btn');
            sourceLink.classList.add('btn-primary');
            
            // call the function to make correction since it's wrong
            makeCorrection();
            
            // reactivate the nextBtn 
            nextBtn.disabled = false;
            nextBtn.classList.remove('disabled-btn');
            //disable the reset button
            resetBtn.disabled = true;
            resetBtn.classList.add('disabled-btn');
        }
       
        // disable the nextBtn if the end is reached and launch the gameEndResults modal
        if(gameRandomList.length === 0) {
            //console.log('this is the end');
            nextBtn.disabled = true;
            nextBtn.classList.add('disabled-btn');
            
            if(scoreCount > Number(localStorage.getItem('highScore')) ) {
                localStorage.setItem('highScore', scoreCount);
                highScore.textContent = `High Score: ${localStorage.getItem('highScore')}...(New High Score)`;
            } else {
                highScore.textContent = `High Score: ${localStorage.getItem('highScore')}`;
            }
            
            setTimeout(gameEndResults, 2000);
        } else {
            nextBtn.addEventListener('click', changePage);
            }
        
          
        }
    
    let questionsMessage = function(){
        let message = '';
        switch(true) {
            case (seconds > 0.6*20):
                message = 'Very Smart';
                break;
            case (seconds > 0.4*20):
                message = 'Super';
                break;
            case (seconds > 0.2*20):
                message = 'Good';
                break;
            case (seconds < 0.2*20):   
                message = 'Almost Late huh :)';
                break;
            default:
                message = 'Good';
        }
        return message;
    }
    
    // runs when player gets the answer wrong
    function makeCorrection() {
        let correctionPointerHtml = `
            <p class="h2 text-danger">Oops! <i class="fas fa-frown h1 mr-3 text-danger"></i><span class="text-success"> Answer </span><i class="fas fa-hand-point-down h1 ml-3 text-success"></i></p>   
        `;
        scrambledWord.innerHTML = correctionPointerHtml;
        
        ansWord.innerHTML = '';
        for(let i=0; i<currentGame.name.length; i++) {
        let correctedWordBtn = document.createElement('button');
        correctedWordBtn.classList = 'btn btn-primary mr-1 mt-1';
        correctedWordBtn.textContent = currentGame.name[i];
        ansWord.appendChild(correctedWordBtn);
    }
        
    }
    
    // runs when the player gets the answer right
    function givePoints() {
        if(ansCheckWord === currentGame.name) {
            scoreCount += seconds + 1;
            responseMsg.textContent = `${seconds+1}pts`;
            responseMsg.innerHTML += '<i class="fas fa-check"></i>';
            score.textContent = `Score: ${scoreCount}`;
            scrambledWord.innerHTML = `
            <p class="h2 text-success">${questionsMessage()} ! <i class="fas fa-thumbs-up h1 mr-3"></i></p>
        `;
         checkIfPoints = true;
        }
        
    }
    
    
    resetBtn.addEventListener('click',function(){
        scrambledWord.innerHTML = '';
        ansWord.innerHTML= '';
        
        resetClicked = true;
        createGame(currentGame);
        
    })
    
    /*
    endGameBtn.addEventListener('click', callSureToEnd);
    
    function callSureToEnd() {
    clearInterval(timerInterval);
    let sureToEndBtn = document.getElementById('sure-to-end-btn');
    sureToEndBtn.click();
    
    let returnToGameBtn = document.getElementById('return-to-game-btn');
    returnToGameBtn.addEventListener('click', function() {
        let endGameModalCloseBtn = document.getElementById('end-game-modal-close');
        endGameModalCloseBtn.click();
        
        setInterval(function(){
            timerFunction();
        }, 1000);
        });
    }
    */
    
}

        // change the page to the next 
function changePage() {
    clearInterval(timerInterval);
    clinicalInfo.style.display = 'none';
    nextClicked = true;
    resetClicked = false;
    seconds = 20;
    resetBtn.disabled = false;
    resetBtn.classList.remove('disabled-btn');
        
    //console.log('the creategame function was launched again')
    newWord = '';
    ansCheckWord = '';
    ansWord.innerHTML = '';
    scrambledWord.innerHTML = '';    
    responseMsg.textContent = '';
    clinicalSummary.textContent = '';
    clinicalEtiology.textContent = '';
    clinicalSymptoms.textContent = '';
    clinicalSummary.classList.remove('addScroll');
    clinicalEtiology.classList.remove('addScroll');
    clinicalSymptoms.classList.remove('addScroll');
    source.textContent = '';
    sourceLink.textContent = '';
    sourceLink.classList.remove('btn');
     
    checkIfPoints = false;
    timer.style.color = '';
    timer.style.fontSize = '5rem';
    timer.textContent = '20s';
    timer.classList.remove('time-up');
    
    RandomizeGame();
    fetchImage();
    createInstance();
    createGame(currentGame); 
        
}

function gameEndResults() {
    nextBtn.textContent = 'End of game';
    gameEndTotal.textContent = `Total Score: ${scoreCount}.....${noOfCorrect} out of ${noOfQuestionsSolved} correct`;
    makegameEndMessage();
    getSpeed();
    
    let gameEndModalBtn = document.getElementById('game-end-modal-btn');
    gameEndModalBtn.click();
    }

function makegameEndMessage() {
    let gameEndScorePercentage = Math.round((scoreCount / (20 * newGameList.length)) * 100);
    
    switch(true) {
        case (gameEndScorePercentage<20): 
            gameEndDynamicMessage.textContent = '***More room for improvement***';
            break;
        case (gameEndScorePercentage<50):
            gameEndDynamicMessage.textContent = '***You are getting there***';
            break;
        case (gameEndScorePercentage>50):
            gameEndDynamicMessage.textContent = '***That was amazing***';
    }
}

function getSpeed() {
    let speed = scoreCount / (20 * newGameList.length);
    let speedPrecise = speed.toPrecision(2);
    userSpeed.textContent = `Your Speed: ${speedPrecise}alpha`;
    
    if(speedPrecise > Number(localStorage.getItem('bestSpeed')) ) {
        localStorage.setItem('bestSpeed', speedPrecise);
        
        bestSpeed.textContent = `Best Speed: ${localStorage.getItem('bestSpeed')}...(new Best Speed)`;
    } else {
        bestSpeed.textContent = `Best Speed: ${localStorage.getItem('bestSpeed')}alpha`;
    }
            
}

