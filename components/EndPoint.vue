<template>
  <div class="containar">
    <div class="card">
      <div class="field has-addons">
        <b-dropdown
            v-model="method"
            aria-role="list">
            <button class="button is-primary" type="button" slot="trigger">
                <span>{{ methodName }}</span>
                <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item value="0" aria-role="listitem">
                <span>GET</span>
            </b-dropdown-item>
            <b-dropdown-item value="1" aria-role="listitem">
                <span>POST</span>
            </b-dropdown-item>
            <b-dropdown-item value="2" aria-role="listitem">
                <span>PUT</span>
            </b-dropdown-item>
            <b-dropdown-item value="3" aria-role="listitem">
                <span>DELETE</span>
            </b-dropdown-item>
        </b-dropdown>

        <p class="control is-expanded">
          <input class="input" type="text" placeholder="End point">
        </p>
        <p class="control">
          <a class="button">
            Send
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./script/endPoint.ts" lang="ts" />
