<template>
  <section class="container">
    <no-ssr>
      <div>
        {{ userEmail }}
      </div>
    </no-ssr>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data: () => ({
    userEmail: null,
  }),
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // sign in
        this.userEmail = user.email
      } else {
        // not sign in
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
