<template>
  <div class="container">
    <h1>Latest Post</h1>
    <label for="created-post">Say Something</label>
    <input type="text" id="create-post" v-model="text" placeholder="create new post">
  <button v-on:click="createPost">Post</button>
  
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="post-container">
      <div
        class="post"
        v-for="(post,index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{`${post.createdAt.getDate()/post.createdAt.getDate()/post.createdAt.getFullYear()}`,}}
        <p class="text">{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  // beforeCreate() {
  //   console.log("Nothing get called before me!");
  // },
  //  computed: {
  //   propertyComputed() {
  //     console.log('I change when this.property changes.')
  //     return this.property
  //   }
  // },
 async created() {
    // this.property = "Example property update.";
    // console.log(
    //   "propertyComputed will update, as this.property is now reactive."
    // );

     try {
       this.posts = await PostService.getPosts();
     } catch (error) {
       this.error = error.message;
     }
  },
  methods:{
    async createPost () {
      await PostService.inserPost(this.text);
      this.posts = await PostService.getPosts();
    
    },
    async deletePost (id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 880px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  margin-bottom: 15px;
}
div.craeted-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
