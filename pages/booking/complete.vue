<template>
  <div class="container Prompt">
    <div class="row">
      <div class="col">
        <div 
          v-lazy:background="require('~/assets/images/tireshousecar.svg')" 
          class="_mgt-64px _h-128px _bgs-ct _bgrp-nrp _bgpst-t "/>
        <div class="_fs-4 _tal-ct _pdt-64px ">Success taking you back to your dash board</div>
        <!-- redirect to customerdashboard -->
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    fetch ({ store, params, redirect }) {
      // if ()
      return redirect('/users')
      // return true
    }
  }
</script>
