let work_duration = 30 * 60 
let repos_duration = 5 * 60 
let is_start = false
let miniteur;

let work = document.getElementById('travail')
let repos = document.querySelector('#repos')
let start_btn = document.querySelector('#start_btn')
let pause_btn = document.getElementById('pause_btn')
let restart_btn = document.querySelector('#restart_btn')
let song = document.getElementById('song')

start_btn.addEventListener('click' , start_miniteur)
pause_btn.addEventListener('click' , pause_miniteur)
restart_btn.addEventListener('click' , restart_miniteur)


function start_miniteur(){
    if(!is_start){
     is_start = true
     miniteur = setInterval(lancer_miniteur , 1000) //stock la variable de l'intervale
    }
}

function lancer_miniteur(){
    if(work_duration > 0 ){
        work_duration--
        affichage_miniteur(work_duration , work)
        if(work_duration === 0){
            sound()
        }
        
    }else if(repos_duration > 0){
        repos_duration--
        affichage_miniteur(repos_duration , repos)
        if(repos_duration === 0){
            sound()
        }
     
    }else {
        is_start = false
        clearInterval(miniteur)
        work_duration = 30 * 60
        repos_duration  = 5 * 60
        affichage_miniteur(work_duration , work)
        affichage_miniteur(repos_duration , repos)
        start_miniteur()
    }
}

function pause_miniteur(){
    clearInterval(miniteur)
    is_start = false
}

function restart_miniteur(){
    clearInterval(miniteur)
    is_start = false
    work_duration =  30 * 60
    repos_duration = 5 * 60
    affichage_miniteur(work_duration ,work)
    affichage_miniteur(repos_duration  , repos)
}


function affichage_miniteur(duration , affichage) {
    let munites =Math.floor (duration / 60)
    let secondes = duration % 60
    secondes = secondes < 10 ? `0${secondes}` : secondes
    affichage.textContent = `${munites} : ${secondes}`
   
}


function sound(){{
    song.play()
}}