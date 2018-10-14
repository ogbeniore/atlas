<template>
  <vue-perfect-scrollbar class="sidebar" v-bar>
    <ul class="sidebar-navigation">
      <li class="sidebar-navigation-item">
        <router-link to="/p/home" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-home"></i>
          <span>
            Home
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/wallet" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-wallet"></i>
          <span>
            Wallet
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/getting-started" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-power-off"></i>
          <span>
            Getting Started
          </span>
        </router-link>
      </li>
      <div class="space"></div>
      <li class="sidebar-navigation-item">
        <router-link to="/" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-tasks"></i>
          <span>
            Plans
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/transactions" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-tag"></i>
          <span>
            Transactions
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/payment" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="far fa-credit-card"></i>
          <span>
            Payment Pages
          </span>
        </router-link>
      </li>
      <div class="space"></div>
      <li class="sidebar-navigation-item">
        <router-link to="/p/teams" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-users"></i>
          <span>
            Teams
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/customers" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-user"></i>
          <span>
            Customers
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/subscription" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-rss"></i>
          <span>
            Subscription
          </span>
        </router-link>
      </li>
      <div class="space"></div>
      <li class="sidebar-navigation-item">
        <router-link to="/p/developers" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-code"></i>
          <span>
            Developers
          </span>
        </router-link>
      </li>
      <li class="sidebar-navigation-item">
        <router-link to="/p/settings" exact class="sidebar-navigation-item-link" exact-active-class="active">
          <i class="fas fa-cogs"></i>
          <span>
            Business Settings
          </span>
        </router-link>
      </li>
      <div class="space"></div>
    </ul>
  </vue-perfect-scrollbar>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 200
      }
    };
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    }
  }
};
</script>
<style>
.ps__scrollbar-y {
  background-color: #ffffff !important;
}
.sidebar {
  width: 240px;
  height: 100%;
  background: #031131;
  color: #ffffff;
}
.sidebar-navigation {
  padding: 2em 0;
  list-style: none;
}
.sidebar-navigation-item {
  min-width: 240px;
  display: flex;
}
.sidebar-navigation-item-link {
  color: #ffffff;
  font-size: 18px;
  flex: 1;
  text-decoration: none;
  padding: 0.6em 0.6em 0.6em 2em;
}
.sidebar-navigation-item:hover {
  background: #ffffff;
  color: #031131;
  width: 100%;
  cursor: pointer;
}
.sidebar-navigation-item-link:hover,
.sidebar-navigation-item-link.active {
  color: #031131;
  background: #ffffff;
}
.space {
  margin-top: 20px;
}
a span {
  padding-left: 1em;
}
</style>
