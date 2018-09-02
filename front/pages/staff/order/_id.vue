<template>
  <div>
    <h1> Table for id : {{$route.params.id}}</h1>
    
    <sui-label>id</sui-label>
    {{$store.state.ORDER_LIST_DETAIL.data.order.id}}<br>
    <sui-label>location</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.id}}<br>
    <sui-label>latitude</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.latitude}}<br>
    <sui-label>longitude</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.longitude}}<br>
    <sui-label>customerId</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.customerId}}<br>
    <sui-label>technicianId</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.technicianId}}<br>
    <sui-label>storeId</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.storeId}}<br>
     <sui-label>zoneId</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.zoneId}}<br>
    <sui-label>orderDateTime</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.orderDateTime}}<br>
     <sui-label>createdTime</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.createdTime}}<br>
    <sui-label>updatedTime</sui-label> 
    {{$store.state.ORDER_LIST_DETAIL.data.order.updatedTime}}<br>
    
    <sui-table size="small" selectable celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell v-for="h in headers " :key="h" >{{h}}</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body>
          <sui-table-row v-for="data in $store.state.ORDER_LIST_DETAIL.data.detail" :key="data.id" v-on:click="pathToOrderDeatail(data.id)">
            <sui-table-cell >
              {{data.id}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.amount}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.orderId}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.tireId}}
            </sui-table-cell>
          </sui-table-row>
      
        </sui-table-body>

        <sui-table-footer>
          <sui-table-row>
            <sui-table-header-cell colspan="4">
              <sui-menu v-sui-floated:right pagination>
                <a is="sui-menu-item" icon>
                  <sui-icon name="left chevron" />
                </a>
                <a is="sui-menu-item">1</a>
                <a is="sui-menu-item">2</a>
                <a is="sui-menu-item">3</a>
                <a is="sui-menu-item">4</a>
                <a is="sui-menu-item" icon>
                  <sui-icon name="right chevron" />
                </a>
              </sui-menu>
            </sui-table-header-cell>
          </sui-table-row>
        </sui-table-footer>
      </sui-table>
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
    await store.dispatch("GETLISTORDERDETAIL",{"orderId":params.id})
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

