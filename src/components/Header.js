import { joinPaths } from "@remix-run/router"
import { Link } from "react-router-dom"

export default function Header() {
    return <div id="Header">
        <div id="logo"><Link to="/">ShiDemSerJo</Link></div>
    </div>
};

