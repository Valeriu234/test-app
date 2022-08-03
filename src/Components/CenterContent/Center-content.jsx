import "./Center-content.css";
import sprite from "../../images/center/sprite.svg";
import React, { useState } from "react";
import Center from "./Center";
import DataFetching from "../Data-fetching";
import Center2 from "./Center2";

const CenterContent = () => {
    const [activeItem, setActiveItem] = useState(null);

    const items = [
        {
            id: 1,
            title: "Carte verde",
        },
        {
            id: 2,
            title: "RCA",
        },
        {
            id: 3,
            title: "Casco",
        },
        {
            id: 4,
            title: "Medicala",
        },
        {
            id: 5,
            title: "Accidente",
        },
        {
            id: 6,
            title: "Bunuri",
        },
        {
            id: 7,
            title: "Locuinte(imobile)",
        },
    ];

    return (
        <div className="center-content">
            <div className="top-tabs">
                <h3>Alege tipul de asigurare</h3>
                <ul className="menu-list">
                    {items.map((item, id) => (
                        <Center
                            key={id}
                            isActive={activeItem}
                            setActive={() => setActiveItem(item.id)}
                            item={item}
                        />
                    ))}

                    <li className="container-for-arrow">
                        Altele
                        <svg className="arrow-right">
                            <use href={sprite + "#arrow-right"}></use>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="form">
                <div className="center-section1 ">
                    {activeItem === items[2].id && (
                        <>
                            <h2 className="choose-vehicle">Alege tipul autovehicului</h2>
                            <DataFetching  />
                        </>
                    )}
                </div>
                <div className="center-section2">
                    {activeItem === items[2].id  && (
                        <Center2 />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CenterContent;