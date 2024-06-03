function calculatePrice() {
    // Values from the inputs. 
    // couponDiscount, cashDiscount, and IVA are already in percentages.
    const price = document.getElementById("price").value;
    const couponDiscount = document.getElementById("coupon_discount").value / 100;
    const cashDiscount = document.getElementById("cash_discount").value / 100;
    const iva = document.getElementById("iva").value / 100;

    // Calculations for subtotal, ivaAmount, and total
    let subtotal = price - (price * couponDiscount) - (price * cashDiscount);
    let ivaAmount = subtotal * iva;
    let total = subtotal + ivaAmount;

    // Send the results to the UI indicators
    document.getElementById("subtotal").innerHTML = `${subtotal.toFixed(2)}`;
    document.getElementById("iva_amount").innerHTML = `${ivaAmount.toFixed(2)}`;
    document.getElementById("total").innerHTML = `${total.toFixed(2)}`;
}