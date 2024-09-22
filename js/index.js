/**
 * all seat buttons
 */

const seatA1 = document.getElementById("seat-a1");
const seatA2 = document.getElementById("seat-a2");
const seatA3 = document.getElementById("seat-a3");
const seatA4 = document.getElementById("seat-a4");

const seatB1 = document.getElementById("seat-b1");
const seatB2 = document.getElementById("seat-b2");
const seatB3 = document.getElementById("seat-b3");
const seatB4 = document.getElementById("seat-b4");

const seatC1 = document.getElementById("seat-c1");
const seatC2 = document.getElementById("seat-c2");
const seatC3 = document.getElementById("seat-c3");
const seatC4 = document.getElementById("seat-c4");

const seatD1 = document.getElementById("seat-d1");
const seatD2 = document.getElementById("seat-d2");
const seatD3 = document.getElementById("seat-d3");
const seatD4 = document.getElementById("seat-d4");

const seatE1 = document.getElementById("seat-e1");
const seatE2 = document.getElementById("seat-e2");
const seatE3 = document.getElementById("seat-e3");
const seatE4 = document.getElementById("seat-e4");

const seatF1 = document.getElementById("seat-f1");
const seatF2 = document.getElementById("seat-f2");
const seatF3 = document.getElementById("seat-f3");
const seatF4 = document.getElementById("seat-f4");

const seatG1 = document.getElementById("seat-g1");
const seatG2 = document.getElementById("seat-g2");
const seatG3 = document.getElementById("seat-g3");
const seatG4 = document.getElementById("seat-g4");

const seatH1 = document.getElementById("seat-h1");
const seatH2 = document.getElementById("seat-h2");
const seatH3 = document.getElementById("seat-h3");
const seatH4 = document.getElementById("seat-h4");

const seatI1 = document.getElementById("seat-i1");
const seatI2 = document.getElementById("seat-i2");
const seatI3 = document.getElementById("seat-i3");
const seatI4 = document.getElementById("seat-i4");

const seatJ1 = document.getElementById("seat-j1");
const seatJ2 = document.getElementById("seat-j2");
const seatJ3 = document.getElementById("seat-j3");
const seatJ4 = document.getElementById("seat-j4");

// total available seat html
const availableSeat = document.getElementById("totalSeat");
const bookedList = document.getElementById("booked-seat-list");
let totalSeat = 40;
let totalCost = 0;
let seatCount = 0;
let grandTotal = 0;
let selectedSeats = ["nothing added"];
// create booking list

seatA1.addEventListener("click", () => {
  selectSeat(seatA1);
  console.log(selectedSeats.length);
});
seatA2.addEventListener("click", () => {
  selectSeat(seatA2);
});
seatA3.addEventListener("click", () => {
  selectSeat(seatA3);
});
seatA4.addEventListener("click", () => {
  selectSeat(seatA4);
});

seatB1.addEventListener("click", () => {
  selectSeat(seatB1);
  console.log(selectedSeats.length);
});
seatB2.addEventListener("click", () => {
  selectSeat(seatB2);
});
seatB3.addEventListener("click", () => {
  selectSeat(seatB3);
});
seatB4.addEventListener("click", () => {
  selectSeat(seatB4);
});

seatC1.addEventListener("click", () => {
  selectSeat(seatC1);
  console.log(selectedSeats.length);
});
seatC2.addEventListener("click", () => {
  selectSeat(seatC2);
});
seatC3.addEventListener("click", () => {
  selectSeat(seatC3);
});
seatC4.addEventListener("click", () => {
  selectSeat(seatC4);
});

seatD1.addEventListener("click", () => {
  selectSeat(seatD1);
  console.log(selectedSeats.length);
});
seatD2.addEventListener("click", () => {
  selectSeat(seatD2);
});
seatD3.addEventListener("click", () => {
  selectSeat(seatD3);
});
seatD4.addEventListener("click", () => {
  selectSeat(seatD4);
});

seatE1.addEventListener("click", () => {
  selectSeat(seatE1);
  console.log(selectedSeats.length);
});
seatE2.addEventListener("click", () => {
  selectSeat(seatE2);
});
seatE3.addEventListener("click", () => {
  selectSeat(seatE3);
});
seatE4.addEventListener("click", () => {
  selectSeat(seatE4);
});

seatF1.addEventListener("click", () => {
  selectSeat(seatF1);
  console.log(selectedSeats.length);
});
seatF2.addEventListener("click", () => {
  selectSeat(seatF2);
});
seatF3.addEventListener("click", () => {
  selectSeat(seatF3);
});
seatF4.addEventListener("click", () => {
  selectSeat(seatF4);
});

seatG1.addEventListener("click", () => {
  selectSeat(seatG1);
  console.log(selectedSeats.length);
});
seatG2.addEventListener("click", () => {
  selectSeat(seatG2);
});
seatG3.addEventListener("click", () => {
  selectSeat(seatG3);
});
seatG4.addEventListener("click", () => {
  selectSeat(seatG4);
});

seatH1.addEventListener("click", () => {
  selectSeat(seatH1);
  console.log("btn clicked");
});
seatH2.addEventListener("click", () => {
  selectSeat(seatH2);
});
seatH3.addEventListener("click", () => {
  selectSeat(seatH3);
});
seatH4.addEventListener("click", () => {
  selectSeat(seatH4);
});

seatI1.addEventListener("click", () => {
  selectSeat(seatI1);
});
seatI2.addEventListener("click", () => {
  selectSeat(seatI2);
});
seatI3.addEventListener("click", () => {
  selectSeat(seatI3);
});
seatI4.addEventListener("click", () => {
  selectSeat(seatI4);
});

seatJ1.addEventListener("click", () => {
  selectSeat(seatJ1);
});
seatJ2.addEventListener("click", () => {
  selectSeat(seatJ2);
});
seatJ3.addEventListener("click", () => {
  selectSeat(seatJ3);
});
seatJ4.addEventListener("click", () => {
  selectSeat(seatJ4);
});

// give discount
const cuponBtn = document.getElementById("cupon-btn");

document.getElementById("cupon-btn").addEventListener("click", () => {
  let cupon = document.getElementById("cupon-code").value;
  cupon = cupon.toLowerCase();

  const code = ["new15", "couple20"];
  let total = 0;
  if (cupon === "new15") {
    total = totalCost * (15 / 100);
  } else if (cupon == "couple20") {
    total = totalCost * 0.2;
  }
  document.getElementById("grand-total").innerText = totalCost - total;
  document.getElementById("discount-amount").innerText = total;
  document.getElementById("cupon-box").classList.add("hidden");
  document.getElementById("discount-contaner").classList.remove("hidden");
});
