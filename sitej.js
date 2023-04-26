function showTips(topic) {
  // Get all buttons and remove active class from all of them
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  
  // Add active class to clicked button
  var clickedButton = document.querySelector('.' + topic + '-button');
  clickedButton.classList.add('active');
  
  // Hide all tip lists and show the one for the clicked button
  var tipLists = document.querySelectorAll('.tip-list');
  tipLists.forEach(function(tipList) {
    tipList.style.display = 'none';
  });
  var clickedTipList = document.querySelector('#' + topic + '-tips');
  clickedTipList.style.display = 'block';
}
