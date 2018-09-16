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
  import Header from '~/components/layout/StaffHeader'
  import Footer from '~/components/layout/StaffFooter'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>