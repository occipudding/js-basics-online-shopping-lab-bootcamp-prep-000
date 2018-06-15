var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101 + 1);
 var newItem = { itemName: item, 
                 itemPrice: price };
 cart.push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  const itemNameAtPrice = [];
  
  if(!cart.length) {
     return `Your shopping cart is empty.`;
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    } else {
    for(let i = 0; i < cart.length; i++) {
      itemNameAtPrice.push(`${cart[i].itemName} at`)
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
