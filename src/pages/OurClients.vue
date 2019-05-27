<template>
  <Layout>
    <PageHeader title="Testimonials"/>
    <div class="container page-content">
      <div class="row">
        <div class="copy-content">
          <p>* Because of the nature of our work, and out of respect to the privacy of our clients, it is our policy not to reveal our clients by name. With their permission, we have included below what some of our clients have said about us, in their correspondence to us. Many of our clients have agreed to serve as references: their contact information are always available on request.</p>
        </div>
      </div>
    </div>

    <div class="testimonies">
      <div class="container">
        <div class="row">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.quote"
            :quote="testimonial.quote"
            :companyLogo="testimonial.companyLogo"
            :author="testimonial.author"
            :authorTitle="testimonial.authorTitle"
            :authorDivision="testimonial.authorDivision"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import TestimonialCard from "~/components/TestimonialCard.vue";

export default {
  components: {
    PageHeader,
    TestimonialCard
  },
  data() {
    return {
      testimonials: [
        {
          quote:
            "Thank you for the expert counsel and advice you have provided BP on numerous past workplace violence incidents. Assessing and predicting human behavior is an extemly difficult task and having your resources available to us gives us great comfort. On behalf of BP Corporation, I would also like to extend our thanks and appreciation for the recent training sessions you conducted at several of BP's U.S. and South African facilities.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "John Manelos",
          authorTitle: "VP, Corporate Security",
          authorDivision: "Gulf Coast Restoration"
        },
        {
          quote:
            "CRA has intervened in several very difficult situations with troubled employees and have assisted us in reaching a positive resolution in all cases. In addition they have provided valuable training in dealing with issues involving potential workplace violence to our Corporate and Field Human Resources personnel, and Dr. Carol Beavers has provided outstanding personal coaching to several key managers. The services provided to Caraustar by Critical Response Associates have been consistently of the highest professional caliber and I would, without reservation, recommend them as a resource for crisis and conflict management as well as managerial coaching to any organization with needs in these areas.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Barry A. Smedstad ",
          authorTitle: "Vice President",
          authorDivision: "Human Resources And Public Relations"
        },
        {
          quote:
            "Dr. McElhaney and Critical Response Associates have helped many of our client companies not only protect the safety of their employees during critical times but have very simply, saved them money, in terms of potential litigation costs and the numerous other indirect costs that occur when companies experience a traumatic event. Plus, utilizing their prevention program will protect the company from future incidents and charges of negligence – at a cost far less than what the company will have to incur to address even one threat-related incident.",
          companyLogo: require("~/assets/images/home/client-logo-3.png"),
          author: "Chad Shultz",
          authorTitle: "Attorney",
          authorDivision: ""
        },
        {
          quote:
            "From my vantage point of 38 years of experience in corporate security and human resources, I can recommend that some of the best training in the prevention and management of workplace violence is offered by Dr. Marc McElhaney and his team from Critical Response Associates. All companies quickly support safety training for their personnel, but many tend to overlook training on how to deal with intentional violence on the job caused by employees, which can be a fatal mistake when workplace violence erupts on a job site. Dr. McElhaney has specialized his entire career in the area of threat assessment and conflict resolution. His workshops are practical, fast paced, with real life examples and solutions that work and should be a ‘must attend’ course for any supervisor or manager.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "John Chamberlain",
          authorTitle: "Executive Director",
          authorDivision: "Energy Security Council"
        },
        {
          quote:
            "Dr. McElhaney and his associates’ ability to identify pivotal issues in dispute and thereafter participate in the development of a resolution strategy has yielded benefits for this company on numerous occasions. Their keen understanding of our employees and our unique business structure has assisted this company in reaching fair and equitable closure to many contentious situations. ",
          companyLogo: require("~/assets/images/home/client-logo-3.png"),
          author: "Bob Brand",
          authorTitle: "Vice President",
          authorDivision: "Corporate Security"
        },
        {
          quote:
            "We have found Dr. McElhaney and his associates’ counsel to be extremely useful in a number of very difficult situations, involving stalking, threatening employees and difficult terminations, both in the U.S. and in Canada. His approach is a good combination of the academic and the pragmatic. We wholeheartedly recommend him.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Michael Frankovic",
          authorTitle: "Director of Security",
          authorDivision: ""
        },
        {
          quote:
            "In all cases, CRA has consistently provided prudent advice and innovative ideas that contributed significantly to successful interventions and effective solutions that otherwise could have escalated and become much more serious problems. I sincerely appreciate your professionalism, resourcefulness and, most of all, your caring attitudes about people.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Rosalind Jackson",
          authorTitle: "Workplace Violence Prevention Programs",
          authorDivision: ""
        },
        {
          quote:
            "I want to express my thanks for the extremely helpful counsel you provided us in preparing for a delicate employee confrontation. Your guidance gave us a basis for a clear strategy for dealing with some highly disruptive behavior before it became a crisis. Without your help, I am sure that we would not have been as effective or decisive in resolving it.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Jack Keebler",
          authorTitle: "Human Resource Director",
          authorDivision: ""
        },
        {
          quote:
            "Your services in assisting the company in a very difficult employee termination have certainly helped all concerned move away from the conflict and avoid a potential threat of violent behavior. Thanks again for your help.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "William Foust",
          authorTitle: "VP",
          authorDivision: "Administration"
        },
        {
          quote:
            "It was a genuine pleasure to witness your swift and professional resolution of what could have been a potentially dangerous situation. There is no doubt that this conflict was resolved in a safe, timely and efficient manner. The fact that your intervention was also cost effective was an added bonus.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "David J. Niessen",
          authorTitle: "Regional Human Resources Manager",
          authorDivision: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.testimonies {
  background: $concrete;
  padding: 5.5rem 0;

  .testimonial-card {
    background: $white;
    padding: 2rem 3rem;

    p {
      font-style: italic;
      font-size: 2rem;
    }

    .testimony-author {
      display: flex;
      align-items: center;

      img {
        padding-right: 2rem;
      }

      .author {
        font-weight: 900;
        padding: 0;
        margin: 0;
      }

      .title {
        font-size: 1.4rem;
        color: $dusty-gray;
      }
    }
  }
}
</style>