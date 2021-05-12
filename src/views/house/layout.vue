<template>
    <!-- eslint-disable -->
    <div v-if="house">
        <div class="nav">
            <router-link :to="{name : 'HouseDetail'}"> Details </router-link>
            <router-link :to="{name : 'HouseRegister'}"> Register </router-link>
            <router-link :to="{name : 'HouseEdit'}"> Edit </router-link>
        </div>
        <router-view :house="house"> </router-view>
    </div>
</template>

<script>

import GotService from '../../../services/GotService';

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
            .catch(error => {
                if (error.response && error.response.status == 404) {
                    this.$router.push({
                    name: '404Resource',
                    params: { resource: 'house'}
                });
                } else {
                    this.$router.push({
                    name: 'NetworkError',
                    });
                }
                
            });
    },
}
</script>