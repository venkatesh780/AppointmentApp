const submitBtn = document.getElementById("submit");
const appointmentList = document.getElementById("appointment-list");

function addAppointment(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;

  const appointment = document.createElement("li");
  appointment.innerText = `${name} ${email} ${phone} ${date}`;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.innerText = "Delete";

  appointment.appendChild(editBtn);
  appointment.appendChild(deleteBtn);

  appointmentList.appendChild(appointment);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";

  document.getElementById("name").focus();
}

submitBtn.addEventListener("click", addAppointment);
