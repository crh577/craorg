<template>
  <div class="col-md-6">
    <div class="story">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Story"
};
</script>

<style lang="scss" scoped>
.story {
  border: 1px solid $shiraz;
  box-sizing: border-box;
  padding: 2rem 3rem;
  margin-bottom: 3rem;
  border-radius: $border-radius;

  img {
    width: 100%;
  }

  p {
    font-size: 1.8rem;
  }
}
</style>