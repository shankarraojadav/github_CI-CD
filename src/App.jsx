import { useState } from "react"


const countries = [
  {
    name: "India", value: "IN", cities: ['Delhi', 'Mumbai']
  },
  {
    name: "Pak", value: "PK", cities: ['Lahore', 'Karachi']
  },
  {
    name: "Bangladesh", value: "BG", cities: ['Dhaka', 'Chittagong']
  }
]

export default function App () {

  console.log(countries[0])

const [city, setCity] = useState(0)

  const handleClick = (e) => {
    setCity(e.target.value);
  }

  console.log(city)

  return (
    <div>
      <select onClick={handleClick}>
        {
          countries.map((i, idx) => {
            return (
              <option value={idx} key={idx}>{i.name}</option>
            )
          })
        }
      </select>
      <select>
       {
        countries[city].cities.map((i) => {
          return <option>{i}</option>
        })
       }
      </select>
    </div>
    
  )
}