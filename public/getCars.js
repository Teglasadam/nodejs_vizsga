const getCars = async () => {
  fetch("http://localhost:3300/api/cars")
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
