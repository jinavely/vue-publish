<template>
  <header>
    <router-link to="/login" class="login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<!-- scope 및 scss -->
<style scope lang="scss"> 
header {
  .login {
    color: yellow;
  }
}
</style>