(function() {
  var cntBtn = document.getElementById('cntBtn');
  var cntCancel = document.getElementById('cntCancel');
  var cntDialog = document.getElementById('cntDialog');

  cntBtn.addEventListener('click', function() {
    cntDialog.showModal();
  });

  cntCancel.addEventListener('click', function() {
    cntDialog.close();
  });
})();
