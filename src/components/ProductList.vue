<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.AddressInfo.AddressLine1">
        <div class="info">
          <h1>{{getLocationTitle(product)}}</h1>
        </div>
        <div>
          <button class="auto" v-on:click="navigate(product)">Navigate</button>
        </div>
        <div class="image">
          <p><br>{{product.AddressInfo.AddressLine1}}</p>
          <p>{{product.AddressInfo.Town}}, {{product.AddressInfo.StateOrProvince}} {{product.AddressInfo.Postcode}}</p>
          <p><br>{{getLocationInfo(product)}}</p>
          <p>Availability: {{product.AddressInfo.AccessComments}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductList',
    props: {
      products: Array
    },
    methods: {
      navigate(product) {
        let link = "https://www.google.com/maps/search/?api=1&query=" + product.AddressInfo.Latitude + "," + product.AddressInfo.Longitude;
        window.open(link);
      },
      getLocationTitle(loc){
        let title = "";
        if(loc.OperatorInfo)
          title += loc.AddressInfo.Title + " - " + loc.OperatorInfo.Title;
        else
          title += loc.AddressInfo.Title;
        return title;
      },
      getLocationInfo(loc){
        let info = "Distance: ";
        if (loc.AddressInfo.Distance)
          info += Math.ceil(loc.AddressInfo.Distance) + " miles";
        else
          info += "Not given"
        return info;
      },
      
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .products {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .product {
    margin: 10px;
    margin-top: 50px;
    width: 200px;
    border: 2px solid #333;
  }

  .product .image {
    display: flex;
    flex-direction: column;
    
    margin-bottom: 5px;
  }

  .info {
    background: #8cc63f;
    color: #000;
    padding: 10px 10px;
  }

  .image {
    height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product h1 {
    font-size: 16px;
  }

  .product h2 {
    font-size: 14px;
  }

  .product p {
    margin: 0px;
    font-size: 12px;
  }

  .price {
    display: flex;
  }

  button {
    height: 40px;
    background: #000;
    color: white;
    border: none;
    width: 195px
  }

  .auto {
    margin-left: auto;
  }
</style>