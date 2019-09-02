<template>
  <Layout>
    <PageHeader title="Identify! Respond! Prevent!" />
    <div class="sub-nav">
      <a href="#identify">Identify</a> |
      <a href="#respond">Respond</a> |
      <a href="#prevent">Prevent</a>
    </div>
    <div class="container page-content">
      <h2 id="identify">Identify!</h2>
      <p class="intro">
        <strong>The first, critical step in an effective Workplace Violence Prevention Program is identifying individuals who are at risk. The earlier that we can do that, the better. Tragic cases of workplace violence have occurred because decision-makers 1) were not made aware of high-risk indicators early enough, and/or 2) did not effectively respond.</strong>
      </p>
      <div class="two-col">
        <div class="col left">
          <h3>Is There a Profile of High-Risk Individuals?</h3>
          <p>Unfortunately, there is no one profile (or even several profiles) of those who are inclined to commit an act of violence. Even detailed lists of “Red Flag” warning signs often fail to be comprehensive enough to cover every individual who may represent a concern. There are simply too many reasons that people can resort to violence within various circumstances.</p>
        </div>
        <div class="col right">
          <h3>What Constitutes a “Threat of Violence”?</h3>
          <p>Like the stereotypical view of workplace violence, a “threat of violence” is also a misunderstood term. We are referring not to those who just make a threat, but to those who pose a threat – for whatever reason. Many, if not most, do not precede a violent act with a verbalized threat. We agree with the U.S. Department of Labor’s broad definition of threat as “any oral or written expression or gesture that could be interpreted by a reasonable person as conveying an intent to cause physical harm to persons or property.”</p>
        </div>
      </div>

      <div class="gray-section">
        <h3>The Real Issue: High-Risk Behaviors</h3>
        <p>
          Through our vast experience working within this field, the CRA team now has a much better understanding of the
          <b>
            <i>process</i>
          </b> by which these events can evolve to their tragic conclusions. There
          <b>
            <i>always</i>
          </b> exists a history of recognizable behaviors and events, which could have been effectively managed in a safer way and with less cost, if addressed early enough. We at CRA prefer not to focus on the end-result of workplace violence. We would rather focus on what we refer to as high-risk behaviors, which can be represented by a wide variety of behaviors of concern.
        </p>
        <p>
          In order to effectively and safely respond to these issues, there must be an educational and reporting process in place. This process is an essential component of a company’s
          <g-link to="/our-services/prevention-program/">Workplace Violence Prevention Program</g-link>, so that these behaviors are recognized and identified as early as possible.
        </p>
      </div>
      <h2 id="respond">Respond!</h2>
      <p class="intro">
        <strong>Once a potential risk has been identified, the organization should undergo a defined process to make sure that it is carefully assessed and managed, without defaulting to ill-considered responses that could actually escalate the danger.</strong>
      </p>
      <div class="three-col">
        <div class="col">
          <g-image src="~/assets/images/irp/assessment.jpg" alt />
          <h3>Establishing A Threat Assessment Process</h3>
          <p>Our motto is that “good management is dependent on good assessment.” Before reacting in a manner that may somehow “feel right”, a careful and considered assessment should occur. A recipe book of “default” responses that are applicable to all situations just does not exist. Each situation is different and is driven by its own set of critical factors that will have to be considered before it can be effectively managed.</p>
        </div>
        <div class="col">
          <g-image src="~/assets/images/irp/management.jpg" alt />
          <h3>Strategic Threat Management</h3>
          <p>It is always important to make certain that our response to any perceived threat is one that is well considered, addresses the specific dynamics of the threat, is proportional to the risk, considers the consequences, and, above all, does not escalate the risk. Having a trained internal Threat Management Team in consultation with a Threat Assessment Professional helps to ensure that the correct decisions are made that will ensure a safe conclusion. This training is part of the company’s overall WVPP.</p>
        </div>
        <div class="col">
          <g-image src="~/assets/images/irp/termination.jpg" alt />
          <h3>Termination Planning</h3>
          <p>The separation of an identified high-risk employee is a special category that requires careful assessment and management. Many termination-related incidents of workplace violence occur long after the day of separation. There is much that can be accomplished to assess and control those risks prior to the termination, but most of those options disappear after the separation. This is often not just a simple matter of calling security to walk someone out the door. Think long-term!</p>
        </div>
      </div>
      <h2 id="prevent">Prevent!</h2>
      <p class="intro">
        <strong>The ability to consistently and efficiently identify high-risk behaviors and situations early requires a comprehensive program be in place. This program must incorporate several key ingredients, especially the ability to respond in a considered and timely manner that ensures everyone’s safety. We do not advise that you make it up as you go.</strong>
      </p>
      <p>
        <strong>As an organization, you have to ask yourself:</strong>
      </p>
      <ul>
        <li>
          <span>Will our employees or members be able to identify these high-risk behaviors early enough- and then report them appropriately?</span>
        </li>
        <li>
          <span>If an employee does report this, will our managers, HR professionals, etc. have the capability of recognizing potentially dangerous situations, and will they know what to do with this information?</span>
        </li>
        <li>
          <span>Do we have a policy that effectively demonstrates our commitment and establishes our respective responsibilities regarding this issue?</span>
        </li>
        <li>
          <span>Are we capable of responding effectively and safely to this even if we do receive one of these reports in a timely manner?</span>
        </li>
        <li>
          <span>Do we have that capability internally, and are we aware of our resources that can help us when needed?</span>
        </li>
      </ul>
      <p>
        To address these critical questions, Critical Response Associates has developed a comprehensive Workplace Violence Prevention Program that can be easily and administered within any organization, at a fraction of the cost of a single incident. This program is outlined on our
        <g-link to="/our-services/prevention-program/">Prevention Program</g-link>&nbsp;page.
      </p>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";

export default {
  components: {
    PageHeader
  },
  metaInfo: {
    title: "Identify Respond Prevent"
  }
};
</script>

<style lang="scss" scoped>
.sub-nav {
  text-align: center;
  background: $concrete;
  padding: 2rem;

  a {
    color: $mine-shaft;
    font-size: 2.2rem;
    font-weight: bold;
  }
}

.intro {
  font-size: 2.4rem;
}

.page-content {
  font-size: $base-font-size;

  h2 {
    font-size: 6rem;
    text-align: center;
    color: $shiraz;
  }

  h3 {
    color: $shiraz;
  }
}

ul {
  color: $shiraz;
  padding-left: 10rem;
}

ul li {
  margin-bottom: 1rem;
}

ul li span {
  color: $mine-shaft;
}

.two-col {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0;

  .col {
    width: 50%;

    &.left {
      padding-right: 5rem;
      border-right: 1px solid $heavy-metal;
    }

    &.right {
      padding-left: 5rem;
    }
  }
}

.gray-section {
  background: $concrete;
  padding: 4rem 6rem;
  margin: 2rem 0 4rem;

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }
}

.three-col {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0;

  .col {
    width: 33%;
    padding: 2rem;

    img {
      display: block;
      text-align: center;
      width: 80%;
      height: auto;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: $base-font-size;
      font-weight: 900;
    }
  }
}

@media (max-width: em(900px)) {
  .programs {
    .program {
      width: 100%;
    }
  }
}
</style>
