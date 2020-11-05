"use strict";

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson && responseJson.code !== 404) {
        displayResults(responseJson, breed);
      }
    })
    .catch((error) => {
      $(".results").html(`<h2>Look at this dog!</h2>`);
      $(".results").removeClass("hidden");
    });
}

// my mentor helped me with the unhappy path case

function displayResults(responseJson, breed) {
  console.log(responseJson);
  $(".results").html(`<h2>Look at this dog!</h2>`);

  $(".results").append(`<h3>${breed}</h3>`);

  $(".results").append(
    `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let breedOfDog = $('input[name="breedOfDog"] ').val();
    getDogImage(breedOfDog);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
