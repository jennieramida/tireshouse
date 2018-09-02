<template>
  <div>

    <h1> Table for id : {{$route.params.id}}</h1>
    
    <sui-label>index</sui-label>
    {{$store.state.STORE_LIST_DETAIL.data.id}}<br>
    <sui-label>brand</sui-label> 
    {{$store.state.STORE_LIST_DETAIL.data.name}}<br>
    <sui-label>model</sui-label> 
    {{$store.state.STORE_LIST_DETAIL.data.address}}<br>
    <sui-label>name</sui-label> 
    {{$store.state.STORE_LIST_DETAIL.data.phone}}<br>
    
    
    <!-- <input v-model="username" type="text" /><br/>
    <input v-model="password" type="password" />
    <nuxt-link to="/staff/handler" > <button> login </button></nuxt-link> -->
  </div>
</template>

<script>
export default {
  async fetch({store, params}){
    console.log("sfas")
    console.log(params)
    await store.dispatch("GETLISTSTOREDETAIL",{"storeId":params.id})
  } ,
  
  data: () => ({
    headers: ["index", "amount", "OrderId", "tireId"]
  }),
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

