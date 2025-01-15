
import React from 'react'
import {Chart, ArcElement} from "chart.js"
import {Doughnut} from "react-chartjs-2";
import Label from './Label.jsx';


Chart.register(ArcElement);




const config = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius:5,
      spacing:3
    }]
  },
  options:{
    responsiveness:true,
    cutout:50
    }
}
const Graph = () => {
  return (
    <div className='flex w-full md:h- justify-center rounded bg-white p-6  '>
      <div className="p-8">
        <div className="w-40 m-auto">
         <Doughnut {...config}></Doughnut>
         {/* <h3 className=' mb-4font-bold'>Total <span className='block text-emerald-400'>${0}</span></h3> */}
        </div>
        <div className="flex flex-col">
          {/* labels */}
          <Label></Label>
        </div>
      </div>
    </div>
  )
}

export default Graph