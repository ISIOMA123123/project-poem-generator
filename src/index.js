function generatePoem(event) {
    event.preventDefault();
    

     new Typewriter("#poem", {
        strings: "my name is success ubani chinedu",
        autoStart: true,
        cursor: "",
        delay: 1,
    });


}

let poemFormElement = document.querySelector("#poemGeneratorForm");
console.log(poemFormElement);
poemFormElement.addEventListener("submit", generatePoem);

