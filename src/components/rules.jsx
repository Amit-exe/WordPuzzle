import React from "react";

function Rules() {

    
    return <div class="rules ">
        
        <p>
            It is simple game with simple rules as follows:
        </p>
        <br />
        <ol>
            <li>Try to find as many valid words as you can from right grid letters</li>
            <li>
                Words should be 3,4 and 5 letters
            </li>
            <li>
                Repetation of letters is not allowed in same word
            </li>
            <li>
                Prurals not allowed
            </li>
            <li>You'll get score for each letter you find based on the length of the letter for example 3 points for 3 letter word and so on</li>
            <li>Also note -1 point penalty for each wrong word</li>
            <li>Use of Highlighed letters (middle letters) in grid is not allowed</li>
        </ol>
    </div>;
}

export default Rules;