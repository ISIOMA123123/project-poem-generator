function displayPoem(response) {
     console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 1,
    });
}

function generatePoem(event) {
    event.preventDefault();
    
let userPoemTopicElement = document.querySelector("#user-poem-topic");

   let apiKey = "7d3fo7t42ac4a88b5f1b6383fbbe2b0b";
   let context = "you are a romantic poem expert and love to write short poem. your mission is to generate a four lines poem in basic html, and seperate each line with a <br />, make sure to follow the user instructions. Sign the poem with 'Success' in bold inside a strong element at the end of the poem";
   let prompt = `user instructions: generate a poem about ${userPoemTopicElement.value}`;
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generating prompt");
   console.log(`prompt: ${prompt}`);
   console.log(`context: ${context}`);
axios.get(apiUrl).then(displayPoem);

    


}

let poemFormElement = document.querySelector("#poemGeneratorForm");
console.log(poemFormElement);
poemFormElement.addEventListener("submit", generatePoem);

