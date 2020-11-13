<template>
    <div>
        <h1>About Open Charge Map</h1>
        <p>The following information is pulled from the main website, accessible <a href="https://openchargemap.org/site">here</a>.</p>

        <h2>Our Service</h2>
        <p>Open Charge Map is a non-commercial, non-profit, electric vehicle data service hosted and supported by a community of businesses, charities, developers and interested parties around the world.</p>

        <h2>Our Aim</h2>
        <p>Our aim is to work with the community to develop and provide a high quality, public, free, open database of charging equipment locations globally.</p>
        <p>Our goal is to avoid the proliferation of independent conflicting charging location maps/websites/applications and to provide (as much as possible) a reliable single point of reference for charging equipment location information. Instead of competing with other data providers we aim to cooperate with and provide services to them, in exchange for data sharing and de-duplication efforts.</p>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        components: {
        },
        computed: {
            
        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
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