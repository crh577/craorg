<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Patrick Threatening Behavior"
  }
};
</script>

<style lang="scss">
.hero-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}

.copy-content {
  margin: 7rem 0;
}
</style>
