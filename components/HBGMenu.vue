<template>
  <!-- Hamburger Menu -->
  <div class="wrapper">
    <div class="hamburger-menu">
      <div class="container kanit">
        <div class="row _mgt-64px _jtfct-ct" >
          <div class="col-10 _cl-white _fs-4 _lh-200pct _tal-l">
            <ul>
              <li>
                <nuxt-link 
                  to="/#about" 
                  class="_cl-white">
                  เกี่ยวกับเรา</nuxt-link>
              </li>
              <li>
                <nuxt-link 
                  to="/#service" 
                  class="_cl-white">
                  บริการของเรา</nuxt-link>
              </li>
              <li>
                <nuxt-link 
                  to="/signin" 
                  class="_cl-white">
                  เข้าสู่ระบบ</nuxt-link>
              </li>
              <li>
                <nuxt-link 
                  to="/booking" 
                  class="_cl-white">
                  เปลี่ยนยางรถยนต์</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="row _mgt-64px _bdtw-1px _bdcl-white"/>

        <div class="row _pdt-12px _jtfct-ct _cl-white _fs-7 _pdbt-32px">
          ©Tireshouse 2018. All right reserved.
        </div>
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
.wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 50vh;
  z-index: 5;
}
.hamburger-menu {
  position: absolute;
  top: 0px;

  left: 0px;
  right: 0px;
  min-height: 50vh;
  width: 100vw;
  background-color: $primary;
  z-index: 6;
}

.fliph {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
