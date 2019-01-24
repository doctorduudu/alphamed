let startBtn, mixedTypeCheck, mixedSystemCheck, mixedTopicCheck, mixedLevelCheck, typeChecks, systemChecks, topicChecks, levelChecks;

startBtn = document.getElementById('start-btn');
mixedTypeCheck = document.getElementById('mixed-type-check');
mixedSystemCheck = document.getElementById('mixed-system-check');
mixedTopicCheck = document.getElementById('mixed-topic-check');
mixedLevelCheck = document.getElementById('mixed-level-check');
typeChecks = [...document.querySelectorAll('.type-check')];
systemChecks = [...document.querySelectorAll('.system-check')];
topicChecks = [...document.querySelectorAll('.topic-check')];
levelChecks = [...document.querySelectorAll('.level-check')];

//console.log(topicSubmit);
startBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    let checks = document.querySelectorAll('.check');
    let mixedChecks = document.querySelectorAll('.mixed');
    
    // these set the mixedChecks to true when nothing is checked in the resp. family
    let uncheckedType = typeChecks.filter(function(type) {
        return type.checked === true;
    });
    if(uncheckedType.length === 0) {
        mixedTypeCheck.checked = true;
    }
    let uncheckedSystem = systemChecks.filter(function(type) {
        return type.checked === true;
    });
    if(uncheckedSystem.length === 0) {
        mixedSystemCheck.checked = true;
    }
    let uncheckedTopic = topicChecks.filter(function(type) {
        return type.checked === true;
    });
    if(uncheckedTopic.length === 0) {
        mixedTopicCheck.checked = true;
    }
    let uncheckedLevel =levelChecks.filter(function(type) {
        return type.checked === true;
    });
    if(uncheckedLevel.length === 0) {
        mixedLevelCheck.checked = true;
    }
    
    // these set the checked status of the filters belonging to the resp. family to true when the mixed is checked manually or dynamically
    if(mixedTypeCheck.checked === true) {
        let types = document.querySelectorAll('.type-check');
        for(let i=0; i<types.length; i++) {
            types[i].checked = true;
        }
    }
    if(mixedSystemCheck.checked === true) {
        let types = document.querySelectorAll('.system-check');
        for(let i=0; i<types.length; i++) {
            types[i].checked = true;
        }
    }
    if(mixedTopicCheck.checked === true) {
        let types = document.querySelectorAll('.topic-check');
        for(let i=0; i<types.length; i++) {
            types[i].checked = true;
        }
    }
    if(mixedLevelCheck.checked === true) {
        let types = document.querySelectorAll('.level-check');
        for(let i=0; i<types.length; i++) {
            types[i].checked = true;
        }
    }
    
    for(let i=0; i<checks.length; i++) {
        let checkValue = checks[i].value;
        if(checks[i].checked === true) {
            localStorage.setItem(`${checkValue}Check`, checkValue);
        } else {
            localStorage.setItem(`${checkValue}Check`, '');
        }
    }
    
    
    window.location.assign('game.html');
    
});


