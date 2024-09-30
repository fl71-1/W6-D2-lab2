import React, { useState } from 'react'

export default function Content() {
    const[w,setW]=useState(0);
    const[h,setH]=useState(0);
    const[bmi,setBIM]=useState();
     
    const culbmi=() =>{
        if(h>0 && w>0){
            const meter =h/100;
            const bmiValue= w/(meter *meter);
            setBIM(bmiValue.toFixed(2));
        }else{
            alert("height and weight?")
        };
    }
    const type=()=>{

        if (bmi<18.5){
    
        }else if(bmi> 18.5 && bmi<24.9){
     
        }else if(bmi>25 && bmi<29.9){
     
        }else if(bmi>30&& bmi<34.9){
     
        }

    }
 
  return (
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-right pb-2">هل تعرف وزنك المثالي ؟</h1>
    
        <div class="flex flex-col gap-4">
            <div class="flex flex-col">
                <label for="weight" class="mb-2 font-semibold">الوزن</label>
                <input value={w} onChange={(e)=>setW(e.target.value)} placeholder="أدخل الوزن" class="border-2 border-cyan-700 p-2 rounded-md"
                />
            </div>

            <div class="flex flex-col">
                <label for="height" class="mb-2 font-semibold">الطول</label>
                <input value={h} onChange={(e)=> setH(e.target.value)}
                    placeholder="أدخل الطول"
                    class="border-2 border-cyan-700 p-2 rounded-md"
                />
            </div>

            <button onClick={culbmi}  class="mt-4 bg-cyan-700 text-white p-2 rounded-md hover:bg-cyan-800">
                احسب
            </button>
            <p>
            BMI :  {bmi}
            
            </p>
            {type}
        </div>
    </div>

  )
}
