$(function() {
  var sheet = document.createElement('style')
  sheet.innerHTML = "div .category {display:none;}";
  document.body.appendChild(sheet);

  var h=window.location.hash.replace('#', '');
  document.getElementById(h).style.display = 'inline';
});