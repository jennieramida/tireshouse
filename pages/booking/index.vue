<template>
  <div class="_w-100pct">
    <div class="container Prompt">
      <div class="row _dp-f _jtfct-ct _mgv-32px">
        <div class="col-12 col-md-10">
          <ul class="progressbar _fs-8 _fs-6-md ">
            <li>เลือกไซส์ยาง</li>
            <li>เลือกยางรถยนต์</li>
            <li>สถานที่และเวลา</li>
            <li>รายละเอียดลูกค้า</li>
            <li>ชำระเงิน</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 _tal-ct _pdbt-48px">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="_fs-3 _dp-b _dp-n-md _fw-500 _cl-darkred">
            เลือกขนาดยางรถยนต์
          </div>
        </div>
      </div>
      <div class="row">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="col-12 col-md-4 tire-contain" >
          <div 
            v-lazy:background="require(`~/assets/images/size.png`)" 
            class="_h-100pct-md _h-256px _bgs-ct _bgrp-nrp _bgpst-bt"/>
          <div class="_pdv-12px _cl-darkred _tal-ct _fs-5">วิธีดูขนาดของยางรถยนต์</div>
        </div>
        <!-- Form -->
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'right', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="col-12 col-md-8 _pdt-24px">
          <div class="_fs-3 _dp-n _dp-b-md _fw-500 _cl-darkred">
            เลือกขนาดยางรถยนต์
          </div>
          <!-- Options -->
          <div class="row _pdt-24px">
            <div class="col-12 col-md-6">
              <div class="_pdv-12px">Width</div>
              <div class="bio-select">
                <select>
                  <option default>Please Select an Item...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="_pdv-12px">Series</div>
              <div class="bio-select">
                <select>
                  <option default>Please Select an Item...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6 _pdt-12px">
              <div class="_pdv-12px">Diameter</div>
              <div class="bio-select">
                <select>
                  <option default>Please Select an Item...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6 _pdt-64px _tal-ct _tal-l-md _cs-pt _fw-500 _fs-5 _cl-darkred">
              + เลือกขนาดยางล้อหลังที่ต่างกัน
            </div>
          </div>
        </div>
      </div>
      <div class="row _pdt-0px _mgt-64px">
        <div class="col">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_dp-f _jtfct-ct">
            <nuxt-link to="/booking/search" >
              <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover">ค้นหายางรถยนต์</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



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
