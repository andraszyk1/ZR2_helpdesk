import React from 'react'
import BtnCategory from './Buttons/BtnCategory'

function Filters({handleFilterLokalizacja}) {
  return (
    <div className="flex flex-col items-start">
    <div className="font-bold text-3xl">Filtry</div>
    <div className="flex flex-col gap-2">
      <BtnCategory
        onClick={() => handleFilterLokalizacja("")}
        className={`w-40 bg-slate-300  hover:bg-slate-100 active:bg-green-300`}
      >
        Wszystkie lokalizacje
      </BtnCategory>
      <BtnCategory
        onClick={() => handleFilterLokalizacja("Toruń")}
        className="w-40 bg-slate-300 hover:bg-slate-100"
      >
        Toruń
      </BtnCategory>
      <BtnCategory
        onClick={() => handleFilterLokalizacja("Tychy")}
        className="w-40 bg-slate-300 hover:bg-slate-100"
      >
        Tychy
      </BtnCategory>
    </div>
  </div>
  )
}

export default Filters