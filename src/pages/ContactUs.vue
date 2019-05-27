<template>
  <Layout>
    <PageHeader title="Contact Us"/>
    <Page>
      <form class="contact-form">
        <label>
          Name
          <span class="required">*</span>
        </label>
        <div class="field-group">
          <div class="input-container">
            <input type="text" name="first-name">
            <div>First</div>
          </div>
          <div class="input-container">
            <input type="text" name="last-name">
            <div>Last</div>
          </div>
        </div>

        <label>
          Email
          <span class="required">*</span>
        </label>
        <div class="field-group full">
          <input type="text" name="email">
        </div>

        <label>
          Comment or Message
          <span class="required">*</span>
        </label>
        <div class="field-group full">
          <textarea rows="5"></textarea>
        </div>
      </form>

      <div class="address">
        Critical Response Associates LLC.
        <br>P.O. Box 29644 . Atlanta Georgia 30359
        <br>Tel. 888.391.2214
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

<style lang="scss">
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

.address {
  font-weight: 600;
  margin: 10rem 0;
}
</style>
