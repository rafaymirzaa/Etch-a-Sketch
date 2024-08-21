const container = document.querySelector("#container");
colorMode = true;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random Red value
    const g = Math.floor(Math.random() * 256); // Random Green value
    const b = Math.floor(Math.random() * 256); // Random Blue value
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB string
  }
  

function createGrid(size) {
    container.innerHTML = ''; // this clears existing grid
    const squareSize = 960 / size; // adjust the size of each square as per your choice

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        container.appendChild(grid);


        grid.addEventListener("mouseenter", () => {
            if (colorMode)
            {
            grid.style.backgroundColor = getRandomColor(); 
            }
        });
        grid.addEventListener("click",() =>{
            if (!colorMode)
            {
                grid.style.backgroundColor="";
            }
        })
    }
}


createGrid(16);

// Button click handler
document.querySelector("#changeGridSize").addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

document.addEventListener("click",() =>{
    colorMode = !colorMode;
})
// change not syncing