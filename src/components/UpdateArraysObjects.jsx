import React, { useState } from 'react'

const UpdateArraysObjects = () => {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carBrand, setCarBrand] = useState('')
    const [carModel, setCarModel] = useState('')

    const addCar = () => {
        const newCar = {
            year: carYear,
            brand: carBrand,
            model: carModel,
        }

        setCars(c => ([...c, newCar]))
        setCarYear(new Date().getFullYear())
        setCarBrand('')
        setCarModel('')
    }
    const removeCar = index => {
        setCars(c => c.filter((element, i) => i != index))
    }
    const yearChange = e => {
        setCarYear(e.target.value)
    }
    const brandChange = e => {
        setCarBrand(e.target.value)
        
    }
    const modelChange = e => {
        setCarModel(e.target.value)

    }

  return (
    <div>
        <h1>List of cars</h1>
        <ul>
            {cars.map((car, index) => 
              <li key={index} onClick={()=> removeCar(index)}>{car.year} {car.brand} {car.model}</li>
            )}
        </ul>

        <input type="number" value={carYear} onChange={yearChange} /> <br />
        <input type="text" value={carBrand} onChange={brandChange} placeholder='Enter a car brand' /> <br />
        <input type="text" value={carModel} onChange={modelChange} placeholder='Enter a car model' /> <br />
        <button onClick={addCar}>Add car</button>
    </div>
  )
}

export default UpdateArraysObjects