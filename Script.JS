function choose(player_choice) {
    console.log('Player chose', player_choice);
    let cpu_choice = cpu_choose();
    flash(cpu_choice);
    console.log('CPU chose', cpu_choice);
    let comparison = player_choice + cpu_choice;
    switch (comparison) {
        case 'RR':
        case 'PP':
        case 'SS':
            console.log("Tie");
            tie();
            break;
        case 'RS':
        case 'SP':
        case 'PR':
            console.log("You Win!")
            win();
            break;
        case 'SR':
        case 'RP':
        case 'PS':
            console.log("You Lose!")
            lose();
            break;
    }
}

function change_message(new_message) {
    document.getElementById("message").textContent = new_message;
}

function cpu_choose() {
    let choices = ['R', 'P', 'S'];
    let cpu_choice = Math.floor(Math.random() * 3)
    return choices[cpu_choice]
}

function win() {
    let player_score_element = document.getElementById('player-score')
    let score = player_score_element.textContent; 
    score++; 
    player_score_element.textContent = score;
    change_message('You Win!');
}

function lose() {
    let score_element = document.getElementById('cpu-score')
    let score = score_element.textContent; 
    score++; 
    score_element.textContent = score;
    change_message('You Lose!');
}

function tie() {
    change_message('Tied');
}

function flash(choice) {
    document.getElementById('cpu-' + choice).classList.add('flash');
    setTimeout(unflash, 300, choice);
}

function unflash(choice) {
    document.getElementById('cpu-' + choice).classList.remove('flash'); 
}