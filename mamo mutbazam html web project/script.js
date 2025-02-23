document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartCountElement = document.getElementById("cart-count");

    function updateCartCount() {
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }

    function showPaymentOptions() {
        const paymentOptions = document.getElementById('payment-options');
        if (paymentOptions) {
            paymentOptions.style.display = 'block';
        }
    }

    function payJazzCash() {
        alert('Redirecting to JazzCash Payment Gateway...');
        window.location.href = 'https://www.jazzcash.com.pk/';
    }

    function payEasyPaisa() {
        alert('Redirecting to EasyPaisa Payment Gateway...');
        window.location.href = 'https://easypaisa.com.pk/';
    }

    function payPayPal() {
        alert('Redirecting to PayPal Payment Gateway...');
        window.location.href = 'https://www.paypal.com/';
    }

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            updateCartCount();
            showPaymentOptions();
        });
    });

    updateCartCount();

    window.payJazzCash = payJazzCash;
    window.payEasyPaisa = payEasyPaisa;
    window.payPayPal = payPayPal;
});
