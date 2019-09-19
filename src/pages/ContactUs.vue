<template>
  <Layout>
    <PageHeader title="Contact Us" />
    <Page>
      <iframe
        height="790"
        title="Embedded Wufoo Form"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style="width:100%;border:none"
        src="https://davemcguire.wufoo.com/embed/z19xriqk09fkxbp/"
      ></iframe>

      <div class="address">
        Critical Response Associates LLC.
        <br />P.O. Box 29644, Atlanta, Georgia 30359
        <br />Tel. 888.391.2214
      </div>
    </Page>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Page from "~/components/Page.vue";

export default {
  components: {
    PageHeader,
    Page
  },
  metaInfo: {
    title: "About us"
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  label {
    font-weight: 600;
  }

  .required {
    color: $shiraz;
  }
}

.field-group {
  margin-bottom: 2rem;
  display: flex;
  width: 56.8rem;

  .input-container {
    padding-right: 1rem;

    div {
      font-size: 1.5rem;
    }
  }

  &.full {
    input,
    textarea {
      width: 100%;
    }
  }
}

.button {
  padding: 1rem 3rem;
  background-color: $shiraz;
  color: $white;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: darken($shiraz, 10%);
  }
}

.address {
  font-weight: 600;
  margin: 10rem 0;
}
</style>
