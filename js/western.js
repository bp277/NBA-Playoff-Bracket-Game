const phoenix = document.querySelector('.phoenix');
const nop = document.querySelector('.nop');
const dallas = document.querySelector('.dallas');
const utah = document.querySelector('.utah');
const gsw = document.querySelector('.gsw');
const denver = document.querySelector('.denver');
const memphis = document.querySelector('.memphis');
const minnesota = document.querySelector('.minnesota');
const secondRoundOne = document.querySelector('.w-second-round-one');
const secondRoundTwo = document.querySelector('.w-second-round-two');
const secondRoundThree = document.querySelector('.w-second-round-three');
const secondRoundFour = document.querySelector('.w-second-round-four');
const westFinalsOne = document.querySelector('.w-conf-final-one')
const westFinalsTwo = document.querySelector('.w-conf-final-two')
const finalsTeamWest = document.querySelector('.finals-team-one')

const message = document.querySelector('.message')
const winner = document.querySelector('.winner-team')



// WESTERN CONFERENCE

phoenix.addEventListener('click', () => {
    secondRoundOne.classList.add('phoenix')
    secondRoundOne.classList.remove('nop')
    westFinalsOne.classList.remove('nop')
    finalsTeamWest.classList.remove('nop')
})
nop.addEventListener('click', () => {
    secondRoundOne.classList.add('nop')
    secondRoundOne.classList.remove('phoenix')
    westFinalsOne.classList.remove('phoenix')
    finalsTeamWest.classList.remove('phoenix')
})


dallas.addEventListener('click', () => {
    secondRoundTwo.classList.add('dallas')
    secondRoundTwo.classList.remove('utah')
    westFinalsOne.classList.remove('utah')
    finalsTeamWest.classList.remove('utah')
})
utah.addEventListener('click', () => {
    secondRoundTwo.classList.add('utah')
    secondRoundTwo.classList.remove('dallas')
    westFinalsOne.classList.remove('dallas')
    finalsTeamWest.classList.remove('dallas')
})
gsw.addEventListener('click', () => {
    secondRoundThree.classList.add('gsw')
    secondRoundThree.classList.remove('denver')
    westFinalsTwo.classList.remove('denver')
    finalsTeamWest.classList.remove('denver')
})
denver.addEventListener('click', () => {
    secondRoundThree.classList.add('denver')
    secondRoundThree.classList.remove('gsw')
    westFinalsTwo.classList.remove('gsw')
    finalsTeamWest.classList.remove('gsw')
    
})


memphis.addEventListener('click', () => {
    secondRoundFour.classList.add('memphis')
    secondRoundFour.classList.remove('minnesota')
    westFinalsTwo.classList.remove('minnesota')
    finalsTeamWest.classList.remove('minnesota')
})
minnesota.addEventListener('click', () => {
    secondRoundFour.classList.add('minnesota')
    secondRoundFour.classList.remove('memphis')
    westFinalsTwo.classList.remove('memphis')
    finalsTeamWest.classList.remove('memphis')
})
secondRoundOne.addEventListener('click', () => {
    if (secondRoundOne.classList.contains('phoenix')) {
        westFinalsOne.classList.add('phoenix')
    } else if (secondRoundOne.classList.contains('nop')) {
        westFinalsOne.classList.add('nop')
    }
    westFinalsOne.classList.remove('utah')
    finalsTeamWest.classList.remove('utah')
    westFinalsOne.classList.remove('dallas')
    finalsTeamWest.classList.remove('dallas')
})

secondRoundTwo.addEventListener('click', () => {
    westFinalsOne.classList.remove('phoenix')
    finalsTeamWest.classList.remove('phoenix')
    westFinalsOne.classList.remove('nop')
    finalsTeamWest.classList.remove('nop')
    if (secondRoundTwo.classList.contains('dallas')) {
        westFinalsOne.classList.add('dallas')
    } else if (secondRoundTwo.classList.contains('utah')) {
        westFinalsOne.classList.add('utah')
    }
})
secondRoundThree.addEventListener('click', () => {
    if (secondRoundThree.classList.contains('gsw')) {
        westFinalsTwo.classList.add('gsw')
    } else if (secondRoundThree.classList.contains('denver')) {
        westFinalsTwo.classList.add('denver')
    }
    westFinalsTwo.classList.remove('memphis')
    finalsTeamWest.classList.remove('memphis')
    westFinalsTwo.classList.remove('minnesota')
    finalsTeamWest.classList.remove('minnesota')
})
secondRoundFour.addEventListener('click', () => {
    if (secondRoundFour.classList.contains('memphis')) {
        westFinalsTwo.classList.add('memphis')
    } else if (secondRoundFour.classList.contains('minnesota')) {
        westFinalsTwo.classList.add('minnesota')
    }
    westFinalsTwo.classList.remove('gsw')
    finalsTeamWest.classList.remove('gsw')
    westFinalsTwo.classList.remove('denver')
    finalsTeamWest.classList.remove('denver')
})

westFinalsOne.addEventListener('click', () => {
    if (westFinalsOne.classList.contains('phoenix')){
        finalsTeamWest.classList.add('phoenix')
        finalsTeamWest.classList.remove('gsw', 'denver', 'memphis', 'minnesota')
    } else if (westFinalsOne.classList.contains('nop')) {
        finalsTeamWest.classList.add('nop')
        finalsTeamWest.classList.remove('gsw', 'denver', 'memphis', 'minnesota')
    } else if (westFinalsOne.classList.contains('dallas')) {
        finalsTeamWest.classList.add('dallas')
        finalsTeamWest.classList.remove('gsw', 'denver', 'memphis', 'minnesota')
    } else if (westFinalsOne.classList.contains('utah')) {
        finalsTeamWest.classList.add('utah')
        finalsTeamWest.classList.remove('gsw', 'denver', 'memphis', 'minnesota')
    }})
    
    westFinalsTwo.addEventListener('click', () => {
        if (westFinalsTwo.classList.contains('gsw')){
            finalsTeamWest.classList.add('gsw')
            finalsTeamWest.classList.remove('phoenix', 'nop', 'dallas', 'utah')
        } else if (westFinalsTwo.classList.contains('denver')) {
            finalsTeamWest.classList.add('denver')
            finalsTeamWest.classList.remove('phoenix', 'nop', 'dallas', 'utah')
        } else if (westFinalsTwo.classList.contains('memphis')) {
            finalsTeamWest.classList.add('memphis')
            finalsTeamWest.classList.remove('phoenix', 'nop', 'dallas', 'utah')
        } else if (westFinalsTwo.classList.contains('minnesota')) {
            finalsTeamWest.classList.add('minnesota')
            finalsTeamWest.classList.remove('phoenix', 'nop', 'dallas', 'utah')
        }})

        finalsTeamWest.addEventListener('click', () => {
            if (finalsTeamWest.classList.contains('phoenix')) {
                winner.textContent = 'Phoenix Suns'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('nop')) {
                winner.textContent = 'New Orleans Pelicans'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('dallas')) {
                winner.textContent = 'Dallas Mavericks'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('utah')) {
                winner.textContent = 'Utah Jazz'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('gsw')) {
                winner.textContent = 'Golden State Warriors'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('denver')) {
                winner.textContent = 'Denver Nuggets'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('memphis')) {
                winner.textContent = 'Memphis Grizzlies'
                startConfetti();
                message.classList.add('flex')
            }
            if (finalsTeamWest.classList.contains('minnesota')) {
                winner.textContent = 'Minnesota Timberwolves'
                startConfetti();
                message.classList.add('flex')
            }

        })

        //RESET

        const reset = document.querySelector('.reset-btn')

        reset.addEventListener('click', () => {
            secondRoundOne.classList = ('square', 'red')
            secondRoundTwo.classList = ('square', 'red')
            secondRoundThree.classList = ('square', 'red')
            secondRoundFour.classList = ('square', 'red')
            westFinalsOne.classList = ('square', 'red')
            westFinalsTwo.classList = ('square', 'red')
            finalsTeamWest.classList = ('square-f', 'red-f')
            message.classList.remove('flex')
            winner.textContent = ''
            stopConfetti()
        })