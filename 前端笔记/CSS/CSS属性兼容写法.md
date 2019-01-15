1. 一种是用js判断兼容性

   ```js
   // JS
   if ("CSS" in window && "supports" in window.CSS) {
   	var support = window.CSS.supports("mix-blend-mode","difference");
   	support = support?"mix-blend-mode":"no-mix-blend-mode";
   	document.documentElement.className += support;
   }
   
   // CSS
   h1 { color: #000; }
   .mix-blend-mode body {
   	background-image: linear-gradient(90deg,#fff 49.9%,#000 50%);
   }
   
   .mix-blend-mode h1 {
      color: #fff;
      mix-blend-mode: difference;
   }
   ```

2. 用CSS中的@supports

   ```css
   @supports (mix-blend-mode: difference) {
       body {
           background-image: linear-gradient(90deg,#fff 49.9%,#000 50%)
       }
       h1 {
           color: #fff;
           mix-blend-mode: difference;
       }
   }
   ```

   