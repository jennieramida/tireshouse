<template>
  <div class="_w-100pct Prompt">
    <div class="container">
      <div class="row">
        <div class="col-4"/>
        <div class="col">
          <div class="_fs-2 _cl-black _tal-ct _pdt-64px">สมัครสมาชิก</div>
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

          <div class="_pdt-24px _fs-5 _cl-black _pdbt-8px">รหัสผ่าน</div>
          <div class="bio-input">
            <input 
              type="password"
              placeholder="โปรดกรอกรหัสผ่านใหม่">
          </div>
          <div class="_pdt-24px _fs-7 _cl-black _pdbt-8px ">
            <div>เป็นสมาชิกแล้ว?
              <nuxt-link 
                to="/signin" 
                class="_cl-darkred">เข้าสู่ระบบ</nuxt-link></div>
     
          </div>
          <div class="_dp-f _jtfct-ct">
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">
              <nuxt-link 
                to="/booking/checkout" 
                class="_cl-white">
                สมัครสมาชิก
            </nuxt-link></button>
          </div>
        </div>
        <div class="col-4"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;

input,
select,
textarea {
  font-family: 'Prompt';
}

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
</style>

