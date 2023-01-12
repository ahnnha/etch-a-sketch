// // 1. create one div inside "container" div
// // 1.1. declare firstDiv using createElement
// let firstDiv = document.createElement("div");
// // 1.2 add a word in the firstDiv
// let firstDivWord = document.createTextNode ("First");
// // 1.3 add the text to the div
// firstDiv.appendChild(firstDivWord);
// // 1.4 put the firstDiv inside "container" div
// const divContainer = document.getElementById("container");
// divContainer.appendChild(firstDiv);



// 2. loop through process #1 sixteen times to create 16*16 grid
for (let i=0; i <16*16; i++) {
    // 2.1 create a div
        let iDiv = document.createElement("div");
    // 2.2 add a word in the div
        let iDivWord = document.createTextNode(i);
    // 2.3 add the text to the div
        iDiv.appendChild(iDivWord);
    // 2.4 put the Div inside "container" div
        const divContainer = document.getElementById("container");
        divContainer.appendChild(iDiv);
    }

    // 3. grab divs inside container and addEventListenr with mouseover effect
document.addEventListener('mouseover', findDivs);
// 3.1 find divs inside container
// // 3.1.1 using pointerevent, find divs's target
// // document.addEventListener ('click', (e)=>{console.log(e)});
function findDivs (obj) {
//     // 3.2 if divs's parent is container, 
//     // 3.2.1 find divs that have container as parent
    let divsParent = obj.target.parentNode;
    // 3.2.2 console.log obj.target.innerHTML
    let divsContext = obj.target.innerHTML;
    let objTarget = obj.target;
    if (obj.target == div){
        console.log(divsContext);
    // 3.3 change the backgroundColor of divsParent
        obj.target.style.backgroundColor = "red";
    }
}