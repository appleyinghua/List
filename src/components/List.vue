<template>
    <div class="lists">
      <div class='handle'>
        <div class="search">
            <select v-model="selected" :style="bgImg">
            <option value=''>全部</option> 
            <option v-for="(item,index) in options" :key="index">{{item}}</option>
            </select>
        </div>
        <button class='add' @click='incItem'>添加</button>
      </div>
      <table class="pure-table pure-table-horizontal">
        <thead>
          <tr><th>姓名</th><th>日期</th><th>地址</th><th>操作</th></tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in computedList' :key='index'><td>{{item.name}}</td><td>{{item.date}}</td><td>{{item.address}}</td>
          <td><button class='inc' @click='editList(item)'>编辑</button><button class='delete' @click='deleteItem(item.id)'>删除</button></td></tr>
        </tbody>
      </table>
      <FormView :tag='addTag' :edit='editVal' @newData='addData'></FormView>
    </div>
</template>

<script>
import FormView from '../components/Form.vue'
const url = require("../assets/down.png")
export default {
    name: 'List',
    components: {
        FormView
    },
    data() {
        return {
            lists: [],
            editVal: {},
            bgImg: {
                backgroundImage: "url(" + url + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "15px auto",
                backgroundPosition: 'right'
            },
            selected: '',
            addTag: false,
            options: [],
            newItem: {'id':10, 'name':'zsh', 'date':'2020-09-20', 'address':'保定'}
        }
    },
    mounted: function () {
        this.getData()
    },
    computed: {
        computedList() {
            if (this.selected) {
                let arr = [];
                for(let i = 0; i < this.lists.length; i++) {
                    if (this.lists[i].name.search(this.selected) !== -1) {
                    arr.push(this.lists[i])
                    }
                }
                return arr
            } else {
                return this.lists
            }
        }
    },
    watch: {
    },
    methods: {
        getData () {
            // var _this = this
            this.$http.get('./api/delete').then((res) => {
                this.lists = res.data.data
                this.options = this.lists.map((item) => {
                return item.name
                })
            }).catch((error) => {
                console.log(error)
            })
        },
        deleteItem(index) {
            // var _this = this
            this.$http.post('./api/delete',{
                params: {
                id: index
                }
            }).then((res) => {
                this.lists = res.data.data
            }).catch((error) => {
                console.log(error)
            })
        },
        incItem() {
            this.addTag ? this.addTag = false : this.addTag = true
            this.editVal = {}
        },
        addData(data) {
            this.addTag = false
            let resData = JSON.parse(JSON.stringify(this.editVal))
            if (data.id === resData.id) {
                this.$http.post('./api/edit', {
                    params: {
                        data: data
                    }
                }).then((res) => {
                    this.lists = res.data.data
                }).catch((error) => {
                    console.log('编辑出错')
                })
            } else {
                this.$http.post('./api/add', {
                    params: {
                        data: data
                    }
                }).then((res) => {
                    this.lists = res.data.data
                }).catch((error) => {
                    console.log('添加出错')
                })
            }
        },
        editList(item) {
            this.editVal = item
            this.addTag = true
        }
    }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.lists {
  position: relative;
  margin-left: 200px;
}

.lists img {
  width: 16px;
  height: 16px;
    /* margin-left: -30px; */
  position: absolute;
  left: 80px;
  top: 2px;
}
select {
  border: 1px solid grey;
  appearance: none;
  margin-bottom: 10px;
  width: 100px;
  height: 20px;
  font-size: 14px;
  line-height: 14px;
  color: grey;
  padding-left: 10px;
  outline: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  display: inline-block;
  text-align:center;
}

td,th {
  padding: 0;
  text-align: center;
}

.pure-table {
    empty-cells: show;
    border-bottom: 1px solid #e0e0e0;
}
 
.pure-table td,.pure-table th {
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 4em;
}
 
.pure-table thead {
    background-color: #e0e0e0;
    color: #000;
}
 
.pure-table td {
    background-color: transparent;
}
.pure-table-horizontal td,.pure-table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
}
 
.pure-table-horizontal tbody>tr:last-child>td {
    border-bottom-width: 0;
}

.add {
    border-radius: 3px;
    background-color: #4caf50;
    border: none;
    font-size: 14px;
    color: white;
    position: absolute;
    right: 440px;
    top: 1px;
}

.inc, .delete {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: DeepSkyBlue;
}
</style>