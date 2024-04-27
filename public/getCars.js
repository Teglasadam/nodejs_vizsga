const getCars = async () => {
  await fetch("http://localhost:3300/api/cars")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = "";
      data.map((car) => {
        output += `<div class="col">
        <div class="card mx-auto my-3 p-0 text-center bg-light" style="width: 16rem">
          <img
            src="${car.carLink}"
            class="card-img-top img-fluid"
            style="height: 200px; object-fit: cover"
            alt="A kép nem elérhető"
          />
          <div class="card-body">
            <h5 class="card-title">${car.carName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${car.carType}</h6>
            <p class="card-text" style="height: 80px; overflow-y: auto">
              ${car.carDescription}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-light">
              <b>Gyártási éve:</b> ${car.carProductionDate}
            </li>
            <li class="list-group-item bg-light"><b>Ára:</b> ${car.carPrice}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Mutasd</a>
          </div>
        </div>
      </div>`;
      });
      document.getElementById("result").innerHTML = output;
    });
};
getCars();
