// "use strict";

// function getDogImage(breed) {
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
//     .then((response) => response.json())
//     .then((responseJson) => displayResults(responseJson, breed))
//     .catch((error) => {
//       var caughtError = responseJson.status;
//       if (caughtError === "error") {
//         alert(`Sorry: ${responseJson.message}`);
//       }
//     });
// }

// // my mentor helped me with the unhappy path case

// function displayResults(responseJson, breed) {
//   console.log(responseJson);
//   $(".results").html(`<h2>Look at this dog!</h2>`);

//   $(".results").append(`<h3>${breed}</h3>`);

//   $(".results").append(
//     `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`
//   );
//   //display the results section
//   $(".results").removeClass("hidden");
// }

// function watchForm() {
//   $("form").submit((event) => {
//     event.preventDefault();
//     let breedOfDog = $('input[name="breedOfDog"]').val();
//     getDogImage(breedOfDog);
//   });
// }

// $(function () {
//   console.log("App loaded! Waiting for submit!");
//   watchForm();
// });

// "use strict";

// function getDogImage(breed) {
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
//     .then((response) => response.json())
//     .then((responseJson) => displayResults(responseJson, breed))
//     .catch((error) => alert("Something went wrong. Try again later."));
// }

// function displayResults(responseJson, breed) {
//   console.log(responseJson);
//   $(".results").html(`<h2>Look at this dog!</h2>`);

//   $(".results").append(`<h3>${breed}</h3>`);

//   $(".results").append(
//     `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`
//   );
//   //display the results section
//   $(".results").removeClass("hidden");
// }

// function watchUserInput() {
//   $("form").submit((event) => {
//     event.preventDefault();
//     let dogBreed = $('input[name="breedOfDog"]').val();
//     getDogImage(dogBreed);
//   });
// }

// $(function () {
//   console.log("App loaded! Waiting for submit!");
//   watchUserInput();
// });

"use strict";

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson, breed))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson, breed) {
  console.log(responseJson);

  if (responseJson.status == "error") {
    alert("That breed wasn't found, please try another.");
  } else {
    // replace existing img with new one
    $(".results").html(`<h2>Look at this pup!</h2>`);

    $(".results").append(`<h3>${breed}</h3>`);

    $(".results").append(
      `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`
    );
    // display results section
    $(".results").removeClass("hidden");
  }
}

function watchUserInput() {
  $("form").submit((event) => {
    event.preventDefault();
    let dogBreed = $('input[name="breedOfDog"]').val();
    getDogImage(dogBreed);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});
