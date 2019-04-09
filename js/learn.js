// VARIABLES
let learnSystem, percentCompHtml,percentCompFig, noOfTermsHtml, noOfTermsFig, startOrContBtn;

function systemValues(system) {
    percentCompHtml = document.getElementById(`percent-comp-${system}`);
    noOfTermsHtml = document.getElementById(`no-of-terms-${system}`);
    startOrContBtn = document.getElementById(`learn-click-${system}`);
    
    percentCompFig = localStorage.getItem(`percentCompFig-${system}`);
    noOfTermsFig = localStorage.getItem(`noOfTermsFig-${system}`);
    
    switch(percentCompFig) {
        case null:
            localStorage.setItem(`percentCompFig-${system}`, 0);
            startOrContBtn.textContent = 'start';
            break;
        case '0':
            startOrContBtn.textContent = 'start';
            break;
        default:
            startOrContBtn.textContent = 'continue';
            break;
    }
    
    percentCompHtml.textContent = `${percentCompFig}% complete`;
    noOfTermsHtml.textContent = `${noOfTermsFig} terms`;
    
}; 

systemValues('git');
systemValues('cvs');
systemValues('cns');


document.addEventListener('click', function(e) {
    if(e.target.classList.contains('learn-click')) {
        learnSystem = e.target.parentElement.parentElement.id;
        localStorage.setItem('learnSystem', learnSystem);
        
        
    }
});

