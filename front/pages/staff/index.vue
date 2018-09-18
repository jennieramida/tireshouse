<template>
  <div>
    <h1> Staff Mode</h1>
    <div v-if="!$store.state.AUTHSTAFF">
    <sui-input v-model="loginAccount" type="text" /><br/>
    <sui-input v-model="loginPassword" type="password" /><br>
     <sui-button basic color="red" v-on:click="loginStaff" v-on:keyup="loginStaff">Login</sui-button><br>
    </div>
    <div v-else>
    {{$store.state.AUTHSTAFF}}
      <nuxt-link to="/staff/order" > <sui-button> ordermanagement </sui-button></nuxt-link><br>
      <nuxt-link to="/staff/tire" > <sui-button> tiremanagement </sui-button></nuxt-link><br>
      <nuxt-link to="/staff/zone" > <sui-button> zonemanagement </sui-button></nuxt-link><br>
      <nuxt-link to="/staff/store" > <sui-button> storemanagement </sui-button></nuxt-link><br>
      <nuxt-link to="/staff/handler" > <sui-button> login </sui-button></nuxt-link><br>
    </div>


  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  layout: 'staff',
  data: () => ({
    loginAccount:'',
    loginPassword: '',
  
  }),
  methods: {
    loginStaff () {
    console.log(this.loginEmail)
    const queryString = {"flag":"staff","username": this.loginAccount,"password":this.loginPassword}
    this.$store.dispatch("LOGIN", queryString)
    .then(resp => {
      if(resp){
        console.log(resp)
        this.$store.commit("TOKENSTAFF", resp)
        Cookie.set('StaffDetail', resp)
      } else {
        alert("something")
      }
      this.loginAccount = ''
      this.loginPassword = ''

    })

  }
  }
  
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

