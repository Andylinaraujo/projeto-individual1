const ctx = document.getElementById('mensal');
const ctx2 = document.getElementById('semanal');
const jogos = [
    {
        "jogo": "minecraft",
        "likes": 100000
    },
    {
        "jogo": "stardew valley",
        "likes": 50000
    },
    {
        "jogo": "limbus company",
        "likes": 30000
    },
    {
        "jogo": "terraria",
        "likes": 20000,
    },
    {
        "jogo": "the bind of issac",
        "likes": 17077,
    },

]

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [jogos[0].jogo, jogos[1].jogo, jogos[2].jogo, jogos[3].jogo, jogos[4].jogo,],
        datasets: [{
            label: 'likes',
            data: [jogos[0].likes, jogos[1].likes, jogos[2].likes, jogos[3].likes, jogos[4].likes],
            backgroundColor: ['gold', 'silver', '#CD7F32', '#b70df2', '#b70df2'],
            borderColor: '#fff',
        }]
    },
    options: {

        indexAxis: 'y',
        scales: {
            y: {
                ticks: {
                    color: "white"
                },
                beginAtZero: true
            },
            x: {
                ticks: {
                    color: "white"
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    }
});


new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [jogos[0].jogo, jogos[1].jogo, jogos[2].jogo, jogos[3].jogo, jogos[4].jogo],
        datasets: [{
            label: 'likes',
            data: [jogos[0].likes, jogos[1].likes, jogos[2].likes, jogos[3].likes, jogos[4].likes],
            backgroundColor: ['gold', 'silver', '#CD7F32', '#b70df2', '#b70df2'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
