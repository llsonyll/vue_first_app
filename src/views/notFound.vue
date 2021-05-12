<template>
    <!-- eslint-disable -->
    <h1>Theres no content for you</h1>
    <h3>The {{resource}} you're looking for is not here</h3>
    <router-link :to="{name: 'EventList'}"> Back to the home page</router-link>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            required: true,
            default: 'page' // ???? pa q o q
        }
    }
}
</script>