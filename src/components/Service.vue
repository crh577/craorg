<template>
  <div class="row service-row">
    <div class="col-md-5 image-content">
      <slot name="image"/>
    </div>

    <div class="col-md-7 copy-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    image: String
  }
};
</script>

<style lang="scss" scoped>
.service-row {
  border-bottom: 1px solid $dusty-gray;
  margin-bottom: 7rem;

  .image-content {
    padding-right: 4rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .copy-content {
    padding-bottom: 3rem;
    margin: 0;

    h2 {
      font-weight: 900;
    }
  }
}

.service-row-last {
  border-bottom: 0;
}
</style>