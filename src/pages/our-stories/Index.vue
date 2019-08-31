<template>
  <Layout>
    <PageHeader title="Our Stories" />
    <div class="bg-contain">
      <div class="container">
        <div class="row">
          <div class="intro-content">
            <p>Our services are requested for a very wide variety of issues (at a frequency of close to 300 cases a year), such that it is virtually impossible to provide a brief illustration of our work. Each day, and each case, is unique. On this page, we will be briefly summarizing recent casework, as examples of the range and nature of our work. (Names and identifying data have been changed to protect the identify of the subject individual and the organization.)</p>
          </div>
        </div>
      </div>
      <div class="container stories">
        <div class="row">
          <Story>
            <g-link :to="'patrick-threatening-behavior-from-employee-under-stress'" append>
              <g-image src="~/assets/images/stories/patrick-story.png" />
            </g-link>
            <p>
              Patrick is a large, robust man in his 50's, often described as "bigger than life." An 18-year old employee, he has risen through the ranks to an important position, in that he has to make critical decisions related to safety compliance in a field where public and employee safty is paramount.
              <br />
              <br />
              <g-link
                :to="'patrick-threatening-behavior-from-employee-under-stress'"
                append
              >Read More</g-link>
            </p>
          </Story>
          <Story>
            <g-link :to="'maria-victim-domestic-violence'" append>
              <g-image src="~/assets/images/stories/maria-story.png" width="600" />
            </g-link>
            <p>
              Maria was an administrative assistant who had worked for a large Fortune 500 company for 8 years. She has always worked quietly and mostly had kept to herself. Maria always received exceptional performace appraisals, but her manager had started to notice a decline in her performace over the prior 6 months...
              <br />
              <br />
              <g-link :to="'maria-victim-domestic-violence'" append>Read More</g-link>
            </p>
          </Story>
          <Story>
            <g-link :to="'neil-stressed-beyond-capacity'" append>
              <g-image src="~/assets/images/stories/neil-story.png" />
            </g-link>

            <p>
              Neil had been a good and steady employee for over 25 years with his company, serving longer than any other existing employee. His loyalty and dedtication to the organization was unquestioned, and in fact, he always went beyond what would be anyone's expectations. Neil is an extremely reserved and sensitive man, and the first word...
              <br />
              <br />
              <g-link :to="'neil-stressed-beyond-capacity'" append>Read More</g-link>
            </p>
          </Story>
        </div>
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
.bg-contain {
  background: $concrete;
}

.intro-content {
  text-align: center;
  font-size: 2.4rem;
  padding: 2rem 0;
  font-weight: bold;
}

.stories {
  padding-bottom: 10rem;

  img {
    width: 100% !important;
  }
}
</style>