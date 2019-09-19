<template>
  <Layout>
    <PageHeader title="Our Services" />
    <div class="container page-content">
      <Service id="threat-assesment">
        <template v-slot:image>
          <g-image src="~/assets/images/services/threat-assesment.png" />
        </template>
        <h2>Threat Assessment and Case Consultation</h2>
        <p>While our core service is psychological threat assessment, the consulting psychologists at CRA are also available to advise and assist the organization throughout the strategic decision-making process to help manage the issue to a safe conclusion.</p>
        <p>Our response is immediate. We initially assess the severity of the situation, and then recommend a comprehensive plan of action to defuse, stabilize, manage and ultimately resolve the situation as quickly and as safely as possible. Our consultants are skilled in a range of response strategies, including strategic crisis intervention when de-escalating and managing difficult or aggressive individuals.</p>
      </Service>

      <Service id="prevention">
        <template v-slot:image>
          <g-image src="~/assets/images/services/prevention.png" />
        </template>
        <h2>Prevention Program</h2>
        <p>Based on what we have learned through years of assessing and managing literally hundreds of these very difficult cases, CRA has developed a comprehensive Workplace Violence Prevention program that is currently being utilized by many companies, both large and small.</p>
        <p>Our program consists of 5 critical components, which are consistent with our experience and with the industry standard as generally recommended throughout the field, including The Workplace Violence Prevention and Intervention National Standard created by ASIS and SHRM (2011)*.</p>
        <g-link class="base-btn-blue" to="/our-services/prevention-program/">Learn More</g-link>
      </Service>

      <Service id="fitness">
        <template v-slot:image>
          <g-image src="~/assets/images/services/fitness.png" />
        </template>
        <h2>Fitness-For-Duty Evaluations</h2>
        <p>Psychological Fitness-For-Duty evaluations are often requested when an employee is exhibiting behaviors that suggest that he or she is no longer capable or “fit” to carry out the basic duties of his or her position, due to probable psychological or medical factors. This is a different service than threat assessment and involves an evaluation of an identified mental health issue by a qualified professional that considers the requirements of that specific position, along with the legal and ethical ramifications of such decisions. Several of our psychologists have extensive experience in providing these evaluations and are often available to travel and conduct this evaluation with relatively short notice.</p>
      </Service>

      <Service class="service-row-last" id="behavioral">
        <template v-slot:image>
          <g-image src="~/assets/images/services/behavioral.png" />
        </template>
        <h2>Behavioral Health Consultation</h2>
        <p>CRA is often called in to consult in cases that are sometimes due, or at least exacerbated by, the existence of a mental health problem that is not being adequately recognized or effectively managed (in part due to the complexity and relative inefficiency of today’s mental health delivery services). CRA can advise the company on those kind of issues before they reach a level of extreme risk, addressing a range of issues such as medical referrals, coordination with EAP and treatment providers, disability determinations, return to work issues, and risks associated with self-harm and suicide.</p>
      </Service>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Service from "~/components/Service.vue";

export default {
  components: {
    PageHeader,
    Service
  }
};
</script>
