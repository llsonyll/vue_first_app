<template>
    <div v-if="house">
        <h1>{{house.name}}</h1>
        <h2>{{house.words}}</h2>
        <p> {{house.coatOfArms}}</p>
    </div>
</template>

<script>

import GotService from '../../services/GotService';

export default {
    props: ['id'],
    data(){
        return {
            house: null,
        }
    },
    created(){
        //Fetch data from house and set house..
        GotService.getHouse(this.id)
            .then(resp => {
                console.log(resp);
                this.house = resp.data;
            })
            .catch(error => console.log(error))
    },
}
</script>