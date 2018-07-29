<template>
  <div class="container Prompt">
    <div class="row _mgt-64px-md _mgt-12px">
      
      <div class="col-md-4 col-12">
        <div class="_dp-f _jtfct-ct _pst-rlt">
          <img 
            src="~/assets/images/koala.jpg" 
            class="_h-128px _w-128px _bdrd-50pct _pst-asl _bdcl-white _bdw-4px shadow">
         
        </div>
        <div class="_mgt-64px _pdt-64px _bdtlrd-8px _pdbt-24px-md _pdbt-16px _bdtrrd-8px _cl-white bg-red _tal-ct">
          <div class="_fs-4-md _fs-5 _fw-400 _pdt-24px _pdbt-4px">รมิดา จึงไพศาล</div>
          <div class="_fs-5-md _fs-6 _fw-300">jennieramida@gmail.com</div>
        </div>
        <div class=" _bdbtlrd-8px _bdbtrrd-8px _pdv-32px-md _pdv-16px _cl-dark bg-white _tal-ct _fs-4 _fw-400">
          <div 
            class="_fs-5-md _fs-6  _dp-b _pdv-4px-md _pdv-1px _fw-300" 
            @click="isShowing = 'order'"> <p class="hover-underline-animation">ติดตามสถานะการเปลี่ยนยาง</p>
          </div>
          <div 
            class="_fs-5-md _fs-6  _dp-b _pdv-4px-md _pdv-1px _fw-300" 
            @click="isShowing = 'history'">  <p class="hover-underline-animation">ประวัติการทำรายการเปลี่ยนยาง</p>
          </div>
          <div 
            class="_fs-5-md _fs-6  _dp-b _pdv-4px-md _pdv-1px _fw-300"
            @click="isShowing = 'profile'"> <p class="hover-underline-animation">แก้ไขโปรไฟล์</p>
          </div>
          <div class="_fs-5-md _fs-6  _dp-b _pdv-4px-md _pdv-1px _fw-300">
            <nuxt-link to="/">
              <p class="hover-underline-animation _cl-dark">ออกจากระบบ</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div v-show="isShowing === 'order'">
          <div>
            <div class="_fs-3-md _tal-l-md _tal-ct _fs-4 _pdbt-24px _pdt-32px _pdt-0px-md">ติดตามสถานะการเปลี่ยนยาง</div>
            <!-- ถ้าไม่มีการทำรายการมาก่อน Show this one -->
            <!-- <div>
            <div class="_cl-darkred _tal-ct _pdt-128px _fs-4"> คุณยังไม่มีรายการเปลี่ยนยาง</div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/booking" >
                <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div> -->
            <div>
              <div class="row _mgv-32px">
                <div class="col-12 _dp-f _jtfct-ct">
                  <ul class="progressbar _w-100pct _fs-6-md ">
                    <!-- list will contain class="active" if active -->
                    <li>รอยืนยันช่าง</li>
                    <li>รายละเอียดช่าง</li>
                    <li>ให้คะแนน</li>
                  </ul>
                </div>
                <!-- Step1 -->
                <div class="col-12">
                  <div class="_fs-5 _tal-ct _pdt-64px _pdbt-24px _cl-darkred">รายละเอียดรายการเปลี่ยนยาง</div>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-4 col-3 _cl-darkred _pdl-0px _tal-r _lh-150pct">
                      <div>สถานที่</div>
                    </div>
                    <div class="col-md-6 col-8 _pdr-0px  _tal-l _lh-150pct">
                      <div>ไอดีโอ คิว พญาไท 138 ถนนพญาไท แขวงถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 col-3 _cl-darkred _pdl-0px _tal-r _lh-150pct">
                      <div>วัน</div>
                    </div>
                    <div class="col-md-6 col-8 _pdr-0px  _tal-l _lh-150pct">
                      <div>4 กรกฎาคม 2560</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 col-3 _cl-darkred _pdl-0px _tal-r _lh-150pct">
                      <div>เวลา</div>
                    </div>
                    <div class="col-md-6 col-8 _pdr-0px  _tal-l _lh-150pct">
                      <div>18:00 น.</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 _tal-ct _fw-300 _pdt-24px _fs-7">
                  หากต้องการเปลี่ยนแปลงรายละเอียด กรุณาติดต่อ<a 
                    href="tel:" 
                    class="_cl-darkred">            Tireshouse</a>
                </div>
                <!-- End Step 1 -->
                
                <!-- Step 2 -->
                <!-- <div class="col-12">
                  <div class="_fs-5 _tal-ct _pdt-64px _pdbt-24px _cl-darkred">รายละเอียดช่าง</div>
                </div>
                <div class="col-6 _cl-darkred _pdl-0px _tal-r _lh-150pct">
                  <div>ชื่อ-นามสกุล</div>
                  <div>เบอร์ติดต่อ</div>
                </div>
                <div class="col-6 _pdr-0px  _tal-l _lh-150pct">
                  <div>xxxxxxx</div>
                  <div>0938383838</div>
                </div>
                <div class="col-12 _tal-ct _fw-300 _pdt-24px _fs-7">
                  หากมีข้อสงสัย กรุณาติดต่อ<a 
                    href="tel:" 
                    class="_cl-darkred">            Tireshouse</a>
                </div> -->
                <!-- End Step 2 -->

                <!-- Step 3 -->
                <!-- <div class="col-12">
                  <div class="_fs-5 _tal-ct _pdt-64px _pdbt-24px _cl-darkred">กรุณาให้คะแนนการให้บริการ</div>
                  <div class="_dp-f _jtfct-ct">
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
                </div> -->
                <!-- End Step 3-->
              </div>
            </div>
          </div>
        </div>
        <div v-show="isShowing === 'history'">
          <div class="_fs-3-md _tal-l-md _tal-ct _fs-4 _pdbt-24px _pdt-32px _pdt-0px-md">ประวัติการทำรายการเปลี่ยนยาง</div>
          <!-- ถ้าไม่มีการทำรายการมาก่อน Show this one -->
          <!-- <div>
            <div class="_cl-darkred _tal-ct _pdt-128px _fs-4"> คุณยังไม่มีรายการเปลี่ยนยาง</div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/booking" >
                <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover">เปลี่ยนยางรถยนต์</button>
              </nuxt-link>
            </div>
          </div> -->
          <div 
            v-for="(item,i) in history"
            :key="i" 
            class="_pdv-24px">
            <history
              :date="item.date"
              :time="item.time"
              :item="item.item"
              :brand="item.brand"
              :insurance="item.insurance"
              :technician="item.technician"
            />
          </div>
        </div>
        <div v-show="isShowing === 'profile'">
          <div class="">
            <div class="_fs-3-md _tal-l-md _tal-ct _fs-4 _pdbt-24px _pdt-32px _pdt-0px-md">แก้ไขโปรไฟล์</div>
            <div>
              <div class="_pdbt-4px">ชื่อ-นามสกุล</div>
              <div class="bio-input">
                <input 
                  type="text" 
                  value="รมิดา จึงไพศาล">
              </div>

              <div class="_pdt-24px _pdbt-4px">เบอร์โทรศัพท์</div>
              <div class="bio-input">
                <input 
                  type="tel" 
                  value="0959969153">
              </div>

              <div class="_pdt-24px _pdbt-4px">อีเมล</div>
              <div class="bio-input">
                <input 
                  type="email" 
                  value="jennieramida@gmail.com">
              </div>

              <div class="_pdt-24px _pdbt-4px">รหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  value="hellojennie">
              </div>

              <div class="_pdt-24px _pdbt-4px">ยืนยันรหัสผ่าน</div>
              <div class="bio-input">
                <input 
                  type="password"
                  value="hellojennie">
              </div>
            </div>
            <div class="_dp-f _jtfct-ct">
              <nuxt-link to="/users" >
                <button class="bio-button header-button-red _mgv-24px-md _mgv-24px _cl-darkred _bdrd-4px u-rise-5-hover">บันทึกข้อมูล</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from '~/components/History.vue'
export default {
  components: {History},
  data: () => ({
    isShowing: 'order',
     history: [
       {
      date: '23 กรกฎาคม 2560',
      time: '18:30 น.',
      item: '195/65R15 PRIMACY 3 ST',
      brand:'Michelin',
      insurance:'234567890',
      technician: 'xxxxx',
    }, 
    {
      date: '12 มกราคม 2559',
      time: '12:00 น.',
      item: '195/65R15 PRIMACY 3 ST',
      brand:'Michelin',
      insurance:'4567890765',
      technician: 'xxxxx',
    }, 
    ]
  })
}
</script>


<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

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

.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0) translateY(4px);
    height: 1px;
    bottom: 6px;
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
.shadow {
  box-shadow: 0px 0px 4px rgba(105, 105, 105, 0.3);
}

.header-button-red {
  background-color: $primary;
  color: white;
  border-color: $primary;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
}

input,
select,
textarea {
  font-family: 'Prompt';
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  float: left;
  width: 33%;
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

