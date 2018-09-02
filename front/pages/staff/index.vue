<template>
  <div>
    <h1> features</h1>
    <!-- <input v-model="username" type="text" /><br/> -->
    <!-- <input v-model="password" type="password" /> -->
    features<br>
    <nuxt-link to="/staff/order" > <button> ordermanagement </button></nuxt-link><br>
    <nuxt-link to="/staff/tire" > <button> tiremanagement </button></nuxt-link><br>
    <nuxt-link to="/staff/zone" > <button> zonemanagement </button></nuxt-link><br>
    <nuxt-link to="/staff/store" > <button> storemanagement </button></nuxt-link><br>
    <nuxt-link to="/staff/handler" > <button> login </button></nuxt-link><br>
  


  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;

input,
select,
textarea {
  font-family: 'Prompt';
}

._cl-darkred {
  color: $primary;
}

.header-button-red {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}
</style>

