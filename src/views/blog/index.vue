<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-right">
                <router-link to="create" class="btn btn-primary">Create Post</router-link>
            </div>
        </div>
    <div class="row">
        <div class="col-md-12 my-3" v-for="post in posts">
            <one-post :post="post" @delete="handelDelete"/>
        </div>
    </div>
    </div>
    
</template>

<script>
import Create from './Create.vue'
import OnePost from './OnePost.vue'
export default {
  components: { OnePost, Create },
    data(){
        return{
            posts:[]
        }
    },
    mounted(){
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err))
    },
    methods:{
        handelDelete(id){
            this.posts=this.posts.filter(post => post.id !== id)
        }
    }
}
</script>

<style>

</style>