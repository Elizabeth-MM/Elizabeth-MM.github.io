let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: ##228af5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: ##000476;">Soy estudiante y me gusta las matemáticas y finanzas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
