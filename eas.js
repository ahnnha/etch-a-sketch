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
// for (let i=0; i <cellNum*cellNum; i++) {
//     // 2.1 create a div with className .myDivs
//         let iDiv = document.createElement("div");
//         iDiv.className = "myDivs";
//     // 2.2 add a word in the div
//         let iDivWord = document.createTextNode(i);
//     // 2.3 add the text to the div
//         iDiv.appendChild(iDivWord);
//     // 2.4 put the Div inside "container" div
//         const divContainer = document.getElementById("container");
//         divContainer.appendChild(iDiv);
//     }

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

    // 5. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. 
    // 5.2 connect css custom properties and js in global scope
    let r = document.querySelector(":root");
    let rs = getComputedStyle(r);
    let rsColVal = rs.getPropertyValue("--numOfCol");
    let rsRowVal = rs.getPropertyValue("--numOfRow");
    // 5.3 make a function that will set new value for CSS property <--this doesn't work because numOfColumns is delcared inside function askQuestion()
    function setCssValue () {
        r.style.setProperty ("--numOfCol", numOfColumns);
        console.log(rs.getPropertyValue("--numOfCol"));
        r.style.setProperty ("--numOfRow", numOfRows);
        console.log(rs.getPropertyValue("--numOfRow"));
    }
    // 5.4 make a function that will remove all the selected element to reset the screen
    function removeGrid () {
        // grab parent node 
        let container = document.getElementById("container");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    // 4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
    // 4.1 declare button from html
    const btn = document.getElementById("btn");
    // 4.2 add eventListener with function named askQuestion
    btn.addEventListener("click", askQuestion);
    // 4.3 create a function that asks brush size and store the answer
    function askQuestion () {
        // 5.1 reset numOfColumns and numOfRows to 0
        let numOfColumns = 0;
        let numOfRows = 0;
        numOfColumns = prompt ("How many strokes to fill in the width?");
        numOfRows = prompt("How many strokes to fill in the height?")
        // 5.3 set numOfColumns and numOfRows to CSS root property
        // setCssValue() <-- doesn't work because of scope
        r.style.setProperty ("--numOfCol", numOfColumns);
        // console.log(rs.getPropertyValue("--numOfCol"));
        r.style.setProperty ("--numOfRow", numOfRows);
        // console.log(rs.getPropertyValue("--numOfRow"));
    // 4.4 using cellNum, create a grid
        for (let i=0; i <numOfColumns*numOfRows; i++) {
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
}

    // 6. Reset
    let resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", removeGrid);



    

    