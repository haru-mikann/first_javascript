
let monster_life = 100
let monster_damage = 0
let player_life = 100
let player_damage = 0

let flag = false
let runFlag = false


document.getElementById("title").textContent = "モンスターが現れた"


const singoHP = document.getElementById("singoHP")
const monsterHP = document.getElementById("monsterHP")




const singolog = document.getElementById("singolog")
const monsterlog = document.getElementById("monsterlog")
const syslog = document.getElementById("syslog")

function attackButton(){
    const getHpText = (hp) => {
        if(hp>0){
            const num =  Math.floor(hp / 20)
            return '#'.repeat(num)
        }else{
            return "-"
        }
    }
    if(player_life > 0 && monster_life > 0 && runFlag == false){
        monster_damage = parseInt(Math.floor(Math.random() * 30))
        monster_life = monster_life - monster_damage
        monsterlog.textContent = "モンスターは" + monster_damage + "のダメージを受けた"
        monsterHP.textContent = "モンスターHP:" + getHpText(monster_life)
    }
    
    if(monster_life <= 0 && flag == false){
        monsterlog.textContent = "モンスターは力尽きた"
        flag = true
    }
    
    if(player_life > 0 && monster_life > 0 && runFlag == false){
        player_damage = parseInt(Math.floor(Math.random() * 30))
        player_life = player_life - player_damage
        singolog.textContent = "しんごは" + player_damage + "のダメージを受けた"
        singoHP.textContent ="しんごHP:" + getHpText(player_life)
    }
    
    if(player_life <= 0 && flag == false){
        singolog.textContent = "しんごは力尽きた"
        flag = true
    }
}

function runawayButton(){
    if(flag == false && runFlag == false){
        syslog.textContent = "逃げ切れた"
        runFlag = true    
    }
}

function item(){

}
