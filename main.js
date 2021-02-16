let launchDate = new Date("Feb 16 2021 02:09:55").getTime();

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();

    let t = launchDate - now;

    if (t > 0) {
        // Setando os dias, horas, minutos e segundos
        let days = Math.floor(t / (1000 * 60 * 60 * 24)); // Algorítmo para calcular os dias
        if (days < 10) { days = "0" + days }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours }

        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) { minutes = "0" + minutes }

        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        if (seconds < 10) { seconds = "0" + seconds }

        let time = `${days} : ${hours} : ${minutes} : ${seconds}`;

        document.querySelector('.countdown').innerText = time;
    }
}
