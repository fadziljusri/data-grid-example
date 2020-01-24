<template>
  <div ref="section" class="section">
    <div class="container">
      <!-- <logo /> -->

      <vue-good-table
        :columns="vgt.columns"
        :rows="data"
        :pagination-options="vgt.pageOptions"
        :sort-options="vgt.sortOptions"
        :search-options="vgt.searchOptions"
        styleClass="vgt-table condensed bordered"
      />
    </div>
  </div>
</template>

<script>
import randomWords from 'random-words';
import Logo from "~/components/Logo.vue";
import vgt from "./datatable";

// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  components: {
    Logo,
    VueGoodTable
  },
  data() {
    return {
      vgt,
      fixed: 5,
      data: []
    };
  },
  async created() {
    document.body.style.cursor = 'wait';
     for(let i = 0; i < 2000; i++) {
        this.data.push({
          row_1: randomWords(),
          // row_1: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_2: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_3: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_4: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_5: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_6: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_7: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_8: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_9: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed),
          row_10: (Math.random() * parseFloat(Math.random().toString().substr(-5))).toFixed(this.fixed)
        })


        if (i && i % 1000 === 0) {
          await new Promise(resolve => setTimeout(function() {
            resolve(true)
          }, 1000));
        }
      }
       document.body.style.cursor = 'default';
  },
  // computed: {
  //   // rows() {
  //   //   return this.data;
  //   // }
  // }
};
</script>

<style lang="scss">
// Vue Good Table

// body {
//     cursor: wait;
// }

.vgt-wrap__footer,
.vgt-global-search__input .vgt-input {
  padding: 0.5em 1em !important;
  line-height: 1;
}

.vgt-table {
  .vgt-active-row {
    background: aliceblue;
  }

  .th-actions {
    width: 100px !important;
    min-width: 100px !important;
  }

  .th-datetime {
    min-width: 170px !important;
  }

  .th-100 {
    min-width: 100px !important;
  }

  .th-150 {
    min-width: 150px !important;
  }

  .th-180 {
    min-width: 180px !important;
  }

  .th-280 {
    min-width: 280px !important;
  }
}

.buttons {
  .button.action {
    background: unset !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 0.25rem;
    margin-bottom: 0 !important;
    height: unset; // margin-right: 0 !important
  }
}
</style>
