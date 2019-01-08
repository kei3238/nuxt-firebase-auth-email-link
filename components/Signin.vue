<template>
  <section class="container">
    <div>
      <div id="firebaseui-auth-container"/>
      <div id="loader">Loading...</div>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase';
import 'firebaseui/dist/firebaseui.css';

export default {
  mounted () {
    var firebaseui = require('firebaseui');
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    
    ui.start('#firebaseui-auth-container', {
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      // signInFlow: 'popup',
      signInSuccessUrl: 'MyPage',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
        }
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>'
    });
  }
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
