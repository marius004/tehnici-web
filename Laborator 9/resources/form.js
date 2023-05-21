
window.onload = () => {
  checkColor();
}

const saveColor = () => {
  var color = document.getElementById("color").value;
  localStorage.setItem("selectedColor", color);
  document.body.style.backgroundColor = color;
};

const checkColor = () => {
  var savedColor = localStorage.getItem("selectedColor");
  if (savedColor) {
    document.getElementById("color").value = savedColor;
    document.body.style.backgroundColor = savedColor;
  }
};

const isDateInFuture = (dateString) => {
  var currentDate = new Date();
  var selectedDate = new Date(dateString);

  return selectedDate > currentDate;
};

const validateForm = (e) => {
  e.preventDefault();

  const isValid = true; 
  var arrivalDateInput = document.getElementById("arrival_date");
  var arrivalDate = arrivalDateInput.value;

  if (!isDateInFuture(arrivalDate)) {
    alert("Data sosirii trebuie să fie în viitor!");
    isValid = false;
  }

  if (isValid) {
    document.body.innerHTML = "Informatia a fost trimsa cu succes!";
    return;
  }
  
  alert("Formularul nu este valid!");
};