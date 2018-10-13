<template>
  <modal 
    name="otp" 
    height="auto">
    <div class="container modal-size _bdrd-50pct _dp-f _alit-ct">
      <div class="row _w-100pct _mg-0px _pd-0px">
        <div class="col-12 _w-100pct">
          <div class="_fs-3 _cl-black _tal-ct _pdt-64px">กรุณากรอกรหัส OTP</div>
          <div class="_pdt-64px _fs-5 _cl-black _pdbt-8px">รหัส OTP 4 หลัก</div>
          <div class="bio-input">
            <input 
              type="password"
              maxlength="4" 
              placeholder="โปรดกรอกรหัส OTP">
          </div>
          <div class="_pdt-24px _fs-7 _cl-black _pdbt-8px">
            <div>
              <nuxt-link 
                to="/reset" 
                class="_cl-darkred">กดเพื่อรับรหัสผ่านใหม่</nuxt-link></div>
          </div>
          <div class="_dp-f _jtfct-ct">
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">
              <nuxt-link 
                to="/booking/payment" 
                class="_cl-white">
                ยืนยัน
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
