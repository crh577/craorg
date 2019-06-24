<template>
  <Layout>
    <PageHeader title="The Team"/>
    <div class="container page-content">
      <div class="row">
        <div class="copy-content">
          <p>CRA is comprised of a team of psychologists, behavioral specialists and trainers who specialize exclusively in the areas of threat assessment, critical incident management and behavioral health consultation. Our core consulting team are licensed psychologists who have years (typically decades) of experience in the assessment and strategic management of high-risk situations within a wide variety of circumstances, and have the flexibility to be called upon on an as-needed basis.</p>
        </div>
      </div>
    </div>

    <div class="container team-bios">
      <div class="row">
        <TeamBio
          v-for="person in people"
          :key="person.name"
          :image="person.image"
          :name="person.name"
          :bio="person.bio"
        />
      </div>
    </div>

    <div class="partners">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Our Partners</h2>
            <p
              class="intro"
            >CRA relies on consultation with a range of international colleagues when we are advising on cases occurring in various parts of the world. Currently, we have partnerships with threat assessment professionals based in Germany, the Netherlands, Finland, Hong Kong and Australia, each of whom also have connections throughout their respective regions, that we call upon as needed.</p>
          </div>
        </div>

        <Partner
          v-for="partner in partners"
          :key="partner.name"
          :image="partner.image"
          :name="partner.name"
          :details="partner.details"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import TeamBio from "~/components/TeamBio.vue";
import Partner from "~/components/Partner.vue";

export default {
  components: {
    PageHeader,
    TeamBio,
    Partner
  },
  data() {
    return {
      people: [
        {
          image: require("~/assets/images/team/MarcMcElhaney.jpg"),
          name: "Dr. Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk."
        },
        {
          image: require("~/assets/images/team/LisaHS_Final.jpg"),
          name: "Lisa Millsor",
          bio:
            "Lisa Millisor joined Critical Response Associates as Business Manager in April 2011, after serving in various management positions with Speedway/Super America a Marathon Oil Brand division, and as Regional Director of Human Resources with Sara Lee Corporation. Lisa has M.B.A with a concentration in Human Resources, and a background in Training and Development."
        },
        {
          image: require("~/assets/images/team/TomHS_Final.jpg"),
          name: "Dr. Thomas Evans",
          bio:
            "Dr. Thomas Evans is the Clinical Director of the Cuyahoga County Juvenile Court Diagnostic Clinic, located in Cleveland, Ohio. He is an Assistant Clinical Instructor at Case Western Reserve University, University Hospitals of Cleveland, Department of Child Psychiatry. He is also the President of The Institute of the Study of Interpersonal Violence, a non-profit organization that conducts research in all aspects of violence, including school violence, stalking, domestic violence and child abuse. Tom is involved in all aspects of the risk assessment process, and specializes in fitness for duty evaluations."
        },
        {
          image: require("~/assets/images/team/NancyHS_Final.jpg"),
          name: "Dr. Nancy Gup",
          bio:
            "As the Director of Client and Consulting Services for Gup & Associates, Inc., Dr. Nancy Gup, Licensed Psychologist, has been providing quality employee assistance and behavioral health services to businesses on a national basis since 1991. She brings to CRA a broad background that includes psychological disability management, executive coaching, drug free workplace consultation, training & development programs, and over fifteen years teaching at the university level. She has presented at several national professional conferences including the American Psychological Association and American Psychological Society Conferences."
        },
        {
          image: require("~/assets/images/team/JoeHS_Final.jpg"),
          name: "Dr. Joseph Konieczny",
          bio:
            "Besides his work with CRA, Dr. Joseph Konieczny currently serves as a Consulting Psychologist with Cuyahoga County (Ohio) Juvenile Court Diagnostic Clinic and the District Five Forensic Center in Mansfield, Ohio. As such, he is responsible for conducting psychological evaluations of offenders for the courts, in regards to sentencing, custody and other forensic issues. In addition, he conducts psychological evaluations for the Bureau of Disability Determination in his home State of Ohio."
        },
        {
          image: require("~/assets/images/team/HeatherHS_Final.jpg"),
          name: "Dr. Heather McElroy",
          bio:
            "In addition to being one of our associates, Dr. Heather McElroy serves as Vice President and managing partner of Stone McElroy Associates, one of CRA's strategic partners. She is a Board-Certified Police and Public Safety Psychologist and a sworn Reserve Police Officer, currently serving with Criminal investigation unit o the Smyrna Police Department. Dr. McElroy is an active member of the major national organizations of Police Psychologists and has written articles for Police Chief Magazine and other publications, has presented at various professional meetings and is the past chair of the International Association of Chiefs of Police Psychological Services Section."
        },
        {
          image: require("~/assets/images/team/RozHS_Final.jpg"),
          name: "Rosalind Jackson",
          bio:
            "As the owner and Director of Train Intervene Prevent (TIP), Rosalind Jackson develops and delivers programs for CRA that focus on workplace violence awareness and prevention. In her previous position as manager of Georgia-Pacific’s workplace violence prevention program, Roz advised managers and HR professionals faced with potential workplace violence interventions, and was responsible for developing company-wide training programs. She also serves as production manager for the Security Executive Council, has served as a charter officer of the Atlanta/Southeast Chapter of the Association of Threat Assessment Professionals (ATAP), and is actively involved with the Partnership Against Domestic Violence."
        }
      ],
      partners: [
        {
          image: require("~/assets/images/team/partner-sma.png"),
          name: "Stone McElroy Associates",
          details: `One of our primary strategic partners, Stone, McElroy & Associates (SMA) is an industry-leading nationwide firm of Police and Public Safety Psychologist. SMA provides pre-employment screening, psychological fitness-for-duty evaluations, post-critical incident management, operational consulting and hostage negotiations, primarily to public safety agencies. For more information about SMA\'s services, visit them here: https://stonemcelroy.com`
        },
        {
          image: require("~/assets/images/team/partner-fortress.png"),
          name: "Fortress Consulting",
          details:
            'With their extensive experience in law enforcement and emergency response, CRA calls upon the expertise of Fortress Consulting in a variety of situations- particularly when organizations require advice in establishing  facility-specific tactical procedures and response protocols for emergency situations, such as those involving an "active shooter".'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .page-content {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.partners {
  background: $concrete;
  padding: 10rem;

  h2 {
    font-size: 6rem;
    color: $shiraz;
    letter-spacing: 0;
    text-align: center;
    line-height: 55px;
  }

  .intro {
    font-size: 2.4rem;
    text-align: center;
    max-width: 100rem;
    margin: 0 auto 3rem;
  }
}
</style>