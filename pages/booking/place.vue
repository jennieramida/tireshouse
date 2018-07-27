<template>
  <div class="container Prompt">
    <div class="row _dp-f _jtfct-ct _mgv-32px">
      <div class="col-12 col-md-8">
        <ul class="progressbar _fs-7 _fs-6-md ">
          <li class="active">เลือกไซส์ยาง</li>
          <li class="active">เลือกยางรถยนต์</li>
          <li>สถานที่และเวลา</li>
      
          <li>ชำระเงิน</li>
        </ul>
      </div>
    </div>
    <div class="row _pdt-24px">
      <div class="col-12 _tal-ct _pdbt-48px">
        <div 
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          เลือกสถานที่และเวลา
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <no-ssr>
          <GmapMap
            :center="{lat:13.7563, lng:100.5018}"
            :zoom="10"
            map-type-id="roadmap"
            class="map-height map-width"
          >
            <GmapMarker 
              v-for="(marker, index) in markers"
              :key="index"
              :position="marker.position"
            />
          </GmapMap>
        </no-ssr>
      </div>
      <div class="col-12 col-md-6">
        <div class="col-12">
          <div class="_pdv-12px _pdt-48px _pdt-0px-md">สถานที่</div>
          <div class="bio-input">
            <no-ssr>
              <gmap-autocomplete 
                class="_mgh-0px" 
                @place_changed="setPlace"/>
            </no-ssr>
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">เขต</div>
          <div class="bio-input">
            <input 
              type="text" 
              placeholder="Type Something">
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">จังหวัด</div>
          <div class="bio-input">
            <input 
              type="text" 
              placeholder="Type Something">
          </div>
        </div>
        <div class="_dp-f _mgt-12px">
          <div class="col-6 _dp-ilb">
            <div class="_pdv-12px">วัน</div>
            <!-- <div class="bio-input">
              <input 
                type="text" 
                placeholder="Type Something">
            </div> -->
            <div class="bio-input">
              <date-picker 
                v-model="date" 
                :config="options"/>
            </div>
         
          </div>
          <div class="col-6 _dp-ilb">
            <div class="_pdv-12px">เวลา</div>
            <div class="bio-input">
              <input 
                type="text" 
                placeholder="Type Something">
            </div>
          </div>
        </div>
        <div class="col-12 _mgt-12px">
          <div class="_pdv-12px">รายละเอียดเพิ่มเติม</div>
          <div class="bio-textarea">
            <textarea 
              rows="3" 
              placeholder="Textarea"/>
          </div>
        </div>
        
        <div class="col">
          <div 
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}" 
            class="_dp-f _jtfct-ct _pdv-24px">
            <nuxt-link to="/booking/checkout" >
              <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover">ชำระเงิน</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
   
    
  </div>
</template>

<script>
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
export default{
  components: {
      datePicker
    },
  data: () =>  ({
      place: null,
      center: {lat:13.7563, lng:100.5018},
      markers: [{
        position: {lat: '', lng: ''}
      }],
      date: new Date(),
       options: {
          format: 'DD/MM/YYYY',
          useCurrent: false
       }
  }),
  methods: {
    setPlace (place) {
      this.place = place
      console.log(place)
      console.log('koalalalla')
       this.lat = this.place.geometry.location.lat()
         this.lng = this.place.geometry.location.lng()
         console.log(this.lat)
       if (this.place) {
         this.lat = this.place.geometry.location.lat()
         this.lng = this.place.geometry.location.lng()
        this.markers.push({
          position: {
            lat: this.lat,
            lng: this.lng,
          }
       
        })

        // this.center.lat = this.place.geometry.location.lat()
        // this.center.lng = this.place.geometry.location.lng()
        // this.dataPlace = this.place
        // this.place = null;
      }

    }
  }
}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

.map-height {
  height: 512px;
  @include breakpoint(mobile) {
    height: 300px;
  }
}

.map-width {
  width: 512px;
  @include breakpoint(mobile) {
    width: 90vw;
  }
}

._cl-darkred {
  color: $primary;
}

.tire-contain {
  height: calc(100vh / 2.5);
}
.header-button-red {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
  &::before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 2px solid #bebebe;
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    line-height: 27px;
    background: white;
    color: #bebebe;
    text-align: center;
    font-weight: bold;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: #bebebe;
    top: 15px;
    left: -50%;
    z-index: -1;
  }
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li:first-child:before {
  border-color: $primary;
  background: $primary;
  color: white;
}

.progressbar li.active + li:after {
  background: $primary;
}
.progressbar li.active + li:before {
  border-color: $primary;
  background: $primary;
  color: white;
}
</style>
