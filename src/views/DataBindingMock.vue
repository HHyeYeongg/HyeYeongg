<template>
    <div>
            <table>
                <thead>
                    <tr>
                        <th>자산번호</th>
                        <th>자산명</th>
                        <th>지급일</th>
                        <th>소유자명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  :key ="i" v-for="(asset,i) in assetList">
                        <td>{{asset.asset_number}}</td>
                        <td>{{asset.asset_name}}</td>
                        <td>{{asset.date}}</td>
                        <td>{{asset.user_name}}</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            assetList: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList(){
            this.assetList = await this.$api("https://d03044f6-df2f-470e-b8e1-9ed8e15a9693.mock.pstmn.io/list","get");
        }
    }
})
</script>
<style scoped>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width : 100%;
    }
    td,th {
        border: 1px solid #dddddddd;
        text-align: center;
        padding: 8px;
    }
</style>