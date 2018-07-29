<template>
  <div class="container">
    <div class="row ">
      <div class="col">
        <div class="_cl-darkred _fw-500 _tal-ct _tal-l-md _pdbt-12px">
          {{ date }}, {{ time }}
        </div>
        <div class="row _pdv-8px _pdt-16px-md">
          <div class="col-md-2 col-12">
            <div class="_fw-500">
              ข้อมูลยาง
            </div>
          </div>
          <div class="col _pdv-12px _pdv-0px-md _fw-300">
            <div>
              {{ item }}, {{ brand }}, Insurance {{ insurance }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-12">
            <div class="_fw-500">
              ข้อมูลช่าง
            </div>
          </div>
          <div class="col _pdv-12px _pdv-0px-md _fw-300">
            <div>
              {{ technician }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    date: {
      type: String,
      default: '29 กรกฎาคม 2560'
    },
    time: {
      type: String,
      default: '18:00'
    },
    item: {
      type: String,
      default: '195/65R15 PRIMACY 3 ST'
    },
    brand: {
      type: String,
      default: 'Michelin'
    },
    insurance: {
      type: String,
      default: '56789065'
    },
    technician: {
      type: String,
      default: 'ชื่อช่าง'
    }
}
}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
._cl-darkred {
  color: $primary;
}
</style>
