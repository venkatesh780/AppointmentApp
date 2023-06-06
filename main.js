const submitBtn = document.getElementById("submit");
const appointmentList = document.getElementById("appointment-list");
const updateBtn = document.getElementById("update");

updateBtn.style.display = "none";

let appointments = [
  { name: "venky", email: "v@gmail.com", phone: "77668", date: "2023-06-01" },
  { name: "ram", email: "r@gmail.com", phone: "897608", date: "2023-05-01" },
  { name: "sav", email: "s@gmail.com", phone: "776765668", date: "2023-07-01" },
  { name: "yash", email: "y@gmail.com", phone: "7445668", date: "2023-02-01" },
];

function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  let data = {
    name,
    email,
    phone,
    date,
  };
  addAppointment(data);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";

  document.getElementById("name").focus();
}
function renderItems(appointments) {
  appointments.forEach((item) => {
    const appointment = document.createElement("li");
    appointment.innerText = `${item.name} ${item.email} ${item.phone} ${item.date}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "Delete";

    appointment.appendChild(editBtn);
    appointment.appendChild(deleteBtn);

    appointmentList.appendChild(appointment);
  });
}
function addAppointment(data) {
  appointments.push(data);
  console.log(appointments);
  appointmentList.innerHTML = "";
  renderItems(appointments);
}

function deleteAppointment(itemIndex) {
  // console.log(itemIndex);
  appointments.splice(itemIndex, 1);

  appointmentList.innerHTML = "";

  renderItems(appointments);
}

function updateItems(itemIndex) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;

  let data = {
    name,
    email,
    phone,
    date,
  };

  appointments[itemIndex] = data;

  appointmentList.innerHTML = "";
  renderItems(appointments);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
}
function deleteEditAppointment(e) {
  if (e.target.innerText === "Delete") {
    let items = e.target.parentElement.innerText.split(" ");

    let itemIndex;
    appointments.forEach((item, index) => {
      if (
        items[0] === item.name &&
        items[1] === item.email &&
        items[2] === item.phone
      ) {
        itemIndex = index;
      }
    });
    console.log(itemIndex, "hi");
    deleteAppointment(itemIndex);
  } else if (e.target.innerText === "Edit") {
    let items = e.target.parentElement.innerText.split(" ");

    let itemIndex;
    appointments.forEach((item, index) => {
      if (
        items[0] === item.name &&
        items[1] === item.email &&
        items[2] === item.phone
      ) {
        itemIndex = index;
      }
    });

    document.getElementById("name").value = items[0];
    document.getElementById("email").value = items[1];
    document.getElementById("phone").value = items[2];

    submitBtn.style.display = "none";
    updateBtn.style.display = "block";

    updateBtn.addEventListener("click", (e) => {
      e.preventDefault();

      updateItems(itemIndex);
    });
  }
}

renderItems(appointments);

submitBtn.addEventListener("click", handleForm);
appointmentList.addEventListener("click", deleteEditAppointment);
