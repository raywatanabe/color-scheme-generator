const colorInput = document.getElementById("color-input")
const selectMode = document.getElementById("select-mode")
const getBtn = document.getElementById("get-btn")

getBtn.addEventListener("click", () => renderScheme())

function renderScheme(){
    // Removes # from hex value for url compatibility
    const seedColor = colorInput.value.slice(1)
    const mode = selectMode.value

    // Generates color scheme based on chosen parameters
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const hexArray = data.colors.map(color => {
                return color.hex.value
            })

            document.getElementById("main").innerHTML = ""
            hexArray.forEach(hex => {
                // Creates div displaying color as background
                const color = document.createElement("div")
                color.style.backgroundColor = hex

                // Adds text of hex value for users
                const hexValue = document.createElement("p")
                hexValue.innerText = hex
                color.append(hexValue)

                // Copies hex value to clipboard on click
                color.addEventListener("click", function() {
                    navigator.clipboard.writeText(hex)
                    alert("Copied to clipboard")
                } )
                document.getElementById("main").append(color)
            })
        })
}

