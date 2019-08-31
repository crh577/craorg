<template>
  <div>
    <div class="container page-content">
      <div class="row">
        <div class="col-md-9 copy-content border-right-b">
          <slot>
            <p>This is where you put page content.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt similique natus, nesciunt cumque voluptate pariatur ipsam quo quis magnam commodi possimus repudiandae libero, sapiente cupiditate non nulla! Accusantium, expedita.</p>
          </slot>
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "Page",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
.copy-content {
  padding: 0 6rem;
}

@media (min-width: em(768px)) {
  .copy-content.border-right-b {
    border-right: 1px solid $mine-shaft;
  }
}
@media (max-width: em(768px)) {
  .copy-content {
    padding: 0 2rem;
  }
}
</style>