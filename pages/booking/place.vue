<template>
  <div class="container Prompt">
    <div class="row">
      <div class="col-12 _tal-ct _mgv-32px">
        progress bar
      </div>
      <div class="col-12 _tal-ct _pdbt-48px">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          เลือกสถานที่และเวลา
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        MAP
      </div>
      <div class="col-12 col-md-6">
        <div class="col-12">
          <div class="_pdv-12px">สถานที่</div>
          <div class="bio-input">
            <input 
              type="text" 
              placeholder="Type Something">
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">เขต</div>
          <div class="bio-input">
            <input 
              type="text" 
              placeholder="Type Something">
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">จังหวัด</div>
          <div class="bio-input">
            <input 
              type="text" 
              placeholder="Type Something">
          </div>
        </div>
        <div class="_dp-f _mgt-12px">
          <div class="col-6 _dp-ilb">
            <div class="_pdv-12px">วัน</div>
            <!-- <div class="bio-input">
              <input 
                type="text" 
                placeholder="Type Something">
            </div> -->
            <datetime 
              v-model="val" 
              format="DD/MM/YYYY" 
              width="300px"
              class="_zid-1 _pst-rlt"/>
          </div>
          <div class="col-6 _dp-ilb">
            <div class="_pdv-12px">เวลา</div>
            <div class="bio-input">
              <input 
                type="text" 
                placeholder="Type Something">
            </div>
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">รายละเอียดเพิ่มเติม</div>
          <div class="bio-textarea">
            <textarea 
              rows="3" 
              placeholder="Textarea"/>
          </div>
        </div>
        
        <div class="col">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_dp-f _jtfct-ct _pdv-24px">
            <nuxt-link to="/booking/checkout" >
              <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover">ชำระเงิน</button>
            </nuxt-link>
          </div>
        </div>
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

._cl-darkred {
  color: $primary;
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
