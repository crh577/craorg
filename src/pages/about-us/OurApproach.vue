<template>
  <Layout>
    <PageHeader title="Our Approach"/>
    <Page>
      <p class="intro">
        <b>After more than 25 years of helping organizations identify, assess and manage high-risk situations, we have learned much about the phenomenon of workplace violence – and how these situations have historically led to sometimes tragic consequences.</b>
      </p>
      <p>
        Violence is not an isolated act that occurs out of nowhere. It is a result of a process – a process that is propelled (or arrested) by a variety of factors that are recognizable, identifiable, manageable and/or preventable.</span>
      </p>
      <p>
        Generally, an event involving an act of violence is due to 1) a failure to recognize the developing risk early enough, 2) a failure to manage it effectively once it is recognized, and/or 3) the lack of preparedness, in terms of the organization’s readiness when these issues arise (as they inevitably will). We have grouped these under 3 categories of capability: <g-link to="/about-us/identify-respond-prevent/"><b>Identify!, Respond!, &amp; Prevent!</b></g-link>.</span>
      </p>
      <p>
        CRA provides services in each of these areas. Our core service (<a href="/our-services#threat-assesment">High-Risk Case Management</a>) consists of helping organizations to accurately identify and effectively respond to these high-risk situations as they occur. Over the years, we have learned a great deal, about how these situations evolve (and therefore, how to prevent them), such that we have developed a comprehensive <a href="/our-services#prevention">Workplace Violence Prevention Program</a>, which addresses all of the necessary components to ensure that an organization is prepared and capable of responding to these issues effectively and safely. In addition, our consultants are professional psychologists who are available to provide <a href="/our-services#fitness">Fitness-For-Duty</a> evaluations and advise on a range of <a href="/our-services#behavioral">Behavioral Health</a> issues when required.</span>
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
