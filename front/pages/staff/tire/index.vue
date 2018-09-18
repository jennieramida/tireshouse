<template>
  <div>
      <div class="ui segment " align="center">
        <h2 is="sui-header" floated="right">Floated Content</h2>
  <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" v-on:change="filesChange"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,text/comma-separated-values, text/csv, application/csv"  class="input-file">
        <sui-button v-on:click="importXLSX"> Import </sui-button>
        <sui-button v-on:click="exportXLSX"> Export </sui-button>
       <!-- {{$store.state}} -->
        <sui-divider clearing />
        <sui-table size="small" selectable celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell v-for="h in headers " :key="h" >{{h}}</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body>
          <sui-table-row v-for="data in $store.state.TIRE_LIST.data.slice($store.state.PAGINATION.start, $store.state.PAGINATION.end)" :key="data.id" v-on:click="pathToOrderDeatail(data.id)">
            <sui-table-cell >
              {{data.id}} 
            </sui-table-cell>
            <sui-table-cell >
              {{data.brand}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.model}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.name}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.width}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.price}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.size}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.series}}
            </sui-table-cell>
            <sui-table-cell >
              {{data.description}}
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
                      <!-- <sui-icon name="right chevron" /> -->
              </sui-menu>
            </sui-table-header-cell>
          </sui-table-row>
        </sui-table-footer>
      </sui-table>
                <a is="sui-menu-item"  v-for="num in parseInt($store.state.TIRE_LIST.data.length/10)+1" :key="num" v-on:click="paging(num)">
                {{num}}</a>
 
                <!-- {{($store.state.TIRE_LIST.data.length/10).toFixed()}} -->
    </div>
  
  </div>
</template>

<script>
  let pageSize = 10;
export default {
  layout: 'staff',
  async fetch({store}){
    store.commit("PAGING", {"start":0,"end":pageSize-1})
    await store.dispatch("GETLISTTIRE")
  } ,
  data: () => ({
    headers: ["index","brand","model","name","width","price","size","series","description"],
    filexlsx: []
  }),
  methods: {
    pathToOrderDeatail: function(id) {
      this.$router.push('/staff/tire/'+id)
    },
    paging: function(num) {
      
      let startPage = (num*pageSize)-pageSize
      let endPage = (num*pageSize)-1
      this.$store.commit("PAGING", {"start":startPage,"end":endPage})
    },
    filesChange: function( event ){
      this.filexlsx = event.target.files
    },
    importXLSX: function () {
      this.$store.dispatch("UPLOADXLSX", this.filexlsx)
    },
    exportXLSX: function () {
      this.$store.dispatch("EXPORTXLSX")
      .then(xlsxfile => {
        // console.log(xlsxfile)
        console.log(process.downloads)
        if(process.browser){
          console.log(window.location)
          var FileSaver = require('file-saver');
          let url = URL.createObjectURL(xlsxfile);
          console.log()
        }
      // if(process.browser){
        //   FileSaver.saveAs(xlsxfile.data, "hello world.xlsx");
        // }
        // saveAs(xlsxfile);
      })
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

