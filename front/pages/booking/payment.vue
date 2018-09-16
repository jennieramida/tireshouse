<template>
  <div class="container Prompt _pdbt-48px">
    <div class="row _dp-f _jtfct-ct _mgv-32px">
      <div class="col-12 col-md-8">
        <ul class="progressbar _fs-7 _fs-6-md ">
          <li class="active">เลือกไซส์ยาง</li>
          <li class="active">เลือกยางรถยนต์</li>
          <li class="active">สถานที่และเวลา</li>

          <li>ชำระเงิน</li>
        </ul>
      </div>
    </div>
    <div class="row _pdt-24px">
      <div class="col-12 _tal-ct _pdbt-48px">
        <div
          v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
          class="_fs-3  _fw-500 _cl-darkred">
          ดำเนินการชำระเงิน
        </div>
      </div>
    </div>

    <div class="row">


      <div class="col-12 col-md-6 _pdbt-48px _pdbt-0px-md _pdr-32px">
        <div class="row">
          <div class="col-md-6 col-7 _fs-4 _cl-black _pdbt-24px">สถานที่และวันเวลา</div>
          <div class="col-md-6 col-5 _fs-5 _pdt-4px _pdt-0px-md _cl-black _tal-r _pdbt-24px"><nuxt-link
            to="/booking/place">
            แก้ไข
          </nuxt-link></div>
        </div>
        <div class="_mgv-32px _h-128px _bgcl-accent">
          MAP
        </div>
        <div class="row">
          <div class="_pdt-12px _fs-5 col-md-3 col-4">
            <fa-icon
              :icon="['fal','map-marker-alt']"
              class="_cl-darkred _mgr-8px _fw-600"/>สถานที่</div>
          <div class="col-md-9 col-8 _pdt-12px _lh-150pct">{{address.detail}}</div>
          <div class="_pdt-12px _fs-5 col-md-3 col-4">
            <fa-icon
              :icon="['fal','calendar']"
              class="_cl-darkred _mgr-8px _fw-600"/>วัน</div>
          <div class="col-md-9 col-8 _pdt-12px _lh-150pct">{{address.date}}</div>
          <div class="_pdt-12px _fs-5 col-md-3 col-4">
            <fa-icon
              :icon="['fal','clock']"
              class="_cl-darkred _mgr-8px _fw-600"/>เวลา</div>
          <div class="col-md-9 col-8 _pdt-12px _lh-150pct">{{address.time}}</div>

        </div>
        <div class="_fs-4 _cl-black _pdv-48px">รายการสั่งซื้อ</div>
        <chosen-product/>
      </div>

      <div class="col-12 col-md-6 _pdbt-48px _pdbt-0px-md _pdl-32px">
        <div class=" _fs-4 _cl-black _pdbt-24px">ช่องทางการชำระเงิน</div>
        <form class="_fs-5 _mgl-16px">
          <div class="bio-radio bio-accordion _pdv-8px">
            <input
              id="ar1"
              type="radio"
              name="ar"
              class="_dp-n">
            <label for="ar1">ชำระผ่านบัตรเดบิต/เครดิต</label>
            <div class="bio-accordion-content _fs-6">
              <div class="_pdt-24px _pdbt-12px">ชื่อ-นามสกุลผู้ถือบัตร</div>
              <div class="bio-input">
                <input
                  type="text"
                  placeholder="โปรดกรอกชื่อและนามสกุลผู้ถือบัตร">
              </div>

              <div class="_pdt-24px _pdbt-12px">หมายเลขบัตร 16 หลัก</div>
              <div class="bio-input">
                <input
                  type="text"
                  placeholder="โปรดกรอกหมายเลขบัตร 16 หลัก">
              </div>


              <div class="_pdt-24px _pdbt-12px">CVV/CVC</div>
              <div class="bio-input">
                <input
                  type="password"
                  placeholder="โปรดกรอกรหัสหลังบัตร">

                <div class="_pdt-24px _pdbt-12px">วันหมดอายุ</div>
                <div class="bio-input _pdbt-48px">
                  <input
                    type="text"
                    placeholder="MM/YY">
                </div>


              </div>
            </div>
          </div>

          <div class="bio-radio bio-accordion _pdv-8px">
            <input
              id="ar2"
              type="radio"
              name="ar"
              class="_dp-n">
            <label for="ar2">ชำระผ่านการโอนเงิน</label>
            <div class="bio-accordion-content">
              <div>
                After completing the transfer of your payment, please confirm payment in My Order page and attached the transfer details or the bank slip. We will hold your order(s) for 3 days. If no payment is being made, order(s) will be automatically cancelled.

                กรุณาแจ้งยืนยันการโอนเงินผ่านทางหน้า My Orders โดยแนบสลิปหลักฐานการโอนเงินเพื่อยืนยันการสั่งซื้อ เราจะเริ่มดำเนินการส่งสินค้าเมื่อได้รับการโอนเงินเรียบร้อยแล้ว โดยสินค้าที่ไม่ได้รับการชำระเงินภายใน 3 วันหลังจากการสั่งซื้อ ระบบจะทำการยกเลิกโดยอัตโนมัติ

                ชื่อบัญชี และธนาคารที่รองรับการชำระเงิน
                Preemitia Co., Ltd.
              </div>
            </div>
          </div>

          <div class="bio-radio bio-accordion _pdv-8px">
            <input
              id="ar3"
              type="radio"
              name="ar"
              class="_dp-n">
            <label for="ar3">ผ่อนชำระ</label>
            <div class="bio-accordion-content">
              <div>Item A</div>
              <div>Item B</div>
              <div>Item C</div>
            </div>
          </div>

        </form>
        <div class="col-12">
          <div
            v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
            class="_dp-f _jtfct-ct _pdv-24px _pdt-48px _pdt-24px-md">
            <button class="bio-button header-button-red _mgv-24px-md _mgbt-0px _cl-darkred _bdrd-4px u-rise-5-hover" v-on:click="createOrder">ชำระเงิน</button>
            </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import ChosenProduct from '~/components/ChosenProduct'
export default {
  components: {ChosenProduct},
  data: () => ({
    product: [],
    address:null,
    order:null,
    token:null
  }),created(){
    this.address = JSON.parse(sessionStorage.getItem('queryPlace'))
    this.order = JSON.parse(sessionStorage.getItem('buy '))
    this.token = JSON.parse(sessionStorage.getItem('LoginDetail'))
    this.product.push( {
      suppliers: require('~/assets/images/suppliers/michelin.jpg'),
      tires: require('~/assets/images/tire.jpg'),
      heading: '195/65R15 PRIMACY 3 ST',
      info:'ยางสำหรับรถเก๋งที่นุ่มเงียบผสานเทคโนโลยีสูตรเนื้อยางที่มีความยืดหยุ่นสูงช่วยลดแรงสั่นสะเทือนและดูดซับแรงกระแทกจากพื้นถนน อายุการใช้งานที่ยาวนานขึ้น',
      size:'195/65R15',
      width: '195.00',
      height: '126.75',
      diameter: '15',
      all:  '634.50',
      price: '2,990.00',
    })
  },
  methods:{
    createOrder:  function() {
       this.$store.dispatch('CREATEORDER',{ address:this.address,orderList:this.order,userOrder:this.token}).then( (response)=> {
        this.$router.push('/booking/complete')
      })

    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

input,
select,
textarea {
  font-family: 'Prompt';
}
._cl-darkred {
  color: $primary;
}

a {
  color: $primary;
  text-decoration: underline;
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
.bio-radio > label:before {
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  left: 0px;
  border: 2px solid rgba(57, 59, 70, 0.9);
  border-color: $primary;
  border-radius: 50%;
  background-color: #fff;
}

.bio-radio > label:after {
  content: none;
  height: 12px;
  width: 12px;
  top: 5px;
  left: 5px;
  background-color: $primary;
  border-color: $primary;
  border-radius: 50%;
}
</style>
