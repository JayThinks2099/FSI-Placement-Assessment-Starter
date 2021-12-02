// First, tell us your name
let yourName = "Jay Chen"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
let qtyGb = document.getElementById("qty-gb")
let qtyCc = document.getElementById("qty-cc")
let qtySugar = document.getElementById("qty-sugar")
let qtyTotal = document.getElementById("qty-total")
let gbAdd = document.getElementById("add-gb")
let gbMinus = document.getElementById("minus-gb")
let ccAdd = document.getElementById("add-cc")
let ccMinus = document.getElementById("minus-cc")
let sugarAdd = document.getElementById("add-sugar")
let sugarMinus = document.getElementById("minus-sugar")


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbAdd.addEventListener('click', function(e) {
    gb = gb + 1;
    total = gb + cc + sugar;
    qtyGb.textContent = gb;
    qtyTotal.textContent = total;
    localStorage.setItem('gbCount', gb);
    localStorage.setItem('totalCount', total);
})

gbMinus.addEventListener('click', function(e) {
    gb = gb - 1;
    total = gb + cc + sugar;
    qtyGb.textContent = gb
    qtyTotal.textContent = total;
    localStorage.setItem('gbCount', gb);
    localStorage.setItem('totalCount', total);
})

ccAdd.addEventListener('click', function(e) {
    cc = cc + 1;
    total = gb + cc + sugar;
    qtyCc.textContent = cc;
    qtyTotal.textContent = total;
    localStorage.setItem('ccCount', cc);
    localStorage.setItem('totalCount', total);
    
})

ccMinus.addEventListener('click', function(e) {
    cc = cc - 1;
    total = gb + cc + sugar;
    qtyCc.textContent = cc;
    qtyTotal.textContent = total;
    localStorage.setItem('ccCount', cc);
    localStorage.setItem('totalCount', total);
})

sugarAdd.addEventListener('click', function(e) {
    sugar = sugar + 1;
    total = gb + cc + sugar;
    qtySugar.textContent = sugar;
    qtyTotal.textContent = total;
    localStorage.setItem('sugarCount', sugar);
    localStorage.setItem('totalCount', total);
})

sugarMinus.addEventListener('click', function(e) {
    sugar = sugar - 1;
    total = gb + cc + sugar;
    qtySugar.textContent = sugar;
    qtyTotal.textContent = total;
    localStorage.setItem('sugarCount', sugar);
    localStorage.setItem('totalCount', total);
})
