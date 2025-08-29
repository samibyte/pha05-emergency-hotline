const hotlineCardContainer = document.getElementById("hotline-card-container");
const historycontainer = document.getElementById("historyContainer");
let heartPoint = Number(document.getElementById("heartPoint").textContent);
let coinPoint = Number(document.getElementById("coinPoint").textContent);
let copyCount = Number(document.getElementById("copyCount").textContent);

hotlineCardContainer.addEventListener("click", (e) => {
  if (e.target.className.includes("heart-icon")) {
    heartPoint += 1;
    document.getElementById("heartPoint").textContent = heartPoint;
  }
  if (e.target.className.includes("call-btn")) {
    const cardTitle = e.target.parentNode.parentNode.children[1].innerText;
    const cardSubTitle = e.target.parentNode.parentNode.children[2].innerText;
    const cardNum = e.target.parentNode.parentNode.children[3].innerText;
    if (coinPoint < 20) {
      alert(
        " ❌ You don't have sufficient coins. You need at least 20 coins to make a call",
      );
    } else {
      coinPoint -= 20;
      document.getElementById("coinPoint").textContent = coinPoint;
      alert(`📞 Calling ${cardSubTitle} ${cardNum}...`);

      // Generating call history markup

      const historyBox = document.createElement("div");
      historyBox.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "sm:p-4",
      );

      // service title and subtitle wrapper
      const serviceParent = document.createElement("div");

      const serviceTitle = document.createElement("h5");
      serviceTitle.classList.add(
        "inter-font",
        "color-primary",
        "text-[18px]",
        "font-semibold",
      );
      serviceTitle.innerText = cardTitle;

      const serviceNum = document.createElement("p");
      serviceNum.classList.add("color-secondary", "text-[18px]");
      serviceNum.innerText = cardNum;

      const callTime = document.createElement("p");
      callTime.classList.add(
        "color-primary",
        "text-[18px]",
        "whitespace-nowrap",
      );
      // local time implementation
      callTime.innerText = new Date().toLocaleTimeString();

      serviceParent.append(serviceTitle, serviceNum);
      historyBox.append(serviceParent, callTime);
      historycontainer.insertBefore(historyBox, historycontainer.firstChild);
    }
  }
  if (e.target.className.includes("copy-btn")) {
    const cardNum = e.target.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(cardNum);
    copyCount += 1;
    document.getElementById("copyCount").textContent = copyCount;
    alert(`✅ Hotline Number Copied: ${cardNum}`);
  }
});

const historyClearBtn = document.getElementById("history-clear-btn");
historyClearBtn.addEventListener("click", (e) => {
  historycontainer.innerHTML = "";
});
