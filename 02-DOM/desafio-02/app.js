new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert("O botão foi clicado!")
        },
        armazenar(e){
            this.valor = e.target.value
        }
    }
})