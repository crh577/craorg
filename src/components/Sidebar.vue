<template>
  <div class="col-md-3 sidebar">
    <div class="sidebar-section">
      <h3>Workplace Violence Prevention Video Sample</h3>
      <a class="more-video" href="https://www.youtube.com/watch?v=maTt5weiL5o" data-lity>
        <g-image src="~/assets/images/sidebar-video-thumbnail.png" />
      </a>
      <br />
      <br />
      <a class="more-video" href="https://www.youtube.com/watch?v=maTt5weiL5o" data-lity>
        <b>More Infomation ></b>
      </a>
    </div>
    <div class="sidebar-section">
      <h3>Gain Insight on Workplace Aggression</h3>
      <g-link to="/book-sale-information">
        <g-image class="book" src="~/assets/images/sidebar-book.jpg" />
      </g-link>
      <br />
      <b>
        <g-link to="/book-sale-information">
          Aggression in the Workplace: Preventing and Managing High-Risk
          Behavior
        </g-link>
      </b>
    </div>
    <div class="sidebar-section">
      <iframe
        height="480"
        title="Embedded Wufoo Form"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style="width:100%;border:none"
        src="https://davemcguire.wufoo.com/embed/mjqv9er1m13jm2/"
      >
        <a href="https://davemcguire.wufoo.com/forms/mjqv9er1m13jm2/">Fill out my Wufoo form!</a>
      </iframe>

      <div>
        <br />
        <g-link to="/newsletter-archive/">
          <b>Browse our Newsletter Archive ></b>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  metaInfo: {}
};
</script>
<style>
@import "./lity.min.css";
</style>
<style lang="scss" scoped>
.sidebar {
  padding: 0 3rem 1.2rem;

  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    color: $shiraz;
    padding-bottom: 1rem;
    text-align: center;
  }

  b {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.4;
    display: block;
  }
  .more-video {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.4;
    display: block;
    color: #3573bb;
  }

  img {
    width: 100%;
    height: auto;
  }

  .book {
    width: 70%;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  .sidebar-section {
    margin-bottom: 5rem;
  }
}
</style>
