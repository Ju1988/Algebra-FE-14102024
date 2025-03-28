//opcija 1

//var request = new XMLHttpRequest();

//request.open("GET", "https://dummyjson.com/products/1", true);

//request.onload = function(result){
//  console.log(result.currentTarget.responseText);
//}

//request.send();

// opcija 2

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then(responseData => console.log(responseData.description))
    .catch((err) => console.log(err));
}

getData();

// opcija 3

async function getData2() {
  try {
    const response = await fetch ("https://dummyjson.com/products/1");
    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
}

getData2();

