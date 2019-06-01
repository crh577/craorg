<template>
  <div class="row partner">
    <div class="col-lg-4">
      <img :src="image">
    </div>
    <div class="col-lg-8">
      <h3>{{ name }}</h3>
      <p>{{ details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
  props: {
    image: String,
    name: String,
    details: String
  }
};
</script>

<style lang="scss" scoped>
.partner {
  padding-top: 2rem;
  padding-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
  }

  p {
    font-size: 1.8rem;
  }
}
</style>