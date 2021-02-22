import React from 'react';
import SlotM from './Slotgame';

{/*const SlotM=(props)=>{

   // let x="😄";
    //let y="😄";
    //let z="🎅"
    let x=props.x;
    let y=props.y;
    let z=props.z;
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
*/}
const App =() => {

    return(<>
            <h1> 🎰 welcome to {" "}<span> slot machine game</span>🎰 </h1>
            <div>
            <SlotM x="😄" y="😄" z="😄"/>
            <SlotM x="😄" y="😄" z="🎅"/>
            <SlotM x="😄" y="😄" z="😄"/>
            </div>
            
    </>);
};

export default App;