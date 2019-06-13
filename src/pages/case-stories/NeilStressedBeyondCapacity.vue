<template>
  <Layout>
    <StorySingle>
      <g-image class="hero-img" src="~/assets/images/stories/neil-hero.jpg"/>
      <div class="copy-content">
        <h2>Neil: Stressed Beyond Capacity</h2>
        <p>Neil had been a good and steady employee for over 25 years with his company, serving longer than any other existing employee. His loyalty and dedication to the organization was unquestioned, and in fact, he always went beyond what would be anyone’s expectations. Neil is an extremely reserved and sensitive man, and the first word often used to describe him was simply: “odd”. He is meticulously neat and orderly, and spends his time at home alone with no friends, as far as anyone knows. He had lived with his mother and relied on her for most support needs until her recent death; since then, it has been assumed that he is adapting adequately. He has no other family or support system, besides a sister who reportedly lives on the other side of the country.</p>
        <p>Neil has always referred to his company as “my second family”, and it is clear since his mother’s death, that it may now indeed serve as his only family. Neil often wears shirts with the company’s logo prominently displayed, even when not at work. His only known activity or hobby is collecting company memorabilia, and is always interested when the company is giving away products that feature the company’s name or logo.</p>
        <p>Neil has always been a nice man, but he also had a tendency to become very upset when routines were changed or when he felt disorganized for some reason. This rarely caused a problem because his job was quite routine and stress-free, partially because his managers have always protected Neil to some extent and kept him from situations that could overwhelm him.</p>
        <p>The big background news event is that Neil’s employer is completing a merger with another company, and employees have been informed about an impending announcement about job eliminations; tension has been quite high. A couple of events had recently occurred involving Neil that in hindsight, became potentially significant. The first event occurred when a valve connected to a particular boiler mysteriously malfunctioned which could have led to fatal consequences. Neil was instrumental in noticing the problem before it could cause damage, and as such, was congratulated on noticing this and on alerting his manager.</p>
        <p>A couple of days later in the employee locker room, a couple of employees were discussing the changes in the company and the probable upcoming layoffs, when Neil, who had been sitting quietly at his locker, took a very large wrench and threw it at a wall, narrowly missing one of the other employees, and then fled the room. It went unreported.</p>
        <p>These two events were not uncovered until an HR Manager began asking questions about Neil. The reason that she began inquiring about Neil was that she had received a list of those who would be terminated the following week. When she came to Neil’s name, she suddenly got a very sick feeling in her stomach, for reasons that were not completely clear to her.</p>
        <p>Dr. McElroy discusses how this issue was ultimately managed.</p>
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
