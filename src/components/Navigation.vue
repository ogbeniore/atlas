<template>
  <div class="navigation">
    <div class="navigation-container">
      <div class="navigation-left">
        <button class="navigation-brand">
          <div class="rounded-image">
            <img src="../assets/logo.png" alt="atlas logo">
          </div>
          <span class="font-1-1">Aisha Couture &#9660;</span>
        </button>
        <form class="search-container">
          <input class="search-box" type="search">
          <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDYxNS41MiA2MTUuNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxNS41MiA2MTUuNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8ZyBpZD0iU2VhcmNoX194MjhfYW5kX3Rob3Vfc2hhbGxfZmluZF94MjlfIj4KCQkJPGc+CgkJCQk8cGF0aCBkPSJNNjAyLjUzMSw1NDkuNzM2bC0xODQuMzEtMTg1LjM2OGMyNi42NzktMzcuNzIsNDIuNTI4LTgzLjcyOSw0Mi41MjgtMTMzLjU0OEM0NjAuNzUsMTAzLjM1LDM1Ny45OTcsMCwyMzEuMjU4LDAgICAgICBDMTA0LjUxOCwwLDEuNzY1LDEwMy4zNSwxLjc2NSwyMzAuODJjMCwxMjcuNDcsMTAyLjc1MywyMzAuODIsMjI5LjQ5MywyMzAuODJjNDkuNTMsMCw5NS4yNzEtMTUuOTQ0LDEzMi43OC00Mi43NzcgICAgICBsMTg0LjMxLDE4NS4zNjZjNy40ODIsNy41MjEsMTcuMjkyLDExLjI5MSwyNy4xMDIsMTEuMjkxYzkuODEyLDAsMTkuNjItMy43NywyNy4wODMtMTEuMjkxICAgICAgQzYxNy40OTYsNTg5LjE4OCw2MTcuNDk2LDU2NC43NzcsNjAyLjUzMSw1NDkuNzM2eiBNMzU1LjksMzE5Ljc2M2wtMTUuMDQyLDIxLjI3M0wzMTkuNywzNTYuMTc0ICAgICAgYy0yNi4wODMsMTguNjU4LTU2LjY2NywyOC41MjYtODguNDQyLDI4LjUyNmMtODQuMzY1LDAtMTUyLjk5NS02OS4wMzUtMTUyLjk5NS0xNTMuODhjMC04NC44NDYsNjguNjMtMTUzLjg4LDE1Mi45OTUtMTUzLjg4ICAgICAgczE1Mi45OTYsNjkuMDM0LDE1Mi45OTYsMTUzLjg4QzM4NC4yNzEsMjYyLjc2OSwzNzQuNDYyLDI5My41MjYsMzU1LjksMzE5Ljc2M3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </form>
      </div>
      <div class="navigation-right">
        <ul class="navigation-list">
          <li class="navigation-list-item">
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </li>
          <li class="navigation-list-item">
            <div class="notification">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxNiA0MTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNiA0MTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTIwOCw0MTZjMjMuNTczLDAsNDIuNjY3LTE5LjA5Myw0Mi42NjctNDIuNjY3aC04NS4zMzNDMTY1LjMzMywzOTYuOTA3LDE4NC40MjcsNDE2LDIwOCw0MTZ6IiBmaWxsPSIjRkZEQTQ0Ii8+CgkJCTxwYXRoIGQ9Ik0zMzYsMjg4VjE4MS4zMzNjMC02NS42LTM0Ljg4LTEyMC4zMi05Ni0xMzQuODI3VjMyYzAtMTcuNzA3LTE0LjI5My0zMi0zMi0zMnMtMzIsMTQuMjkzLTMyLDMydjE0LjUwNyAgICAgYy02MS4xMiwxNC41MDctOTYsNjkuMjI3LTk2LDEzNC44MjdWMjg4bC00Mi42NjcsNDIuNjY3VjM1MmgzNDEuMzMzdi0yMS4zMzNMMzM2LDI4OHoiIGZpbGw9IiNGRkRBNDQiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              <span class="notification-on"></span>
            </div>
          </li>
          <li class="navigation-list-item">
            <button class="navigation-brand --profile">
              <div class="rounded-image">
                <img src="../assets/logo.png" alt="atlas logo">
              </div>
              <span>&#9660;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      toggled: false
    };
  }
};
</script>
<style scoped>
.navigation {
  width: 100%;
  background: #ffffff;
  height: 80px;
  border-bottom: 1px solid #031131;
}
.navigation-container {
  padding: 10px 3em;
  display: flex;
  justify-content: space-between;
}
.navigation-left {
  display: flex;
}
.navigation-brand {
  background: transparent;
  border: none;
  max-height: 60px;
}
.rounded-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto;
}
.navigation-brand img {
  width: 40px;
  height: 40px;
}
.navigation-brand p {
  margin: 0;
}
.navigation-brand:hover {
  cursor: pointer;
}
.search-container {
  display: inline-flex;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  overflow: hidden;
  max-height: 40px;
  margin: 0.6em 2em;
  width: 400px;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .search-container {
    display: none;
  }
}
.search-icon {
  padding: 0.5rem;
}
.search-box {
  border: 0;
  padding: 1rem;
  flex: 1;
}
.navigation-list {
  margin-left: 0;
  list-style: none;
  display: flex;
}
.navigation-list-item {
  padding: 0 1em;
}
.navigation-brand.--profile {
  display: flex;
  align-content: flex-end;
}
.navigation-brand.--profile .rounded-image,
.navigation-brand.--profile .rounded-image img {
  width: 30px;
  height: 30px;
}
.navigation-brand.--profile span {
  margin-top: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 26px;
}
.switch input {
  display: none;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #031131;
}
input:focus + .slider {
  box-shadow: 0 0 1px #031131;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.font-1-1 {
  font-size: 1.1em;
}
.notification,
.notification img {
  width: 30px;
  height: 30px;
}
</style>
