import LocationDateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"

export  default function Bookings(){
    return (
        <main className="w-full flex flex-col items-center space-y-4">
        <div className="text-xl font-medium">Vaccine Booking</div>
  
        <div className="w-full space-y-2">
          <div className="text-md text-left text-gray-600">Name-Lastname</div>
          <TextField
            id="filled-basic"
            label="Name-Lastname"
            variant="filled"
            inputProps={{ className: "MuiInput-input" }}
          />
        </div>
  
        <div className="w-full space-y-2">
          <div className="text-md text-left text-gray-600">Citizen ID</div>
          <TextField
            id="filled-basic"
            label="Citizen ID"
            variant="filled"
            inputProps={{ className: "MuiInput-input" }}
          />
        </div>
  
        <LocationDateReserve />
  
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
          Book Vaccine
        </button> 
        </main>
    )
}