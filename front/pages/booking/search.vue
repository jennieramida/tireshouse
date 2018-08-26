<template>
  <div class="container Prompt _mgbt-48px">
	<div class="row _dp-f _jtfct-ct _mgv-32px">
	  <div class="col-12 col-md-8">
		<ul class="progressbar _fs-7 _fs-6-md ">
		  <li class="active">เลือกไซส์ยาง</li>
		  <li>เลือกยางรถยนต์</li>
		  <li>สถานที่และเวลา</li>

		  <li>ชำระเงิน</li>
		</ul>
	  </div>
	</div>
	<div v-if="$store.state.TIRESELECTED.length > 0">
	<div class="row _pdt-24px">
	  <div class="col-12 _tal-ct _pdbt-48px">
		<div
		  v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
		  class="_fs-3  _fw-500 _cl-darkred">
		  เลือกยางที่ต้องการเปลี่ยน
		</div>
	  </div>
	</div>
	   <div	v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
		v-for="(item,i) in $store.state.TIRESELECTED"
		:key="i">

		<tires-card v-if="item.front != null && item.back == null"
        :idfront="item.front.id"
        :heading="item.front.name"
        :size="item.front.size"
        :width="item.front.width.toString()"
        :height="item.front.series"
        :diameter="item.front.size"
        :price="item.front.price"
        :clickToBuy="Buy"
		/>
		<tires-card v-if="item.front != null && item.back != null"
        :idfront="item.front.id"
        :heading="item.front.name"
        :size="item.front.size"
        :width="item.front.width.toString()"
        :height="item.front.series"
        :diameter="item.front.size"
        :price="item.front.price"

        :idback="item.back.id"
        :backheading="item.back.name"
        :backsize="item.back.size"
        :backwidth="item.back.width.toString()"
        :backheight="item.back.series"
        :backdiameter="item.back.size"
        :backprice="item.back.price"

        :clickToBuy="Buy"
		/>

	  </div>
	   <nuxt-link to="/booking">
	   <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover"  >ลองค้นหาอีกครั้ง</button>
	   </nuxt-link>
	</div>
	<div v-else>
	   <nuxt-link to="/booking">
	    <button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover"  >ลองค้นหาอีกครั้ง</button>
	   </nuxt-link>
  </div>
  </div>
</template>

<script>
import TiresCard from '~/components/TiresCard'

export default {
  async fetch({store}) {
    if (process.browser) {
      await store.dispatch('GETTIRESEARCH',JSON.parse(sessionStorage.getItem("querySearch")));
    }
  },methods:{
  	Buy: function(event) {
      var ele = event.target.elements
      var back = null
      if(ele.tireback){
        back = {"id":ele.tireback.value,"amount":ele.selectedback.value}
      }
      var front = null
      if(ele.tirefront){
        front = {"id":ele.tirefront.value,"amount":ele.selectedfront.value}
      }
      var data = {"fornt":front ,"back":back}
      sessionStorage.setItem('buy', JSON.stringify(data))
      this.$router.push('/booking/place')
    }
  },
  components: {TiresCard},
  data: () => {
    return {}
  },
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

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
