<template>
  <div>
    <div class="wrapper">
      <h1>Nearest Chargers to You:</h1>
      <p>Location Saved: {{this.$root.$data.location.latitude}}, {{this.$root.$data.location.longitude}}</p>
    </div>
    <ProductList :products="products" />
  </div>
</template>

<script>
  import ProductList from "../components/ProductList.vue"
  export default {
    name: 'Home',
    components: {
      ProductList
    },
    data() {
      return {
        searchText: '',
      }
    },
    computed: {
      products() {
        return this.$root.$data.products;
      }
    },
  } 
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .search {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 50%;
  }

  form {
    display: table;
    width: 100%;
  }

  i {
    display: table-cell;
    padding-left: 10px;
    width: 1px;
  }

  input {
    display: table-cell;
    font-size: 20px;
    border: none !important;
    box-shadow: none !important;
    width: 100%;
    height: 40px;
  }
</style>