import express from "express";
import cors from "cors";
import { cars } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/cars", (req, res) => {
    res.send(cars);
})

app.get("/api/cars/search/:searchTerm", (req, res) => {
    const searchTerm  = req.params.searchTerm;
    const car= cars.filter(car =>
        car.nom.toLowerCase().includes(searchTerm.toLowerCase()));
  res.send(cars);
    })
  
  app.get("/api/cars/tag", (req, res) => {
    res.send();
  })
  
  app.get("/api/cars/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const car = cars
    .filter(car => car.tags?.includes(tagName));
    res.send(cars);
  })
  
  app.get("/api/cars/:carId", (req, res) => {
    const carId = req.params.carId;
    const car = cars.find(car => car.id == carId);
    res.send(car);
  })
  
  const port = 5000;
  app.listen(port, () => {
      console.log("Website served on http://localhost:" + port);
  })