const hotlineCardContainer = document.getElementById("hotline-card-container");
let heartPoint = Number(document.getElementById("heartPoint").textContent);

hotlineCardContainer.addEventListener("click", (e) => {
  if (e.target.className.includes("heart-icon")) {
    heartPoint += 1;
    document.getElementById("heartPoint").textContent = heartPoint;
  }
  if (e.target.className.includes("call-btn")) {
    alert("call button clicked");
  }
  if (e.target.className.includes("copy-btn")) {
    alert("copy button clicked");
  }
});

/* const callBtn = document.querySelector(".call-btn");

callBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const serviceName = document.querySelector(".service-name").textContent;
  const historyDiv = document.querySelector(".history-div");

  const historyName = document.createElement("h5");
  historyName.textContent = serviceName;
  historyName.classList.add(
    "inter-font",
    "color-primary",
    "text-[18px]",
    "font-semibold",
  );

  historyDiv.appendChild(historyName);
}); */
