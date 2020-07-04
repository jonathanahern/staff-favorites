var elem = document.getElementById(`staff_pick_element`);
var url = window.location.href;
var shop = window.location.host;
var handle = url.split("/").pop();
var pickedProducts = getPicks();
var prodID = meta.product.id;

if (url.includes('/products/')) {
    setPicks(shop);
}

if (url.includes('/products/') && pickedProducts.includes(prodID)) {
    setupPageForPick();
    fetch(`https://c2c49a73f50a.ngrok.io/api/front_end/show?shop=${shop}&prodID=${meta.product.id}`, {
    method: "GET",
    })
  .then(res => res.json())
  .then(resp => {
      insertData(resp[0]);
  })
}

function setPicks (shop) {
    fetch(`https://c2c49a73f50a.ngrok.io/api/front_end?shop=${shop}`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(resp => {
            let newArr = []
            resp.forEach(element => {
                ele = element["shopify_product_id"]
                newArr.push(ele)
            });
            localStorage.setItem('pickedProducts', JSON.stringify(newArr));
        })
}

function getPicks (){
    let data = localStorage.getItem('pickedProducts');
    if (data === null) {
        return null
    } else {
        let newData = JSON.parse(data)
        return Object.values(newData)
    }
}

function setupPageForPick(){
    const mainContent = document.getElementById(`main_content`);
    const fullContainer = document.getElementById(`full_container`);
    const staffPick = document.getElementById(`staff_pick_ele`);
    fullContainer.style.display = "flex";
    mainContent.style.width = "80%";
    staffPick.style.width= "20%";
    staffPick.style.height = "200px";
    // staffPick.style.padding = "0 30px";
}

function insertData(data){
    const staffPick = document.getElementById(`staff_pick_ele`);
    let img = document.createElement("img");
    img.src = data["profile_url"];
    console.log(data["profile_url"]);
    staffPick.appendChild(img);
}