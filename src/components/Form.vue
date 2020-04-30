<template>
    <div v-if='tag' class= 'formView'>
        <form>
            <p>id:<br>
            <input type="number" v-model="newid">
            </p>
            <p>name:<br>
            <input type="text" v-model="name"></p>
            <p>date:<br>
            <input type="text" v-model="date"></p>
            <p>address:<br>
            <input type="text" v-model="address"></p>
            <button @click='submitData'>submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormView',
    props: {
        tag: {
            type: Boolean
        },
        edit: {
            type: Object
        }
    },
    data() {
        return {
            name: '',
            date: '',
            address: '',
            newid: 0 
        }
    },
    watch: {
        edit(newval) {
            this.name = newval.name,
            this.date = newval.date,
            this.address = newval.address,
            this.newid = newval.id
        }
    },
    methods: {
        submitData() {
            let obj = {
                "name": this.name,
                "date": this.date,
                "address": this.address,
                "id": parseInt(this.newid)
            }
            this.$emit('newData', obj)
        }
    }
}
</script>

<style>
.formView {
    position: absolute;
    left: 50%;
    top: 50%;
    background: white;
    padding: 10px;
}
form {
    background: radial-gradient(black, transparent);
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
}
input {
    width: 300px;
}
</style>