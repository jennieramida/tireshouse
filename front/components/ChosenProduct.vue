<template>
  <div class="container _mgv-8px _pdl-0px _mgl-0px">
    <!-- Desktop -->
    <div class="_dp-b card">
      <div class="row _pdt-32px">
        <div class="col-5 _pdh-32px">
          <div 
            v-lazy:background="suppliers" 
            class="_h-32px _bgs-ct _bgrp-nrp _bgpst-t "/>
          <div 
            v-lazy:background="tires" 
            class="tire-h _mgbt-12px _bgs-ct _bgrp-nrp _bgpst-t "/>
        </div>
        <div class="col-7">
          <div class="_fs-4 _fw-500 _pdr-48px">{{ heading }}</div>
          <div class="_fs-5 _cl-darkred _fw-500 _pdt-12px">{{ price }} บาท</div>
          <div class="_fs-5 _cl-darkred _fw-500">จำนวน {{ item }} เส้น</div>
        </div>
      </div>
      <div class="row _pdh-24px">  
        <div class="col-12 _bdtw-1px _bdcl-gray"/>
        <div class="col-md-5 col-6 _pdv-24px  _pdl-24px-md _pdl-12px">
          <div class=" _lh-150pct _fw-500 _fs-5-md _fs-6">ราคายางรถยนต์</div>
          <div class=" _lh-150pct _fw-500 _fs-5-md _fs-6">ค่าบริการ</div>
          <div class=" _lh-150pct _fw-500 _fs-5-md _fs-6">ส่วนลด</div>
          <div class=" _lh-150pct _fw-500 _fs-5-md _fs-6 _pdt-24px">ยอดชำระ</div>
        </div>
        <div class="col-md-5 col-6 _pdv-24px ">
          <div class="_lh-150pct _fs-5-md _fs-6">{{ total }} บาท</div>
          <div class="_lh-150pct _fs-5-md _fs-6">{{ service }} บาท</div>
          <div class="_lh-150pct _fs-5-md _fs-6">{{ discount }} บาท</div>
          <div class="_lh-150pct _fs-5-md _fs-6 _pdt-24px">{{ grandtotal }} บาท</div>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <!-- <div class="_dp-b _dp-n-md card _pd-24px">
      <div class="row">
        <div class="col-5">
          <div 
            v-lazy:background="suppliers" 
            class=" _h-48px _bgs-ct _bgrp-nrp _bgpst-t "/>
          <div 
            v-lazy:background="tires" 
            class="_h-128px _bgs-ct _bgrp-nrp _bgpst-t "/>
        </div>
        <div class="col-7">
          <div class="_fs-7 _tal-r _fw-500 _pdt-24px">{{ heading }}</div>
          <div class="_fs-4 _tal-r _fw-500">{{ price }} บาท</div>
          <div class="_fs-5 _tal-r">/ต่อเส้น</div>
          <div class="bio-select _mgv-12px">
            
            <select>
              <option 
                default>4 เส้น</option>
              <option>3 เส้น</option>
              <option>2 เส้น</option>
              <option>1 เส้น</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row _dp-f _jtfct-ct">
        <nuxt-link to="/booking/search" >
          <button class="bio-button header-button-red _cl-darkred _bdrd-4px u-rise-5-hover">เลือกยางชนิดนี้</button>
        </nuxt-link>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    suppliers: {
      type: String,
      default: require('~/assets/images/suppliers/michelin.jpg')
    },
    tires: {
      type: String,
      default: require('~/assets/images/tire.jpg')
    },
    heading: {
      type: String,
      default: '195/65R15 PRIMACY 3 ST'
    },
    price: {
      type: String,
      default: '2,990.00'
    },
    item: {
      type: String,
      default: '4'
    },
    total: {
      type: String,
      default: '11,960.00'
    },
    service: {
      type: String,
      default: '0.00'
    },
    discount: {
      type: String,
      default: '0.00'
    },
    grandtotal: {
      type: String,
      default: '11,960.00'
    }





  }
}
</script>

<style lang="scss" scoped>
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

.card {
  background-color: white;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #dfdfdf;
}

.tire-h {
  height: 120px;
}

.bio-input > input,
.bio-select:not(.-multiple) > select {
  height: 36px;
  font-family: 'Prompt';
}
</style>

