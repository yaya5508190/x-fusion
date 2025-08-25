<template>
  <v-layout class="rounded rounded-md border">
    <v-navigation-drawer
      permanent
      :rail="rail"
    >
      <v-list>
        <v-list-item
          prepend-avatar="@/assets/logo.png"
          title="yx"
        />
      </v-list>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
        />
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        />
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="0">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="rail = !rail" />
      </template>

      <!--      <v-app-bar-title>Application Bar</v-app-bar-title>-->
      <template #append>
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          hide-details
          label="搜索"
          single-line
          style="width: 10em;margin-right: 1em;"
          variant="solo"
        />
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  const rail = ref(false)
</script>
