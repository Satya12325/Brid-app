import React from "react";
import { data } from "./db";
import smlogo from "../Assets/logo/small-logo.svg";
import message from "../Assets/logo/message.svg";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./Dashbord.css";
function Dashbord(props) {
    return (
        <div className="dsh-maincontainer">
            {/* asdashgfdsdhgfhjds
            {
                data?.map((i)=><h1>{i.firstname}</h1>)
            } */}

            <div className="header">
                <div className="logo">
                    <img src={smlogo} alt="" />
                </div>
                <div className="header-details">
                    <div className="dash-head-details">
                        <h3>Ramaera industries </h3>
                        <div className="dash-language">
                            <Badge badgeContent={1} color="error">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                            <div className="dashlanguage">
                                <select
                                    className="dashbord-select"
                                    name=""
                                    id=""
                                    style={{
                                        background: "transparent",
                                        color: "white",
                                        backgroundImage: `url${"../Assets/logo/white-Polygon.svg"}`,
                                    }}
                                >
                                    <option value="">English (UK)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="straight-line"></div>
                </div>
            </div>

            <div className="welcome-container">
                <h1>
                    Welcome
                    {
                    data?.map((i)=><span className="name"> {i.firstname} </span>)
                    }                   
                    {/* <span className="name"> Ramaera </span> */}
                    , Please enter the Code sent to
                    your registered mail ID
                </h1>
                <hr />
            </div>

            <div className="mail-box">
                <div>
                    <img src={message} alt="logo" />
                </div>
                <div>
                    <button className="btn openbtn">Open</button>
                </div>
            </div>
        </div>
    );
}

export default Dashbord;
