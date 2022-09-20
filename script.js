const containerEl = document.querySelector(".container");

const kits = ["snare", "kick", "crash", "tom"];
kits.forEach(function (kit) {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", function () {
    audioEl.play();
  });
  window.addEventListener("keydown", function (e) {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      this.setTimeout(function () {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
