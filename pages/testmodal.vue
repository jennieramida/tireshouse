<template>
  <div class=" container Prompt">
    <div class="row _alit-ct">
      <div class="col-12">
        <button 
          class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
          @click="$modal.show('otp')">OTP Modal</button>
        <o-t-p-modal/>
        <button 
          class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
          @click="$modal.show('login')">Login Modal</button>
        <login-modal/>
        <button 
          class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
          @click="$modal.show('success')">Success Modal</button>
        <success-modal/>
        <button 
          class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
          @click="$modal.show('error')">Error Modal</button>
        <error-modal/>
        <button 
          class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" 
          @click="$modal.show('confirm')">Confirm Modal</button>
        <confirm-modal/>
      </div>
    </div>
  </div>
</template>

<script>
import OTPModal from '~/components/modal/OTPModal'
import LoginModal from '~/components/modal/LoginModal'
import ErrorModal from '~/components/modal/ErrorModal'
import SuccessModal from '~/components/modal/SuccessModal'
import ConfirmModal from '~/components/modal/ConfirmModal'
export default {
  components: {
    OTPModal,
    LoginModal,
    ErrorModal,
    SuccessModal,
    ConfirmModal
  }
}
</script>


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