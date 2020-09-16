var elem = document.getElementById(`staff_pick_element`);
var url = window.location.href;
var shop = window.location.host;
var handle = url.split("/").pop();
var pickedProducts = getPicks();
var prodID = null;
var pickAlreadyFound = false;
var collectionEles = [];

if (url.includes('/products/')) {
    prodID = meta.product.id;
    setPicks(shop);
}
    
if (url.includes("/collections/")) {
    setPicks(shop);
    let eles = document.getElementsByClassName("staff-pick-alert");
    for (var i = 0; i < eles.length; i++) {
        let ele = eles[i];
        let idCheck = parseInt(ele.dataset.prodid);
        if (pickedProducts.includes(idCheck)){
            collectionEles.push(ele);
            insertPickPic(ele);
            if (!pickAlreadyFound){
                pickAlreadyFound = true;
                setupPageForCollections();
            }
        }
    }
}

if (url.includes("/pages/")) {

    let eles = document.getElementsByClassName("staff-picks-products");

    if (eles.length > 0){
        let staffid = eles[0].dataset.staffid.toString();
        console.log(staffid);
        fetch(`https://e1e158dbaf6a.ngrok.io/api/pages?employeeid=${staffid}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((resp) => {
            createProducts(eles[0], Object.values(resp));
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
  container.className = "starburst-container";
  container.style.margin = "15px";
  ele.appendChild(container);

  let circle = document.createElement("img");
  circle.className = "sticker-img";
  circle.src = loadStickerImage();
  
  container.appendChild(circle);

  let text = document.createElement("h4");
  text.innerHTML = "STAFF<br/>PICK!";
  text.className = "staff-pick-lettering";
  
  container.appendChild(text);
}

function loadStickerImage(){
    let settings = JSON.parse(localStorage.getItem("staffPicksSettings"));
    switch (settings["sticker"]) {
      case "red":
        return "https://i.ibb.co/3kW5XsV/red-burst.png";
      case "blue":
        return "https://i.ibb.co/JRgFHfL/blue-burst.png";
      case "yellow":
        return "https://i.ibb.co/HXqddbd/yellow-burst.png";
      case "green":
        return "https://i.ibb.co/cxqQbg9/green-burst.png";
      case "purple":
        return "https://i.ibb.co/cC3Ry3v/purple-burst.png";
      default:
        return "https://i.ibb.co/3kW5XsV/red-burst.png";
    }
}

function setupPageForCollections() {
  var style = document.createElement("style");
  style.innerHTML =
    ".starburst-container {" +
        "position: absolute;" +
        "top: 0px;" +
        "right: 0px;" +
        "width: 40%;" +
    "}" +
    ".staff-pick-alert h4 {" +
        "position: absolute;" +
        "transform: translate(50%, -50%);" +
        "top: 48%;" +
        "right: 49%;" +
        "color: white;" +
        "text-align: center;" +
        "font-size: .95em;" +
    "}" +
    "@media screen and (max-width: 420px) {" +
        ".staff-pick-alert h4 {" +
            "font-size: .80em;" +
        "}" +
    "}";

  // Get the first script tag
  var ref = document.querySelector("script");

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
}

if (url.includes('/products/') && pickedProducts.includes(prodID)) {
    setupPageForPick();
    fetch(`https://b0eb13a3b4bf..io/api/front_end/show?shop=${shop}&prodID=${meta.product.id}`, {
    method: "GET",
    })
  .then(res => res.json())
  .then(resp => {
      insertData(resp[0]);
  })
}

function setPicks (shop) {
    fetch(`https://e1e158dbaf6a.ngrok.io/api/front_end?shop=${shop}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resp) => {
        populateLocalStorage(resp);
      });
}

function populateLocalStorage(data){
    const origProducts = getPicks();
    const origSettings = localStorage.getItem("staffPicksSettings");
    localStorage.setItem("pickedProducts", JSON.stringify(data["ids"]));
    localStorage.setItem("staffPicksSettings", JSON.stringify(data["settings"]));

    if (data["settings"]["sticker"] !== JSON.parse(origSettings)["sticker"]){
      let eles = document.getElementsByClassName("sticker-img");
      for (let i = 0; i < eles.length; i++) {
        eles[i].src = loadStickerImage();
      }
    }

    if(origProducts.length > data["ids"].length){
        let idsToDelete = origProducts.filter((x) => !data["ids"].includes(x));
        for (var j = 0; j < collectionEles.length; j++) {
            let ele = collectionEles[j];
            let idCheck = parseInt(ele.dataset.prodid);
            if (idsToDelete.includes(idCheck)) {
                ele.innerHTML = "";
            }
        }
    } else if (origProducts.length < data["ids"].length) {
        let idsToAdd = data["ids"].filter((x) => !origProducts.includes(x));
        let eles = document.getElementsByClassName("staff-pick-alert");
        for (var e = 0; e < eles.length; e++) {
          let ele = eles[e];
          let idCheck = parseInt(ele.dataset.prodid);
          if (idsToAdd.includes(idCheck)) {
            collectionEles.push(ele);
            insertPickPic(ele);
          }
        }
    }

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