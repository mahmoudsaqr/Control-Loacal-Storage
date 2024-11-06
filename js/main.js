let allButtons = document.querySelectorAll(".buttons span");
let Results = document.querySelector(".results");
let InsideResults = document.querySelector(".results span");
let InsideInsideResults = document.querySelectorAll(".results span span");
let TheInput = document.getElementById("the-input");
let i = window.localStorage.getItem(`i`) || 0;
//window.localStorage.clear();

allButtons.forEach((span) => {
  span.onclick = function (e) {
    if (e.target.classList.contains("check")) {
      CheckItem();
    }
    if (e.target.classList.contains("add")) {
      addItem();
    }
    if (e.target.classList.contains("delete")) {
      deleteItem();
    }
    if (e.target.classList.contains("show")) {
      showItem();
    }
  };
});
let CheckItem = function () {
  if (TheInput.value !== "") {
    if(i === 0 ){
        InsideResults.innerHTML = "No Items in Local Storage Please Add One";
    }else{
        for(let j = 1 ;j<=i;j++){
            if (TheInput.value === window.localStorage.getItem(`TheInput-value ${j}`)) {
                
                InsideResults.innerHTML = `<span>(${window.localStorage.getItem(
                  `TheInput-value ${j}`
                )})</span> is Found`;
                break;
            }
            else{
                InsideResults.innerHTML = `This Item is not Found in Local Storage`
            }
        }
    }
  } else {
    InsideResults.innerHTML = "Please Input an Item to Check";
  }
};
let addItem = function () {
  if (TheInput.value !== "") {
    i++;
    window.localStorage.setItem(`i`, i);
    window.localStorage.setItem(`TheInput-value ${i}`, TheInput.value);
    InsideResults.innerHTML = `<span>${TheInput.value}</span> is Added`;
    TheInput.value = "";
    
  } else {
    InsideResults.innerHTML = "Please Input an Item to Add";
  }
};
let deleteItem = function () {
  if (TheInput.value !== "") {
    if (i === 0) {
      InsideResults.innerHTML = "No Items in Local Storage Please Add One";
    } else {
      for (let j = 1; j <= i; j++) {
        if (
          TheInput.value === window.localStorage.getItem(`TheInput-value ${j}`)
        ) {
          InsideResults.innerHTML = `<span>(${window.localStorage.getItem(
            `TheInput-value ${j}`
          )})</span> is Deleted`;
          window.localStorage.setItem(`i`, --i);
          window.localStorage.removeItem(`TheInput-value ${j}`);
          break;
        } else {
          InsideResults.innerHTML = `This Item is not Found in Local Storage`;
        }
      }
    }

  }else{
    InsideResults.innerHTML = "Please Input an Item to Delete";
  }
};
let showItem = function () {
    InsideResults.innerHTML ="";
    for(let [key,value] of Object.entries(localStorage)){
        if(key === "i"){
            console.log(key);
            continue;
        }
        InsideResults.innerHTML += `${key} ==> <span class = "keys">${value}</span>`;
        InsideResults.style.display = "block";
        InsideInsideResults.forEach((span)=>{
            span.style.display = "block";
        })
    }
    // for (let z = 1; z <= i; z++) {
    //     console.log(window.localStorage.getItem(`TheInput-value ${z}`));
    //     if (window.localStorage.getItem(`TheInput-value ${z}`)) {

    //         InsideResults.innerHTML += `<span>(${z}-${window.localStorage.getItem(
    //           `TheInput-value ${z}`
    //         )})</span>`;
    //     }
    // }
};
