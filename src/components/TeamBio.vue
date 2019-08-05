<template>
  <div class="col-xl-6 team-bio">
    <div class="bio-image">
      <img :src="image" />
    </div>
    <div class="bio-copy">
      <h2>{{ name }}</h2>
      <p class="title">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamBio",
  props: {
    image: String,
    name: String,
    title: String,
    bio: String
  }
};
</script>

<style lang="scss" scoped>
.team-bio {
  display: flex;
  margin-bottom: 5rem;

  .bio-image {
    padding-right: 3rem;

    img {
      max-width: 15rem;
    }
  }

  .bio-copy {
    h2 {
      font-weight: 600;
      margin-bottom: 0;
    }

    .title {
      font-size: 1.4rem;
      padding: 0;
    }

    p {
      font-size: 1.8rem;
    }
  }
}
</style>