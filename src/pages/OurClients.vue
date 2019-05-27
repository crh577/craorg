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
            "In all cases, CRA has consistently provided prudent advice and innovative ideas that contributed significantly to successful interventions and effective solutions that otherwise could have escalated and become much more serious problems. I sincerely appreciate your professionalism, resourcefulness and, most of all, your caring attitudes about people.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Rosalind Jackson",
          authorTitle: "VP, Corporate Security",
          authorDivision: "Workplace Violence Prevention Programs"
        },
        {
          quote:
            "We have found Dr. McElhaney and his associates’ counsel to be extremely useful in a number of very difficult situations, involving stalking, threatening employees and difficult terminations, both in the U.S. and in Canada. His approach is a good combination of the academic and the pragmatic. We wholeheartedly recommend him.",
          companyLogo: require("~/assets/images/home/client-logo-3.png"),
          author: "Bob Brand",
          authorTitle: "Vice President",
          authorDivision: "Corporate Security"
        },
        {
          quote:
            "In all cases, CRA has consistently provided prudent advice and innovative ideas that contributed significantly to successful interventions and effective solutions that otherwise could have escalated and become much more serious problems. I sincerely appreciate your professionalism, resourcefulness and, most of all, your caring attitudes about people.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "Rosalind Jackson",
          authorTitle: "VP, Corporate Security",
          authorDivision: "Workplace Violence Prevention Programs"
        },
        {
          quote:
            "We have found Dr. McElhaney and his associates’ counsel to be extremely useful in a number of very difficult situations, involving stalking, threatening employees and difficult terminations, both in the U.S. and in Canada. His approach is a good combination of the academic and the pragmatic. We wholeheartedly recommend him.",
          companyLogo: require("~/assets/images/home/client-logo-3.png"),
          author: "Bob Brand",
          authorTitle: "Vice President",
          authorDivision: "Corporate Security"
        },
        {
          quote:
            "Thank you for the expert counsel and advice you have provided BP on numerous past workplace violence incidents. Assessing and predicting human behavior is an extemly difficult task and having your resources available to us gives us great comfort. On behalf of BP Corporation, I would also like to extend our thanks and appreciation for the recent training sessions you conducted at several of BP's U.S. and South African facilities.",
          companyLogo: require("~/assets/images/home/client-logo-7.png"),
          author: "John Manelos",
          authorTitle: "VP, Corporate Security",
          authorDivision: "Gulf Coast Restoration"
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