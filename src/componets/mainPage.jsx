import axios from "axios";

export const MainPage = () => {

    function keydown(e) {
        if (e.keyCode == 13) {
            console.log("enter")

            axios.get(`https://fast-reef-22226.herokuapp.com/data?title=${e.target.value}`)
                .then(res => {
                    console.log(res.data);
                    localStorage.setItem("data", JSON.stringify(res.data));



                });

        }
    }

    return (
        <div className="main">

            <img width="300px" height="120px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png" />
            <input onKeyDown={keydown} className="search-box" placeholder="enter your search"></input>

        </div>
    )
}