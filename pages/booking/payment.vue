<template>
  <div class="container Prompt _pdbt-48px">
    <div class="row">
      <div class="col-12 _tal-ct _mgv-32px">
        progress bar
      </div>
      <div class="col-12 _tal-ct _pdbt-48px">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          ดำเนินการชำระเงิน
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6 _pdbt-48px _pdbt-0px-md">
        <div class=" _fs-4 _cl-black _pdbt-24px">ช่องทางการชำระเงิน</div>
        <form class=" _pdv-24px">
          <div>
            <input 
              id="c1" 
              type="checkbox">
            <label for="c1">ชำระด้วยบัตรเครดิต</label>
          </div>
          <div>
            <input 
              id="c2" 
              type="checkbox">
            <label for="c2">ชำระด้วยการโอนเงิน</label>
          </div>
          <div>
            <input 
              id="c3" 
              type="checkbox">
            <label for="c3">ผ่อนชำระ</label>
          </div>
        </form>

      </div>
      
      <div class="col-12 col-md-6">
        kkokok
      </div>
    </div>
   
    
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker'

export default {
  components: { datetime },
  methods: {
    alertVal () {
      alert(this.dob)
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

input,
select,
textarea {
  font-family: 'Prompt';
}
._cl-darkred {
  color: $primary;
}

a {
  color: $primary;
  text-decoration: underline;
}

.tire-contain {
  height: calc(100vh / 2.5);
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
