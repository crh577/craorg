<template>
  <Layout>
    <PageHeader title="About Us" />
    <Page>
      <p class="intro">
        <b>Founded in 1997 by Dr. Marc McElhaney, Critical Response Associates (CRA) is a national team of psychologists and behavioral specialists who specialize in the general areas of threat assessment, crisis management and violence prevention.</b>
      </p>
      <p>Our primary goal is to help organizations quickly and safely resolve and/or manage the events and conflicts that are disruptive, costly or potentially dangerous – which may include any critical situation that represents a risk to the organization requiring experienced third-party intervention.</p>
      <p>
        CRA goes beyond just providing generic psychological risk evaluations. Our associates have a long history of active involvement in the strategic decision-making process that helps to not just assess a case, but to find ways to safely manage and resolve it, in seamless integration with your leadership team. CRA has a
        <b>100% success rate</b> in helping keep companies safe and secure by protecting employees from the impact of crisis and expensive litigation.
      </p>
      <p>
        In recent years, CRA has expanded its services to include a comprehensive
        <g-link to="/our-services/prevention-program/">Workplace Violence Prevention Program</g-link>&nbsp;with related
        <g-link to="/training-materials/">videos</g-link>&nbsp;and training materials, developed based on what we have learned through our experiences in literally thousands of these cases.
      </p>
      <p>Since our founding, we have provided consultation and training to over 300 organizations (including many Fortune 100 companies) across a variety of diverse industries and environments, managing an average of 250-300 high-risk cases annually.</p>
      <p>
        Our goal is to manage every situation to its safest conclusion with minimal costs to the client, with an emphasis on long-term solutions. We like to say that
        <b>when we walk away from a situation, then everyone can walk away feeling safe</b>.
      </p>
    </Page>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Page from "~/components/Page.vue";

export default {
  components: {
    PageHeader,
    Page
  },
  metaInfo: {
    title: "About us"
  }
};
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 0;
  font-size: 2.4rem;
}
</style>