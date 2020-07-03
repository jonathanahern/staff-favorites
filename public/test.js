var elem = document.getElementById(`staff_pick_element`);
var url = window.location.href;
var shop = window.location.host;
var handle = url.split("/").pop();
var pickedProducts = localStorage.getItem('pickedProducts');

// Store data
// var someData = 'The data that I want to store for later.';
// localStorage.setItem('myDataKey', someData);

// // Get data
// var data = localStorage.getItem('myDataKey');

// // Remove data
// localStorage.removeItem('myDatakey');

if (pickedProducts === null && (url.includes('/products/') || url.includes('/collections/'))) {
    
    var newData = JSON.stringify(resp);
    localStorage.setItem('myProductData', newData);
    var data = localStorage.getItem('pickedProducts');
}

if (url.includes('/products/')) {
    fetch(`https://c2c49a73f50a.ngrok.io/api/front_end/show?shop=${shop}&prodID=${meta.product.id}`, {
    method: "GET",
    })
  .then(res => res.json())
  .then(resp => {
    //   var newData = JSON.stringify(resp);
    //   localStorage.setItem('myProductData', newData);
      var data = localStorage.getItem('myProductData');
      console.log(data);
  })
}