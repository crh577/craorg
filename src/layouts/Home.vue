<template>
  <div class="layout">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
.gloabl-nav ::v-deep {
  margin-top: 2.5rem;
  margin-bottom: 0;
}

.header-logo ::v-deep {
  width: 45.8rem;
  height: 13.7rem;
  margin: 0 auto;
  display: block;
}

.navbar ::v-deep {
  margin: 2rem 0;
  justify-content: center;
  float: none;
}
</style>
