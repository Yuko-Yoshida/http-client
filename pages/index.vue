<template>
  <section class="section">
      <div class="columns">
        <div class="column">
          <EndPoint />
          <Header />
        </div>
      </div>
  </section>
</template>

<script lang="ts">

import EndPoint from '~/components/EndPoint.vue'
import Header from '~/components/Header.vue'

export default {
  name: 'HomePage',

  components: {
    EndPoint,
    Header
  }

}
</script>
