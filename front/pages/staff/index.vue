<template>
  <div>
    <h1> Input Username and password of staff</h1>
    <input v-model="username" type="text" /><br/>
    <input v-model="password" type="password" />
    <nuxt-link to="/staff/handler" > <button> login </button></nuxt-link>
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

