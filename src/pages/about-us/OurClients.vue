<template>
  <Layout>
    <PageHeader title="Testimonials" />

    <div class="testimonies">
      <p class="intro-content">
        Many of our clients have agreed to serve as references; their contact
        information is always available on request. With their permission, we
        have included below what some of our clients have said about us.
      </p>
      <div class="container">
        <div class="masonry-with-columns">
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
            "Thank you for the expert counsel and advice you have provided BP on numerous past workplace violence incidents. Assessing and predicting human behavior is an extemly difficult task and having your resources available to us gives us great comfort. I would also like to extend our thanks and appreciation for the recent training sessions you conducted at several of BP's U.S. and South African facilities.",
          companyLogo: require("~/assets/images/testimonials/Bp.png"),
          author: "John Manelos (retired)",
          authorTitle: "VP, Corporate Security,",
          authorDivision: "Gulf Coast Restoration"
        },
        {
          quote:
            "CRA has intervened in several very difficult situations with troubled employees and have assisted us in reaching a positive resolution in all cases. In addition they have provided valuable training in dealing with issues involving potential workplace violence to our Corporate and Field Human Resources personnel. I would, without reservation, recommend them.",
          companyLogo: require("~/assets/images/testimonials/Caraustar.png"),
          author: "Barry A. Smedstad (retired)",
          authorTitle: "Vice President,",
          authorDivision: "Human Resources And Public Relations"
        },
        {
          quote:
            "Dr. McElhaney and his associates’ ability to identify pivotal issues in dispute and thereafter participate in the development of a resolution strategy has yielded benefits for this company on numerous occasions. Their keen understanding of our employees and our unique business structure has assisted this company in reaching fair and equitable closure to many contentious situations. ",
          companyLogo: require("~/assets/images/testimonials/CocaCola.png"),
          author: "William J. McGrath (retired)",
          authorTitle: "Vice President of Corporate Security",
          authorDivision: ""
        },
        {
          quote:
            "We have utilized the services of Dr. McElhaney and his associates at CRA on numerous occasions when faced with potential threats to our employees here at Cox Enterprises. We particularly have appreciated their ability to remotely analyze threatening communications and to help us strategize responses to some potentially very explosive situations. They have been a very valuable resource for our Threat Response Team.",
          companyLogo: require("~/assets/images/testimonials/Cox.png"),
          author: "Bob Brand (retired)",
          authorTitle: "Director of Safe Workplace Program,",
          authorDivision: "Corporate Security"
        },
        {
          quote:
            "Dr. McElhaney and his associates at CRA have been an integral part of our Workplace Violence Program for over 20 years.  They serve as an invaluable partner, bringing effective resolution strategies to very sensitive and complex issues.  Highly recommend.",
          companyLogo: require("~/assets/images/testimonials/CocaCola.png"),
          author: "Leslie Davis (retired)",
          authorTitle: "Vice President",
          authorDivision: ""
        },
        {
          quote:
            "From my vantage point of 38 years of experience in corporate security and human resources, I can recommend that some of the best training in the prevention and management of workplace violence is offered by Dr. Marc McElhaney and his team from Critical Response Associates.  His workshops are practical, fast paced, with real life examples and solutions that work and should be a ‘must attend’ course for any supervisor or manager.",
          companyLogo: require("~/assets/images/testimonials/Esc.png"),
          author: "John Chamberlain",
          authorTitle: "Executive Director,",
          authorDivision: "Energy Security Council"
        },
        {
          quote:
            "Dr. McElhaney and Critical Response Associates have helped many of our client companies not only protect the safety of their employees during critical times but have very simply, saved them money, in terms of potential litigation costs and the numerous other indirect costs that occur when companies experience a traumatic event. Plus, utilizing their prevention program will protect the company from future incidents and charges of negligence – at a cost far less than what the company will have to incur to address even one threat-related incident.",
          companyLogo: require("~/assets/images/testimonials/Gordon.png"),
          author: "Chad Shultz",
          authorTitle: "Attorney",
          authorDivision: ""
        },
        {
          quote:
            "In all cases, CRA has consistently provided prudent advice and innovative ideas that contributed significantly to successful interventions and effective solutions that otherwise could have escalated and become much more serious problems. I sincerely appreciate your professionalism, resourcefulness and, most of all, your caring attitudes about people.",
          companyLogo: require("~/assets/images/testimonials/Gap.png"),
          author: "Rosalind Jackson (retired)",
          authorTitle: "Workplace Violence Prevention Programs",
          authorDivision: ""
        },
        {
          quote:
            "Dr. Marc McElhaney and Critical Response Associates are leaders in crisis and conflict management, and I cannot understate the value they provide in assisting with risk assessments and employee awareness training and prevention. I recommend them to any enterprise that values rapid response, professional guidance and effective resolutions in challenging situations.",
          companyLogo: require("~/assets/images/testimonials/Milliken.png"),
          author: "Tom Gilkeson",
          authorTitle: "Vice President,",
          authorDivision: "Global Security"
        },
        {
          quote:
            "I want to express my thanks for the extremely helpful counsel you provided us in preparing for a delicate employee confrontation. Your guidance gave us a basis for a clear strategy for dealing with some highly disruptive behavior before it became a crisis. Without your help, I am sure that we would not have been as effective or decisive in resolving it.",
          companyLogo: require("~/assets/images/testimonials/Moog.png"),
          author: "Jack Keebler",
          authorTitle: "Human Resource Director",
          authorDivision: ""
        },
        {
          quote:
            "It was a genuine pleasure to witness your swift and professional resolution of what could have been a potentially dangerous situation. There is no doubt that this conflict was resolved in a safe, timely and efficient manner. The fact that your intervention was also cost effective was an added bonus.",
          companyLogo: require("~/assets/images/testimonials/Sonoco.png"),
          author: "David J. Niessen",
          authorTitle: "Regional Human Resources Manager",
          authorDivision: ""
        },
        {
          quote:
            "We have found Dr. McElhaney and his associates’ counsel to be extremely useful in a number of very difficult situations, involving stalking, threatening employees and difficult terminations, both in the U.S. and in Canada. His approach is a good combination of the academic and the pragmatic. We wholeheartedly recommend him.",
          companyLogo: require("~/assets/images/testimonials/Spectra.png"),
          author: "Michael Frankovic (retired)",
          authorTitle: "Director of Security",
          authorDivision: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.intro-content {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 2rem 0;
  max-width: 120rem;
  margin: 0 auto;
}

.testimonies {
  background: $concrete;
  padding: 2.5rem 0 5.5rem;

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

.masonry-with-columns {
  columns: 6 400px;
  column-gap: 2rem;

  .masonry {
    width: 300px;
    margin: 0 1rem 2rem 0;
    display: inline-block;
    width: 100%;
  }
}
</style>
