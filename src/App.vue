<template>
  <div id="app">
    <navigation />
    <div class="app-content">
      <sidebar />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/SideBar";
export default {
  components: {
    Navigation,
    Sidebar
  }
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  color: #031131;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app-content {
  display: flex;
  flex: 1;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
