const ctx = document.getElementById('mensal');
const ctx2 = document.getElementById('semanal');

fetch("/avaliacao/topMes")
    .then(res => res.json())
    .then(dados => {

        new Chart(document.getElementById('mensal'), {
            type: 'bar',
            data: {
                labels: dados.map(j => j.nome),
                datasets: [{
                    label: 'Pontuação',
                    data: dados.map(j => j.pontuacao),
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
        })
    });

fetch("/avaliacao/topSemana")
    .then(res => res.json())
    .then(dados => {

        new Chart(document.getElementById('semanal'), {
            type: 'bar',
            data: {
                labels: dados.map(j => j.nome),
                datasets: [{
                    label: 'Pontuação',
                data: dados.map(j => j.pontuacao),
                    backgroundColor: ['gold', 'silver', '#CD7F32', '#b70df2', '#b70df2'],
                    borderWidth: 1
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
        })
    });
