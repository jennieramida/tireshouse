<template>
  <div class="container Prompt _pdbt-48px">
    <div class="row _dp-f _jtfct-ct _mgv-32px">
      <div class="col-12 col-md-8">
        <ul class="progressbar _fs-7 _fs-6-md ">
          <li class="active">เลือกไซส์ยาง</li>
          <li class="active">เลือกยางรถยนต์</li>
          <li >สถานที่และเวลา</li>
    
          <li>ชำระเงิน</li>
        </ul>
      </div>
    </div>
    <div class="row _pdt-24px">
      <div class="col-12 _tal-ct _pdbt-48px">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          ดำเนินการชำระเงิน
        </div>
      </div>
    </div>

    <div class="row _dp-f _jtfct-ct">
      <div class="col-12 col-md-8 _pdbt-48px _pdbt-0px-md">
        <div class=" _fs-4 _cl-black _pdbt-24px">รายละเอียดลูกค้า</div>
        <div class="_pdv-24px">ชื่อ-นามสกุล</div>
        <div class="bio-input">
          <input 
            type="text" 
            placeholder="โปรดกรอกชื่อและนามสกุล">
        </div>

        <div class="_pdv-24px">เบอร์โทรศัพท์</div>
        <div class="bio-input">
          <input 
            type="tel" 
            placeholder="โปรดกรอกเบอร์โทรศัพท์">
        </div>

        <div class="_pdv-24px">อีเมล</div>
        <div class="bio-input">
          <input 
            type="email" 
            placeholder="โปรดกรอกอีเมล">
        </div>

        <!--<div class="_pdv-24px">รหัสผ่าน</div>
        <div class="bio-input">
          <input 
            type="password"
            placeholder="โปรดตั้งรหัสผ่านใหม่">
        </div> -->

        <div class="_fs-7 _fs-6-md _mgt-12px _pdt-12px">
          เป็นสมาชิก Tireshouse แล้ว?  
          <span
            to="/signin"
            class="_cl-darkred _cs-pt" 
            @click="$modal.show('login')">
            กดที่นี่เพื่อเข้าสู่ระบบ</span>
          เพื่อติดตามการบริการ
        </div>
     
      
  
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
          class="_dp-f _jtfct-ct _pdv-24px _pdt-48px _pdt-24px-md">
          <!-- <nuxt-link to="/booking/payment" > -->
          <button 
            id="show-modal" 
            class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
            @click="$modal.show('otp')">ยืนยัน</button>
            <!--             
          </nuxt-link> -->
        </div>
        <o-t-p-modal/>
        <login-modal/>
      </div>
    </div>

    
   
    
  </div>
</template>


<script>
import OTPModal from '~/components/modal/OTPModal'
import LoginModal from '~/components/modal/LoginModal'
export default {
  components: {
    OTPModal, LoginModal
  },

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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
