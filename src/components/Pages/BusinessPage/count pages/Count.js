import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const Count = () => {
  const [chartData1, setChartData1] = useState({});;


  const chart = () => {
    let time = [];
    let fieldValue1 = [];
   
    fetch(` https://api.thingspeak.com/channels/1344229/fields/1.json?results=5`)
      .then(res => {
          return res.json();})
          .then((data)=>{
        console.log(data.feeds);
        for(const dataObj of data.feeds){
          time.push(dataObj.created_at)
          fieldValue1.push(parseInt(dataObj.field1))
  
        }
       
      
        setChartData1({
          labels: time,
          datasets: [
            {
              type:'line',
              label: "Visitor Count",
              data: fieldValue1,
              borderColor: '#1011EC ',
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
    console.log(time, fieldValue1);

  };


  

  useEffect(() => {
    chart();
  
  }, []);
  return (

    <div>
    <div className=" " >
      <h1 className='mt-6 text-2xl font-bold text-blue-700 md:text-2xl'>New Lanka Hospital</h1>
      <div>
        <Line
          data={chartData1}
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

export default Count;