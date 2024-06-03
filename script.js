function calculatePrice() {
    // Values from the inputs. 
    // couponDiscount, cashDiscount, and IVA are already in percentages.
    const price = document.getElementById("price").value;
    const couponDiscount = document.getElementById("coupon_discount").value / 100;
    const cashDiscount = document.getElementById("cash_discount").value / 100;
    const iva = document.getElementById("iva").value / 100;

    // TODO: Implement calculations for subtotal, ivaAmount, and total in this section
    let subtotal = 0;
    let ivaAmount = 0;
    let total = 0;

    // Send the results to the UI indicators
    document.getElementById("subtotal").innerHTML = `${subtotal.toFixed(2)}`;
    document.getElementById("iva_amount").innerHTML = `${ivaAmount.toFixed(2)}`;
    document.getElementById("total").innerHTML = `${total.toFixed(2)}`;
}