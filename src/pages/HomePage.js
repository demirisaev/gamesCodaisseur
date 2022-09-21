import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate();

    return <div id="Homepage">
        <button onClick={() => navigate("/memory")}>
            go to memory game
        </button>
    </div>
};