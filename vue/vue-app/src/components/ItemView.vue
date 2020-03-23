<template>
    <div id="item-view">
        <ol v-for="item in items" :key="item.id">
          <li>{{ item.name }}</li>
          <li>{{ item.url }}</li>
          <li>{{ item.audio }}</li>
        </ol>
        <div id="subject" class="first-view">
            <h2 class="title">Loading</h2>
            <img src="img/place-holder.png">
            <audio id="sounds"></audio>
        </div>
        <div class="button-group" id="navigation">
            <button id="player" class="button"><span class="play"></span></button>
            <br>
            <br>
            <button id="back" class="button">Back</button>
            <button id="first-subject" class="button"></button>
            <button id="exit" class="first-view button">EXIT</button>
            <br>
        </div>
    </div>
</template>
<script>
    export default{
        name: "item-view",
        props: {
            items: Array,
        }
    }

</script>

<style>
</style>