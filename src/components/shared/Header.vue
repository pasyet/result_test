<script>
// import Search from "../shared/Search.vue"
export default {
    components: {
    // Search
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="menu">
        <router-link to="/" tag="a">Home</router-link>
        <router-link to="/about" tag="a">About</router-link>
        <router-link to="/search" tag="a">Search</router-link>
      </div>
      <!-- <div>
        <Search/>
      </div> -->
    </div>    
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 7rem;
  background: #34495e;
  display: flex;
  justify-content: center;

  .container {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      cursor: pointer;
      height: 4rem;

      img {
        width: 5rem;
      }
    }

    .menu {
      a {
        color: #ffffff;
        margin: 0 5px;
        padding: 1rem;
        font-size: 1.2rem;

        &.router-link-exact-active {
          border: 1px solid #54677a;
          background: #54677a;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>