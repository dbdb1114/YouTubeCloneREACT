
import { useEffect } from "react";
import Header from "./Header";
import MainVideoList from "./MainVideoList";
import { Outlet } from "react-router-dom";

export default () => {

    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )

}