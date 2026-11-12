
document.getElementById("shippingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let pickup = document.getElementById("pickup").value.trim();
    let delivery = document.getElementById("delivery").value.trim();

    let weight = parseFloat(
        document.getElementById("weight").value
    );

    let type = document.getElementById("packageType").value;
    let speed = document.getElementById("speed").value;

    if (!pickup || !delivery ||
        !Number.isFinite(weight) || weight <= 0) {

        alert("Please enter valid details.");
        return;
    }

    // Base shipping charge
    let cost = 50;

    // Weight charge
    cost += weight * 30;

    // Package charge
    if (type === "small") {
        cost += 20;
    }
    else if (type === "large") {
        cost += 50;
    }

    // Delivery speed charge
    let days;

    if (speed === "express") {
        cost *= 1.5;
        days = "1-2 Days";
    }
    else {
        days = "4-6 Days";
    }

    cost = Math.round(cost);

    // Display result
    document.getElementById("route").innerText =
        pickup + " → " + delivery;

    document.getElementById("days").innerText =
        "Estimated Delivery: " + days;

    document.getElementById("price").innerText =
        "₹" + cost;

    document.getElementById("result").style.display = "block";

});
