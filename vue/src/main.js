import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const init = () => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
};

// Attendo l'evento deviceready generato da cordova
document.addEventListener("deviceready", () => {
  init();
});

// Se non sono su Cordova, simulo l'evento deviceready
if (!!!window.cordova) {
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}