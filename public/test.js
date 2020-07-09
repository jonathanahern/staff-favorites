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
    var style = document.createElement('style');
    style.innerHTML =
        '#main_content {' +
            'width: 80%;' +
        '}' +
        '#full_container {' +
            'display: flex;' +
        '}' +
        '#staff_pick_ele {' +
            'width: 20%;' +
            'margin-left: 20px;' +
        '}' +
        '#staff_pick_ele h1{' +
            'text-align: center;' +
        '}' +
        '@media screen and (max-width: 750px) {'+
            '#full_container {' +
                'display: block;' +
            '}' +
            '#staff_pick_ele {' +
                'display: flex;' +
                'justify-content: center;' +
                'flex-direction: column;' +
                'align-items: center;' +
                'width: 75%;' +
                'margin: 0 auto;' +          
            '}' +
            '#staff_pick_ele img {' +
                'max-width: 150px;' +
                'max-height: 260px;' +
            '}' +
            '#staff_pick_ele h1 {' +
                'text-align: center;' +
            '}' +
            '#staff_pick_ele > div {' +
            'display:flex;' +
            '}' +
            '#staff_pick_ele > div > div{' +
            'padding: 0 20px;' +
            '}' +
        '}';

    // Get the first script tag
    var ref = document.querySelector('script');

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
    // $('head').append('<style type="text/css">@media screen and (max-width: 600px) {#staff_pick_ele{ background-color: blue;}}</style>');

    // fullContainer.style.display = "flex";
    // mainContent.style.width = "80%";
    // staffPick.style.width= "20%";
    // staffPick.style.height = "200px";
    // staffPick.style.padding = "0 30px";
}

function insertData(data){
    const staffPick = document.getElementById(`staff_pick_ele`);

    let h1 = document.createElement("h1");
    h1.innerHTML = "Staff Pick";
    staffPick.appendChild(h1);

    const staffDiv = document.createElement("div");
    staffPick.appendChild(staffDiv);

    let img = document.createElement("img");
    img.src = data["profile_url"];
    staffDiv.appendChild(img);

    const wordsDiv = document.createElement("div");
    staffDiv.appendChild(wordsDiv);

    let pDescription = document.createElement("p");
    pDescription.innerHTML = data["review"];
    pDescription.style.fontStyle = "italic";
    pDescription.style.margin = "0px";
    wordsDiv.appendChild(pDescription);

    let pName = document.createElement("p");
    let nameString = `-${data["name"]}`
    pName.innerHTML = nameString;
    wordsDiv.appendChild(pName);

}