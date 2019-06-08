<template>
  <Layout>
    <StorySingle>
      <g-image class="hero-img" src="~/assets/images/stories/maria-hero.jpg"/>
      <div class="copy-content">
        <h2>Maria: A Victim of Domestic Violence</h2>
        <p>Maria was an administrative assistant who had worked for a large Fortune 500 company for 8 years. She had always worked quietly and mostly had kept to herself. Maria always received exceptional performance appraisals, but her manager had started to notice a decline in her performance over the prior 6 months, although he had been reluctant to document this in his recent performance appraisal. Maria was suddenly uncharacteristically forgetting routine assignments and had been tardy on a few occasions. Further, she seemed “out of it” at times, and “in a daze.” In addition, she sometimes appeared to be disheveled, as if she had dressed quickly, and was generally less careful about her overall appearance.</p>
        <p>When asked, two of Maria’s co-workers had acknowledged “hearing rumors” that Maria had a domineering husband. One morning, an HR manager, who was from another department, happened to be passing by Maria’s cubicle, and overheard Maria crying while talking on the phone. When her manager went to investigate, he noticed what appeared to be bruising around Maria’s neck, just underneath the collar of her blouse. Maria denied any problems.</p>
        <p>Dr. Gup discusses how this issue was ultimately managed.</p>
      </div>
    </StorySingle>
  </Layout>
</template>

<script>
import StorySingle from "~/components/StorySingle.vue";

export default {
  components: {
    StorySingle
  },
  metaInfo: {
    title: "Maria: a Victim of Domestic Violence"
  }
};
</script>

<style lang="scss">
.hero-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}

.copy-content {
  margin: 7rem 0;
}
</style>
