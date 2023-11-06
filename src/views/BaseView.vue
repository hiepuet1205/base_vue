<template>
  <div>
    <Header></Header>
    <main>
      <slot name="content"></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default({
  name: 'BaseView',
  components: {
    Header,
    Footer
  }
})
</script>