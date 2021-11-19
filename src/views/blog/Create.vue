<template>
<div class="col-md-6 mx-auto">
    <h1>New Post</h1>
  <form @submit.prevent="Create">
      <div class="form-group">
          <label for="title">Title</label>
          <input id="title" v-model="title" type="text" class="form-control">
      </div>
      <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="content" rows="3" class="form-control"></textarea>
      </div>
      <div class="form-group">
          <button type="submit" class="btn btn-sm btn-success form-control mt-2">Ajouter</button>
      </div>
  </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            content:""
        }
    },
    methods:{
        Create(){
         let post={
             title:this.title,
             content:this.content
         };
         fetch("http://localhost:5000/posts",{
             method:'POST',
             headers:{ 'Content-Type' : 'application/json'},
             body: JSON.stringify(post)
             })
        .then(() => this.$router.push('/blog'))
        .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>