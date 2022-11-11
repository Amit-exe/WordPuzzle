import React, { useState } from "react";


const message = "Enter word on input and click on check button to start";


function Found() {

    
    
    // setCounter(counter + found_words.length);
    return <div class="foundwords">
        
        <p id="status">{message}</p>
        
</div>;
}

export default Found;
export { message };
