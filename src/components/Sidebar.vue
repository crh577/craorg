<template>
  <div class="col-md-3 sidebar">
    <div class="sidebar-section">
      <h3>Workplace Violence Prevention Video Sample</h3>
      <a
        class="more-video"
        href="https://www.youtube.com/watch?v=maTt5weiL5o"
        data-lity
      >
        <g-image src="~/assets/images/sidebar-video-thumbnail.png" />
      </a>
      <br />
      <br />
      <a
        class="more-video"
        href="https://www.youtube.com/watch?v=maTt5weiL5o"
        data-lity
      >
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
        <g-link to="/book-sale-information"
          >Aggression in the Workplace: Preventing and Managing High-Risk
          Behavior</g-link
        >
      </b>
    </div>
    <div class="sidebar-section">
      <h3>Sign-Up For Our Newsletter</h3>

      <div
        class="typeform-widget"
        data-url="https://davemcguire.typeform.com/to/RgpiXq"
        data-transparency="50"
        data-hide-headers="true"
        data-hide-footer="true"
        style="width: 100%; height: 250px;"
      ></div>

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
  mounted() {
    (function() {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm",
        b = "https://embed.typeform.com/";
      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  },
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
