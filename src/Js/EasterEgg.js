/*Easter Egg 1 script (Change Color Button) */


const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.backgroundColor = 'Green';
  window.setTimeout(function() {document.body.style.backgroundColor = 'rgb(149, 161, 192)';}, 1000);




  /*
  function showmeme(){
      document.getElementById('meme').style.display="block";
      window.setTimeout("document.getElementById('meme').style.display='none';", 200);
  }
  */
});