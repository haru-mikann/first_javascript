
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
const sysmesse = document.getElementById("sysmesse")
sysmesse.textContent = "モンスターが現れた"

const attackButton = () =>{
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
        let monsterMesse = "モンスターは" + monsterDamage + "のダメージを受けた"
        monsterlog.textContent = monsterMesse 
        monsterHP.textContent = "モンスターHP:" + getHpText(monsterLife)
        log(monsterMesse)
    }
    
    if(monsterLife <= 0 && flag == false){
        monsterlog.textContent = "モンスターは力尽きた"
        log("モンスターは力尽きた")
        flag = true
    }
    
    if(playerLife > 0 && monsterLife > 0 && runFlag == false){
        playerDamage = parseInt(Math.floor(Math.random() * 30))
        playerLife = playerLife - playerDamage
        let singoMesse = "しんごは" + playerDamage + "のダメージを受けた"
        singolog.textContent = singoMesse
        singoHP.textContent ="しんごHP:" + getHpText(playerLife)
        log(singoMesse)
    }
    
    if(playerLife <= 0 && flag == false){
        singolog.textContent = "しんごは力尽きた"
        log("しんごは力尽きた")
        flag = true
    }
}

const runawayButton = () =>{
    if(flag == false && runFlag == false){
        sysmesse.textContent = "逃げ切れた"
        log("逃げ切れた")
        runFlag = true    
    }
}

const item = () =>{
}

const Gamelog = () =>{
    document.getElementById("syslog").textContent = mainlog(logLists)
    // location.href = "gameInfo.html"
    
}