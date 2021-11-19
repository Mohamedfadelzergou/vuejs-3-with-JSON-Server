<template>
    <div class="">
        <h2> {{ post.title }}</h2>
        <h2> {{ post.content }}</h2>
    </div>
</template>

<script>
export default {
    props:['id','slug'],
    data(){
        return{
            post:[]
        }
    },
    mounted(){
        fetch(`http://localhost:5000/posts/${this.id}`)
        .then(res => res.json())
        .then(data => this.post = data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>