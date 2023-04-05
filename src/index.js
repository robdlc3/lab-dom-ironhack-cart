// ----ITERATION 1  ---- //
let total = document.getElementsByClassName('subtotal')[0].innerText
console.log(total)

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  console.log('clicked')
  let price = document.getElementsByClassName('price')[0].innerText
  price = Number(price.replace(/[^0-9.-]+/g, ""))
  let quantity = (document.getElementsByTagName('input'))
  quantity = Number(quantity[0].value)
  const subTotalVal = price * quantity
  let subTotal = document.getElementsByClassName('subtotal')[0]
  return subTotal.innerText = `$${subTotalVal}`

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here



  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});