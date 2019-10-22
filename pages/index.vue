<template>
  <section class="section">
      <div class="columns is-mobile">
        <EndPoint />
      </div>
  </section>
</template>

<script lang="ts">

import EndPoint from '~/components/EndPoint.vue'

export default {
  name: 'HomePage',

  components: {
    EndPoint,
  }

}
</script>
