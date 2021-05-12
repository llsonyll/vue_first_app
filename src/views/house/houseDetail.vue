<template>
    <div v-if="house">        
        <h1>{{house.name}}</h1>
        <h2>{{house.words}}</h2>
        <p> {{house.coatOfArms}}</p>
    </div>
</template>

<script>

export default {
    props: ['house'],
    
}
</script>