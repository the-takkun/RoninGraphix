(function() {
  var rsBtn = document.getElementById('rsBtn');
  var cancelButton = document.getElementById('cancel');
  var rsDialog = document.getElementById('rsDialog');

  rsBtn.addEventListener('click', function() {
    rsDialog.showModal();
  });

  cancelButton.addEventListener('click', function() {
    rsDialog.close();
  });
})();
