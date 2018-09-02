<template>
  <div>
      <div class="ui segment " align="center">
        <h2 is="sui-header" floated="right">Floated Content</h2>
 
       
        <sui-divider clearing />
        <sui-table size="small" selectable celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell v-for="h in headers " :key="h" >{{h}}</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body>
          <sui-table-row v-for="data in $store.state.ORDER_LIST.data.slice($store.state.PAGINATION.start, $store.state.PAGINATION.end)" :key="data.id" v-on:click="pathToOrderDeatail(data.id)">
            <sui-table-cell >
              {{data.id}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.location}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.orderDateTime}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.latitude}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.longitude}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.customerId}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.technicianId}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.storeId}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.zoneId}}
            </sui-table-cell>
          </sui-table-row>
      
        </sui-table-body>

        <sui-table-footer>
          <sui-table-row>
            <sui-table-header-cell colspan="9">
              <sui-menu v-sui-floated:right pagination>
                <!-- <a is="sui-menu-item" icon>
                  <sui-icon name="left chevron" />
                </a> -->
                <a is="sui-menu-item"  v-for="num in parseInt($store.state.ORDER_LIST.data.length/10)+1" :key="num" v-on:click="paging(num)">
                {{num}}</a>
                      <!-- <sui-icon name="right chevron" /> -->
              </sui-menu>
            </sui-table-header-cell>
          </sui-table-row>
        </sui-table-footer>
      </sui-table>
 
                {{($store.state.ORDER_LIST.data.length/10).toFixed()}}
    </div>
  </div>
</template>

<script>
  let pageSize = 10;
export default {
  async fetch({store}){
    store.commit("PAGING", {"start":0,"end":pageSize-1})
    await store.dispatch("GETLISTORDER")
  } ,
  data: () => ({
    headers: ["index", "Address", "Send Date", "Latitude", "Longitude","Customer","technician","Store","Zone"]
  }),
  methods: {
    pathToOrderDeatail: function(id) {
       this.$router.push('/staff/order/'+id)
    },
    paging: function(num) {
     
      let startPage = (num*pageSize)-pageSize
      let endPage = (num*pageSize)-1
      this.$store.commit("PAGING", {"start":startPage,"end":endPage})
    }
  },


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
table, th, td {
    border: 1px solid black;
}
</style>

