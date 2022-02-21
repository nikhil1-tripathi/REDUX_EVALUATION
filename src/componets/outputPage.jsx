import axios from "axios";

import { keydown } from "./mainPage"

export const OutputPage = ({ res }) => {
    return (
        <div className="outputPage">

            {/* {res.map((e) =>
                <finalPage url={e.url} />
            )} */}

            <img width="150px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png" />
            <input className="outputinput" placeholder="enter your search"></input>
            <button onClick={() => {
                var data = JSON.parse(localStorage.getItem("data"));
                console.log(data);
            }}>Search</button>

        </div>
    )
}