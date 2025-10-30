
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

  // Wait 3 seconds before showing the modal
  setTimeout(() => {
    // Select the modal element
    var myModalEl = document.getElementById('discountModal');
    
    // Create a new Bootstrap modal instance
    var modal = new bootstrap.Modal(myModalEl);
    
    // Show the modal
    modal.show();
  }, 3000); // 3000 milliseconds = 3 seconds
  
  // Optional: Handle the coupon button click
  var couponBtn = document.getElementById('getCouponBtn');
  couponBtn.addEventListener('click', () => {
    var emailInput = document.getElementById('modalEmailInput');
    if (emailInput.value) {
      console.log('Email submitted:', emailInput.value);
      // Here you would add code to send the email to your server
      
      // Hide the modal after submission
      var modalInstance = bootstrap.Modal.getInstance(myModalEl);
      modalInstance.hide();
      
      // Optional: Show a "thank you" message
      alert('Thanks! Your coupon is on its way.');
    } else {
      emailInput.classList.add('is-invalid'); // Show error if empty
    }
  });

});