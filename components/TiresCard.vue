<template>
  <div class="container _mgv-16px">
    <!-- Desktop -->
    <div class="_dp-n _dp-b-md">
      <div class="row card _pd-24px">
        <div class="col-3 _pdh-32px">
          <div 
            v-lazy:background="suppliers" 
            class="_h-64px-md _h-256px _bgs-ct _bgrp-nrp _bgpst-t "/>
          <div 
            v-lazy:background="tires" 
            class="tire-h _bgs-ct _bgrp-nrp _bgpst-t "/>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="_fs-4 _fw-500">{{ heading }}</div>
              <div class="_fs-6 _fw-300 _lh-125pct _pdv-12px">{{ info }}</div>
            </div>
          </div>
          <div class="row _lh-150pct ">
            <div class="col-6">
              ขนาดยาง<br>
              หน้ากว้างยาง (มม.)<br>
              แก้มยางสูง (มม.)<br>
              เส้นผ่านศูนย์กลางกระทะล้อ (นิ้ว)<br>
              ความสูงยางโดยรวม (มม.)<br>
            </div>
            <div class="col-6 _fw-300">
              : {{ size }}<br>
              : {{ width }}<br>
              : {{ height }}<br>
              : {{ diameter }}<br>
              : {{ all }}<br>
            </div>
          </div>
          
        </div>
        <div class="col-3 _pdt-32px">
          <div class="_fs-3 _tal-r _fw-500">{{ price }} บาท</div>
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
          <div class="_dp-f _jtfct-fe">
            <nuxt-link to="/booking/search" >
              <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover">เลือกยางชนิดนี้</button>
            </nuxt-link>
          </div>
        </div>
        <!-- Back Tire -->
        <!-- <div 
          :class="hasBack === true" 
          class="_w-100pct row">
          <div class="col-3"/>
          <div class="col-6 _pdl-32px _mgt-24px">
            <div class="row">
              <div class="col">
                <div class="_fs-4 _fw-500">{{ backheading }}</div>
                <div class="_fs-6 _fw-300 _lh-125pct _pdv-12px">{{ backinfo }}</div>
              </div>
            </div>
            <div class="row _lh-150pct ">
              <div class="col-6">
                ขนาดยาง<br>
                หน้ากว้างยาง (มม.)<br>
                แก้มยางสูง (มม.)<br>
                เส้นผ่านศูนย์กลางกระทะล้อ (นิ้ว)<br>
                ความสูงยางโดยรวม (มม.)<br>
              </div>
              <div class="col-6 _fw-300">
                : {{ backsize }}<br>
                : {{ backwidth }}<br>
                : {{ backheight }}<br>
                : {{ backdiameter }}<br>
                : {{ backall }}<br>
              </div>
            </div>
          
          </div>
        </div> -->
      </div>
    </div>
    <!-- Mobile -->
    <div class="_dp-b _dp-n-md card _pd-24px">
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
    </div>
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
      default: ''
    },
    info: {
      type: String,
      default: 'ยางสำหรับรถเก๋งที่นุ่มเงียบผสานเทคโนโลยีสูตรเนื้อยางที่มีความยืดหยุ่นสูงช่วยลดแรงสั่นสะเทือนและดูดซับแรงกระแทกจากพื้นถนน อายุการใช้งานที่ยาวนานขึ้น'
    },
    size: {
      type: String,
      default: '195/65R15'
    },
    width: {
      type: String,
      default: '195.00'
    },
    height: {
      type: String,
      default: '126.75'
    },
    diameter: {
      type: String,
      default: '15'
    },
    all: {
      type: String,
      default: '634.50'
    },
    price: {
      type: String,
      default: '2,990.00'
    },
     backsuppliers: {
      type: String,
      default: require('~/assets/images/suppliers/michelin.jpg')
    },
    backtires: {
      type: String,
      default: require('~/assets/images/tire.jpg')
    },
    backheading: {
      type: String,
      default: ''
    },
    backinfo: {
      type: String,
      default: ''
    },
    backsize: {
      type: String,
      default: ''
    },
    backwidth: {
      type: String,
      default: ''
    },
    backheight: {
      type: String,
      default: ''
    },
    backdiameter: {
      type: String,
      default: ''
    },
    backall: {
      type: String,
      default: ''
    },

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
  height: 180px;
}

.bio-input > input,
.bio-select:not(.-multiple) > select {
  height: 36px;
  font-family: 'Prompt';
}
</style>

