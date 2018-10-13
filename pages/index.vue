<template>
  <div class="_w-100pct Prompt">
    <div class="_dp-b">
      <!-- Heading Phone -->
      <div class="container _pst-rlt _dp-b _dp-n-md _mgt-16px _mgbt-64px">
        <div class="row _pd-12px">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="col-12 _cl-darkred _tal-ct _fs-2 _fw-500">
            บริการเปลี่ยน<br>ยางรถยนต์
          </div>
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="col-12 _tal-ct _pdt-8px _fw-400 _pdh-48px">
            ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ ช่วยทำให้การเปลี่ยนยางรถยนต์
            เป็นเรื่องง่ายและสะดวกสบายมากยิ่งขึ้น  
          </div>
        </div>
        <div class="row _dp-f _jtfct-ct _pst-rlt">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:400,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_pst-asl _pdt-4px">
            <nuxt-link to="/booking" >
              <button class="bio-button header-button-red _mgt-32px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Hero Images -->
      <div class="container-fluid _dp-f _pst-rlt">
        <div class="row  _zid--1">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:80,scale: 1, origin:'right', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_pst-asl _w-100vw _h-100vh">
            <div 
              v-lazy:background="require(`~/assets/images/Hero.jpg`)" 
              class="_h-512px-md _h-256px _bgs-cv _bgpst-ct _bgrp-nrp flip"/>
          </div>
        </div>
      </div>
      <!-- Heading Desktop -->
      <div class="container _dp-n _dp-b-md">
        <div class="row">
          <div class=" _dp-b col-6">
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
              class="_pdt-128px font-hero _cl-white _lh-100pct _fw-500 _sd">
              บริการเปลี่ยน<br>ยางรถยนต์
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:200,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
              class="_pdt-12px _cl-white _fs-4 _lh-125pct _sd">
              ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ
              <br>ช่วยทำให้การเปลี่ยนยางรถยนต์เป็นเรื่องง่าย
              <br>และสะดวกสบายมากยิ่งขึ้น
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:300,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_pdt-32px">
              <nuxt-link to="/booking" >
                <button 
                  class="bio-button header-button-red _mgv-24px _cl-darkred _bdrd-4px u-rise-5-hover"
                >เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Step Mobile -->
    <div class="container _mgt-256px _pdv-32px _dp-b _dp-n-md">
      <div class="row _pdt-24px _jtfct-ct">
        <div class="col-12">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="_cl-darkred _fs-4 _fw-500 _tal-ct">
            เพียง 4 ขั้นตอนง่ายๆ 
          </div>
        </div>
        <div class="col-10 _dp-f _jtfct-spar _pdv-24px">
          <div 
            :class="{'point-active' : selectedStep === '1'}" 
            class="point _cs-pt" 
            @click="selectedStep = '1'">
            1
          </div>
          <div 
            :class="{'point-active' : selectedStep === '2'}" 
            class="point _cs-pt" 
            @click="selectedStep = '2'">
            2
          </div>
          <div 
            :class="{'point-active' : selectedStep === '3'}" 
            class="point _cs-pt" 
            @click="selectedStep = '3'">
            3
          </div>
          <div 
            :class="{'point-active' : selectedStep === '4'}" 
            class="point _cs-pt" 
            @click="selectedStep = '4'">
            4
          </div>
        </div>
        <div 
          v-show="selectedStep === '1'" 
          class="col-12 _tal-ct _mgv-32px" >
          <div 
            v-lazy:background="require(`~/assets/images/01.svg`)"
            class="_h-256px _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div class="_cl-darkred _fs-4 _fw-500 _pdt-24px">
            ทำรายการเปลี่ยนยาง
          </div>
          <div class="_cl-grey _fs-6-md _lh-125pct _pdh-24px _pdt-8px">
            กรอกไซส์ยางของรถคุณ เลือกยางที่ต้องการ
            กำหนดวันเวลา และสถานที่ให้บริการ  
          </div>
        </div>
        <div 
          v-show="selectedStep === '2'" 
          class="col-12 _tal-ct _mgv-32px" >
          <div 
            v-lazy:background="require(`~/assets/images/02.svg`)"
            class="_h-256px _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div class="_cl-darkred _fs-4 _fw-500 _pdt-24px">
            ระบบจัดหาช่างผู้ชำนาญ
          </div>
          <div class="_cl-grey _fs-6-md _lh-125pct _pdh-24px _pdt-8px">
            อำนวยความสะดวกสบาย ทำให้คุณมีเวลาทำในสิ่งที่อยากทำ
            โดยไม่ต้องเสียเวลาเดินทางและนั่งรอเปลี่ยนยางในรูปแบบเดิมๆ  
          </div>
        </div>
        <div 
          v-show="selectedStep === '3'" 
          class="col-12 _tal-ct _mgv-32px" >
          <div 
            v-lazy:background="require(`~/assets/images/03.svg`)"
            class="_h-256px _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div class="_cl-darkred _fs-4 _fw-500 _pdt-24px">
            ช่างให้บริการตามวันเวลาที่กำหนด 
          </div>
          <div class="_cl-grey _fs-6-md _lh-125pct _pdh-24px _pdt-8px">
            ช่างมาถึงสถานที่ให้บริการตามวัน เวลาที่คุณกำหนด 
            และนำยางไปเปลี่ยนกับร้านยางที่เป็นพาร์ทเนอร์  
          </div>
        </div>
        <div 
          v-show="selectedStep === '4'" 
          class="col-12 _tal-ct _mgv-32px" >
          <div 
            v-lazy:background="require(`~/assets/images/04.svg`)"
            class="_h-256px _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div class="_cl-darkred _fs-4 _fw-500 _pdt-24px">
            เสร็จสิ้นรายการ
          </div>
          <div class="_cl-grey _fs-6-md _lh-125pct _pdh-24px _pdt-8px">
            คุณสามารถตรวจสอบข้อมูลของยาง และแสดงความคิดเห็นผ่านทางเว็บของเรา  
          </div>
        </div>
      </div>
    </div>
    <!-- Step Desktop -->
    <div 
      id="services" 
      class="container _mgv-128px _dp-b-md _dp-n">
      <div class="row">
        <div class="col-12">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="_cl-darkred _fs-3 _fw-500 _tal-ct">
            เพียง 4 ขั้นตอนง่ายๆ 
          </div>
        </div>
      </div>
      <div class="row _pdt-48px _alit-ct">
        <div class="col-md-6">
          <div 
            v-lazy:background="require(`~/assets/images/01.svg`)"
            v-show="selectedStep === '1'" 
            class="size _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div 
            v-lazy:background="require(`~/assets/images/02.svg`)"
            v-show="selectedStep === '2'" 
            class="size _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div 
            v-lazy:background="require(`~/assets/images/03.svg`)"
            v-show="selectedStep === '3'" 
            class="size _bgs-ct _bgpst-ct _bgrp-nrp"/>
          <div 
            v-lazy:background="require(`~/assets/images/04.svg`)"
            v-show="selectedStep === '4'" 
            class="size _bgs-ct _bgpst-ct _bgrp-nrp"/>
        </div>
        <div class="col-md-6">
          <div 
            class="_dp-f _alit-ct _mgv-24px _cs-pt list" 
            @click="selectedStep = '1'">
            <div 
              :class="{'point-active' : selectedStep === '1'}" 
              class="_mgr-48px point">1</div>
            <div class="">
              <div class="_cl-darkred _fs-4 _fw-540">
                ทำรายการเปลี่ยนยาง
              </div>
              <div class="_cl-grey _fs-6-md _lh-150pct _pdh-24px _pdh-0px-md">
                กรอกไซส์ยางของรถคุณ เลือกยางที่ต้องการ
                <br>กำหนดวันเวลา และสถานที่ให้บริการ  
              </div>
            </div>
          </div>
          <div 
            class="_dp-f _alit-ct _mgv-24px _cs-pt list" 
            @click="selectedStep = '2'">
            <div 
              :class="{'point-active' : selectedStep === '2'}" 
              class="_mgr-48px point" >2</div>
            <div class="">
              <div class="_cl-darkred _fs-4 _fw-540">
                ระบบจัดหาช่างผู้ชำนาญ
              </div>
              <div class="_cl-grey _fs-6-md _lh-150pct _pdh-24px _pdh-0px-md">
                อำนวยความสะดวกสบาย ทำให้คุณมีเวลาทำในสิ่งที่อยากทำ<br>
                โดยไม่ต้องเสียเวลาเดินทางและนั่งรอเปลี่ยนยางในรูปแบบเดิมๆ
              </div>
            </div>
          </div>
          <div 
            class="_dp-f _alit-ct _mgv-24px _cs-pt list" 
            @click="selectedStep = '3'">
            <div 
              :class="{'point-active' : selectedStep === '3'}" 
              class="_mgr-48px point" >3</div>
            <div class="">
              <div class="_cl-darkred _fs-4 _fw-540">
                ช่างให้บริการตามวันเวลาที่กำหนด 
              </div>
              <div class="_cl-grey _fs-6-md _lh-150pct _pdh-24px _pdh-0px-md">
                ช่างมาถึงสถานที่ให้บริการตามวัน เวลาที่คุณกำหนด <br> 
                และนำยางไปเปลี่ยนกับร้านยางที่เป็นพาร์ทเนอร์  
              </div>
            </div>
          </div>
          <div 
            class="_dp-f _alit-ct _mgv-24px _cs-pt list" 
            @click="selectedStep = '4'">
            <div 
              :class="{'point-active' : selectedStep === '4'}" 
              class="_mgr-48px point" >4</div>
            <div class="">
              <div class="_cl-darkred _fs-4 _fw-540">
                เสร็จสิ้นรายการ
              </div>
              <div class="_cl-grey _fs-6-md _lh-150pct _pdh-24px _pdh-0px-md">
                คุณสามารถตรวจสอบข้อมูลของยาง <br>และแสดงความคิดเห็นผ่านทางเว็บของเรา 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About -->
    <div 
      id="about"
      class="container-fluid">
      <div class="row bg-red _mgbt-48px _dp-f-md _alit-ct-md">
        <div class="col-md-6 col-12 _w-100vw tires-h _pdh-0px">
          <div 
            v-lazy:background="require(`~/assets/images/About.jpg`)" 
            class="_h-100pct _bgpst-ct _bgs-cv _bgrp-nrp "/>
        </div>
        <div class="col-md-6 col-12 _pdl-32px-md">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'right', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_fs-3 _fw-400 _cl-white _tal-ct _tal-l-md _pdt-48px">เกี่ยวกับ TIRESHOUSE</div>
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:200,scale: 1, origin:'right', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_fs-5 _fw-300 _fw-400-md _cl-white _tal-ct _tal-l-md _pdt-24px _pdr-64px-md _pdbt-48px">ไทร์เฮาส์ เว็บไซต์ให้บริการเปลี่ยนยางรถยนต์ของคุณถึงที่บ้าน เพื่อให้การเปลี่ยนยางรถยนต์นั้นเป็นเรื่องที่ง่ายและสะดวกสบายมากยิ่งขึ้น ทำให้คุณไม่ต้องเสียเวลาออกจากบ้านไปนั่งรอเป็นเวลาหลายชั่วโมง แต่จ่ายในราคาที่เท่ากับราคาในตลาด โดยยางรถยนต์ทุกเส้นจะถูกคัดสรรเฉพาะยางที่ได้คุณภาพ และถูกเปลี่ยนโดยร้านผู้เชี่ยวชาญเท่านั้น
          </div>
        </div>
      </div>
    </div>
    <!-- Suppliers -->
    <div class="container _pdt-24px-md _mgbt-48px-md _mgbt-24px">
      <div 
        v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
        class="row  _cl-darkred _fs-3 _fw-500 _tal-ct _tal-l-md _pdv-24px">
        <div class="col">All Brands</div>
      </div>
      <div 
        v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
        class="row _pdt-16px-md">
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/bridgestone.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/firestone.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/dunlop.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/continental.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
      </div>
      <div 
        v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
        class="row _pdt-16px-md _pdbt-32px _pdbt-64px-md _dp-f-md _alit-ct-md">
        <div class="col-6 col-md-3 _h-48px _mgv-12px-md _pdh-24px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/michelin.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/bfgoodrich.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/yokohama.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
        <div class="col-6 col-md-3 _h-32px-md _h-48px _pdh-48px-md _pdh-24px _mgv-12px img-sup">
          <div 
            v-lazy:background="require(`~/assets/images/suppliers/dayton.jpg`)" 
            class="_h-100pct  _bgs-ct _bgrp-nrp _bgpst-ct"/>
        </div>
      </div>

    </div>
    <!-- Call to Action -->
    <div class="container-fluid _bgcl-grey">
      <div class="container">
        <div class="row">
          <div class="col ">
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_cl-darkred _fs-3 _fw-500 _tal-ct _pdt-64px">
              เปลี่ยนยางกับเรา
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:200,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class=" _fs-5 _tal-ct _pdt-12px _pdh-24px">
              การเปลี่ยนยางรถยนต์เป็นเรื่องง่ายและสะดวกสบายมากยิ่งขึ้น
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:300,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_dp-f _jtfct-ct _mgbt-48px">
              <nuxt-link to="/booking" >
                <button class="bio-button header-button-red _mgv-24px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div></template>

<script>
export default {
  data: ()=> ({
     selectedStep: '1',
  })

}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

._bgcl-grey {
  background-color: $secondary;
}
.img-sup {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  &:hover {
    -webkit-filter: none;
    filter: none;
    transition-duration: 1s;
  }
}
.bg-red {
  background-color: $primary;
}
.tires-h {
  height: calc(100vw / 3.5);
  @include breakpoint(mobile) {
    height: 255px;
  }
}
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

.header-button-red {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}

.font-hero {
  font-size: 60px;
}

.flip {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

._sd {
  text-shadow: 2px 2px 10px rgba($color: #000000, $alpha: 0.3);
}

.point {
  border: 2px solid $primary;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  transition: 0.2s ease-in-out;
  &:hover {
    border: 2px solid $primary;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary;
    color: white;
  }
}

.point-active {
  border: 2px solid $primary;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary;
  color: white;
}

.list:hover {
  .point {
    border: 2px solid $primary;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary;
    color: white;
  }
}
.size {
  height: 360px;
}
</style>
