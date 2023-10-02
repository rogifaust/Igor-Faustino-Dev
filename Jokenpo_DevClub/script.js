const result = document.querySelector('.result')
const humanscore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanscorenumber = 0
let machinescorenumber = 0

const playhuman = (humanchoice) => {
    playthegame(humanchoice, playmachine())

}

const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]
}


const playthegame = (human, machine) => {
    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = 'deu empate'
    }

    else if ((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = 'voce ganhou'
        humanscore.innerHTML = humanscorenumber
        humanscorenumber++
    }



    else {
        result.innerHTML = 'voce perdeu para a maquina'
        machinescore.innerHTML = machinescorenumber
        machinescorenumber++
    }


}




