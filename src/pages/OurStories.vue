<template>
  <Layout>
    <PageHeader title="Our Stories"/>
    <div class="container page-content">
      <div class="row">
        <div class="copy-content">
          <p>Our services are requested for a very wide variety of issues (at a frequency of close to 300 cases a year), such that it is virtually impossible to provide a brief illustration of our work. Each day, and each case, is unique. On this page, we will be briefly summarizing recent casework, as examples of the range and nature of our work. (Names and identifying data have been changed to protect the identify of the subject individual and the organization.)</p>
        </div>
      </div>
    </div>

    <div class="container stories">
      <div class="row">
        <Story>
          <g-image src="~/assets/images/stories/placeholder.png"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, minima libero nulla non accusamus fugit hic, neque rem nostrum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus fuga sapiente, saepe necessitatibus suscipit! Itaque voluptas at, iusto ex corrupti ducimus deserunt architecto quia incidunt. Iure, iste eos fuga!</p>
          <a href="#">Read More</a>
        </Story>
        <Story>
          <g-image src="~/assets/images/stories/placeholder.png"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, minima libero nulla non accusamus fugit hic, neque rem nostrum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus fuga sapiente, saepe necessitatibus suscipit! Itaque voluptas at, iusto ex corrupti ducimus deserunt architecto quia incidunt. Iure, iste eos fuga!</p>
          <a href="#">Read More</a>
        </Story>
        <Story>
          <g-image src="~/assets/images/stories/placeholder.png"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, minima libero nulla non accusamus fugit hic, neque rem nostrum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus fuga sapiente, saepe necessitatibus suscipit! Itaque voluptas at, iusto ex corrupti ducimus deserunt architecto quia incidunt. Iure, iste eos fuga!</p>
          <a href="#">Read More</a>
        </Story>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Story from "~/components/Story.vue";

export default {
  components: {
    PageHeader,
    Story
  }
};
</script>

<style lang="scss" scoped>
.stories {
  margin-bottom: 10rem;
}
</style>