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
      <div class="col-12 col-md-6 _pdbt-48px _pdbt-0px-md">
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
                <div class="bio-input">
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

      </div>
      
      <div class="col-12 col-md-6 _pdbt-48px _pdbt-0px-md">
        <div class=" _fs-4 _cl-black _pdbt-24px">รายการสั่งซื้อ</div>
      </div>
    </div>
   
    
  </div>
</template>

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
