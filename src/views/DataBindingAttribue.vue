<template>
    <div class = "test">
        <img v-bind:src ="imgSrc" />
        <br><br>
        <input type = "text" v-model ="textValue" />
        <button type = "button" v-bind:disabled="textValue==''">버튼클릭</button>
    </div>
</template>>
<script>
export default ({
    data() {
        return {
            imgSrc : "https://kr.vuejs.org/images/logo.png",
            textValue : ""
        };
    }
})
</script>