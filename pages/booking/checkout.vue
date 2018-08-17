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
          <nuxt-link 
            to="/signin" 
            class="_cl-darkred">
            กดที่นี่เพื่อเข้าสู่ระบบ</nuxt-link>
          เพื่อติดตามการบริการ
        </div>
     
      
  
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
          class="_dp-f _jtfct-ct _pdv-24px _pdt-48px _pdt-24px-md">
          <nuxt-link to="/booking/payment" >
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">ยืนยัน</button>
          </nuxt-link>
        </div>
      </div>
    </div>
   
    
  </div>
</template>


<script>

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
</style>
