document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let carName = document.getElementById("carName").value;
  let carType = document.getElementById("carType").value;
  let carProductionDate = document.getElementById("carProductionDate").value;
  let carPrice = document.getElementById("carPrice").value;
  let carLink = document.getElementById("carLink").value;
  let carDescription = document.getElementById("carDescription").value;

  if (
    carName ||
    carType ||
    carProductionDate ||
    carPrice ||
    carLink ||
    carDescription != ""
  )
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
      });
  else {
    alert("Nem adtál meg adatot!");
  }
  document.querySelector("form").reset();
});
