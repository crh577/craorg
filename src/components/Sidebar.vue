<template>
  <div class="col-md-3 sidebar">
    <div class="sidebar-section">
      <h3>Workplace Violence Prevention Video</h3>
      <g-image src="~/assets/images/sidebar-video-thumbnail.png"/>
    </div>
    <div class="sidebar-section">
      <h3>Gain Insight on Workplace Aggression</h3>
      <g-image class="book" src="~/assets/images/sidebar-book.jpg"/>
      <br>
      <b>Aggression in the Workplace: Preventing and Managing High-Risk Behavior</b>
    </div>
    <div class="sidebar-section">
      <h3>Sign-Up For Our Newsletter</h3>
      <div style="padding:15px;background-color:#D6BCB6;min-height:150px;">
        <div>
          <input type="text" class="form-control" name="name">
          <div style>Full Name</div>
          <input type="Email" class="form-control" name="email" style="margin-top:10px;">
          <div style>Email</div>
          <input type="submit" value="Submit" name="Submit" style="margin-top:10px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 2rem 3rem;

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