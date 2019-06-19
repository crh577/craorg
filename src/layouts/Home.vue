<template>
  <div class="home">
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
  },
  metaInfo() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://craorg.com${this._routerRoot._route.path}/`
        }
      ]
    };
  }
};
</script>
