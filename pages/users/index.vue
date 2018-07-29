<template>
  <div class="container Prompt">
    <div class="row _mgt-64px">
      
      <div class="col-md-4 col-12">
        <div class="_dp-f _jtfct-ct _pst-rlt">
          <img 
            src="~/assets/images/koala.jpg" 
            class="_h-128px _w-128px _bdrd-50pct _pst-asl _bdcl-white _bdw-4px shadow">
         
        </div>
        <div class="_mgt-64px _pdt-64px _bdtlrd-8px _bdtrrd-8px _pdv-32px _cl-white bg-red _tal-ct">
          <div class="_fs-4 _fw-400 _pdt-24px _pdbt-4px">รมิดา จึงไพศาล</div>
          <div class="_fs-5 _fw-300">jennieramida@gmail.com</div>
        </div>
        <div class=" _bdbtlrd-8px _bdbtrrd-8px _pdv-32px _cl-dark bg-white _tal-ct _fs-4 _fw-400">
          <div 
            class="_fs-5  _dp-b _pdv-4px _fw-300" 
            @click="isShowing = 'order'"> <p class="hover-underline-animation">ติดตามรายการเปลี่ยนยาง</p>
          </div>
          <div 
            class="_fs-5  _dp-b _pdv-4px _fw-300" 
            @click="isShowing = 'history'">  <p class="hover-underline-animation">ประวัติการทำรายการเปลี่ยนยาง</p>
          </div>
          <div 
            class="_fs-5  _dp-b _pdv-4px _fw-300"
            @click="isShowing = 'profile'"> <p class="hover-underline-animation">แก้ไขโปรไฟล์</p>
          </div>
          <div class="_fs-5  _dp-b _pdv-4px _fw-300">
            <nuxt-link to="/">
              <p class="hover-underline-animation _cl-dark">ออกจากระบบ</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div v-show="isShowing === 'order'">
          <div>
            <div class="_fs-3 _pdbt-24px">ติดตามรายการเปลี่ยนยาง</div>
            <!-- ถ้าไม่มีการทำรายการมาก่อน Show this one -->
            <!-- <div>
            <div class="_cl-darkred _tal-ct _pdt-128px _fs-4"> คุณยังไม่มีรายการเปลี่ยนยาง</div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/booking" >
                <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div> -->
            <div>
              <div class="row _mgv-32px">
                <div class="col-12 _dp-f _jtfct-ct">
                  <ul class="progressbar _w-100pct _fs-6-md ">
                    <li>รอยืนยันช่าง</li>
                    <li>รายละเอียดช่าง</li>
                    <li>ให้คะแนน</li>
                  </ul>
                </div>
                <div class="col-12">
                  <div class="_fs-5 _tal-ct _pdt-64px _pdbt-24px _cl-darkred">รายละเอียดรายการเปลี่ยนยาง</div>
                </div>
                <div class="col-5 _pdl-0px _tal-r _lh-150pct">
                  <div>สถานที่</div>
                  <br>
                  <div>วัน</div>
                  <div>เวลา</div>
                </div>
                <div class="col-6 _pdr-0px  _tal-l _lh-150pct">
                  <div>ไอดีโอ คิว พญาไท 138 ถนนพญาไท แขวงถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</div>
                  <div>4 กรกฎาคม 2560</div>
                  <div>18:00 น.</div>
                </div>
                <div>
                  หากต้องการเปลี่ยนแปลง กรุณาติดต่อ Tireshouse
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div v-show="isShowing === 'history'">
          <div class="_fs-3 _pdbt-24px">ประวัติการทำรายการเปลี่ยนยาง</div>
          <!-- ถ้าไม่มีการทำรายการมาก่อน Show this one -->
          <!-- <div>
            <div class="_cl-darkred _tal-ct _pdt-128px _fs-4"> คุณยังไม่มีรายการเปลี่ยนยาง</div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/booking" >
                <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div> -->
        </div>
        <div v-show="isShowing === 'profile'">
          <div class="">
            <div class="_fs-3 _pdbt-24px">แก้ไขโปรไฟล์</div>
            <div>
              <div class="_pdbt-4px">ชื่อ-นามสกุล</div>
              <div class="bio-input">
                <input 
                  type="text" 
                  value="รมิดา จึงไพศาล">
              </div>

              <div class="_pdt-24px _pdbt-4px">เบอร์โทรศัพท์</div>
              <div class="bio-input">
                <input 
                  type="tel" 
                  value="0959969153">
              </div>

              <div class="_pdt-24px _pdbt-4px">อีเมล</div>
              <div class="bio-input">
                <input 
                  type="email" 
                  value="jennieramida@gmail.com">
              </div>

              <div class="_pdt-24px _pdbt-4px">รหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  value="hellojennie">
              </div>

              <div class="_pdt-24px _pdbt-4px">ยืนยันรหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  value="hellojennie">
              </div>
            </div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/users" >
                <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">บันทึกข้อมูล</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowing: 'order'
  })
}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;

._cl-darkred {
  color: $primary;
}

.bg-red {
  background: $primary;
}

.bg-white {
  background: $secondary;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0) translateY(4px);
    height: 1px;
    bottom: 6px;
    left: 0;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    cursor: pointer;
  }
}

.hover-underline-animation:hover::after {
  transform: scaleX(1) translateY(4px);
  transform-origin: bottom left;
  cursor: pointer;
}
.shadow {
  box-shadow: 0px 0px 4px rgba(105, 105, 105, 0.3);
}

.header-button-red {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}

input,
select,
textarea {
  font-family: 'Prompt';
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 33%;
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

