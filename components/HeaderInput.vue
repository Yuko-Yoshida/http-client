<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" :value="getKey()" type="text" placeholder="key" @change="key">
    </p>
    <p class="control">
      <input class="input" :value="getValue()" type="text" placeholder="value" @change="value">
    </p>
    <p><button v-if="index > 0" class="delete" @click="deleteHeader"></button></p>
  </div>
</template>

<script src="./script/headerInput.ts" lang="ts" />
