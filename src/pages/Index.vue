<template>
  <Home>
    <div class="container container-home">
      <div class="row">
        <div class="col-md-6 hero-left align-items-center">
          <g-image class="hero-image" src="~/assets/images/home/left-hero.png" alt/>
          <div class="hero-copy">
            <p>I’m Looking for a</p>
            <h2>Workplace Violence Prevention Program</h2>
            <a class="btn base-btn" href="/our-services#prevention">Learn More</a>
            <br>
            <a class="watch-video" href="/our-services/prevention-program/">Introduction Video ></a>
          </div>
        </div>
        <div class="col-md-6 hero-right align-items-center">
          <g-image class="hero-image" src="~/assets/images/home/right-hero.png" alt/>
          <div class="hero-copy">
            <p>I’m Looking for a</p>
            <h2>Threat Assessment & Case Consultation</h2>
            <a class="btn base-btn" href="/our-services#threat-assesment">Learn More</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="hero-bottom">
            <p>Let us help you</p>
            <h1>
              <g-link to="/about-us/identify-respond-prevent#identify">Identify</g-link>,
              <g-link to="/about-us/identify-respond-prevent#respond">Respond</g-link>&nbsp;&
              <g-link to="/about-us/identify-respond-prevent#prevent">Prevent</g-link>
            </h1>
            <a class="btn base-btn" href="#">Call Us: (888) 391-2214</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="clients">
            <h3>25 Years Serving Companies like Yours:</h3>
            <div class="client-logos">
              <g-image src="~/assets/images/home/client-logo-1.png" alt="Coca Cola"/>
              <g-image src="~/assets/images/home/client-logo-2.png" alt="Starbucks Coffee"/>
              <g-image src="~/assets/images/home/client-logo-3.png" alt="Georgia Pacific"/>
              <g-image src="~/assets/images/home/client-logo-4.png" alt="Delta"/>
              <g-image src="~/assets/images/home/client-logo-5.png" alt="CNN"/>
              <g-image src="~/assets/images/home/client-logo-6.png" alt="Conagra"/>
              <g-image src="~/assets/images/home/client-logo-7.png" alt="BP"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Home>
</template>

<script>
import Home from "~/layouts/Home.vue";

const description =
  "Learn How to Prevent Violence in the Workplace from One of the Countries Top Experts.";

export default {
  components: {
    Home
  },
  metaInfo: {
    title: "Home",
    meta: [
      { name: "description", content: description },
      { name: "og:description", content: description },
      { name: "twitter:description", content: description }
    ]
  }
};
</script>

<style lang="scss">
.container-home {
  max-width: 1340px;

  .row {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
}

.hero-left,
.hero-right {
  position: relative;
}

.hero-left {
  padding-right: 0;
}

.hero-right {
  padding-left: 0;
}

.hero-copy {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 25% 9%;
  top: 0;
  left: 0;
  color: $white;
  text-align: center;

  p {
    font-size: $base-font-size;
    font-style: italic;
  }

  h2 {
    color: $white;
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
}

.watch-video {
  color: $white;
  padding: 1rem;
  display: block;

  &:hover {
    color: $white;
    text-decoration: underline;
  }

  &:active,
  &:visited {
    color: $white;
  }
}

.hero-image {
  width: 100%;
}

.hero-bottom {
  background: $cod-gray;
  text-align: center;
  padding: 4.5rem 0;

  p {
    font-size: $base-font-size;
    font-style: italic;
    color: $white;
  }

  h1 {
    color: $white;
    font-size: 4.5rem;
    margin-bottom: 3rem;

    a {
      color: $white;
    }
  }
}

.clients {
  padding: 4.5rem;
  text-align: center;

  h3 {
    font-size: 3.5rem;
    color: $shiraz;
    margin-bottom: 2rem;
  }
}

.client-logos {
  display: flex;
  justify-content: space-between;
  flex-flow: left;
  flex-wrap: wrap;

  img {
    height: fit-content;
    align-self: center;
    margin: 2rem;
  }
}

@media screen and (max-width: 1200px) {
  .hero-copy {
    padding: 15% 9%;

    p {
      font-size: 2rem;
    }

    h2 {
      font-size: 3.5rem;
    }
  }
}

@media screen and (max-width: 970px) {
  .hero-copy {
    padding: 10% 9%;

    p {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 2.8rem;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero-left {
    padding-right: 15px;
  }

  .hero-right {
    padding-left: 15px;
  }
}
</style>
