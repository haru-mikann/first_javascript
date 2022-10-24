
let monsterLife = 100
let monsterDamage = 0
let playerLife = 100
let playerDamage = 0

let flag = false
let runFlag = false
let Y = 0
let returnY = 0



const singoHP = document.getElementById("singoHP")
const monsterHP = document.getElementById("monsterHP")




const singolog = document.getElementById("singolog")
const monsterlog = document.getElementById("monsterlog")
const syslog = document.getElementById("syslog")
syslog.textContent = "モンスターが現れた"

function attackButton(){
    const getHpText = (hp) => {
        if(hp>0){
            const num =  Math.floor(hp / 20)
            return '#'.repeat(num)
        }else{
            return "-"
        }
    }
    if(playerLife > 0 && monsterLife > 0 && runFlag == false){

        // Y += 10
        // document.getElementById("singo").style.left = Y + "px"

        monsterDamage = parseInt(Math.floor(Math.random() * 30))
        monsterLife = monsterLife - monsterDamage
        monsterlog.textContent = "モンスターは" + monsterDamage + "のダメージを受けた"
        monsterHP.textContent = "モンスターHP:" + getHpText(monsterLife)
    }
    
    if(monsterLife <= 0 && flag == false){
        monsterlog.textContent = "モンスターは力尽きた"
        flag = true
    }
    
    if(playerLife > 0 && monsterLife > 0 && runFlag == false){
        playerDamage = parseInt(Math.floor(Math.random() * 30))
        playerLife = playerLife - playerDamage
        singolog.textContent = "しんごは" + playerDamage + "のダメージを受けた"
        singoHP.textContent ="しんごHP:" + getHpText(playerLife)
    }
    
    if(playerLife <= 0 && flag == false){
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
