# cordova-vue-configuration

**Cordova** 
  - clear www folder
  
**Vue** 
  - router.js : 
      cordova doesn't support history mode, so i change this : 
      ```
      mode: window.cordova ? '' : 'history',
      ```
  - index.html:
    include cordova script 
    ```
    <script src="cordova.js"></script>
    ```
 - main.js :
   handled deviceready event: signals that Cordova's device APIs have loaded and are ready to access.
    ```
    // Attendo l'evento deviceready generato da cordova
    document.addEventListener("deviceready", () => {
      init();
    });

    // Se non ho cordova (es. avvio web), simulo l'evento deviceready
    if (!!!window.cordova) {
      document.dispatchEvent(new CustomEvent("deviceready", {}));
    }
     ```
  - vue.config.js :
    create this file to manage relative public path (necessary for cordova) and change default output dist folder 
    ```
    module.exports = {
        publicPath: './'
        outputDir: '../cordova/www'
    }
    ```
