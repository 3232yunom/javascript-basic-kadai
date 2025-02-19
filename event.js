const Btn = document.getElementById("btn");

Btn.addEventListener("click",() => {
  const textJs = document.getElementById("text");
  textJs.textContent = "ボタンをクリックしました";
  console.log(textJs);
});