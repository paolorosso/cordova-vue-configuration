<template>
  <div>
    <h1> {{msg}}</h1>
    <p>
      <router-link to="/articoli">Articoli</router-link>
      &nbsp;&nbsp;
      <router-link to="/clienti">Clienti</router-link>
    </p>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data: () => ({
    msg: "Avviato !"
  })
};
</script>

