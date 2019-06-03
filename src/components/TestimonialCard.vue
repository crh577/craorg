<template>
  <div class="masonry">
    <div class="testimonial-card">
      <p>"{{ quote }}"</p>
      <div class="testimony-author">
        <img :src="companyLogo">
        <div class="author-info">
          <p class="author">{{ author }}</p>
          <div class="title">
            {{ authorTitle }}
            <span v-if="authorDivision != ''">
              <br>
            </span>
            {{ authorDivision }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    quote: String,
    companyLogo: String,
    author: String,
    authorTitle: String,
    authorDivision: String
  }
};
</script>

<style lang="scss" scoped>
.masonry-tile {
  padding-bottom: 2rem;
}

.testimonies {
  background: $concrete;
  padding: 5.5rem 0;

  .testimonial-card {
    background: $white;
    padding: 2rem 3rem;

    p {
      font-style: italic;
      font-size: 2rem;
    }

    .testimony-author {
      display: flex;
      align-items: center;

      img {
        padding-right: 2rem;
      }

      .author {
        font-weight: 900;
        padding: 0;
        margin: 0;
      }

      .title {
        font-size: 1.4rem;
        color: $dusty-gray;
      }
    }
  }
}
</style>