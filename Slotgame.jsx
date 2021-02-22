import React from 'react';


const Slotgame=(props)=>{

   // let x="😄";
    //let y="😄";
    //let z="🎅"
   // let x=props.x;
   // let y=props.y;
   // let z=props.z;
   let {x,y,z}=props;
if(x===y&&y===z){

    return(
<>
        <div>
            <h1>
                {x} {y} {z}
            </h1>
            <h2>

                this is matching

            </h2>
        </div>
</>
    )
}else{
    return(
        <>
                <div>
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h2>
                    
                        this is not matching
        
                    </h2>
                </div>
        </>
    )
}
}

export default Slotgame;