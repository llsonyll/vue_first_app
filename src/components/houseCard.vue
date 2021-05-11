<template>
  <router-link :to="{name: 'HouseDetail', params: {id: houseId}}">
    <div class="houseCard">
      <h4>{{ house.name }}</h4>
      <p>{{house.words}}</p>    
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HouseCard",
  props: {
    house: Object,
  },
  computed:{
    houseId(){
      return this.house.url.split('/')[5];
    }
  }
};
</script>

<style scoped>
.houseCard {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.houseCard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
