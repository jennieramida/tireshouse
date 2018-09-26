<template>
  <modal 
    :pivot-y="0.1"
    :adaptive="true" 
    :max-width="500" 
    name="thankyou" 
    modal 
    classes="modal-fixed" 
    width="100%" 
    height="auto" 
  >
    <div class="container _mgt-128px">
      <div class="row _bgcl-white _bdrd-4px">
        <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdv-48px">
          <h1 class="">ได้รับข้อความแล้ว!</h1>
          <span class="_mgbt-32px">พนักงานของพระยาเปย์จะติดต่อกลับภายใน 24 ชั่วโมง</span>
          <button 
            class="bio-button orange-button _cs-pt" 
            @click="$modal.hide('thankyou')"
          >
            <h6 class=" _ttf-upc _fs-6 _ltspc-1px _fw-400">ปิด</h6>
          </button>
        </div>
      </div>
    </div>
  </modal>
</template>

<style lang="scss" scoped>
$primary: #f69320;

.orange-button {
  background-color: $primary;
  border-color: transparent;
}
</style>
