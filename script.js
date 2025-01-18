const url = "https://icanhazdadjoke.com/";
const nextJokeButton = document.getElementById("nextJokeBTN");
const jokeContentDiv = document.getElementById("jokeContent");

async function request() {
  try {
    nextJokeButton.disabled = true;
    nextJokeButton.innerHTML = "loading...";
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Joke App",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 404) {
      alert("joke not found!!");
    }
    jokeContentDiv.style.color = "#333";
    jokeContentDiv.innerHTML = data.joke;

    nextJokeButton.innerHTML = "Next Joke";
    nextJokeButton.disabled = false;
  } catch (error) {
    jokeContentDiv.style.color = "red";
    jokeContentDiv.innerHTML = "Please try again later!";
    nextJokeButton.textContent = "Next Joke";
    nextJokeButton.disabled = false;
  }
}

request();

nextJokeButton.addEventListener("click", request);
