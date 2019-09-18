// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/globals.scss";
import "~/assets/scss/base.scss";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.script.push(
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      body: true
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.js",
      body: true
    }
  );
}
