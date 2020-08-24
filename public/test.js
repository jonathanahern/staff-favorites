var elem = document.getElementById(`staff_pick_element`);
var url = window.location.href;
var shop = window.location.host;
var handle = url.split("/").pop();
var pickedProducts = getPicks();
var prodID = null;

if (url.includes('/products/')) {
    prodID = meta.product.id;
    setPicks(shop);
}
    
if (url.includes("/collections/")) {
    console.log(pickedProducts);
    let eles = document.getElementsByClassName("staff-pick-alert");
    for (var i = 0; i < eles.length; i++) {
        let ele = eles[i];
        let idCheck = parseInt(ele.dataset.prodid);
        if (pickedProducts.includes(idCheck)){
            insertPickPic(ele);
        }
    }
}

if (url.includes("/pages/")) {

    let eles = document.getElementsByClassName("staff-picks-products");

    if (eles.length > 0){
        let staffid = eles[0].dataset.staffid.toString();
        console.log(staffid);
        fetch(`https://b0eb13a3b4bf.ngrok.io/api/pages?employeeid=${staffid}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(resp => {
                createProducts(eles[0], Object.values(resp))
            });
    }
    
}

function createProducts(container, data) {
    
    data.forEach((pick) => {

        let containerPick = document.createElement("a");
        containerPick.href = url.split("/pages/")[0] + "/products/" + pick.shopify_handle;
        containerPick.className += "pick-container clearfix";
        containerPick.style.marginBottom = "12px";
        container.appendChild(containerPick);

        let containerImg = document.createElement("div");
        containerImg.className += "img-container";
        containerPick.appendChild(containerImg);

        let img = document.createElement("img");
        img.src = pick.shopify_image_url;
        containerImg.appendChild(img);
    
        let title = document.createElement("h4");
        title.innerHTML = pick.shopify_title;
        containerPick.appendChild(title); 
    
        let description = document.createElement("p");
        description.innerHTML = pick.review.replace(/\n/g, "<br />");
        containerPick.appendChild(description);

    });
    
}

function insertPickPic(ele) {

  let container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "0px";
    container.style.right = "0px";
    container.style.margin = "10px";
    ele.appendChild(container);


  let circle = document.createElement("img");
  circle.src = "https://i.ibb.co/7yzF9zw/Starburst-High-Quality-PNG.png";
  circle.style.width = "84px";
  circle.style.height = "84px";
  
  container.appendChild(circle);

  let text = document.createElement("h4");
  text.innerHTML = "STAFF<br/>PICK!";
text.style.position = "absolute";
text.style.textAlign = "center";
text.style.top = "24%";
text.style.right = "15%";
  text.style.color = "white";
  
  container.appendChild(text);
}

if (url.includes('/products/') && pickedProducts.includes(prodID)) {
    setupPageForPick();
    fetch(`https://b0eb13a3b4bf.ngrok.io/api/front_end/show?shop=${shop}&prodID=${meta.product.id}`, {
    method: "GET",
    })
  .then(res => res.json())
  .then(resp => {
      insertData(resp[0]);
  })
}

function setPicks (shop) {
    fetch(`https://b0eb13a3b4bf.ngrok.io/api/front_end?shop=${shop}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resp) => {
        let newArr = [];
        resp.forEach((element) => {
          ele = element["shopify_product_id"];
          newArr.push(ele);
        });
        localStorage.setItem("pickedProducts", JSON.stringify(newArr));
      });
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
        '#staff_pick_ele > h1{' +
            'text-align: center;' +
            'font-size: 1.75em;' +
            'margin: 4px 0;' +
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
                'max-height: 250px;' +
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