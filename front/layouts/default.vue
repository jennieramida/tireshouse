<template>
  <div>
    <Header/>
    <main class="min-height-100vh _dp-f _ovf-hd">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  import sHeader from '~/components/layout/StaffHeader'
  import sFooter from '~/components/layout/StaffFooter'
  export default {
    components: {
      Header,
      Footer,
      sHeader,
      sFooter
    }
  }
</script>