<template>
  <div class="container">
    <div class="row ">
      <div class="col">
        <div class="_cl-darkred _fw-500 _tal-ct _tal-l-md _pdbt-12px">
          {{ date }}, {{ time }}
        </div>
        <div class="row _pdv-8px _pdt-16px-md">
          <div class="col-md-3 col-12">
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
        <div class="row _pdv-8px _pdt-16px-md">
          <div class="col-md-3 col-12 ">
            <div class="_fw-500">
              ข้อมูลช่าง
            </div>
          </div>
          <div class="col-md-3 _pdv-12px _pdv-0px-md _fw-300">
            <div>
              {{ technician }}
            </div>
          </div>
          
        </div>
        <div class="row _pdv-8px _pdt-8px-md">
          <div class="col-md-3 col-12">
            <div class="_fw-500 _pdt-8px">
              คะแนนการทำรายการ
            </div>
          </div>
      
          <div class="col ">
            <div class="_dp-f _jtfct-fst">
              <fieldset class="rating">
                <input 
                  id="star5" 
                  type="radio" 
                  name="rating" 
                  value="5" ><label 
                    class = "full" 
                    for="star5" 
                    title="5 stars"/>
                <input 
                  id="star4" 
                  type="radio" 
                  name="rating" 
                  value="4" ><label 
                    class = "full" 
                    for="star4" 
                    title="4 stars"/>
                <input 
                  id="star3" 
                  type="radio" 
                  name="rating" 
                  value="3" ><label 
                    class = "full" 
                    for="star3" 
                    title="stars"/>
                <input 
                  id="star2" 
                  type="radio" 
                  name="rating" 
                  value="2" ><label 
                    class = "full" 
                    for="star2" 
                    title="2 stars"/>
                <input 
                  id="star1" 
                  type="radio" 
                  name="rating" 
                  value="1" ><label 
                    class = "full" 
                    for="star1" 
                    title="1 star"/>
              </fieldset>
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
$secondary: #f8f8f9;
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

._cl-darkred {
  color: $primary;
}

fieldset,
label {
  margin: 0;
  padding: 0;
}
body {
  margin: 20px;
}
h1 {
  font-size: 1.5em;
  margin: 10px;
}

.rating {
  border: none;
  float: left;
}

.rating > input {
  display: none;
}
.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: '\f005';
}

.rating > .half:before {
  content: '\f089';
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: $primary;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: $primary;
}
._cl-darkred {
  color: $primary;
}

.bg-red {
  background: $primary;
}

.bg-white {
  background: $secondary;
}
</style>
