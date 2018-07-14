<template>
  <div class="_w-100pct Prompt">
    <div class="_dp-b">
      <!-- Heading Phone -->
      <div class="container _pst-rlt _dp-b _dp-n-md _mgt-16px _mgbt-64px">
        <div class="row">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="col-12 _cl-darkred _tal-ct _fs-3 _fw-500">
            บริการเปลี่ยนยางรถยนต์
          </div>
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="col-12 _tal-ct _pdt-8px _fw-400 _pdh-48px">
            ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ <br>ช่วยทำให้การเปลี่ยนยางรถยนต์
            <br>เป็นเรื่องง่ายและสะดวกสบายมากยิ่งขึ้น  
          </div>
        </div>
        <div class="row _dp-f _jtfct-ct _pst-rlt">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:400,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_pst-asl _pdt-4px">
            <nuxt-link to="/booking" >
              <button class="bio-button header-button-mobile _mgt-32px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
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
              v-lazy:background="require(`~/assets/images/hero-img.jpg`)" 
              class="_h-100pct _bgs-ct _bgrp-nrp "/>
          </div>
        </div>
      </div>
      <!-- Heading Desktop -->
      <div class="container _dp-n _dp-b-md">
        <div class="row">
          <div class=" _dp-b col-6">
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
              class="_pdt-128px font-hero _cl-white _lh-100pct _fw-500">
              บริการเปลี่ยน<br>ยางรถยนต์
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:200,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
              class="_pdt-12px _cl-white _fs-4 _lh-125pct">
              ให้บริการเปลี่ยนยางรถยนต์ถึงบ้านคุณ
              <br>ช่วยทำให้การเปลี่ยนยางรถยนต์เป็นเรื่องง่าย
              <br>และสะดวกสบายมากยิ่งขึ้น
            </div>
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:300,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_pdt-32px">
              <nuxt-link to="/booking" >
                <button 
                  class="bio-button header-button _fs-4 _cl-darkred _bdrd-4px"
                >เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Step Desktop -->
    <div class="_dp-b ">
      <div class="container _mgt-128px _pdt-64px _dp-b _pst-rlt">
        <div class="row _pdt-24px">
          <div class="col-12 col-md-7 _tal-ct _tal-l">
          
            <div class="_tal-ct _tal-l-md _dp-f-md _alit-ct-md">
              <div class="_dp-ilb-md _dp-n _mgh-64px">ol</div>
              <div class="_dp-ilb">
                <div 
                  v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
                  class="_cl-darkred _fs-3 _fw-500 ">
                  เพียง 4 ขั้นตอนง่ายๆ 
                </div>
                <div 
                  v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
                  class="_pdt-24px"
                >
                  <div class="_dp-b _dp-n-md">
                    Step

                  </div>
                  <div class="_pdt-8px">
                    <div class="_cl-darkred _fs-4 _fw-540">
                      ทำรายการเปลี่ยนยาง
                    </div>
                    <div class="_cl-grey _fs-6-md _lh-125pct _pdh-24px _pdh-0px-md _pdt-12px">
                      กรอกไซส์ยางของรถคุณ เลือกยางที่ต้องการ
                      <br>กำหนดวันเวลา และสถานที่ให้บริการ  
                    </div>
                  </div>
                  <div class="_dp-n _dp-b-md">
                    <div class="_pdt-24px">
                      <div class="_cl-darkred _fs-4  _fw-400">
                        ระบบจัดหาช่างผู้ชำนาญ
                      </div>
                      <div class="_cl-grey _fs-6-md _lh-125pct  _pdt-12px">
                        อำนวยความสะดวกสบาย ทำให้คุณมีเวลาทำในสิ่งที่อยากทำ<br> 
                        โดยไม่ต้องเสียเวลาเดินทางและนั่งรอเปลี่ยนยางในรูปแบบเดิมๆ      
                      </div>
                    </div>
                    <div class="_pdt-24px">
                      <div class="_cl-darkred _fs-4  _fw-400">
                        ช่างให้บริการตามวันเวลาที่กำหนด    
                      </div>
                      <div class="_cl-grey _fs-6-md _lh-125pct  _pdt-12px">
                        ช่างมาถึงสถานที่ให้บริการตามวัน เวลาที่คุณกำหนด <br> 
                        และนำยางไปเปลี่ยนกับร้านยางที่เป็นพาร์ทเนอร์  
                      </div>
                    </div>
                    <div class="_pdt-24px">
                      <div class="_cl-darkred _fs-4  _fw-400">
                        เสร็จสิ้นรายการ
                      </div>
                      <div class="_cl-grey _fs-6-md _lh-125pct  _pdt-12px">
                        คุณสามารถตรวจสอบข้อมูลของยาง <br>และแสดงความคิดเห็นผ่านทางเว็บของเรา
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-5">
            <!-- phone-mobile -->
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:80,scale: 1, origin:'bottom', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_dp-b _dp-n-md _w-100vw _h-512px _pdt-32px">
              <div 
                v-lazy:background="require(`~/assets/images/hand-iphone.png`)" 
                class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct"/>
            </div>
            <!-- phone-desktop -->
            <div 
              v-scroll-reveal="{viewFactor:0.5, delay:80,scale: 1, origin:'bottom', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
              class="_dp-n _dp-b-md _w-512px _h-512px _pdl-48px _pdt-32px">
              <div 
                v-lazy:background="require(`~/assets/images/hand-iphone.png`)" 
                class="_h-100pct _bgs-ct _bgrp-nrp _bgpst-ct _bgpst-btl-md"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About -->
    <div class="container-fluid">
      <div class="row bg-red _mgbt-48px _dp-f-md _alit-ct-md">
        <div class="col-md-6 col-12 _w-100vw tires-h _pdh-0px">
          <div 
            v-lazy:background="require(`~/assets/images/tires.jpg`)" 
            class="_h-100pct _bgs-ct _bgrp-nrp "/>
        </div>
        <div class="col-md-6 col-12 container">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'right', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_fs-3 _fw-400 _cl-white _tal-ct _tal-l-md _pdt-48px">เกี่ยวกับ TIRESHOUSE</div>
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:200,scale: 1, origin:'right', distance:'40px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_fs-5 _fw-300 _fw-400-md _cl-white _tal-ct _tal-l-md _pdt-24px _pdr-64px-md _pdbt-48px">ฟิวเจอร์ม้าหินอ่อนโปรโมเตอร์เฟรม วัคค์ สเตชันโปรเจ็กเตอร์ ฮิตพลาซ่าวอฟเฟิล มาร์เก็ตติ้งแซ็กสปอร์ต อาร์ติสต์คอนโดมิเนียมโต๋เต๋ สโรชาเพรสแจ็กพอตลิมูซีน โคโยตี เคลื่อนย้ายยูวีโพลล์ แอ็กชั่นเวิร์กคอลเล็กชั่น เอาท์เย้วซัพพลายเออร์
          </div>
        </div>
      </div>
    </div>
    <!-- Suppliers -->
    <div class="container _pdt-24px-md _mgbt-48px-md _mgbt-24px">
      <div 
        v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'50px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
        class="row  _cl-darkred _fs-3 _fw-500 _tal-ct _tal-l-md _pdv-24px">
        <div class="col">Our Suppliers</div>
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
                <button class="bio-button header-button-mobile _mgv-24px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div></template>

<script>

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

.header-button-mobile {
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
</style>
