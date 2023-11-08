const circle = document.querySelector(".circle")

circle.addEventListener("mousemove", (e) => {
    const num = document.querySelector(".num")
    const wLine = document.querySelector(".width-line")
    const hLine = document.querySelector(".hight-line")
    const main = document.querySelector(".main")
    
    let xAxis = e.layerX
    let yAxis = e.layerY
    num.style.left = `${xAxis > 10 ? xAxis : null}px`
    num.style.top = `${yAxis > 10 ? yAxis : null}px`
    document.querySelector(".width").innerHTML = `Left: ${xAxis}`
    document.querySelector(".hight").innerHTML = `Top: ${yAxis}`
    num.style.backgroundColor = `${xAxis <= 10 ? 'red' : "green"}`
    num.style.backgroundColor = `${yAxis <= 10 ? 'red' : "green"}`
    num.style.opacity = `${xAxis >= 5 ? '1' : '0'}`
    num.style.opacity = `${yAxis >= 5 ? '1' : '0'}`

    wLine.style.left = `${xAxis > 10 ? xAxis : null}px`
    hLine.style.top = `${yAxis > 10 ? yAxis : null}px`

    for(let i = 0; i < 40; i++){
        const miniCircle = document.createElement("span")
        miniCircle.innerHTML = `${i%2 === 0 ? '0' : '1'}`
        miniCircle.className = 'mini-circle'
        miniCircle.style.color = `${i%2 === 0 ? 'red' : 'yellow'}`
        main.appendChild(miniCircle)
        
        setTimeout(() => {
            main.removeChild(miniCircle)
        }, 500)
        
    }
})

