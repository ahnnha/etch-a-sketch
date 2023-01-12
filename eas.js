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
    // 2.1 create a div with className .myDivs
        let iDiv = document.createElement("div");
        iDiv.className = "myDivs";
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
    // 3.1 declare divs that mouseover takes place
    function findDivs (obj) {
        // 3.1.1 ask computer what it thinks is obj
        // console.log(obj);
        // 3.2 print the number on each div if I declare divs correctly
        let divsContext = obj.target.innerHTML;
        // 3.1.2 if obj has the classname "myDivs", add a new class name
        if (obj.target.classList.contains("myDivs")){
            obj.target.classList.add("mouseoveredDivs");
        // 3.1.3 check if obj has the new class name 
            // if (obj.target.classList.contains("mouseoveredDivs")){
            //     console.log("got ya");
            // }
        // 3.2 if adding additional class name doesn't work, we can change obj's background color in js
            // obj.target.style.backgroundColor = "red";
         } else {
             console.log ("outside of grid");
         }
    }
    