var btnQuery = document.getElementById("btnQuery");
var btnAdd = document.getElementById("btnAdd");
if (btnQuery) {
  btnQuery.addEventListener("click", function () {
    window.location.href = "/query";
  });
}
const btnDelete = document.getElementById("btnDelete");
console.log(btnDelete);
const btnUpdate = document.getElementById("btnUpdate");
console.log(btnUpdate);
if (btnDelete) {
  btnDelete.addEventListener("click", function () {
    window.location.href = "/delete";
  });
}
