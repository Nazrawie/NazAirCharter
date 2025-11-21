
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const bookingMsg = document.getElementById("bookingMessage");
  const crmTable = document.getElementById("crmTable");
  const liveFlights = document.getElementById("liveFlights");

  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    bookingMsg.textContent = "Booking request submitted successfully!";
    bookingMsg.style.color = "#00ff99";

    const n = document.getElementById("name").value;
    const f = document.getElementById("from").value;
    const t = document.getElementById("to").value;
    const d = document.getElementById("date").value;
    const p = document.getElementById("pax").value;

    const row = document.createElement("tr");
    row.innerHTML = `<td>${n}</td><td>${f} → ${t}</td><td>${d}</td><td>${p}</td>`;
    crmTable.appendChild(row);

    bookingForm.reset();
  });

  const sampleFlights = [
    ["NAZ101", "LAX → JFK", "19:40", "En Route"],
    ["NAZ222", "VNY → DAL", "16:55", "Boarding"],
    ["NAZ330", "SEA → LAS", "—", "Delayed"]
  ];

  sampleFlights.forEach(f => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td><td>${f[3]}</td>`;
    liveFlights.appendChild(row);
  });
});
