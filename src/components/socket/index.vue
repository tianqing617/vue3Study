<template>
  <span>socket</span>
</template>

<script>
  export default {
    name: 'SocketDemo',
    setup() {
      console.log('test socket');

      var ws = new WebSocket("wss://echo.websocket.org");

      ws.onopen = function(evt) {
        console.log("Connection open ..."); 
        ws.send("Hello WebSockets!");
      };

      ws.onmessage = function(evt) {
        console.log( "Received Message: " + evt.data);
        ws.close();
      };

      ws.onclose = function(evt) {
        console.log("Connection closed.");
      };
    }
  }
</script>