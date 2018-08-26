<template>
	<div class="_w-100pct">
	<div class="container Prompt">
		<div class="row _dp-f _jtfct-ct _mgv-32px">
		<div class="col-12 col-md-8">
			<ul class="progressbar _fs-8 _fs-6-md ">
			<li>เลือกไซส์ยาง</li>
			<li>เลือกยางรถยนต์</li>
			<li>สถานที่และเวลา</li>
			<li>ชำระเงิน</li>
			</ul>
		</div>
		</div>
		<div class="row">
		<div class="col-12 _tal-ct _pdbt-48px">
			<div
			v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'30px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
			class="_fs-3 _dp-b _dp-n-md _fw-500 _cl-darkred">
			เลือกขนาดยางรถยนต์
			</div>
		</div>
		</div>
		<div class="row">
		<div
			v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'left', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
			class="col-12 col-md-4 tire-contain" >
			<div
			v-lazy:background="require(`~/assets/images/size.png`)"
			class="_h-100pct-md _h-256px _bgs-ct _bgrp-nrp _bgpst-bt"/>
			<div class="_pdv-12px _cl-darkred _tal-ct _fs-5">วิธีดูขนาดของยางรถยนต์</div>
		</div>
		<!-- Form -->
		<div
			v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'right', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
			class="col-12 col-md-8 _pdt-24px">
			<div class="_fs-3 _dp-n _dp-b-md _fw-500 _cl-darkred">
			เลือกขนาดยางรถยนต์
			</div>
			<!-- Options -->
			<div class="row _pdt-24px">
			<div class="col-12 col-md-6">
				<div class="_pdv-12px">Width</div>
				<div class="bio-select">
				<select v-model="selected.front.width">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="width in  $store.state.TIRESINFO[0]" :key="width.width">{{ width.width }}</option>
				</select>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="_pdv-12px">Series</div>
				<div class="bio-select">
				 <select v-model="selected.front.series">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="series in  $store.state.TIRESINFO[1]" :key="series.series">{{ series.series }}</option>
				</select>
				</div>
			</div>
			<div class="col-12 col-md-6 _pdt-12px">
				<div class="_pdv-12px">Diameter</div>
				<div class="bio-select">
				<select v-model="selected.front.size">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="size in  $store.state.TIRESINFO[2]" :key="size.size">{{ size.size }}</option>
				</select>
				</div>
			</div>
			<div
				class="col-12 col-md-6 _pdt-24px _pdt-64px-md  _tal-ct _tal-l-md _cs-pt _fw-500 _fs-5 _cl-darkred"
				@click="isActive = !isActive">
				+ เลือกขนาดยางล้อหลังที่ต่างกัน
			</div>
			</div>
		</div>
		</div>
		<div

		class="row ">
		<div class="col-md-4"  />
		<div
			:class="{ active: isActive }"
			class="col-md-8 col-12 back">
			<div
			v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'right', distance:'100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
			class="_pdt-24px">
			<div class="_fs-4 _dp-b-md _fw-500 _cl-darkred">
				เลือกขนาดยางล้อหลัง
			</div>
			<!-- Options -->
			<div class="row _pdt-24px">
				<div class="col-12 col-md-6">
				<div class="_pdv-12px">Width</div>
				<div class="bio-select">
					<select v-model="selected.back.width">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="width in  $store.state.TIRESINFO[0]" :key="width.width">{{ width.width }}</option>
				</select>
				</div>
				</div>
				<div class="col-12 col-md-6">
				<div class="_pdv-12px">Series</div>
				<div class="bio-select">
					<select v-model="selected.back.series">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="series in  $store.state.TIRESINFO[1]" :key="series.series">{{ series.series }}</option>
				</select>
				</div>
				</div>
				<div class="col-12 col-md-6 _pdt-12px">
				<div class="_pdv-12px">Diameter</div>
				<div class="bio-select">
					<select v-model="selected.back.size">
					<option value="" disabled>โปรดเลือกขนาดยางรถยนต์ </option>
					 <option v-for="size in  $store.state.TIRESINFO[2]" :key="size.size">{{ size.size }}</option>
				</select>
				</div>
				</div>
			</div>
			</div>
		</div>
		</div>
		<div class="row _pdt-0px _mgv-48px">
		<div class="col">
			<div
			v-scroll-reveal="{viewFactor:0.5, delay:100,scale: 1, origin:'top', distance:'20px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' , opacity: 0, duration: 1000}"
			class="_dp-f _jtfct-ct">
				<button class="bio-button header-button-red _mgv-24px-md _mgbt-64px _mgbt-0px-md _cl-darkred _bdrd-4px u-rise-5-hover"  v-on:click="search">ค้นหายางรถยนต์</button>
			</div>
		</div>
		</div>
	</div>
	</div>
</template>


<script>
import { axios } from '~/plugins/axios'
import { mapState, mapMutations } from 'vuex'

export default {
	async fetch({ store}) {
  	await store.dispatch('GETTIRESINFO');
	},
	data: () => ({
	isActive: false,
	res: '',
	selected: {
		front: {
		width: '',
		series: '',
		size: ''
		},
		back:{
		width: '',
		series: '',
		size: ''
		}
	},
	}),
	methods: {
		search : function(event) {
      if(this.selected.front.series != "" && this.selected.front.width != "" && this.selected.front.size != ""){
		if(this.selected.back.series != "" && this.selected.back.width != "" && this.selected.back.size != ""){
          sessionStorage.setItem('querySearch', JSON.stringify(this.selected))
          this.$router.push('/booking/search')
        }else if(this.selected.back.series == "" && this.selected.back.width == "" && this.selected.back.size == ""){
          sessionStorage.setItem('querySearch', JSON.stringify(this.selected))
          this.$router.push('/booking/search')
        }else{
					this.$store.commit('SETERROR',{
						"errorcode":"E010001",
						"errormsg":"Tire front is empty"
					});
				}
			}else{
				this.$store.commit('SETERROR',{
					"errorcode":"E010001",
					"errormsg":"Tire front is empty"
				});
			}
		}
	}
}
</script>

<style lang="scss" scoped>
$primary: #941e2e;
$secondary: #f8f8f9;
@import 'assets/styles/variables';

.back {
	display: none;
	transition: 2s;
	opacity: 0;
}
.back.active {
	display: block;
	transition: 2s;
	opacity: 1;
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
