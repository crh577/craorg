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

        <div class="row partner">
          <div class="col-md-4">
            <g-image src="~/assets/images/team/partner-placholder.png"/>
          </div>
          <div class="col-md-8">
            <h3>Some Partner Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dicta maxime alias necessitatibus tempora, impedit explicabo ex autem maiores, corrupti placeat doloribus. Quidem facere deserunt odit inventore, cumque asperiores cum, aliquam voluptates nostrum consectetur pariatur quae molestias consequuntur ea assumenda quaerat a quis temporibus deleniti nesciunt quod, doloremque nam quos maxime. Aperiam amet architecto, doloremque voluptates debitis non explicabo magni officiis quam autem laborum, porro! Animi aliquid ipsa ipsam. Ad culpa assumenda voluptatibus cumque sapiente nesciunt! Illum velit esse, voluptatibus dolore soluta recusandae aut excepturi voluptates qui architecto commodi, obcaecati saepe odit magnam impedit pariatur eveniet reprehenderit laborum voluptate aspernatur.</p>
          </div>
        </div>

        <div class="row partner">
          <div class="col-md-4">
            <g-image src="~/assets/images/team/partner-placholder.png"/>
          </div>
          <div class="col-md-8">
            <h3>Some Partner Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dicta maxime alias necessitatibus tempora, impedit explicabo ex autem maiores, corrupti placeat doloribus. Quidem facere deserunt odit inventore, cumque asperiores cum, aliquam voluptates nostrum consectetur pariatur quae molestias consequuntur ea assumenda quaerat a quis temporibus deleniti nesciunt quod, doloremque nam quos maxime. Aperiam amet architecto, doloremque voluptates debitis non explicabo magni officiis quam autem laborum, porro! Animi aliquid ipsa ipsam. Ad culpa assumenda voluptatibus cumque sapiente nesciunt! Illum velit esse, voluptatibus dolore soluta recusandae aut excepturi voluptates qui architecto commodi, obcaecati saepe odit magnam impedit pariatur eveniet reprehenderit laborum voluptate aspernatur.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import TeamBio from "~/components/TeamBio.vue";

export default {
  components: {
    PageHeader,
    TeamBio
  },
  data() {
    return {
      people: [
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
        },
        {
          image: require("~/assets/images/team/placeholder.png"),
          name: "Dr Marc McElhaney",
          bio:
            "Dr. Marc McElhaney, a licensed consulting psychologist and a registered mediator, serves as CRA’s CEO and directs the Critical Response Team. Dr. McElhaney works exclusively in the areas of threat assessment, critical incident management and conflict resolution. Since 1977, he has consulted with hundreds of organizations (typically large corporations and law enforcement agencies) in regards to the assessment, management and resolution of high-risk"
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

  .partner {
    padding-top: 2rem;
    padding-bottom: 2rem;

    h3 {
      font-weight: 600;
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
}
</style>