import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Banner({ image, title }) {
    const [aboutPage, setPageAPropos] = useState(false);

    // Information URL de la page
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            setPageAPropos(true);
        }
    });

    return (
        <div
            className={
                aboutPage ? "banner-container-about" : "banner-container"
            }
        >
            <div className={aboutPage ? "banner-about" : "banner"}>
                <img src={image} alt="image Accueil" />
                {title}
            </div>
        </div>
    );
}
