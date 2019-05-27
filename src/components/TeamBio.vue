<template>
  <div class="col-md-6 team-bio">
    <div class="bio-image">
      <img :src="image">
    </div>
    <div class="bio-copy">
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamBio",
  props: {
    image: String,
    name: String,
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
  }

  .bio-copy {
    h2 {
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
    }
  }
}
</style>