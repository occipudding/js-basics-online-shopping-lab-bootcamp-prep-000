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
  const nameAndPriceArray = [];
  
  for(let i = 0; i < cart.length; i++) {
      nameAndPriceArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  
  if(!cart.length) {
     return `Your shopping cart is empty.`;
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    } else {
    var lastItem = nameAndPriceArray.pop();
    return `In your cart, you have ${nameAndPriceArray.join(', ')}, and ${lastItem}.`;
  }
}

function total() {
  var sumTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    sumTotal += cart[i].itemPrice;
  }
  return sumTotal;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i,1);
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
