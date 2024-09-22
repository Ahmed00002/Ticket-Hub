function checkCupon() {
  let cupon = document.getElementById("cupon-code").value.lowerCase;
  const code = ["new15", "couple20"];
  const total = 0;
  if (cupon == code[0].lowerCase) {
    grandTotal = totalCost * (15 / 100);
  } else {
    grandTotal = totalCost * (20 / 100);
  }
}

function addToList(id) {
  selectedSeats.push(id.innerText);
  totalSeat -= 1;

  if (seatCount === 3) {
    // enable cupon button
    document.getElementById("cupon-code").removeAttribute("disabled");
    document.getElementById("cupon-btn").removeAttribute("disabled");
  }
  if (seatCount === 4) {
    document.getElementById("modal-title").innerText = `Booking Limit Over`;
    document.getElementById(
      "modal-message"
    ).innerText = `You can only book 4 seats. \nYour limit: ${seatCount}/4`;
    document.getElementById("sit-selected-noti").showModal();
  } else {
    id.classList.add("bg-primaryColor", "text-white");
    totalCost += 550;
    seatCount += 1;
    // show on sidebar
    document.getElementById("seat-count").innerHTML = seatCount;
    availableSeat.innerText = totalSeat;
    const selectedSeat = document.createElement("div");
    selectedSeat.classList.add("flex", "justify-between", "py-4", "text-base");

    selectedSeat.innerHTML = `
  <p> ${id.innerText} </p>
  <p>Economy</p>
  <p>550</p>`;
    bookedList.appendChild(selectedSeat);
    document.getElementById("nothing-selected").classList.add("hidden");

    // update total balance
    document.getElementById("total-seat-price").innerText = totalCost;
  }
}

function selectSeat(id) {
  let isBooked = false;
  if (selectedSeats.length === 0) {
    addToList(id);
  } else {
    for (let seat of selectedSeats) {
      if (seat === id.innerText) {
        isBooked = true;
        break;
      } else {
        isBooked = false;
      }
    }
  }

  if (isBooked) {
    document.getElementById(
      "modal-message"
    ).innerText = `Seat ${id.innerText} is already selected`;
    document.getElementById("sit-selected-noti").showModal();
  } else {
    addToList(id);
  }
}
