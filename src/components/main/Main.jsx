import React from "react";
import "./Main.css";
import Containers from "../containers-small/ContainersS";
import SearchTable from '../searchTable/SearchTable';
import energy from './../../assets/icons/energy.png';
import sun from "./../../assets/icons/sun.svg";
import panel from "./../../assets/icons/solar-panel.png";

const Main = () => {
    return (
        <main>
                <div className="flex-container">
                    <Containers 
                        info="Gasto Mensal"
                        value="152,2 kWh/mês" //Valor a ser atualizado pelo backend
                        icon={energy}/>
                    <Containers 
                        info="Crédito solar"
                        value="R$ 2398,34" 
                        icon={sun}/>
                    <Containers 
                        info="Usina Solar 1" 
                        value="Utilizada: 45,05%"
                        icon={panel}/>
                </div> 
                <div 
                    className="flex-container search-table">
                    <SearchTable />
                </div>
        </main>
    )
}

export default Main;