<template>
  <div>
    <Header/>
    <!-- Content -->
    <main class="min-height-100vh _dp-f _ovf-hd">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>