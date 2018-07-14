<template>
  <footer class="Prompt">
    <div class="footer-red">
      <div class="container">
        <div class="row _fs-6 _pdv-32px _cl-white _lh-150pct">
          <div class="col-md-3 col-6">
            <div>บริการของเรา</div>
            <div class="_fw-300 _pdt-12px">เปลี่ยนยางรถยนต์</div>
            <div class="_fw-300">ระบบชำระเงิน</div>
            <div class="_fw-300">ขั้นตอนการให้บริการ</div>

          </div>
          <div class="col-md-3 col-6">
            <div>ความปลอดภัย</div>
            <div class="_fw-300 _pdt-12px">เกี่ยวกับระบบ</div>
            <div class="_fw-300">ข้อมูลพื้นฐาน</div>
            <div class="_fw-300">ข้อกำหนดและเงื่อนไข</div>
            <div class="_fw-300">นโยบายความเป็นส่วนตัว</div>
          </div>
          <div class="col-md-3 col-12 _pdt-24px _pdt-0px-md">
            <div>TIRESHOUSE</div>
            <div class="_fw-300 _pdt-12px">เกี่ยวกับเรา</div>
            <div class="_fw-300">ติดต่อเรา</div>
            <div class="_fw-300">คำถามที่พบบ่อย</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-black">
      <div class="container">
        <div class="row _pdh-8px _pdh-0px-md _pdv-24px _cl-white _fs-7 _dp-f _jtfct-spbtw">
          <div class="_tal-l">
            ©Tireshouse 2018. All right reserved.
          </div>
          <div class="_tal-r">
            <fa-icon 
              :icon="['fab','facebook-f']" 
              class="_mgr-12px"/>
            <fa-icon 
              :icon="['fas','phone']" 
              class="_mgr-12px"/>
            <fa-icon 
              :icon="['fas','envelope']" 
              class="_mgr-12px"/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$primary: #941e2e;

.footer-red {
  background-color: $primary;
}

.footer-black {
  background-color: rgb(24, 22, 22);
}
</style>
