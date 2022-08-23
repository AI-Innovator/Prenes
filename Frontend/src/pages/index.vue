<template>
  <div>
    <Header/>
    <Slider/>
    <Product/>
    <Contact/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Product from '../components/Product.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Product,
    Header,
    Slider,
    Contact,
    Footer
  }
}
</script>