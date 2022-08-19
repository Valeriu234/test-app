import './Carte-Verde1.css'
import styled from "styled-components";
import { Row,Card,DescriptionCard,StyledSVG,MainContainer,SuperContainer,Tittle} from "../Slider-RCA2/Slider-RCA2";
import {useState} from "react";
import sprite from "../../images/center/sprite.svg";
import React from "react";

const CardsContainer2 = styled.div`
  display: grid;
  width: 670px;
  grid-template-columns:  200px 200px 200px ;
  grid-template-rows: 125px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-left: 15px;
`



 const CarteVerde1 = () => {
     const [appState, changeState] = useState({
         activeObject: null,
         objects: [
             {id: 1, image: '#bike', description: 'Motocicleta B'},
             {id: 1, image: '#car', description: 'Autoturisme A'},
             {id: 2, image: '#minitruck',description:'Camion pina la 3,5 tone' },
             {id: 3, image: '#truck', description: 'Camion mai mult de 3,5 tone' },
             {id: 4, image: '#minibus', description: 'Microbuz pina la 20 de locuri'},
             {id: 4, image: '#bus', description: 'Autobuz peste 20 de locuri'}]

     });

     const toggleActive = (index) => {
         changeState({ ...appState, activeObject: appState.objects[index] });
     }

     const toggleActiveStyles = (index) => {
         if (appState.objects[index] === appState.activeObject) {
             return 'activeCard';
         } else {
             return 'card'
         }
     }
     return(
        <SuperContainer>
            <MainContainer>
                <Tittle>Alege tipul autovehiculului</Tittle>
                <CardsContainer2>
                    {
                        appState.objects.map((post,index) => {
                            return (
                                <div onClick={() => toggleActive(index)} className={toggleActiveStyles(index)} key={index}>
                                    <svg className={appState.objects[index] === appState.activeObject ? 'activeIcon' : 'cars'}>
                                        <use href={sprite + post.image}></use>
                                    </svg>
                                    <h4 className={appState.objects[index] === appState.activeObject ? 'active-card-description' : 'card-description'}>{post.description}</h4>
                                </div>
                            )
                        })
                    }

                </CardsContainer2>
            </MainContainer>
        </SuperContainer>
    )
}


export default CarteVerde1