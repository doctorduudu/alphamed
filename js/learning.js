// VARIABLES 
let learningSystem, learningProgressIndic, learningTopic,learningBriefSummary, learningEtiology, learningSymptoms, learningTreatment, learningImg1, learningimg2, learningVid, learningBackward, learningQuit, learningForward;

learningSystem = document.getElementById('learning-system');
learningProgressIndic = document.getElementById('learning-progress-indic');
learningTopic = document.getElementById('learning-topic');
learningBriefSummary = document.getElementById('learning-brief-summary');
learningEtiology = document.getElementById('learning-etiology');
learningSymptoms = document.getElementById('learning-symptoms');
learningTreatment = document.getElementById('learning-treatment');
learningImg1 = document.getElementById('learning-img1');
learningimg2 = document.getElementById('learning-img2');
learningVid = document.getElementById('learning-vid');
learningBackward = document.getElementById('learning-backward');
learningQuit = document.getElementById('learning-quit');
learningForward = document.getElementById('learning-forward');

/*console.log(learningSystem, learningProgressIndic, learningTopic,learningBriefSummary, learningEtiology, learningSymptoms, learningTreatment, learningImg1, learningimg2, learningVid, learningBackward, learningQuit, learningForward);*/

// get the necessary info from the local storage
let learnSystem, percentCompFig;
learnSystem = localStorage.getItem('learnSystem');
percentCompFig = localStorage.getItem(`percentCompFig-${learnSystem}`);

console.log(learnSystem, percentCompFig);

