const colorInput = document.getElementById("color-input")
const selectMode = document.getElementById("select-mode")
const getBtn = document.getElementById("get-btn")

getBtn.addEventListener("click", () => renderScheme())

function renderScheme(){
    const seedColor = colorInput.value.slice(1)
    const mode = selectMode.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const hexArray = data.colors.map(color => {
                return color.hex.value
            })

            document.getElementById("main").innerHTML = ""
            hexArray.forEach(hex => {
                const color = document.createElement("div")
                color.style.backgroundColor = hex

                const hexValue = document.createElement("p")
                hexValue.innerText = hex
                color.append(hexValue)

                color.addEventListener("click", function() {
                    navigator.clipboard.writeText(hex)
                    alert("Copied to clipboard")
                } )
                document.getElementById("main").append(color)
            })
        })
}

