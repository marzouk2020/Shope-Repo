
// اخفاء زر العودة للأعلى عند تحميل الصفحة
document.getElementById("back-to-top").style.display = "none";

// عرض زر العودة للأعلى عند النزول لأسفل
window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// التحرك لأعلى الصفحة عند النقر على زر العودة للأعلى
document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


    // تحديد العناصر اللازمة
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsCount = document.querySelector('.cart-items-count');

    // إضافة حدث النقر لزر "إضافة إلى السلة"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // زيادة عدد العناصر في السلة
            let count = parseInt(cartItemsCount.textContent);
            cartItemsCount.textContent = count + 1;
        });
    });





const productsButton = document.getElementById("products-button");
const productsContainer = document.getElementById("products-container");

productsButton.addEventListener("click", function() {
productsContainer.style.display = productsContainer.style.display === "none" ? "block" : "none";
});












