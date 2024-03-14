
        function confirmFormSubmit() {
            var name = document.getElementById("Ho-ten").value;
            var CardCode = document.getElementById("Ma-the").value;
            var PhoneNumber = document.getElementById("So-dien-thoai").value;
            var email = document.getElementById("email").value;
            var CustomerType = document.getElementById("Loai-KH").value;
            var OrderCode = document.getElementById("Ma-HD").value;
            var feedback = document.getElementById("Noi-dung").value;

            var message = "Thông tin của bạn:\n\n" +
            "Họ và tên: " + name + "\n" +
            "Mã thẻ: " + CardCode + "\n" +
            "Số điện thoại: " + PhoneNumber + "\n" +
            "Email: " + email + "\n" +
            "Loại KH: " + CustomerType + "\n" +
            "Mã HD: " + OrderCode + "\n" +
            "Nội dung góp ý: " + feedback;

            return confirm(message);
        }
    