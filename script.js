const projectButton = document.querySelector("#project-button");

projectButton.addEventListener("click", function () {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});