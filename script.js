function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var date = new Date()
    var time = date.getHours()
    msg.innerHTML = `It's around ${time} o'clock.`
    if (time >= 0 && time < 12) {
        //Good Morning!
        img.src = "morning.png"
        innerHTML = "Good Morning!"
        document.body.style.background = "#e2cd9f"
    } else if (time >= 12 && time < 18) {
        //Good Afternoon!
        img.src = "sunset.png"
        innerHTML = "Good Afternoon!"
        document.body.style.background = "#b9846f"
    } else {
        //Good Evening!
        img.src = "nigth.png"
        innerHTML = "Good Evening!"
        document.body.style.background = "#515154"
    }
}
