<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue'

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data(){
    return {changesSaved: false}
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved = true;
    }
  },
  beforeRouterEnter(to, from, next) {
    console.log('Before component');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList cmp beforeRouteLeav');
    console.log(to, from);
    if (this.changesSaved){
      next();
    } else {
     const  userWantsLeave = confirm('Are you sure? you got unsaved changes!');
     next(userWantsLeave);
    }
  },
  unmounted(){
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
