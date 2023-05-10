var form = document.querySelector(".form-validate");
var validateBtn = form.querySelector(".validate_Btn");
var resetBtn = form.querySelector(".reset_Btn");
var fields = form.querySelectorAll(".field");
var shields = form.querySelectorAll(".text, .big_text");
var array = ["Башня", "Этаж", "Переговорная", "Дата", "Время", "Комментарий"];

var generateError = function (text) {
  var error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};

var removeValidation = function () {
  var errors = form.querySelectorAll(".error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

var checkFieldsPresence = function () {
  for (var i = 0; i < shields.length; i++) {
    if (!fields[i].value) {
      var error = generateError("Поле не заполнено");
      shields[i].appendChild(error);
      console.log("field: " + array[i] + " отсутсвует");
    } else {
      console.log(array[i] + ": " + fields[i].value);
    }
  }
};

validateBtn.addEventListener("click", function () {
  removeValidation();
  console.clear();
  checkFieldsPresence();
});

resetBtn.addEventListener("click", function () {
  removeValidation();
  console.clear();
});
