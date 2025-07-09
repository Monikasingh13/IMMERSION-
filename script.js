<script>
  document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {

      const name = document.querySelector("[name='fullname']").value.trim();
      const email = document.querySelector("[name='email']").value.trim();
      const amount = document.querySelector("[name='amount']").value.trim();
      const cause = document.querySelector("[name='cause']").value.trim();
      if (!name || !email || !amount || !cause) {
        alert("Please fill out all required fields.");
        event.preventDefault(); 
      } else if (amount <= 0) {
        alert("Donation amount must be greater than zero.");
        event.preventDefault();
      } else {
        alert("Thank you for your generous donation!");
      }
    });
  });
</script>
