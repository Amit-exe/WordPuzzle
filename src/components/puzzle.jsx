import React, { useState } from "react";
// import wordsList from "../wordlist";
import wordsList from "../list";
import correct from "./sound/correct.mp3"
import error from "./sound/error.mp3"
import already from "./sound/already.mp3"


const found_words = [];
var corrects = new Audio(correct);
var errors = new Audio(error);
var alreadys = new Audio(already);


function Puzzle() {

    const [score, setScore] = useState(0);

    function check() {

        let message = document.querySelector(".message");
        let user_input = document.getElementById("user-input").value;
        
        
        user_input = user_input.toLowerCase();
        if (wordsList.includes(user_input)) {
            
            if (!found_words.includes(user_input))
            {
                found_words.push(user_input);
                corrects.play();
                message.textContent = "  Nice Guess";
                setScore(score + user_input.length);
            }
            else {
                message.textContent = " Already Found";
                alreadys.play();
            }
                  
    }
        else {
              
            setScore(score - 1);
            message.textContent = "   Wrong word";
            errors.play();
            
        }
    }
    

    function reset() {
        setScore(0);
        document.querySelector(".message").textContent = "";
        while(found_words.length > 0) {
            found_words.pop();
        }
       
    }
    
    return <div>
        
        <main>
        <section class="player" >
            <div className="row score">
                <div className="col-lg-8 scorelabel"><p>Score </p></div>
                <div className="col-lg-4">
                <p id="score"> {score}</p>
                </div>
            </div>
            </section>
            
            <div className="grid">

                <div class="row">
                    <div class="col-sm-3">Z</div>
                    <div class="col-sm-3">G</div>
                    <div class="col-sm-3">N</div>
                    <div class="col-sm-3">T</div>
                </div>
                <div class="row">
                    <div class="col-sm-3">H</div>
                    <div class="col-sm-3 mid">B</div>
                    <div class="col-sm-3 mid">I</div>
                    <div class="col-sm-3">O</div>
                </div>
                <div class="row">
                    <div class="col-sm-3">M</div>
                    <div class="col-sm-3 mid">P</div>
                    <div class="col-sm-3 mid">D</div>
                    <div class="col-sm-3">A</div>
                </div>
                <div class="row">
                    <div class="col-sm-3">U</div>
                    <div class="col-sm-3">W</div>
                    <div class="col-sm-3">Y</div>
                    <div class="col-sm-3">E</div>
                </div>
            </div>
    
            <p className="message"></p>

        
            <button onClick={reset} class="btn btn--new"><i class="fa-solid fa-recycle"></i> New game</button>
            

            <div>
                <input className="btn uip" id="user-input" type="text"></input>
            <button onClick={check} class="btn btn--hold"><i class="fa-solid fa-check"></i> check</button>
                
            </div>
        </main>
    </div>;
}

export default Puzzle;
export { found_words };