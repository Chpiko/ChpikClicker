let goldBtn = document.querySelector('.gold_btn');
let eatBtn = document.querySelector('.eat_btn');

goldBtn.onclick = function() {
    let goldPoint = document.querySelector('.gold_point');

    goldPoint.innerText = +goldPoint.innerText + 1;

}

let hungry = setInterval(function hungry() {
    let eatPoint = document.querySelector('.eat_point');

    eatPoint.innerText = +eatPoint.innerText - 1;
    dead()
}, 1000)

function dead() {
    let goldPoint = document.querySelector('.gold_point');
    let eatPoint = document.querySelector('.eat_point');

    if (eatPoint.innerText == 0) {
        alert('Вы умерли');
        clearInterval(hungry)
        let replay = confirm('Начать заново');

        if ( replay == true) {
            goldPoint.innerText = 00;
            eatPoint.innerText = 100;
            let hungry1 = setInterval(function() {
                let eatPoint = document.querySelector('.eat_point');
            
                eatPoint.innerText = +eatPoint.innerText - 1;
                dead() 
            }, 1000);
        }
    }
}

eatBtn.onclick = function buy_eat() {
    let goldPoint = document.querySelector('.gold_point');
    let eatPoint = document.querySelector('.eat_point');

    if (!(goldPoint.innerText > 1 )) {
        alert('У вас недостаточно денег')
    }  else if (eatPoint.innerText == 100) {
        alert('Вы сыты.')
    } else {
        goldPoint.innerText = goldPoint.innerText - 2;
        eatPoint.innerText = +eatPoint.innerText + 1
    }
}