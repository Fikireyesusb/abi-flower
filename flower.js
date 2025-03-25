function openOrderForm(flowerType) {
    document.getElementById('order-modal').style.display = 'flex';
    document.getElementById('flower').value = flowerType;
}

function closeOrderForm() {
    document.getElementById('order-modal').style.display = 'none';
}
