<template>
  <div>
    <h1> {{msg}}</h1>
    <p>
      <router-link to="/page1">Page 1</router-link>
      &nbsp;&nbsp;
      <router-link to="/page2">Page 2</router-link>
    </p>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data: () => ({
    msg: "Loaded !"
  })
};
</script>

