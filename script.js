const pages = document.querySelectorAll(".page");
function hideAllPages() {
    pages.forEach(page => {
        page.classList.remove("active");
    });
}
function showPage(id) {
    hideAllPages();
    document
        .getElementById(id)
        .classList
        .add("active");
}
/* ==========================
   LOADING
========================== */
function showLoading() {
    showPage("loadingPage");
    let progress = 0;
    const progressBar =
        document.getElementById("progressBar");
    const loadingText =
        document.getElementById("loadingText");
    const interval = setInterval(() => {
        progress++;
        progressBar.style.width =
            progress + "%";
        loadingText.innerText =
            progress + "%";
        if(progress >= 100){
            clearInterval(interval);
            setTimeout(() => {
                showPage("aboutMePage");
            }, 500);
        }
    }, 25);
}
/* ==========================
   ENVELOPE
========================== */
function showEnvelope() {
    showPage("envelopePage");
}
function openLetter(){
    const letter =
        document.querySelector(
            ".letter-image"
        );
    letter.style.transform =
        "scale(1.15)";
    letter.style.opacity =
        "0";
    setTimeout(() => {
        showPage("letterPage");
    }, 500);
}
/* ==========================
   LETTER
========================== */
function showKnowYou() {
    showPage("knowYouPage");
}
/* ==========================
   RELATIONSHIP PAGE
========================== */
function showRelationship() {
    showPage("relationshipPage");
}
/* ==========================
   PROPOSAL PAGE
========================== */
function showProposal() {
    showPage("proposalPage");
}
/* ==========================
   YES
========================== */
function accepted() {
    document
        .getElementById("endingTitle")
        .innerText =
        "Thank You 💗";
    document
        .getElementById("endingText")
        .innerText =
        "You just made me the happiest person today.";
    showPage("endingPage");
    startSakura();
}
/* ==========================
   NO
========================== */
function rejected() {

    document
        .getElementById("endingTitle")
        .innerText =
        "Thank You 🌸";

    document
        .getElementById("endingText")
        .innerText =
        "Thank you for being honest. I appreciate you reading all of this.";

    document
        .getElementById("retryBtn")
        .style.display =
        "inline-block";

    showPage("endingPage");

    startSakura();
}
/* ==========================
   SAKURA EFFECT
========================== */
function startSakura(){
    const container =
        document.getElementById(
            "sakura-container"
        );
    setInterval(() => {
        const sakura =
            document.createElement("div");
        sakura.classList.add(
            "sakura"
        );
        sakura.innerHTML = "🌸";
        sakura.style.left =
            Math.random() * 100 + "vw";
        sakura.style.animationDuration =
            (Math.random() * 4 + 4)
            + "s";
        sakura.style.fontSize =
            (Math.random() * 15 + 15)
            + "px";
        container.appendChild(
            sakura
        );
        setTimeout(() => {
            sakura.remove();
        }, 9000);
    }, 300);
}
/* ==========================
   SAVE ANSWERS
========================== */
/*
NANTI KALAU SUDAH BUAT
GOOGLE APPS SCRIPT
GANTI URL DI BAWAH INI
const scriptURL =
"https://script.google.com/macros/s/XXXXXXXX/exec";
lalu panggil:
fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})
supaya semua jawaban
masuk spreadsheet.
*/