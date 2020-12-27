var removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

}


const plusbtn = document.getElementsByClassName('button-plus');

Array.from(plusbtn).map(function(el) {

    el.addEventListener("click", function() {
        //console.log('toto');
        el.nextElementSibling.value = parseInt(el.nextElementSibling.value) + 1;
        updateCartTotal()

    });

});
const moinsbtn = document.getElementsByClassName('button-moins');

Array.from(moinsbtn).map(function(x) {

    x.addEventListener("click", function() {
        if (x.previousElementSibling.value > 0) {
            x.previousElementSibling.value = parseInt(x.previousElementSibling.value) - 1;

        }
        //console.log('toto');

        updateCartTotal()
    });
});
var coeurs = document.getElementsByClassName('coeur');
Array.from(coeurs).map(function(y) {
    y.addEventListener("click", function() {
        var contient = this.classList.contains('red');
        var classred = this.getElementsByClassName('red');
        if (contient) {
            this.classList.remove("red");
        } else {
            this.classList.add("red");
        }
        // console.log(classred);

    })

});

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}