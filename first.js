
let monster_life = 100
let monster_damage = 0
let player_life = 100
let player_damage = 0
alert("モンスターが現れた")

console.log("しんごHP" + "[#####]")
console.log("モンスターHP" + "[##########]")
let flag = false
let runFlag = false
function attackButton(){
    if(player_life > 0 && monster_life > 0 && runFlag == false){
        monster_damage = parseInt(Math.floor(Math.random() * 30))
        monster_life = monster_life - monster_damage
        console.log("モンスターは" + monster_damage + "のダメージを受けた")
    }

    if(monster_life <= 0 && flag == false){
        console.log("モンスターは力尽きた")
        flag = true
    }

    if(player_life > 0 && monster_life > 0 && runFlag == false){
        player_damage = parseInt(Math.floor(Math.random() * 30))
        player_life = player_life - player_damage
        console.log("しんごは" + player_damage + "のダメージを受けた")
    }

    if(player_life <= 0 && flag == false){
        console.log("しんごは力尽きた")
        flag = true
    }
}

function runawayButton(){
    if(flag == false && runFlag == false){
        console.log("逃げ切れた")
        runFlag = true    
    }
}


