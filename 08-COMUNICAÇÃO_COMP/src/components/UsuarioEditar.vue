<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade: <strong>{{ idade }}</strong></p>
        <button @click="idadeMudou">Alterar Idade</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            idade: 33,
        }
    
    },

    methods: {
        idadeMudou() {
        
                this.idade = 45
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
