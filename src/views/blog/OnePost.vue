<template>
  <h2 @click="toggle=!toggle">{{post.title}}</h2>
  <p v-if="toggle">{{post.content}}</p>
  <div class="my-3">
    <router-link :to="{name:'post-show',params:{id:post.id,slug:post.title}}" class="btn btn-sm btn-info">Show</router-link>
    <router-link :to="{name:'post-edit',params:{id:post.id,slug:post.title}}" class="btn btn-sm btn-warning ms-3">Edit</router-link>
    <button @click="deletePost" class="btn btn-sm btn-danger ms-3">Delete</button>
  </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return{
            toggle:false,
            url:`http://localhost:5000/posts/${this.post.id}`
        }
    },
    methods:{
      deletePost(){
        fetch(this.url,{method:'DELETE'})
        .then(()=>this.$emit('delete',this.post.id))
        .catch(err => console.log(err))
      }
    }
}
</script>

<style>

</style>