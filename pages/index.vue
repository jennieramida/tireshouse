<template>
  <div class="_w-100pct Prompt">
    <div class="_dp-b">
      <!-- Heading Phone -->
      <div class="container _pst-rlt _dp-b _dp-n-md _mgt-16px _mgbt-64px">
        <div class="row">
          <div class="col-12 _cl-darkred _tal-ct _fs-3 _fw-500">
            บริการเปลี่ยนยางรถยนต์
          </div>
          <div class="col-12 _tal-ct _pdt-8px _fw-400 _pdh-48px">
            ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ <br>ช่วยทำให้การเปลี่ยนยางรถยนต์
            <br>เป็นเรื่องง่ายและสะดวกสบายมากยิ่งขึ้น  
          </div>
        </div>
        <div class="row _dp-f _jtfct-ct _pst-rlt">
          <div class="_pst-asl _pdt-4px">
            <nuxt-link to="/" >
              <button class="bio-button header-button-mobile _mgt-32px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Hero Images -->
      <div class="container-fluid _dp-f _pst-rlt">
        <div class="row  _zid--1">
          <div class="_pst-asl _w-100vw _h-100vh">
            <div 
              v-lazy:background="require(`~/assets/images/hero-img.jpg`)" 
              class="_h-100pct _bgs-ct _bgrp-nrp "/>
          </div>
        </div>
      </div>
      <!-- Heading Desktop -->
      <div class="container _dp-n _dp-b-md">
        <div class="row">
          <div class=" _dp-b col-6">
            <div class="_pdt-128px font-hero _cl-white _lh-100pct _fw-500">
              บริการเปลี่ยน<br>ยางรถยนต์
            </div>
            <div class="_pdt-12px _cl-white _fs-4 _lh-125pct">
              ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ
              <br>ช่วยทำให้การเปลี่ยนยางรถยนต์เป็นเรื่องง่าย
              <br>และสะดวกสบายมากยิ่งขึ้น
            </div>
            <div class="_pdt-32px">
              <nuxt-link to="/" >
                <button class="bio-button header-button _fs-4 _cl-darkred _bdrd-4px">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="_dp-b ">
      <!-- Step Desktop -->
      <div class="container _mgt-128px _pdt-48px _dp-b _pst-rlt">
        <div class="row">
          <div class="col-12 _tal-ct">
            <div class="_cl-darkred _fs-3 _fw-500">
              เพียง 4 ขั้นตอนง่ายๆ 
            </div>
            <div class="_pdt-24px">Step
              <div class="_pdt-24px">
                <div class="_cl-darkred _fs-4 _fw-500">
                  ทำรายการเปลี่ยนยาง
                </div>
                <div class="_cl-grey">
                  กรอกไซส์ยางของรถคุณ เลือกยางที่ต้องการ
                  กำหนดวัน เวลา และสถานที่ให้บริการ  
                </div>
              </div>
            </div>

          </div>
          <div class="col-12">
            jjijij
          </div>
        </div>
      </div>
    </div>
</div></template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;

._cl-darkred {
  color: $primary;
}

.header-button {
  background-color: $primary;
  color: white;
  border-color: $primary;
  &:hover {
    background-color: transparent;
    color: white;
    border-color: white;
    transition: 0.3s;
  }
}

.header-button-mobile {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}

.font-hero {
  font-size: 72px;
}
</style>
