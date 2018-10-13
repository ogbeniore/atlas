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
  color: #031131;
}
.app-content {
  display: flex;
}
</style>
