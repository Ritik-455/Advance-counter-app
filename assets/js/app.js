const addbtn = document.getElementById('addbtn')
const savebtn = document.getElementById('savebtn')
const storecounting = document.getElementById('storecounting')
const counting = document.getElementById('counting')
const resetbtn = document.getElementById('resetbtn')

addbtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1;
    savebtn.classList.replace("btn-disable", "store-btn");
});
savebtn.addEventListener("click", function () {

    if (counting.innerHTML == 0) {
        savebtn.classList.replace("store-btn", "btn-disable"); 
    } else
        if (storecounting.innerHTML == 0) {
            storecounting.innerHTML = counting.innerHTML;
        }
        else {
            storecounting.innerHTML = storecounting.innerHTML + ", " + counting.innerHTML;
        }
    counting.innerHTML = 0;
});
resetbtn.addEventListener("click", function(){
    storecounting.innerHTML = 0;
    counting.innerHTML = 0;
})