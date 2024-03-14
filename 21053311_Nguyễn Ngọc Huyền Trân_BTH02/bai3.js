
    function confirmFormSubmit() {
        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phone").value;
        var feedback = document.getElementById("message").value;

        var message = "Thông tin của bạn:\n\n" +
            "Họ và tên: " + name + "\n" +
            "Email: " + email + "\n" +
            "Số điện thoại: " + phoneNumber + "\n" +
            "Nội dung góp ý: " + feedback;

        if (confirm(message)) {
            // If user confirms, submit the form
            return true;
        } else {
            // If user cancels, prevent form submission
            return false;
        }
    }