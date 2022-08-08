<template>
<div>
    <table>
        <thead>
            <tr>
                <th>팀명</th>
                <th>사번</th>
                <th>이름</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(saram, i) in saramList">
                <td>{{saram.team}}</td>
                <td>{{saram.sabun}}</td>
                <td>{{saram.name}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default ({
    data() {
        return {
            saramList: [
                {"team":"정보운영팀","sabun": "1111111111","name":"사람이름2233"},
                {"team":"정보운영팀","sabun": "1111111111","name":"사람이름"},
                {"team":"정보운영팀","sabun": "1111111111","name":"사람이름"}
            ]
        };
    }
})
</script>
<style scoped>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100;
    }
    td, th{
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
</style>