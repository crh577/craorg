<template>
  <Layout>
    <StorySingle>
      <g-image class="hero-img" src="~/assets/images/stories/patrick-hero.jpg"/>
      <div class="copy-content">
        <h2>Patrick: Threatening Behavior From an Employee Under Stress</h2>
        <p>Patrick is a large, robust man in his 50’s, often described as “bigger than life.” An 18-year employee, he has risen through the ranks to an important position, in that he has to make critical decisions related to safety compliance in a field where public and employee safety is paramount. He has a history of being a “hard worker”, rather “intense”, and as someone who “does not cut anyone (including himself) any slack.”</p>
        <p>According to rumors, his wife of 32 years recently sought and obtained a divorce, which reportedly resulted in some kind of “unpleasantness” and disrupted his relationships with his adult sons, with whom he had been quite close.</p>
        <p>Over the past year, Patrick has experienced chronic back pain, and he is reportedly taking several medications for this pain, and also for depression related to his back pain. Over the past several months, his team members have noticed that Patrick has been forgetting to file reports, does not appear to be as attentive to detail, and seems to be less passionate about his work; he has lost his “intensity”. There have been at least two safety-related concerns that Patrick was responsible for, but he was not confronted about these, simply because no one wanted to deal with him.</p>
        <p>In addition, his relationships with his coworkers have deteriorated; while he has always been described as being a bit on the “prickly” side, Patrick has been much more prone to temper outbursts, such that most now prefer to avoid him.</p>
        <p>Co-workers have been concerned and when questioned, admitted to a “gut feeling” that Patrick “could become one of those guys that you read about in the paper – you know, go postal.” Patrick’s Director dismissed most of these issues as minor and the product of a temporary adjustment process related to his family problems. It was only during his recent annual review that his Director finally realized how serious this had become, and proceeded to give Patrick a rather harsh review – admitting later in retrospect that he was probably as much angry at himself for letting it go on this long, as he was at Patrick.</p>
        <p>When leaving this meeting with his Director, Patrick ran into a team member in the break room, and said, “That sonofabitch just reamed my ass. If I lose my job, I’m a dead man, and (nodding toward Tim’s office) just maybe, he’s going with me.” This co-worker initially withheld reporting this, because he feared retaliation by Patrick, rationalizing to himself that it was just Patrick “blowing off steam.”</p>
        <p>Dr. McElhaney discusses how this issue was ultimately managed.</p>
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
    title: "Patrick Threatening Behavior"
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
