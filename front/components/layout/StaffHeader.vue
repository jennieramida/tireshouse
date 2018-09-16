<template>
  <header>
    <!-- Desktop -->
    <div class="container Prompt">
      <div class="row  _mgv-24px _alit-ct _dp-n _dp-f-md no-gutters">
        <div class="col-4">
          <nuxt-link to="/">
            <div 
              v-lazy:background="require(`~/assets/images/header-logo.svg`)" 
              class="_h-48px _bgs-ct _bgrp-nrp "/>
          </nuxt-link>
        </div>
     
        <div class="col-8 _dp-f _jtfct-spbtw _pdl-128px _alit-ct ">
          <div>
            <nuxt-link 
              v-scroll-to="'#services'"
              to="/#services"> 
              <a 
                href="#"
                class="hover-underline-animation"> 1234</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link 
              v-scroll-to="'#about'"
              to="/#about"> 
              <a 
                href="#"
                class="hover-underline-animation"> 1234</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link 
              to="/signin"
              class="hover-underline-animation">
              เข้าสู่ระบบ
            </nuxt-link>
          </div>
          <nuxt-link to="/booking" >
            <button class="bio-button header-button _cl-darkred _bdrd-4px">1234</button>
          </nuxt-link>
        </div>
     
      </div>
    </div>
    <!-- Mobile -->
    <div class="container-fluid header-mobile Prompt">
      <div class="container">
        <div class="row  _dp-b _dp-n-md _pdv-16px _mgbt-32px">
          <div class="col-5">
            <nuxt-link to="/">
              <div 
                v-lazy:background="require(`~/assets/images/header-logo.svg`)" 
                class="_h-32px _bgs-ct _bgrp-nrp "/>
            </nuxt-link>
          </div>
          <div class="col"/>
        </div>
      </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>
$primary: #941e2e;

.header-mobile {
  background-color: white;
  box-shadow: 0px 0px 5px 1px gainsboro;
}
._cl-darkred {
  color: $primary;
}
.header-button {
  background-color: transparent;
  border-color: $primary;
  &:hover {
    background-color: $primary;
    color: white;
    transition: 0.3s;
  }
}

:any-link {
  color: rgba(0, 0, 0, 0.7);
}

.hamburger-container {
  z-index: 4 !important;
  &.-open {
    .hamburger-btn {
      background: $primary;
      background-color: $primary;
      &::before {
        width: 33px;
        top: 0px;
        transform: rotate(-45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
      &::after {
        width: 33px;
        top: 0px;
        transform: rotate(45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
    }
  }

  .hamburger-btn {
    width: 33px;
    height: 3px;
    background: $primary;
    border-radius: 8px;
    position: absolute;
    transition: 0.2s;
    :not(.-open) {
      &:hover {
        width: 28px;
        &::before {
          width: 33px;
        }
        &::after {
          width: 30px;
        }
      }
    }

    &::before {
      width: 28px;
      position: absolute;
      height: 3px;
      background: $primary;
      border-radius: 8px;
      content: ' ';
      top: -11px;
      right: 0px;
      transition: 0.2s;
    }

    &::after {
      position: absolute;
      width: 28px;
      height: 3px;
      background: $primary;
      border-radius: 8px;
      content: ' ';
      top: 11px;
      right: 0px;
      transition: 0.2s;
    }
  }
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
    height: 2px;
    bottom: 0;
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
</style>
