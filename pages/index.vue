<template>
  <section class="section">
      <div class="columns">
        <div class="column">
          <EndPoint />
          <Header />
          <ResponseBody />
        </div>
      </div>
  </section>
</template>

<script lang="ts">

import EndPoint from '~/components/EndPoint.vue'
import Header from '~/components/Header.vue'
import ResponseBody from '~/components/ResponseBody.vue'

export default {
  name: 'HomePage',

  components: {
    EndPoint,
    Header,
    ResponseBody
  }

}
</script>
