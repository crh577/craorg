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
        <span class="nav-link-dropdown">
          <g-link class="nav-link" to="/about-us">About Us</g-link>
          <img src="/svg/downarrow.svg">
          <div class="drowdown-menu">
            <g-link to="/the-team">The Team</g-link>
            <g-link to="/our-approach">Our Approach</g-link>
            <g-link to="/our-philosophy">Our Philosophy</g-link>
          </div>
        </span>
        <g-link class="nav-link" to="/our-services">Our Services</g-link>
        <span class="nav-link-dropdown">
          <g-link class="nav-link" to="/our-clients">Our Clients</g-link>
          <img src="/svg/downarrow.svg">
          <div class="drowdown-menu">
            <g-link to="/our-stories">Our Stories</g-link>
          </div>
        </span>

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

.nav-link {
  display: inline;
}

.home .gloabl-nav {
  margin-top: 2.5rem;
  margin-bottom: 0;
}

.home .header-logo {
  width: 45.8rem;
  height: 13.7rem;
  margin: 0 auto;
  display: block;
}

.home .navbar {
  margin: 2rem 0;
  justify-content: center;
  float: none;
}

.nav-link-dropdown {
  position: relative;
}

.drowdown-menu {
  opacity: 0;
  position: absolute;
  pointer-events: none;
  transition: all 300ms linear;
  background: $white;
  box-shadow: $box-shadow;
  z-index: 1;

  a {
    border-bottom: 1px solid $mine-shaft;
    padding: 1rem 2rem;
    box-sizing: border-box;
    display: block;
    white-space: nowrap;

    &:hover {
      background: $dusty-gray;
      color: $white;
    }
  }
}

.nav-link-dropdown:hover {
  .drowdown-menu {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>