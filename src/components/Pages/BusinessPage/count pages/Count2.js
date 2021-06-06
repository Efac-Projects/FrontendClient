import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const Count2 = () => {
  const [chartData2, setChartData2] = useState({});;


  const chart = () => {
    let time = [];
    let fieldValue2 = [];
   
    fetch(` https://api.thingspeak.com/channels/1351509/fields/1.json?api_key=S77PVT04X5OFW6GO&results=5`)
      .then(res => {
          return res.json();})
          .then((data)=>{
        console.log(data.feeds);
        for(const dataObj of data.feeds){
          time.push(dataObj.created_at)
        
          fieldValue2.push(parseInt(dataObj.field1))
  
        }
       
      
        setChartData2({
          labels: time,
          datasets: [
            {
              type:'line',
              label: "Visitor Count",
              data: fieldValue2,
              borderColor: '#10B981 ',
              borderWidth: 3,
              fill:false,
              tension: 0.1
            }
          ]
        });


      })
      .catch(err => {
        console.log(err);
      });
    console.log(time, fieldValue2);

  };


  

  useEffect(() => {
    chart();
  
  }, []);
  return (

    <div>
    <div className=" " >
      <h1 className='mt-6 text-2xl font-bold text-green-500 md:text-2xl'>New Hospital</h1>
      <div>
        <Line
          data={chartData2}
          options={{
            responsive: true,
          
            scales: {
              yAxes: [
                {
                  ticks: {
                   
                    beginAtZero: true
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
</div>


  );
};

export default Count2;