<html>
  <head>
    <style>
      .clicker {
        width: 100px;
        height: 50px;
        background-color: blue;
        color: white;
        text-align: center;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="clicker" id="clicker">Click me</div>
    <script>
      const clicker = document.getElementById("clicker");
      let clicks = 0;
      let clicking = false;
      clicker.addEventListener("click", function() {
        if (!clicking) {
          clicking = true;
          setInterval(function() {
            clicks++;
            clicker.innerHTML = "Clicks: " + clicks;
          }, 50);
        }
      });
    </script>
  </body>
</html>
