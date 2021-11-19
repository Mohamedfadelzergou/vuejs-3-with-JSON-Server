<template>
<div class="col-md-6 mx-auto">
  <h1>Edit Post</h1>
  <form @submit.prevent="Modifier">
      <div class="form-group">
          <label for="title">Title</label>
          <input id="title" v-model="post.title" type="text" class="form-control">
      </div>
      <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="post.content" rows="3" class="form-control"></textarea>
      </div>
      <div class="form-group">
          <button type="submit" class="btn btn-sm btn-warning form-control mt-2">Update</button>
      </div>
  </form>
</div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            post:{
            title:'',
            content:''
            }
        }
    },
    methods:{
        Modifier(){
            if(this.post.title == '' && this.post.content == ''){
                return;
            }
            fetch(`http://localhost:5000/posts/${this.id}`,{
             method:'PUT',
             headers:{ 'Content-Type' : 'application/json'},
             body: JSON.stringify(this.post)
             })
            .then(res => res.json())
            .then(data => this.$router.push('/blog'))
            .catch(err => console.log(err))
        }
    }
    ,
    mounted(){
        fetch(`http://localhost:5000/posts/${this.id}`)
        .then(res => res.json())
        .then(data => this.post=data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>