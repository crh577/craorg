<template>
  <Layout>
    <PageHeader title="Training Materials" />
    <Page>
      <h2 id="video" style="margin-top: 0;">Video Training Program for Employees and Managers</h2>
      <b>Available Online or on DVD</b>
      <p>Employee awareness is critical if an organization wishes to avoid the potential harm and costs of aggressive or disruptive behaviors. You cannot have an effective Workplace VIolence Response and Prevention program without employee participation and support.</p>
      <p>For this reason, Critical Response Associates has developed a training/awareness program that can be shown to all employees and supervisors as part of their initial orientation or ongoing training.</p>
      <p>Company employees can easily access and view this program online, or the company can purchase it on a DVD format for its internal use.</p>
      <p>In addition, the program can be completely customized, so that it is consistent with the company's image and message – and will look like a company-designed video.</p>
      <p>This program is currently available in English and Spanish, but can also be translated into any language.</p>
      <h2 id="publication">Publications</h2>
      <p>
        <b>Aggression in the Workplace: Preventing and Managing High-Risk Behavior</b> by Dr. Marc McElhaney: A comprehensive text (available in both hardcover and paperback) for human resource, security and managers in general, this book covers the full range of issues that managers confront when having to prevent, prepare for and manage high-risk incidents that can occur in the workplace.
        <g-link to="/book-sale-information">Book Description and Order Information.</g-link>
      </p>
      <h2 id="newsletter">Newsletter</h2>
      <b>The Critical Responder</b>
      <p>We have begun this newsletter as a way to reach out to our colleagues and clients, in order to share some of the knowledge that is emerging in the fields of threat assessment, crisis management and conflict resolution. As each issue is published, it will be made available here in Adobe Acrobat Reader format.</p>
      <g-link to="/newsletter-archive">Visit our newsletter archive</g-link>
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
  }
};
</script>

<style lang="scss" scoped>
.copy-content h2 {
  margin: 3rem 0;
}

.sub-nav {
  text-align: center;
  background: $concrete;
  padding: 3rem;

  a {
    color: $mine-shaft;
    font-size: 2.2rem;
    font-weight: bold;
  }
}
h2 {
  font-weight: 900;
}
</style>