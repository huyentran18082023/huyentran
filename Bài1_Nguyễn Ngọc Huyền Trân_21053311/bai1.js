const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    let autoScrollInterval; // Biến để lưu trữ interval
    
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            const scrollAmount = imageList.clientWidth; // Khoảng cách để cuộn
            const isAtEnd = imageList.scrollLeft >= maxScrollLeft;
            
            if (isAtEnd) {
                // Nếu đang ở cuối, cuộn lại đầu
                imageList.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Cuộn đến vị trí tiếp theo
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }, 2000); // Tự động chuyển sau 3 giây
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval); // Dừng tự động cuộn khi cần
    };

    // Xử lý thanh cuộn kéo
    scrollbarThumb.addEventListener("mousedown", (e) => {
        stopAutoScroll(); // Dừng tự động cuộn khi kéo thanh cuộn
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            startAutoScroll(); // Bắt đầu lại tự động cuộn khi dừng kéo
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Xử lý nút bấm chuyển qua lại
    slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            stopAutoScroll(); // Dừng tự động cuộn khi sử dụng nút
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            startAutoScroll(); // Bắt đầu lại tự động cuộn sau khi nhấn nút
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });

    startAutoScroll(); // Bắt đầu tự động cuộn khi khởi động
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
