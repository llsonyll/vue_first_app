<template>
    <div v-if="house">        
        <p> Edit for the house </p>
    </div>
</template>

<script>

export default {
    props: ['house'],    
}
</script>