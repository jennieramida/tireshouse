<template>

  <div class="container Prompt">
    <div class="row _dp-f _jtfct-ct _mgv-32px">
      <div class="col-12 col-md-8">
        <ul class="progressbar _fs-7 _fs-6-md ">
          <li class="active">เลือกไซส์ยาง</li>
          <li class="active">เลือกยางรถยนต์</li>
          <li>สถานที่และเวลา</li>

          <li>ชำระเงิน</li>
        </ul>
      </div>
    </div>
    <div class="row _pdt-24px">
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

        <div class="_pdv-24px">ค้นหาสถานที่ </div>
        <div class="bio-input">
          <input
            type="text"
            placeholder="ค้นหาสถานที่">

        </div>
        <div class="_pdv-24px">

          <div class="_bgcl-accent _h-256px"> supposed to be map</div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="_pdv-24px">รายละเอียดสถานที่</div>
        <div class="bio-input">
          <input
            v-model="detail"
            type="text"
            placeholder="กรอกบ้านเลขที่ ถนน">
        </div>

        <div class="_pdv-24px">เขต</div>
        <div class="bio-input">
          <input
            v-model="area"
            type="text"
            placeholder="เขต/อำเภอ">
        </div>

        <div class="_pdv-24px">จังหวัด</div>
        <div class="bio-input">
          <input
            v-model="province"
            type="text"
            placeholder="จังหวัด">

        </div>
        <div class="_dp-f _jtfct-spbtw ">
          <div class=" _dp-ilb">
            <div class="_pdv-24px">วัน</div>
            <!-- <div class="bio-input">
              <input
                type="text"
                placeholder="Type Something">
            </div> -->
            <div class="bio-input _w-256px">
              <!-- <no-ssr> -->
                <date-picker
                  v-model="date"
                  :config="options"/>
                  <!-- </no-ssr> -->
            </div>

          </div>
          <div class=" _dp-ilb">
            <div class="_pdv-24px">เวลา</div>
            <div class="bio-input _w-256px _pdr-256px">
              <no-ssr>
                <vue-timepicker> </vue-timepicker>
              </no-ssr>
            </div>
          </div>
        </div>


        <div class="col">
          <div
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="_dp-f _jtfct-ct _pdv-24px">
            <nuxt-link to="/booking/checkout" >
              <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover" v-on:click="inputAddressInsertStore">ชำระเงิน</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import VueTimepicker from 'vue2-timepicker';
// import datePicker from 'vue-bootstrap-datetimepicker';
// import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import NoSSR from 'vue-no-ssr';
export default{


  components: {
    'no-ssr': NoSSR,
      // datePicker,
      // VueTimepicker
    },

  data: () =>  ({
      detail:'',
      area:'',
      province:'',
      time: {
        HH:'13',
        mm:'00',
        ss:'00'
      },
      date: new Date(),
       options: {
          format: 'DD/MM/YYYY',
          useCurrent: false
       }
  }),
    methods: {
    inputAddressInsertStore:  function(event) {
      let inputAddressArray = {};

      inputAddressArray["detail"] = (this.detail)
      inputAddressArray["area"] = (this.area)
      inputAddressArray["province"] = (this.province)
      inputAddressArray["time"] = (this.time)
      inputAddressArray["date"] = (this.date)
      console.log(inputAddressArray);
      this.$store.commit('ADDRESSSELECTED', inputAddressArray)
    }
  },

}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

.time-picker .dropdown ul li.active,
.time-picker .dropdown ul li.active:hover {
  background: #941e2e !important;
  color: #fff;
}

.time-picker input.display-time {
  border: 1px solid #d2d2d2 !important;
  border-radius: 4px !important;
  width: 15em !important;
  height: 2.2em;
  padding: 0.3em 0.5em;
  font-size: 1em;
}
.time-picker {
  width: 14em !important;
}

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

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
  &::before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 2px solid #bebebe;
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    line-height: 27px;
    background: white;
    color: #bebebe;
    text-align: center;
    font-weight: bold;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: #bebebe;
    top: 15px;
    left: -50%;
    z-index: -1;
  }
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li:first-child:before {
  border-color: $primary;
  background: $primary;
  color: white;
}

.progressbar li.active + li:after {
  background: $primary;
}
.progressbar li.active + li:before {
  border-color: $primary;
  background: $primary;
  color: white;
}

.time-picker input.display-time {
  border: 1px solid #d2d2d2 !important;
  width: 16em !important;
  height: 2.2em !important;
  padding: 0.3em 0.5em !important;
  font-size: 1em !important;
  border-radius: 4px !important;
}
</style>
