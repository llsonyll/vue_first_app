<template>
    <div v-if="house">        
        <p> Register for the house </p>
        <button @click="register">Registrar</button>
    </div>
</template>

<script>

export default {
    props: ['house'],
    methods: {
        register(){
            //Call to API
            //Si el registro es exitoso, redireccionar a detalles de casa

            this.$router.push({
                name: 'HouseDetail'
            })

            // 
        },
    }
}
</script>   