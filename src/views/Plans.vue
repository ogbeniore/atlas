<template>
  <div class="app-view">
    <div class="page">
      <div class="top-bar">
        <button class="sort-dropdown">
          <i class="fas fa-bars"></i> <span class="with-margin">Date &#9660;</span>
        </button>
        <div class="actions">
          <button class="action-button">
            <i class="fas fa-plus"></i> <br>
            Add
          </button>
          <button class="action-button">
            <i class="fas fa-download"></i> <br>
            Download
          </button>
        </div>
      </div>
      <vue-perfect-scrollbar class="bottom-content" v-once :settings="settings" @ps-scroll-y="scrollHanle">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Interval</th>
              <th>Amount</th>
              <th>Count</th>
              <th>Description</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>6</td>
              <td>GHC 279</td>
              <td>10</td>
              <td>Lorem Ipsum</td>
              <td>22/22/22</td>
            </tr>
          </tbody>
        </table>
      </vue-perfect-scrollbar>
    </div>
    <footer>
      <p>Powered by <img src="@/assets/atlas_logo.svg" alt=""> </p>
    </footer>
  </div>
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
footer {
  text-align: right;
}
.ps__scrollbar-y {
  background-color: #031131 !important;
}
.app-view {
  flex: 1;
  padding: 10px 40px;
  width: 100%;
}
.top-bar {
  color: #031131;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}
.bottom-content {
  height: 70vh;
}
.sort-dropdown {
  color: #031131;
  background: transparent;
  border: none;
  font-size: 16px;
}
.actions {
  display: flex;
  flex-direction: flex-end;
}
.action-button {
  color: #031131;
  font-size: 16px;
  background: transparent;
  border: none;
}
.with-margin {
  margin-left: 10px;
}
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
thead {
  background: #031131;
  color: #ffffff;
}
tbody + tbody,
td,
th,
thead th {
  border: 0;
  padding: 1em;
}
</style>
