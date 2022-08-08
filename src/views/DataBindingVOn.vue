<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>현재숫자는  :"{{counter}}"</p>
        <br><br>
        <button type="button" @click = "setCount(3)">3s 전달</button>
        <p>전달된 숫자 : "{{counter2}}"</p>
        <br><br>
        <button type="button" @click="one(),two()">알럿창</button>
        <br><br>
        <select v-model ="selectValue" @change="changSelect">
            <option value ="상암">상암 사옥</option>
            <option value = "방배">방배</option>
        </select>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            counter: 0,
            counter2: 0,
            selectValue: ''
        };
    },
    methods : {
        increaseCounter(){
            this.counter =this.counter +1;
        },
        setCount(counter2){
            this.counter2 = counter2;
        },
        one() {
            alert("a");
        },
        two() {
            alert("b");
        },
        changSelect() {
            alert(this.selectValue);
        }
    },
    
})
</script>
