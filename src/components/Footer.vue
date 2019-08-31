<template>
  <div>
    <footer>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <g-link to="/" aria-label="Home">
              <img class="footer-logo" alt="logo" src="/svg/cra-logo-white.svg" />
            </g-link>
            <p class="address">P.O. Box 29644, Atlanta, GA 30359</p>
          </div>
          <div class="col-md-8 footer-right align-items-center">
            <ul class="footer-links">
              <li>
                <g-link to="/about-us">About Us</g-link>
              </li>
              <li>
                <g-link to="/our-services">Our Services</g-link>
              </li>
              <li>
                <g-link to="/our-stories">Our Stories</g-link>
              </li>
              <li>
                <g-link class="nav-link" to="/training-materials">Training Materials</g-link>
              </li>
              <li>
                <g-link to="/contact-us">Contact Us</g-link>
              </li>
            </ul>
            <p>&copy;2019 Critical Response Associates. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
// Footer styles
footer {
  background: $heavy-metal;
  padding: 4.5rem 0;
}

.address {
  color: $white;
  text-align: center;
}

.footer-right {
  text-align: right;
}

.footer-links li {
  display: inline-block;
  padding-left: 2rem;
}

.footer-links li a {
  color: $white;
  text-decoration: none;
  font-size: 2.2rem;

  &:visited {
    color: $white;
  }

  &:hover,
  &:focus {
    color: darken($white, 20%);
  }
}

.footer-right p {
  color: $silver;
  font-size: 1.4rem;
  padding-top: 0.5rem;
}
</style>