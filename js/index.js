let num = 0;
let tiemr;
let img = document.querySelectorAll('span')
let Li = document.querySelectorAll('li')
let Left = document.querySelector('#left')
let Right = document.querySelector('#right')


let wLeft = document.getElementById('left')
let wRight = document.getElementById('right')
console.log(wLeft);


Li.forEach(function(val,i){
    Li[i].setAttribute("index",i)
    Li[i].onclick = function(val,i){
        for(let i = 0;i<Li.length;i++){
            Li[i].className = ""
            img[i].className = ""
        }
        this.className = "active"
        var i = this.getAttribute("index")
        img[i].className = "show"
    }
})



wLeft.onclick = function(val,i){
    num --;
    for(let i = 0;i<Li.length;i++){
        Li[i].className = ""
        img[i].className = ""
    }
    if(num < 0){
        num = img.length -1
    }
    img[num].className = "show"
    Li[num].className = "active"
}




function w(){
    num++
        for(let i = 0;i<Li.length;i++){
            Li[i].className = ""
            img[i].className = ""
        }
        if(num > img.length -1 ){
            num = 0
        }
        img[num].className = "show"
        Li[num].className = "active"
}

setInterval(function(val,i){
w()
},1000)





// function autoPlay () {
//     tiemr = setInterval(() => {
//         num++;
//         if (num == img.length) {
//             num = 0
//         }
//         tab();
//     },2000)
// }
// autoPlay();
// function tab () {
//     for (let i = 0; i < img.length; i++) {
//         img[i].className = "";
//         Li[i].className = "";
//     }
//     console.log(img[num]);
//     img[num].className = "show";
//     Li[num].className = "active"
// }



// for (let i = 0; i < Li.length;i++) {
//     console.log(i);
//     Li[i].index = i;
//     Li[i].onclick = function () {
//         num = this.active
//         tab()
//     }
// }



// wLeft.onclick = () =>{
//     num++;
//     if (num == img.length) {
//         num = 0 
//     }
//     tab()
// }

// wRight.onclick = () => {
//     num--;
//     if (num < 0) {
//         num = img.length - 1
//     }
//     tab()
// }