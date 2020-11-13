<template>
    <div>
        <div>
            <h1>Set your Location</h1>
            <p>Geolocation requires https, so coordinates must be added manually.</p>
            <p>You may also select one of these options, which are preset to the named location:</p>
        </div>
        <div>
            <ul class>
                <li><a @click="select('BYU')" href="#">BYU Campus</a></li>
                <li><a @click="select('SLT')" href="#">Salt Lake Temple</a></li>           
            </ul>
        </div>

        <form id="input">
            <label for="lat">Latitude: </label><br>
            <input type="text" id="lat" value=""><br>
            <label for="lon">Longitude: </label><br>
            <input type="text" id="lon" value=""><br><br>
            <input id="get" type="submit" v-on:click="select('CUST')" value="Set Location">
            <p>Location Saved: {{this.$root.$data.location.latitude}}, {{this.$root.$data.location.longitude}}</p>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Browse',
        methods: {
            select(loc) {
                let d = this.$root.$data;
                switch(loc) {
                    case "BYU":
                        d.location = {latitude: 40.2518435, longitude: -111.6515043};
                        break;
                    case "SLT":
                        d.location = {latitude: 40.7704462, longitude: -111.8941115};
                        break;
                    case "CUST":
                        d.location = {latitude: Number(document.getElementById("lat").value), longitude: Number(document.getElementById("lon").value)};
                        break;
                }
                let url = "https://api.openchargemap.io/v3/poi/?&maxresults=10&includecomments=true&key=" + d.key +
                    "&latitude=" + d.location.latitude + "&longitude=" + d.location.longitude;

                fetch(url)
                    .then((res) => {
                        return res.json();
                    }).then((res) => {
                        d.products = res;
                    })
            },
        }
    }
</script>

<style scoped>
h1 {
    justify-content: center;
}
#input {
  justify-content: center;
  align-content: center;
  font-size: 1.5em;
  color: #1c1c1c;
}
</style>