<template>
    <div class="nav">
        <div class="title">
            导航标题
        </div>
        <div class="labels">
            <ul class="menu">
                <li @click='handleClick("一级菜单")'>一级菜单
                    <ul class="single" v-if="tagOne">
                        <li>
                            <router-link :to="{ name: 'SubOne' }">主页</router-link>
                        </li>
                    </ul>
                </li>
                <li @click='handleClick("关于")'>关于
                    <ul class="single" v-if="tagTwo">
                        <li>
                            <router-link :to= "{ name: 'SubTwo' }">二级菜单</router-link>
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
                tagOne: false,
                tagTwo: false
            }
        },
        methods: {
            handleClick(value) {
                if (value === '一级菜单') {
                   this.tagOne === true  ? this.tagOne = false : this.tagOne = true
                } else if (value === '关于') {
                   this.tagTwo ? this.tagTwo = false : this.tagTwo = true
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