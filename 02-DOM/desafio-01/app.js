new Vue ({
    el: "#desafio",
    data: {
        nome: "Rodrigo Pinheiro Ramirez",
        idade: 27,
        linkImagem: "https://grupomidia.com/hcm/wp-content/uploads/2023/03/inteligencia_artificial_IA-800x600.png"
    },
    methods: { 
        multiplicar() {
            var multiplicar = this.idade * 3
            return multiplicar
        }, 

        nRandomico(){
            return Math.random()*(1 - 0) + 0
        },
    }
})