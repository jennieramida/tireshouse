<template>
  <div class="container Prompt _mgbt-48px">
    <div class="row _dp-f _jtfct-ct _mgv-32px">
      <div class="col-12 col-md-10">
        <ul class="progressbar _fs-7 _fs-6-md ">
          <li class="active">เลือกไซส์ยาง</li>
          <li>เลือกยางรถยนต์</li>
          <li>สถานที่และเวลา</li>
          <li>รายละเอียดลูกค้า</li>
          <li>ชำระเงิน</li>
        </ul>
      </div>
    </div>
    <div class="row _pdt-24px">
      <nuxt-link to="/booking/place">debug-next</nuxt-link>
      <div class="col-12 _tal-ct _pdbt-48px">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          เลือกยางที่ต้องการเปลี่ยน
        </div>
      </div>
    </div>
    <tires-card v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"/>
    <tires-card v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"/>
    <tires-card v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"/>
    <tires-card v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"/>
 
  </div>
</template>

<script>
import TiresCard from '~/components/TiresCard'
export default {
  components: {TiresCard},
// data: () => ({
//     services : [
//       {
//         image: require('~/assets/images/default.jpg'),
//         heading: 'EDC and Scanner',
//         info: 'Transaction acceptance via EDC (online transaction); merchant scans QR code from customer mobile device.'
//       },{
//         image: require('~/assets/images/default.jpg'),
//         heading: 'POS and Scanner',
//         info: 'Transaction acceptance via POS (web service transaction); merchant scans QR code from customer mobile device. Sycapt will provide API for POS integration.'
//       },{
//         image: require('~/assets/images/default.jpg'),
//         heading: 'Static QR Code',
//         info: 'Transaction acceptance by customer scans the static QR code installed at merchant.'
//       }
    // ]
    }
    // )}
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

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 20%;
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
</style>
