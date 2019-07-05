<template>
  <div class="page-heading" style="background-image: url('/page-heading.png');">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.page-heading {
  padding: 7rem 0;

  h1 {
    color: $white;
    text-align: center;
    font-size: 6rem;
  }
}
</style>