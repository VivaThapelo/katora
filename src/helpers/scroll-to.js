import useLocation from "react-router-dom";

function scrollTo() {
    const { hash } = useLocation();
    window.location.hash = "#" + hash;
}

export default scrollTo;