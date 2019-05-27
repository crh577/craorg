<template>
  <div>
    <header class="gloabl-nav container">
      <div class="phone-number">
        <a to="tel:888.391.2214">
          <img class="phone-logo" src="/svg/phone.svg">888.391.2214
        </a>
      </div>
      <g-link to="/">
        <img class="header-logo" src="/svg/cra-logo.svg">
      </g-link>
      <nav class="navbar navbar-dark">
        <g-link class="nav-link" to="/about-us">About Us</g-link>
        <g-link class="nav-link" to="/our-services">Our Services</g-link>
        <g-link class="nav-link" to="/our-clients">Our Clients</g-link>
        <g-link class="nav-link" to="/contact-us">Contact Us</g-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
// Header Styles
.gloabl-nav {
  position: relative;
  margin: 2.5rem auto;
}

.header-logo {
  width: 30rem;
  height: 9rem;
  display: inline;
}

.navbar {
  float: right;
  margin-top: 3rem;
  font-size: 2.2rem;
}

.gloabl-nav .phone-number .phone-logo {
  width: 3.7rem;
  height: 2.7rem;
  padding-right: 0.5rem;
}

.gloabl-nav .phone-number {
  font-size: 2.4rem;
  color: $shiraz;
  letter-spacing: 0;
  text-align: right;
  line-height: 32px;
  position: absolute;
  top: 0;
  right: 3.4rem;
}

.navbar a {
  color: $mine-shaft;

  &:visited {
    color: $mine-shaft;
  }

  &:hover,
  &:focus {
    color: lighten($mine-shaft, 20%);
  }
}
</style>