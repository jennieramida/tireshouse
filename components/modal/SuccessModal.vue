<template>
  <modal 
    name="success" 
    height="auto">
    <div class="container modal-size _dp-f _alit-ct _fdrt-cl _pdbt-24px">
      <div class="row _w-100pct">
        <div class="col _pdh-12px">
          <div class="_fs-2 _cl-black _tal-ct _pdt-64px">ทำรายการสำเร็จ</div>
          <div 
            v-lazy:background="require('~/assets/images/modal/success.svg')" 
            class="_mg-24px _mgt-48px _h-128px _bgs-ct _bgrp-nrp _bgpst-t "/>
          <div class="_pdt-24px _fs-5 _cl-black _tal-ct _pdbt-8px">ขอบคุณที่ใช้บริการ Tireshouse</div>
          <div class="_dp-f _jtfct-ct">
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">
              <nuxt-link 
                to="/" 
                class="_cl-white">
                กลับสู่หน้าหลัก
            </nuxt-link></button>
          </div>
    
      
        </div>
      </div>
    </div>
  </modal>
</template>



<style lang="scss" scoped>
.modal-size {
  min-height: 70vh;
  max-width: 50vw;
}

$primary: #941e2e;
$secondary: #f8f8f9;

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

input::placeholder {
  font-family: 'Prompt' !important;
}
</style>
