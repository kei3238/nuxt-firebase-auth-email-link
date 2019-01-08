<template>
  <section class="container">
    <div>
      <Signin/>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase';
import 'firebaseui/dist/firebaseui.css';
import Signin from '@/components/Signin';

export default {
  components: {
    Signin,
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Sign in success
        this.$router.push('MyPage')
      } else {
        // Error handle
      };
    });
  },
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
