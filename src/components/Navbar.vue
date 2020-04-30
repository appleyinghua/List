<template>
    <div class="nav">
        <div class="title">
            导航标题
        </div>
        <div class="labels">
            <ul class="menu">
                <li v-for="(item,index) in navs" :key="index" @click='handleClick(item, item.id)'>
                    {{item.id}}
                    <ul class="single" v-if="item.tagOne">
                        <li>
                            <router-link :to="item.target">{{item.name}}</router-link>
                        </li>
                    </ul>
                </li>
                <li><router-link :to="{name: 'List'}">主菜单</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navs: [{
                id: "一级菜单",
                name: '主页',
                tagOne: false,
                target: '/subone'
                }, {
                id: "关于",
                name: '二级菜单',
                tagOne: false,
                target: '/subtwo'
            }]
        }
    },
    methods: {
        handleClick(item, name) {
            if (name === '一级菜单' || name === '关于') {
                item.tagOne ? item.tagOne = false : item.tagOne = true
            }
        }
    }
}
</script>

<style>
.nav {
    width: 170px;
    float: left;
}

ul {
    list-style: none;
}
a {
    text-decoration: none;
    color: #2c3e50;
}

</style>