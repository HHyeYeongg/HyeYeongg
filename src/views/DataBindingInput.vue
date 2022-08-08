<template>
    <div>
        <input type="text" v-model="valueModel">
        <br><br>
        <input type="number" v-model.number="numberValue">
        <br><br>
        <textarea v-model="messageBox"></textarea>
        <br><br>
        <select v-model="AhnDaeHoonValue">
            <option value='01'>안대훈차장님</option>
            <option value='01'>안수민</option>
            <option value='01'>안수현</option>
        </select>
        <br><br>
        <label>
            <input type="checkbox" v-model="checked">{{checked}}
        </label>
        <br><br>
        <div>
            <label><input type="checkbox" value = "정보운영팀" v-model="checked2">정보운영팀</label>
            <label><input type="checkbox" value = "정보운영팀22" v-model="checked2">정보운영팀22</label>
            <label><input type="checkbox" value = "정보운영팀33" v-model="checked2">정보운영팀33</label>
            <br><br>
            <span>퀴즈퀴즈{{checked2}}</span>
        </div>
        <br><br>
            <label><input type="radio" v-bind:value="radioValue" v-model="picked">정보운영팀</label>
            <label><input type="radio" v-bind:value="radioValue2" v-model="picked">정보운영팀2</label>
            <label><input type="radio" v-bind:value="radioValue3" v-model="picked">정보운영팀3</label>
        <br><br>
            <span>퀴즈퀴즈!!!{{picked}}</span>

    </div>
</template>
<script>
export default ({
    data() {
        return { //초기설정값들
            valueModel : 'Hanssem',
            numberValue : 3,
            messageBox : "글자를 입력해주세요",
            AhnDaeHoonValue : '01' ,
            checked : true,
            checked2 : [],
            picked : '',
            radioValue : "정보운영팀",
            radioValue2 : "정보운영팀2",
            radioValue3 : "정보운영팀3"
        };
    }
})
</script>