function btn() {
    const min = 1
    const max = 1000
    const generateNumber = Math.floor(Math.random() * (max - min + 1)) + min

    document.getElementById("random-num").textContent = `Random Number: ${generateNumber}`
}


