const colorInput = document.getElementById("color-input")
const selectMode = document.getElementById("select-mode")
const getBtn = document.getElementById("get-btn")

// fetch("https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6",)
//     .then(res => res.json())
//     .then(data => console.log(data))

// colorInput.addEventListener("change", () => console.log(colorInput.value.slice(1)))


getBtn.addEventListener("click", () => getColorScheme())

function getColorScheme(){
    const seedColor = colorInput.value.slice(1)
    const mode = selectMode.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const hexArray = data.colors.map(color => {
                return color.hex.value
            })
            console.log(hexArray)
        })
}

