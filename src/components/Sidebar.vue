<template>
  <div class="col-md-3 sidebar">
    <div class="sidebar-section">
      <h3>Workplace Violence Video</h3>
      <g-image src="~/assets/images/sidebar-video-thumbnail.png"/>
    </div>
    <div class="sidebar-section">
      <h3>Gain Insight on Workplace Aggression</h3>
      <g-image src="~/assets/images/sidebar-book.jpg"/>
      <br>
      <span
        style="font-weight:bold;"
      >Aggression in the Workplace: Preventing and Managing High-Risk Behavior</span>
      Order Book Link
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
  }

  img {
    width: 100%;
    height: auto;
  }

  .sidebar-section {
    margin-bottom: 3rem;
  }
}
</style>