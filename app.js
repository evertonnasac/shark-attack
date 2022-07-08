const barco = document.querySelector(".barco")
const shark = document.querySelector(".shark")
const nuvens = document.querySelector(".nuvens")

const jump = () =>{

    barco.style.bottom = "120px"
    setTimeout(()=>{
        barco.style.bottom = "0px"
    },400)
}


const loop = setInterval(() => {
    let sharkPosition = shark.offsetLeft
    let nuvenPosition = nuvens.offsetLeft
    let barcoPosition = +window.getComputedStyle(barco).bottom.replace("px","")

    if(sharkPosition < 91 && sharkPosition > 0 && barcoPosition < 60){
        console.log("bateu")
        shark.style.animation = "none";
        shark.style.left  =`${sharkPosition}px`
        barco.style.bottom = `${barcoPosition}px`
        nuvens.style.animation = "none"
        nuvens.style.left = `${nuvenPosition}px`
        
        clearInterval(loop)

        alert("SHARK WINNER")
        window.location.reload()

        

    }
}, 10);


window.addEventListener("keydown", jump)