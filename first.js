
let monster_life = 100
let monster_damage = 0
let player_life = 100
let player_damage = 0

let flag = false
let runFlag = false
const mainlog = document.getElementById("singolog")
const htmlTitle = document.getElementById("title")

document.write("しんごHP" + "[#####]")
document.write("モンスターHP" + "[##########]")
htmlTitle.textContent = "モンスターが現れた"

function attackButton(){
    if(player_life > 0 && monster_life > 0 && runFlag == false){
        monster_damage = parseInt(Math.floor(Math.random() * 30))
        monster_life = monster_life - monster_damage
        mainlog.textContent = "モンスターは" + monster_damage + "のダメージを受けた"
    }

    if(monster_life <= 0 && flag == false){
        mainlog.textContent = "モンスターは力尽きた"
        flag = true
    }

    if(player_life > 0 && monster_life > 0 && runFlag == false){
        player_damage = parseInt(Math.floor(Math.random() * 30))
        player_life = player_life - player_damage
        mainlog.textContent = "しんごは" + player_damage + "のダメージを受けた"
    }

    if(player_life <= 0 && flag == false){
        mainlog.textContent = "しんごは力尽きた"
        flag = true
    }
}

function runawayButton(){
    if(flag == false && runFlag == false){
        mainlog.textContent = "逃げ切れた"
        runFlag = true    
    }
}




