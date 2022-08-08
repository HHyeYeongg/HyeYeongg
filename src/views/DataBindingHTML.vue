<template>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
    <br><br>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
    <br><br>
    <div v-bind:style="[baseStyle,addStyle]">배열 인랑린 스타일 바인딩</div>
</template>>
<script>
export default ({
    data() {
        return {
            htmlString : '<p style="color:red;">TEST TEST</p>' ,
            styleObject: {
                color:'red',
                fontSize: '13px'
            } ,
            baseStyle: 'background-color:yellow;width:100%;height:200px;',
            addStyle: 'color:red;font-weight:bold;'
        };
    }
})
</script>