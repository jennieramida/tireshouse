<template>
  <modal 
    name="login" 
    height="auto">
    <div class="container modal-size _dp-f _alit-ct _fdrt-cl _pdbt-24px">
      <div class="row _w-100pct">
        <div class="col _pdh-12px">
          <div class="_fs-2 _cl-black _tal-ct _pdt-64px">เข้าสู่ระบบ</div>
          <div class="_pdt-24px _fs-5 _cl-black _pdbt-8px">อีเมล</div>
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
          <div class="_pdt-24px _fs-7 _cl-black _pdbt-8px _dp-f _jtfct-spbtw">
            <div>
              <nuxt-link 
                to="/reset" 
                class="_cl-darkred">ลืมรหัสผ่าน</nuxt-link></div>
            <div>ยังไม่เป็นสมาชิก? 
              <nuxt-link 
                to="/signup" 
                class="_cl-darkred">สมัครสมาชิก</nuxt-link></div>
          </div>
          <div class="_dp-f _jtfct-ct">
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">
              <nuxt-link 
                to="/booking/checkout" 
                class="_cl-white">
                เข้าสู่ระบบ
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
