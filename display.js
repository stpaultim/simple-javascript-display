
var wrapper = document.getElementById('product-wrapper');
var modalWrapper = document.getElementById('modal');
var output = "";

// This loop creates a listing for every product item listed in the
// myProducts object found in product-list.js
for (i = 0; i < myProducts.length; i++) {
  var p = ''
  p = p + '<div class="product">';
  p = p +   '<div class="thumb">';
  p = p +     '<img src="images/' + myProducts[i]['image'] + '">';
  p = p +   '<div class="clear">';
  p = p +   '</div>';
  p = p +   '<div class="modal-open"><img src="images/zoom-5.png"></div>';
  p = p +   '</div>';
  p = p +   '<div class="product-contents">';
  p = p +       '<h1>' + myProducts[i]['productTitle'] + '</h1>';
  p = p +       myProducts[i]['productContents'];

  // Checks to see if there is anything in "options" array. If YES, then 
  // it builds the list of options.
  if (myProducts[i]['options'] != "") {
    p = p + optionsList(i);
    console.log(p);
  }

  p = p +     '<div class="price-line">';
  p = p +       'Price: <span class="price-bold">';
  p = p +       myProducts[i]['price'] + '</span>';
  p = p +       '<span class="price-selector">';
  p = p +       '<select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
  p = p +       '</span>';
  p = p +       '<span class="purchase-button">Purchase</span>';
  p = p +     '</div>';
  p = p +   '</div>';
  p = p +   '<div class="clear">';
  p = p +   '</div>';
  p = p + '</div>';
  output = output + p;
};

// Generate the HTML for page
wrapper.innerHTML = output;

// This is the function that builds the list of options for each
// product, as needed.
function optionsList(y) {
  var listx = '<ul>';
  for (temp = 0; temp < myProducts[y]['options'].length; temp++) {
    listx = listx + '<li>' + myProducts[y]['options'][temp] + '</li>';
  }
  listx = listx + '</ul>';
  return listx;
}

// Create Listeners for each product to open modal window
var products = document.getElementsByClassName("modal-open");
for (i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function(i) {
    console.log("start listener");
    var activeImage = this.parentElement.getElementsByTagName('img')[0].src;
    //console.log(activeImage);
    openFunction();
    document.getElementById('modal').innerHTML = '<div class="show-modal"><div class="close"> X </div><img src=' + activeImage + '></div></div>';
    var myListener = document.querySelector('.close');
    myListener.addEventListener('click', openFunction, false); 
  }, false);
};

// Open or close the modal window
function openFunction (i) {
  var element = document.getElementById('modal');
  element.classList.toggle('hide');
}





  



