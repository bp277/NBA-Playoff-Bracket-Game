const miami = document.querySelector('.miami');
const atlanta = document.querySelector('.atlanta');
const philly = document.querySelector('.philly');
const toronto = document.querySelector('.toronto');
const bucks = document.querySelector('.bucks');
const chicago = document.querySelector('.chicago');
const boston = document.querySelector('.boston');
const brooklyn = document.querySelector('.brooklyn');
const secondRoundOneEast = document.querySelector('.e-second-round-one');
const secondRoundTwoEast = document.querySelector('.e-second-round-two');
const secondRoundThreeEast = document.querySelector('.e-second-round-three');
const secondRoundFourEast = document.querySelector('.e-second-round-four');
const eastFinalsOne = document.querySelector('.e-conf-final-one')
const eastFinalsTwo = document.querySelector('.e-conf-final-two')
const finalsTeamEast = document.querySelector('.finals-team-two')



// EASTERN CONFERENCE

miami.addEventListener('click', () => {
    secondRoundOneEast.classList.add('miami')
    secondRoundOneEast.classList.remove('atlanta')
    eastFinalsOne.classList.remove('atlanta')
    finalsTeamEast.classList.remove('atlanta')
})
atlanta.addEventListener('click', () => {
    secondRoundOneEast.classList.add('atlanta')
    secondRoundOneEast.classList.remove('miami')
    eastFinalsOne.classList.remove('miami')
    finalsTeamEast.classList.remove('miami')
})
philly.addEventListener('click', () => {
    secondRoundTwoEast.classList.add('philly')
    secondRoundTwoEast.classList.remove('toronto')
    eastFinalsOne.classList.remove('toronto')
    finalsTeamEast.classList.remove('toronto')
})
toronto.addEventListener('click', () => {
    secondRoundTwoEast.classList.add('toronto')
    secondRoundTwoEast.classList.remove('philly')
    eastFinalsOne.classList.remove('philly')
    finalsTeamEast.classList.remove('philly')
})
bucks.addEventListener('click', () => {
    secondRoundThreeEast.classList.add('bucks')
    secondRoundThreeEast.classList.remove('chicago')
    eastFinalsTwo.classList.remove('chicago')
    finalsTeamEast.classList.remove('chicago')
})
chicago.addEventListener('click', () => {
    secondRoundThreeEast.classList.add('chicago')
    secondRoundThreeEast.classList.remove('bucks')
    eastFinalsTwo.classList.remove('bucks')
    finalsTeamEast.classList.remove('bucks')
    
})
boston.addEventListener('click', () => {
    secondRoundFourEast.classList.add('boston')
    secondRoundFourEast.classList.remove('brooklyn')
    eastFinalsTwo.classList.remove('brooklyn')
    finalsTeamEast.classList.remove('brooklyn')
})
brooklyn.addEventListener('click', () => {
    secondRoundFourEast.classList.add('brooklyn')
    secondRoundFourEast.classList.remove('boston')
    eastFinalsTwo.classList.remove('boston')
    finalsTeamEast.classList.remove('boston')
})
secondRoundOneEast.addEventListener('click', () => {
    if (secondRoundOneEast.classList.contains('miami')) {
        eastFinalsOne.classList.add('miami')
    } else if (secondRoundOneEast.classList.contains('atlanta')) {
        eastFinalsOne.classList.add('atlanta')
    }
    eastFinalsOne.classList.remove('toronto')
    finalsTeamEast.classList.remove('toronto')
    eastFinalsOne.classList.remove('philly')
    finalsTeamEast.classList.remove('philly')
})

secondRoundTwoEast.addEventListener('click', () => {
    eastFinalsOne.classList.remove('miami')
    finalsTeamEast.classList.remove('miami')
    eastFinalsOne.classList.remove('atlanta')
    finalsTeamEast.classList.remove('atlanta')
    if (secondRoundTwoEast.classList.contains('philly')) {
        eastFinalsOne.classList.add('philly')
    } else if (secondRoundTwoEast.classList.contains('toronto')) {
        eastFinalsOne.classList.add('toronto')
    }
})
secondRoundThreeEast.addEventListener('click', () => {
    eastFinalsTwo.classList.remove('boston')
    finalsTeamEast.classList.remove('boston')
    eastFinalsTwo.classList.remove('brooklyn')
    finalsTeamEast.classList.remove('brooklyn')
    if (secondRoundThreeEast.classList.contains('bucks')) {
        eastFinalsTwo.classList.add('bucks')
    } else if (secondRoundThreeEast.classList.contains('chicago')) {
        eastFinalsTwo.classList.add('chicago')
    }
    eastFinalsOne.classList('')
    eastFinalsTwo.classList('')
    finalsTeamEast.classList('')
})
secondRoundFourEast.addEventListener('click', () => {
    if (secondRoundFourEast.classList.contains('boston')) {
        eastFinalsTwo.classList.add('boston')
    } else if (secondRoundFourEast.classList.contains('brooklyn')) {
        eastFinalsTwo.classList.add('brooklyn')
    }
    eastFinalsTwo.classList.remove('bucks')
    finalsTeamEast.classList.remove('bucks')
    eastFinalsTwo.classList.remove('chicago')
    finalsTeamEast.classList.remove('chicago')
})

eastFinalsOne.addEventListener('click', () => {
    if (eastFinalsOne.classList.contains('miami')){
        finalsTeamEast.classList.add('miami')
        finalsTeamEast.classList.remove('bucks', 'chicago', 'boston', 'brooklyn')
    } else if (eastFinalsOne.classList.contains('atlanta')) {
        finalsTeamEast.classList.add('atlanta')
        finalsTeamEast.classList.remove('bucks', 'chicago', 'boston', 'brooklyn')
    } else if (eastFinalsOne.classList.contains('philly')) {
        finalsTeamEast.classList.add('philly')
        finalsTeamEast.classList.remove('bucks', 'chicago', 'boston', 'brooklyn')
    } else if (eastFinalsOne.classList.contains('toronto')) {
        finalsTeamEast.classList.add('toronto')
        finalsTeamEast.classList.remove('bucks', 'chicago', 'boston', 'brooklyn')
    }})
    
    eastFinalsTwo.addEventListener('click', () => {
    if (eastFinalsTwo.classList.contains('bucks')){
        finalsTeamEast.classList.add('bucks')
        finalsTeamEast.classList.remove('miami', 'atlanta', 'philly', 'toronto')
    } else if (eastFinalsTwo.classList.contains('chicago')) {
        finalsTeamEast.classList.add('chicago')
        finalsTeamEast.classList.remove('miami', 'atlanta', 'philly', 'toronto')
    } else if (eastFinalsTwo.classList.contains('boston')) {
        finalsTeamEast.classList.add('boston')
        finalsTeamEast.classList.remove('miami', 'atlanta', 'philly', 'toronto')
    } else if (eastFinalsTwo.classList.contains('brooklyn')) {
        finalsTeamEast.classList.add('brooklyn')
        finalsTeamEast.classList.remove('miami', 'atlanta', 'philly', 'toronto')
    }})
    
    finalsTeamEast.addEventListener('click', () => {
        if (finalsTeamEast.classList.contains('miami')) {
            winner.textContent = 'Miami Heat'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('atlanta')) {
            winner.textContent = 'Atlanta Hawks'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('philly')) {
            winner.textContent = 'Philadelphia 76ers'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('toronto')) {
            winner.textContent = 'Toronto Raptors'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('bucks')) {
            winner.textContent = 'Milwaukee Bucks'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('chicago')) {
            winner.textContent = 'Chicago Bulls'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('boston')) {
            winner.textContent = 'Boston Celtics'
            message.classList.add('flex')
            startConfetti()
        }
        if (finalsTeamEast.classList.contains('brooklyn')) {
            winner.textContent = 'Brooklyn Nets'
            message.classList.add('flex')
            startConfetti()
        }
    })

    //RESET

    reset.addEventListener('click', () => {
        secondRoundOneEast.classList = ('square', 'blue')
        secondRoundTwoEast.classList = ('square', 'blue')
        secondRoundThreeEast.classList = ('square', 'blue')
        secondRoundFourEast.classList = ('square', 'blue')
        eastFinalsOne.classList = ('square', 'blue')
        eastFinalsTwo.classList = ('square', 'blue')
        finalsTeamEast.classList = ('square-f', 'blue-f')
        stopConfetti()
    })