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
          image: require("~/assets/images/team/MarcMcElhaney.png"),
          name: "Dr. Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
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
          image: require("~/assets/images/team/RozHS_Final.jpg"),
          name: "Rosalind Jackson",
          bio:
            "As the owner and Director of Train Intervene Prevent (TIP), Rosalind Jackson develops and delivers programs for CRA that focus on workplace violence awareness and prevention. In her previous position as manager of Georgia-Pacific’s workplace violence prevention program, Roz advised managers and HR professionals faced with potential workplace violence interventions, and was responsible for developing company-wide training programs. She also serves as production manager for the Security Executive Council, has served as a charter officer of the Atlanta/Southeast Chapter of the Association of Threat Assessment Professionals (ATAP), and is actively involved with the Partnership Against Domestic Violence."
        },
        {
          image: require("~/assets/images/team/ConklinHS_Final.jpg"),
          name: "Dr. Todd Conklin",
          bio:
            "Dr. Todd Conklin is an internationally renowned trainer and workshop leader, with specialties in the fields of human safety management systems, organizational development and human reliability. Dr. Conklin holds a Ph.D. in organizational behavior and communication from the University of New Mexico. Dr. Conklin conducts training for CRA, and consults with our clients on issues involving reliable safety systems and crisis negotiations. He is the author of “Pre-Accident Investigations: An Introduction to Organizational Safety” and “Simple Revolutionary Acts: Ideas to Revitalize Yourself and Your Workplace.”"
        },
        {
          image: require("~/assets/images/team/ManelosHS_Final.jpg"),
          name: "John Manelos",
          bio:
            "John Manelos, has joined CRA as a Senior Associate and Security Advisor, after retiring from a distinguished career in Corporate Security (most recently as the Vice President of Corporate Security & Crisis Management for BP's Gulf Coast Restoration division). John advises CRA and our clients on matters related to security and program issues. As an experienced trainer and a knowledgeable advocate for workplace violence programs, John also works within CRA's training and outreach programs. He is also a Certified Protection Professional (CPP) and a Registered Mediator, with an MS degree in Conflict Management."
        }
      ],
      partners: [
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "Dr. Jens Hoffmann",
          details:
            "Dr. Jens Hoffmann is a forensic psychologist in Darmstadt, Germany. Dr. Hoffman consults with numerous companies and institutions across Europe on threatening behavior, stalking and extortion. He is a partner at TPS (Team Psychology and Security), which is a leading European provider of threat assessment, case management, and training, providing services to corporations, governmental agencies, schools, and public figures. In addition, he holds teaching assignments at several universities in Germany and Switzerland."
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "The Ledlie Group",
          details:
            'The Ledlie Group provides businesses nationwide with marketing support and media strategies and is best-known for its crisis communications help before, during and after critical situations. Ledlie members assist companies in a) preventing crises, b) planning against impending crises, and c) controlling the breaking crisis with speed and confidence. The Ledlie Group’s communications and public relations successes have helped business leaders protect their assets and return quickly to their core responsibilities. For more information, visit <a href="http://www.theledliegroup.com/">www.theledliegroup.com</a>.'
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "Management Psychology Group",
          details:
            "Management Psychology Group is a consulting firm of professional licensed psychologists, with a mission to help their clients get the right people into the right jobs, help people grow to their full potential on the job and help executive teams become more effective. Based in Atlanta, Georgia (U.S.), MPG has extensive experience in assessment for selection and development, leadership succession planning, executive coaching, job analysis, selection validation, employee surveys and team building."
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "Dr. Bram van der Meer",
          details:
            "Dr. Bram van der Meer is an investigative psychologist with a long career as a senior advisor in the Netherlands National Police force, specializing in offender profiling, threat assessment and interview strategy. He has conducted threat assessments for the Netherlands Royal Family, the Dutch Prime Minister, national politicians and foreign VIP’s. In his current position as partner at Black Swan Forensics, Bram provides training and consultation in large-scale fraud and malpractice investigations, threats against companies, executive protection and workplace violence. Since 2009, he serves as President of the Association of European Threat Assessment Professionals."
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "Operational Psychology Services",
          details:
            "Operational Psychology Services is a full service psychology consultancy based in Maryland (U.S.), which focuses on threat assessment, counterterrorism, insider threats, investigative consultations, and operational training. Its founder, Dr. Russell Palarea, recently served as a Staff Operational Psychologist with the Naval Criminal Investigative Service (NCIS), where he consulted to the NCIS Threat Management Unit, Counterterrorism Department, and Insider Threat Program. Additionally, Dr. Palarea has conducted case consultations and training for the FBI’s Joint Terrorism Task Forces."
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "Peace of Mind Threat Management Company, Ltd.",
          details:
            'Initially founded in 1998 in Helsinki, Finland, this company under the Directorship of Totti "Mike" Karpela, has additionally opened an office in Hong Kong. Mike assists CRA in cases that occur internationally, with an emphasis on Europe and Asia. He has worked in law enforcement and security for 25 years, mostly with the National Police of Finland, and was the founder of the Threat Management Service for Helsinki police department. Mike is also the executive board member of Association of European Threat Assessment Professionals (AETAP).'
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "ProActive ReSolutions",
          details:
            "ProActive ReSolutions offers a range of products and services to help organizations build respectful workplaces before, during and after critical events. Their team of experts have backgrounds in a variety of specialties, and are also involved in training and research activities throughout the world. They are primarily based in Vancouver, Canada (but also with offices in Australia and the U.S. (Virginia)). CRA will often consult with ProActive’s Threat Assessment Specialists, Drs. Stephen Hart and Kelly Watt, when involved with Canadian-based issues."
        },
        {
          image: require("~/assets/images/team/partner-placholder.png"),
          name: "SIGMA Threat Management",
          details:
            "SIGMA Threat Management is a partnership of leading experts in behavioral threat assessment and threat management, with offices in Virginia (U.S.). CRA will often consult with Sigma’s managing partners, Dr. Marisa Randazzo and Dr. Gene Deisinger, when faced with issues involving universities and other educational organizations, due to their extensive experience in that specialty area. Prior to Sigma, Dr. Randazzo served as the Chief Research Psychologist with the U.S. Secret Service, and Dr. Deisinger currently also serves as Director of Threat Management Services at Virginia Polytechnic Institute and State University."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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