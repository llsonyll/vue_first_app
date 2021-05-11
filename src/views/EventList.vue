<template>
  <div class="events">
    <h1>Events for good</h1>
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
    <HouseCard v-for="house in houses" :key="house.name" :house="house"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/eventCard.vue";
import HouseCard from '@/components/houseCard.vue';
// import EventService from './../../services/EventService';
import GotService from '../../services/GotService';

export default {
  name: "eventList",
  components: {
    HouseCard,
  },
  data() {
    return {
      // events: null,
      houses: null,
    };
  },
  created(){
      GotService.getHouses()
        .then(resp => {
          this.houses = resp.data;
        })
        .catch(error => console.log(error));
  } 
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
