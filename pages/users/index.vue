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
            <p class="hover-underline-animation">ออกจากระบบ</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div v-show="isShowing === 'order'">
          <div>
            <div class="_fs-3 ">ติดตามรายการเปลี่ยนยาง</div>
          </div>
        </div>
        <div v-show="isShowing === 'history'">
          <div class="_fs-3 ">ประวัติการทำรายการเปลี่ยนยาง</div>
        </div>
        <div v-show="isShowing === 'profile'">
          <div class="">
            <div class="_fs-3 ">แก้ไขโปรไฟล์</div>
            <div>
              <div class="_pdt-24px _pdbt-4px">ชื่อ-นามสกุล</div>
              <div class="bio-input">
                <input 
                  type="text" 
                  placeholder="โปรดกรอกชื่อและนามสกุล">
              </div>

              <div class="_pdt-24px _pdbt-4px">เบอร์โทรศัพท์</div>
              <div class="bio-input">
                <input 
                  type="tel" 
                  placeholder="โปรดกรอกเบอร์โทรศัพท์">
              </div>

              <div class="_pdt-24px _pdbt-4px">อีเมล</div>
              <div class="bio-input">
                <input 
                  type="email" 
                  placeholder="โปรดกรอกอีเมล">
              </div>

              <div class="_pdt-24px _pdbt-4px">รหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  placeholder="โปรดตั้งรหัสผ่านใหม่">
              </div>

              <div class="_pdt-24px _pdbt-4px">ยืนยันรหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  placeholder="โปรดตั้งรหัสผ่านใหม่">
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
</style>

