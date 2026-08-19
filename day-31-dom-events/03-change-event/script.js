const selectCountry = document.querySelector("#selectCountry");
const para = document.querySelector("p");

selectCountry.addEventListener("change", () => {
    para.textContent = selectCountry.value;
});