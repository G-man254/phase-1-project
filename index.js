// document.addEventListener("DOMContentLoaded", function () {
//     //Fetch car data from db.json
//     fetch("http://localhost:3000/Cars")
//       .then((response) => response.json())
//       .then((data) => {
//         const carData = data.Results;
//         displayCarDetails(carData[0]); // Display the details of the first car by default
//       });
//   });
  
//   function displayCarDetails(car) {
//   //   const carDetailsContainer = document.querySelector(".car-details");
  
//     const carHTML = `
//       <h2>${car.MakeName}</h2>
//       <p>Make ID: ${car.MakeId}</p>
//       <p>Vehicle Type: ${car.VehicleTypeName}</p>
//       <p>Vehicle Type ID: ${car.VehicleTypeId}</p>
//     `;
  
//     carDetailsContainer.innerHTML = carHTML;
  
//   }

  //JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from db.json
  fetch('http://localhost:3000/Cars')
    .then((response) => response.json())
    .then((data) => {
      const carList = document.querySelector(".car-list");
      const carDetails = document.querySelector(".car-details");

      // Function to render car list on the right side
      function renderCarList() {
        carList.innerHTML = "";
        //let Cars = fetch('http://localhost:3000/Cars')
        data.cars.forEach((car)=> {
          const carName = car.MakeName;
          const carItem = document.createElement("div");
          carItem.textContent = carName;
          carItem.addEventListener("click", () => {
            // Update car details on click
            updateCarDetails(car);
          });
          carList.appendChild(carItem);
        });
      }

      // Function to update car details on the left side
      function updateCarDetails(car) {
        document.getElementById("carImage").src = car.image;
        document.getElementById("carName").textContent = car.MakeName;
        document.getElementById("carFounder").textContent = car.Founder;
        document.getElementById("carYear").textContent = car.Year;
        document.getElementById("carEngine").textContent = car.Engine;
        document.getElementById("carTransmission").textContent =
          car.Transmission;
        document.getElementById("carPrice").textContent = car.price;
      }

      // Initially render the car list
      renderCarList();
    })
    //.catch((error) => console.error("Error fetching data: ", error));
  
  });


