<template>
  <div class="containar">
    <div class="card">
      <HeaderInput
        v-for="(head, index) in $store.state.endPoint.head"
        :index="index"
        :data="head"
      />
    </div>
  </div>
</template>

<script src="./script/header.ts" lang="ts" />
