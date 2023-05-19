var i = 1;
var n = 3;
var price = 40000;
function next(){
    if(i < n) i+= 1;
    else i = 1;
    
    document.getElementById("slide").setAttribute("src","img/slide"+ i+".png");
}
function back(){
    if(i > 1) i-= 1;
    else i = n;
    
    document.getElementById("slide").setAttribute("src","img/slide"+ i+".png");
}
function autoplay(){
    setInterval(next,3000);
}


function inc(x,p){
    a = parseInt(document.getElementById(x).value);
  
    document.getElementById(x).value = a + 1;
    document.getElementById(p).textContent = price * (a+1) / 1000 + ".000 VNĐ";
}
function dec(x,p){
    a = parseInt(document.getElementById(x).value);
    if(a > 1) {
        a -= 1;
        document.getElementById(p).textContent = price * (a) / 1000 + ".000 VNĐ";
    }
    document.getElementById(x).value = a;
}
function change(){
    alert("click the pic");
}
function changeLab(x, n){

    if(n == 1){
        document.getElementById(x).textContent = "Cơm đùi gà chiên mắm";
        document.getElementById('price').textContent = "45.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic2.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "45000 VNĐ";
        price = 45000;

    }
    if(n == 2){
        document.getElementById(x).textContent = "Má đùi gà chiên mắm";
        document.getElementById('price').textContent = "45.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic3.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "45000 VNĐ";
        price = 45000;

    }
    if(n == 3){
        document.getElementById(x).textContent = "Cơm gà Hội An";
        document.getElementById('price').textContent = "40.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic1.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "40000 VNĐ";
        price = 40000;

    }
}
function login_direct() {
    window.location.href = "login.html";
}

function cart_direct() {
    window.location.href = "cart.html";
}
function reser() {
    window.location.href = "index.html #reservation";
}

//chuyen sang trang detail

function detail_direct(n) {
    window.location.href = "food-detail.html";
    if(n == 1) {
       
        window.location.href = "food-detail.html?msg=dcm";
    }
    if(n == 2){
        window.location.href = "food-detail.html?msg=mcm";

    }
    if(n == 3){
        window.location.href = "food-detail.html?msg=gha";

    }
   
}


// var con1 = "nam mo a di da phat";
// var con2 = "Nhưng mà cũng chưa phải là Hội An, nếu chưa ghé một hàng quán bất chợt nào đó mà ăn một tô cao lầu, sáng sớm tìm một nơi ăn bánh ướt thịt nướng, tối tối lại ghé một chốn thật yên bình để thưởng thức cơm gà... Thế mới thực sự là cảm nhận cho thỏa cái vị Hội An.";
// var con3 = "Thật khó để diễn tả hết bằng lời những nét riêng trong ẩm thực Hội An, bởi cái gì đẹp, cái gì ngon, mà đặc biệt là cái gì tinh tế thì thường để dành cho sự cảm nhận.";

// var content = {con1, con2, con3};
// function contChange() {
//     document.getElementById("testi-ptext").innerHTML = content[i];
   
//     i = (i + 1) % noiDung.length;
    
// }
// function autoplaytext(){
//     setInterval(contChange, 3000);
// }
		