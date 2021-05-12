<template>
  <div class="events">
    <h1>Game of Thrones Houses</h1>
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
    <HouseCard v-for="house in houses" :key="house.name" :house="house"/>
    <div class="pagination">
      <router-link
        :to="{name: 'EventList', query: { page: page - 1}}"
        rel="prev"
        v-if="page != 1"
      >Prev Page</router-link>
      <router-link
        :to="{name: 'EventList', query: { page: page + 1}}"
        rel="next"
      >Next Page</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/eventCard.vue";
import HouseCard from '@/components/houseCard.vue';
// import EventService from './../../services/EventService';
import GotService from '../../services/GotService';

import {watchEffect} from 'vue';

export default {
  name: "eventList",
  components: {
    HouseCard,
  },
  props: ['page'],
  data() {
    return {
      // events: null,
      houses: null,     
      limitPage: {
        type: Number,
        default: 5,
      }
    };
  },
  created(){
    watchEffect(() => {
      this.houses = null;
      GotService.getHouses(this.limitPage, this.page)
        .then(resp => {
          this.houses = resp.data;
        })
        .catch(error => {
          console.log(error);
          this.$router.push({
            name: 'NetworkError',
          });
        });
    })      
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  width: 240px;
  display:  flex;
  justify-content: space-around;
  align-items: center;
}
</style>
