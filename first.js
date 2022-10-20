// parseInt()

let monster_life = 100
let monster_damage = 0
let player_life = 100
let player_damage = 0
alert("モンスターが現れた")
console.log("プレイヤーHP" + "[#####]")
console.log("モンスターHP" + "[##########]")
while(monster_life > 0) {
    
    let ans = prompt("「攻撃」or 「逃げる」") 
    
    if(ans === "攻撃" ){
        monster_damage = parseInt(Math.floor(Math.random() * 30))
        monster_life = monster_life - monster_damage
        console.log("モンスターは" + monster_damage + "のダメージを受けた")
        
        
        if(monster_life >= 80){
            console.log("モンスターHP" + "[##########]")
        }else if(80 > monster_life && monster_life >= 60){
            console.log("モンスターHP" + "[########]")
        }else if(60 > monster_life && monster_life >= 40){
            console.log("モンスターHP" + "[######]")
        }else if(40 > monster_life && monster_life >= 20){
            console.log("モンスターHP" + "[####]")
        }else if(20 > monster_life && monster_life >= 1){
            console.log("モンスターHP" + "[!!!!!]")
        }else if (monster_life <= 0){
            console.log("モンスターHP" + "[]")
        }
        if(monster_life <= 0){
            alert("モンスターを倒した!")
            break

    } else if(ans === "逃げる"){
        alert("逃げ切れた")
        console.log("逃げ切れた")
        break
    } 

    player_damage = parseInt(Math.floor(Math.random() * 30))
    player_life = player_life - player_damage
    console.log("プレイヤーは" + player_damage + "のダメージを受けた")

    if(player_life >= 80){
        console.log("プレイヤーHP" + "[#####]")
    }else if(80 > player_life && player_life >= 60){
        console.log("プレイヤーHP" + "[####]")
    }else if(60 > player_life && player_life >= 40){
        console.log("プレイヤーHP" + "[###]")
    }else if(40 > player_life && player_life >= 20){
        console.log("プレイヤーHP" + "[##]")
    }else if(20 > player_life && player_life >= 1){
        console.log("プレイヤーHP" + "[!!!!!]")
    }else if (player_life <= 0){
        console.log("プレイヤーHP" + "[]")
    }
    

    }
    if(player_life <= 0){
        alert("モンスターに倒された!")
        break
    }
}