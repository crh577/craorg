<template>
  <Layout>
    <PageHeader title="Warning Signs"/>
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
          <g-image src="~/assets/images/stories/patrick-story.png"/>
          <p>Patrick is a large, robust man in his 50's, often described as "bigger than life." An 18-year old employee, he has risen through the ranks to an important position, in that he has to make critical decisions related to safety compliance in a field where public and employee safty is paramount.</p>
          <a href="#">Read More</a>
        </Story>
        <Story>
          <g-image src="~/assets/images/stories/maria-story.png"/>
          <p>Maria was an administrative assistant who had worked for a large Fortune 500 company for 8 years. She has always worked quietly and mostly had kept to herself. Maria always received exceptional performace appraisals, but her manager had started to notice a decline in her performace over the prior 6 months...</p>
          <a href="#">Read More</a>
        </Story>
        <Story>
          <g-image src="~/assets/images/stories/neil-story.png"/>
          <p>Neil had been a good and steady employee for over 25 years with his company, serving longer than any other existing employee. His loyalty and dedtication to the organization was unquestioned, and in fact, he always went beyond what would be anyone's expectations. Neil is an extremely reserved and sensitive man, and the first word...</p>
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