<template>
  <Layout>
    <PageHeader title="Prevention Program" />
    <div class="container page-content">
      <p class="intro">
        <b>The implementation of a single prevention-based employee training program will be much less costly than what the company will spend on a single incident.</b>
      </p>
      <p>
        <b>As an organization, you must determine:</b>
      </p>
      <ul>
        <li>
          <span>Will our employees or members be able to identify high-risk behaviors early enough and then report them appropriately?</span>
        </li>
        <li>
          <span>If an employee does report these, will our managers, HR professionals, etc. have the capability of recognizing potentially dangerous situations? Will they know what to do with this information?</span>
        </li>
        <li>
          <span>Do we have a policy that effectively demonstrates our commitment and establishes our respective responsibilities regarding this issue?</span>
        </li>
        <li>
          <span>Are we capable of responding effectively and safely to these situations, even if we do receive one of these reports in a timely manner?</span>
        </li>
        <li>
          <span>Do we have that capability internally? Are we aware of our resources available to help us when needed?</span>
        </li>
      </ul>
      <p>
        <b>CRA offers prevention-based employee training programs that can reduce the risks to the organization, its employees and clientele, reduce the company's legal exposure, and reduce the costs of disruptive events.</b>
      </p>

      <div class="gray-section">
        <p>Four levels of training are available through in-person sessions or video-based, and can be combined, modified and adapted as needed:</p>
      </div>

      <div class="programs">
        <div class="program">
          <h2>Threat Response Team Training</h2>
          <p>This is an extensive and comprehensive workshop that will educate the designated internal response team leaders as to the basic principles of threat assessment and to lay the foundation for subsequent formation of the company’s threat assessment and response program.</p>
        </div>
        <div class="program">
          <h2>Employee Awareness Training</h2>
          <p>
            For employees at all levels. Highlights the company’s policy and expectations of their employees, the designated reporting process and the basic warning signs of potentially high-risk individuals. CRA has produced an employee
            <g-link to="/training-materials/">video training program</g-link>&nbsp;that is widely used among our clients.
          </p>
        </div>
        <div class="program">
          <h2>Critical Personnel Training</h2>
          <p>For human resource, security, legal and other managers who have primary responsibility for preventing and managing high-risk incidents.</p>
        </div>
        <div class="program">
          <h2>Management Training</h2>
          <p>Includes Employee Awareness Training while also addresses the specific responsibilities expected of those who supervise and manage others within the organization.</p>
        </div>
      </div>

      <div class="other-programs">
        <h2>Other Workplace Violence Prevention Workshops & Training Programs</h2>
        <ul>
          <li>
            <span>Dealing With Difficult People: De-escalation Techniques</span>
          </li>
          <li>
            <span>Resolving Conflicts in Difficult Situations</span>
          </li>
          <li>
            <span>Stress Management</span>
          </li>
          <li>
            <span>Adapting to Organizational Change</span>
          </li>
          <li>
            <span>Post-Trauma Response Training</span>
          </li>
        </ul>
      </div>
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

<style lang="scss" scoped>
.page-content {
  font-size: $base-font-size;

  .intro {
    font-size: 2.4rem;
  }
}

ul {
  color: $shiraz;
}

ul li {
  margin-bottom: 1rem;
}

ul li span {
  color: $mine-shaft;
}

.gray-section {
  background: $concrete;
  padding: 2rem 0;
  margin: 2rem 0;

  p {
    text-align: center;
    max-width: 80rem;
    margin: 0 auto;
  }
}

.programs {
  display: flex;
  flex-wrap: wrap;

  .program {
    width: 50%;
    padding: 2rem;

    h2 {
      color: $shiraz;
      font-size: 2.6rem;
    }

    p {
      font-size: $base-font-size;
    }
  }
}

.other-programs {
  font-size: $base-font-size;
  margin: 2rem 0;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ul {
    padding-left: 4rem;
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

