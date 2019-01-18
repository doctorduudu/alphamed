let anatomyStorer = document.getElementById('anatomy-check');
let physiologyStorer = document.getElementById('physiology-check');
let pathologyStorer = document.getElementById('pathology-check');

let startBtn = document.getElementById('start-btn');
//console.log(topicSubmit);
startBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log('start was clicked');
    /*if(anatomyStorer.checked === true) {
        console.log('anatomy storer was ticked indeed');
        localStorage.setItem('anatomyCheck', anatomyStorer.value);
    }
    if(physiologyStorer.checked === true) {
        console.log('physiology storer was ticked indeed');
        localStorage.setItem('physiologyCheck', physiologyStorer.value);
    }
    if(pathologyStorer.checked === true) {
        console.log('pathology storer was ticked indeed');
        localStorage.setItem('pathologyCheck', pathologyStorer.value);
    }
    
    */
    
    let checks = document.querySelectorAll('.check');
    //console.log(checks);
    for(let i=0; i<checks.length; i++) {
        if(checks[i].checked === true) {
            let checkValue = checks[i].value;
            console.log(checkValue);
            localStorage.setItem(`${checkValue}Check`, checkValue);
        }
    }
    window.location.assign('game.html');
    
});


