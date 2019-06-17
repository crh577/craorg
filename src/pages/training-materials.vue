<template>
  <Layout>
    <PageHeader title="Training Materials"/>
    <Page>
      <h2>Video Training Program for Employees and Managers</h2>
      <p>
        <b>Available Online or on DVD</b>
      </p>
      <p>Employee awareness is critical if an organization wishes to avoid the potential harm and costs of aggressive or disruptive behaviors. You cannot have an effective Workplace VIolence Response and Prevention program without employee participation and support.</p>
      <p>For this reason, Critical Response Associates has developed a training/awareness program that can be shown to all employees and supervisors as part of their initial orientation or ongoing training.</p>
      <p>Company employees can easily access and view this program online, or the company can purchase it on a DVD format for its internal use.</p>
      <p>In addition, the program can be completely customized, so that it is consistent with the company's image and message – and will look like a company-designed video.</p>
      <p>This program is currently available in English and Spanish, but can also be translated into any language.</p>
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
h2 {
  font-weight: 900;
}
</style>