<template>
  <div class="col-md-6">
    <div class="story">
      <slot />
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
  box-sizing: border-box;
  margin-bottom: 3rem;
  border-radius: $border-radius;
  background: $white;

  p {
    font-size: 1.8rem;
    padding: 2rem 3rem;
  }
}
</style>