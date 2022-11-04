function creatGame(player1, hour, palyer2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${palyer2}.svg" alt="bandeira do ${palyer2}">
    </li>
    
    `
}

let delay = -0.4
function creatCard(date, day, games) {
    delay = delay + 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
         <ul>
        ${games}
        </ul>
    </div>
    
    
    `
}

document.querySelector('#cards').innerHTML = 

        
    creatCard("24/11", "quinta", 
    creatGame('Brazil', '17:00', 'serbia')) +
    creatCard(
    "28/11", 
    "segunda", 
    creatGame('Brazil', '13:00', 'suica') +
    creatGame('portugal', '16:00', 'uruguai')
    ) +
    creatCard("02/12", "sexta", 
    creatGame('Brazil', '16:00', 'camaroes'))

