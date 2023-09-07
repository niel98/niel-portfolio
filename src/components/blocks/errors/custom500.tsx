import React from "react";
import {useRouter} from "next/router";
import {Player} from "@lottiefiles/react-lottie-player";
import image1 from "../../../../assets/lottie/looking.json";
import image2 from "../../../../assets/lottie/ghost.json";
import image3 from "../../../../assets/lottie/ufo.json";

function Custom500() {
    const router = useRouter();

    const handlerefresh = () => {
        window.location.reload(); // refresh page
    };

    return (
        <div className="image404">


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="centered-image404">
                <Player
                    autoplay
                    loop
                    src={image1}
                    style={{
                        width: "50%",
                        height: "50%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
                <h1 className="not-found-title404">500 - Internal Server Error Occurred!</h1>
                <p className="not-found-text404">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Oops! It seems like you've stumbled upon server error on my
                    portfolio website.
                </p>
                <p style={{ fontSize: '14px' }}>
                    If you think this issues or bugs, please report them{' '}
                    <a href="https://github.com/muhammad-fiaz/portfolio/issues/new">@muhammad-fiaz</a>
                </p>
                <button className="go-back-button404" onClick={handlerefresh}>
                    Refresh Page
                </button>
            </div>
            <div className="anim">
                <div className="ufo">
                    <Player
                        autoplay
                        loop
                        src={image3}
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>
                <div className="ghost">
                    <Player
                        autoplay
                        loop
                        src={image2}
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>

            </div>

        </div>
    );
}

export default Custom500;
