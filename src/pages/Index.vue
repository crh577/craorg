<template>
  <Home>
    <div class="container">
      <div class="row">
        <div class="col-md-6 hero-left align-items-center">
          <g-image class="hero-image" src="~/assets/images/home/left-hero.png"/>
          <div class="hero-copy">
            <p>I’m Looking for a</p>
            <h2>Workplace Violence Prevention Program</h2>
            <a class="btn base-btn" href="#">Learn More</a>
          </div>
        </div>
        <div class="col-md-6 hero-right align-items-center">
          <g-image class="hero-image" src="~/assets/images/home/right-hero.png"/>
          <div class="hero-copy">
            <p>I’m Looking for a</p>
            <h2>Threat Assessment & Case Consultation</h2>
            <a class="btn base-btn" href="#">Learn More</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="hero-bottom">
            <h1>Identify, Respond & Prevent</h1>
            <a class="btn base-btn" href="#">Call Us: (888) 391-2214</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="clients">
            <h3>25 Years Serving Companies like Yours:</h3>
            <div class="client-logos">
              <g-image src="~/assets/images/home/client-logo-1.png"/>
              <g-image src="~/assets/images/home/client-logo-2.png"/>
              <g-image src="~/assets/images/home/client-logo-3.png"/>
              <g-image src="~/assets/images/home/client-logo-4.png"/>
              <g-image src="~/assets/images/home/client-logo-5.png"/>
              <g-image src="~/assets/images/home/client-logo-6.png"/>
              <g-image src="~/assets/images/home/client-logo-7.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Home>
</template>

<script>
import Home from "~/layouts/Home.vue";

export default {
  components: {
    Home
  },
  metaInfo: {
    title: "Critical Response Associates"
  }
};
</script>

<style lang="scss">
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
    font-size: 2.4rem;
    font-style: italic;
  }

  h2 {
    color: $white;
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
}

.hero-image {
  width: 100%;
}

.hero-bottom {
  background: $cod-gray;
  text-align: center;
  padding: 4.5rem 0;

  h1 {
    color: $white;
    font-size: 4.5rem;
    margin-bottom: 3rem;
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

  img {
    height: fit-content;
    align-self: center;
  }
}
</style>
