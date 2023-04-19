import {useNavigate} from "react-router-dom";

export default function MainPage () {
    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={goToBack}>go to back</button>
            <h1>Home</h1>
        </>
    )
}