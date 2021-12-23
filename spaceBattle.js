//your ship
const ussSwag = (hull, firePower, accuracy) => {
    // this.hull = hull
    // this.firePower = firePower
    // this.accuracy = accuracy

    hull = 20
    firePower = 5
    accuracy = .7
}

//enemyShip & creation

const enemyShip = (hull, firePower, accuracy) => {
    this.hull = hull
    this.accuracy = accuracy
    this.firePower = firePower
}

let getEnemyShipProperties =((min,max)=>{Math.floor(Math.random() * (max - min+1)+min)})
// let getAccuracy=((min,max)=>{Math.floor(Math.random() * (max - min+1)+min)})
// let getfirePower=((min,max)=>{Math.floor(Math.random() * (max - min+1)+min)})
 
const enemyShipNum = 6

function newEnemyShip() {
    if (enemyShipNum > 0) {
        enemyShip.hull = getEnemyShipProperties(3,6)
        enemyShip.firePower = getEnemyShipProperties(2,4)
        enemyShip.accuracy =  getEnemyShipProperties(.6,.8)
        console.log(hull);
        console.log(firePower);
        console.log(accuracy);

    }else {
        alert("you destroyed all enemy ships! return to base for further instruction")
    }
}

let enemyLostShip = (() => enemyShipNum - 1)

//attacks

function attackEnemy() {
    if (Math.random < ussSwag.accuracy) {
        enemyShip.hull-ussSwag.firePower
        console.log(enemyShip.hull);
        if (enemyShip.hull <= 0) { 
            enemyLostShip()
            console.log("you destroyed one of their ships, only " + enemyShipNum + " enemy ships remaining");           
            newEnemyShip()
            gameOn()
        }
    } else
        alert("enemy ships attack missed! Hull strength increased by 1")
        ussSwag.hull+1
    gameOn()
}

function enemyAttack() {
    if (Math.random < enemyShip.accuracy) {
        ussSwag.hull-enemyShip.firePower
        console.log(ussSwag.hull);
        if (ussSwag.hull <= 0) {
            console.log("mayday mayday, the hull has been breached. shields are failing...");
            setTimeout(3000,    console.log("ussSwaginator has been destroyed.. Game over"))
        }else alert ('hull damaged after enemy attack.Hull : '+ussSwag.hull)
    } else
        alert("enemy ships attack missed!")
    gameOn()
}

//html connection
//BEGIN THE GAME

//let playerStats = document.getElementsByClassName("playerStats")
//playerStats.innerHtml = "<p> 'UssSwag' </p> <br> <p> 'hull:'+ussSwag.hull</p> + <br><p> 'firepower: ' + ussSwag.firePower</p>"

// const startgame = document.addEventListener("start")
// startgame.addEventListener('click') = gameOn()yy
let startbutton = document.getElementById("start")

startbutton.onclick = function gameOn() {
    
    let initialMsg = (`Current Health: ${ussSwag.hull} || Targets Health: ${enemyShip.hull} ||  Remaining enemy ships: ${enemyShipNum}`);

    console.log(ussSwag.hull);
alert(initialMsg)
    let action =prompt("what would you like to do?","attack/retreat")
    console.log(initialMsg);
    if (action = attack){
        
    }

}
