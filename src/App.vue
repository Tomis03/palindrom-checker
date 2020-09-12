<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.name" />
    </transition>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #424242;

  p {
    margin: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
