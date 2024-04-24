const getCars = async () => {
  fetch("http://localhost:5500/api/cars")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = "";
      data.map((car) => {
        output += `<div class="car-box">
          <h4>${car.carName}</h4>
          <p>${car.carType}</p>
          <p>${car.carProductionDate}</p>
          <p>${car.carLink}</p>
          <p>${car.carDescription}</p>
        </div>
        `;
      });
      document.getElementById("result").innerHTML = output;
    });
};
getCars();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let carName = document.getElementById("carName").value;
  let carType = document.getElementById("carType").value;
  let carProductionDate = document.getElementById("carProductionDate").value;
  let carPrice = document.getElementById("carPrice").value;
  let carLink = document.getElementById("carLink").value;
  let carDescription = document.getElementById("carDescription").value;

  fetch("http://localhost:3300/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      carName,
      carType,
      carProductionDate,
      carPrice,
      carLink,
      carDescription,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      getCars();
    });
});
