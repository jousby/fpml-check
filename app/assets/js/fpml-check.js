$(document).ready(function() {
  
  $('#contact').hover(function(event) {

    $('#contact').popover({
      content: 'Blah blah is the supreme authority on all things fpml',
      placement: 'bottom'
    });
    $('#contact').popover('show');
    
  });
  
  // ----------------------------------------------------- Ajax Form Submission

  var progressModal = $('#progressModal');
  var fpmlSubmissionForm = $('#fpmlSubmissionForm');
  
  // run the add account function if the create button is clicked
  $('#submitButton').click(function(event) {
    
    progressModal.modal('show');
    
    $.ajax({
      url: "/validateFpml",
      data: fpmlSubmissionForm.serialize(),
      type: "POST",
      success: function(data) {
        progressModal.modal('hide');
      },
      error: function(data) {
        handleFormErrors(data.responseText);
      }
    });    
  });
  
  function handleFormErrors(errors) {
    clearErrorState(fpmlSubmissionForm);
    
    // set error state for current fields in error
    var jsonErrorsObject = $.parseJSON(errors);    
    $.each(jsonErrorsObject, function(key,val) {
      var field = fpmlSubmissionForm.find('#' + key + '_field');
      field.addClass('control-group error');
      field.find('.help-inline').text(val);
    });
  };

  // clean any current error state in the form
  function clearErrorState(form) {
    form.find('*[id*="_field"]').each(function() {
      $(this).removeClass('control-group error');
      $(this).find('.help-inline').text('');
    });    
  };
  

});