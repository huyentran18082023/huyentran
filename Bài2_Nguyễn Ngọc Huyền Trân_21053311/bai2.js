var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;
var autoSlideInterval; // Biến lưu trữ interval để tự động chuyển động

// Hàm hiển thị gallery với hình ảnh hiện tại
function showGallery() {
    gallery.classList.add('show');  // Hiển thị gallery

    if (currentIndex === 0) {
        prev.classList.add('hide');  // Ẩn nút "prev" nếu ở đầu
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex === images.length - 1) {
        next.classList.add('hide');  // Ẩn nút "next" nếu ở cuối
    } else {
        next.classList.remove('hide');
    }

    updateImage();  // Cập nhật hình ảnh trong gallery
}

// Hàm cập nhật nguồn hình ảnh
function updateImage() {
    galleryImg.src = images[currentIndex].src;  // Cập nhật nguồn hình ảnh
}

// Hàm bắt đầu tự động chuyển động
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;  // Chuyển sang hình tiếp theo, quay vòng
        showGallery();  // Hiển thị hình ảnh mới
    }, 2000);  // Khoảng thời gian giữa các lần chuyển đổi (2 giây)
}

// Hàm dừng tự động chuyển động
function stopAutoSlide() {
    clearInterval(autoSlideInterval);  // Dừng tự động chuyển đổi khi cần
}

// Khi nhấp vào hình ảnh, hiển thị gallery và bắt đầu tự động chuyển động
images.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        stopAutoSlide();  // Dừng tự động chuyển đổi nếu cần
        currentIndex = index;  // Đặt vị trí hiện tại
        showGallery();  // Hiển thị gallery
        startAutoSlide();  // Bắt đầu tự động chuyển đổi
        e.stopPropagation();  // Ngăn chặn sự kiện lan rộng
    });
});

// Sự kiện nút đóng gallery
close.addEventListener('click', function (e) {
    e.stopPropagation();  // Ngăn chặn sự kiện lan rộng
    stopAutoSlide();  // Dừng tự động chuyển đổi
    gallery.classList.remove('show');  // Đóng gallery
});

// Sự kiện khi nhấn phím "Escape"
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {  // Phím "Escape"
        stopAutoSlide();  // Dừng tự động chuyển đổi
        gallery.classList.remove('show');  // Đóng gallery
    }
});

// Nút điều khiển trước
prev.addEventListener('click', function () {
    stopAutoSlide();  // Dừng tự động chuyển đổi khi sử dụng nút
    if (currentIndex > 0) {
        currentIndex--;  // Chuyển về trước
        showGallery();  // Hiển thị hình ảnh trước
        startAutoSlide();  // Bắt đầu lại tự động chuyển đổi
    }
});

// Nút điều khiển tiếp theo
next.addEventListener('click', function () {
    stopAutoSlide();  // Dừng tự động chuyển đổi khi sử dụng nút
    if (currentIndex < images.length - 1) {
        currentIndex++;  // Chuyển sang hình tiếp theo
        showGallery();  // Hiển thị hình ảnh mới
        startAutoSlide();  // Bắt đầu lại tự động chuyển đổi
    }
});

// Bắt đầu tự động chuyển đổi ngay khi trang được tải
startAutoSlide();
