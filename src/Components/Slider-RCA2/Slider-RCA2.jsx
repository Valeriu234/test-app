import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SVG from "react-inlinesvg";
import sprite from "../../images/center/sprite.svg";
import './Slider-RCA2.css'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 670px;
  height: auto;
  margin-left: -30px;
`
const Tittle = styled.h3`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #1B1918;
  margin-left: 15px;
`
const CardsContainer = styled.div`
  display: grid;
  width: 670px;
  grid-template-columns:  200px 200px 200px;
  grid-template-rows: 125px;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  padding-left: 15px;



`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 125px;
  gap: 7px;
  background: ${(props) => props.isActive ? 'red' : 'white'};
  box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
  border-radius: 7px;
  border: 1px solid white;

  &:hover {
    border: 1px solid #A40731;
    transition: 2s ease-out;
    cursor: pointer;
  }


`

const StyledSVG = styled(SVG)`
  width: 50px;
  height: 50px;

  & path {
    fill: #1B1918;
  }

  ${Card}:hover & {
    & path {
      fill: #A40731;
      transition: 1s ease-out;
    }
  }
`

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;

`
const DescriptionCard = styled.p`
  font-family: 'PT Root UI';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #1B1918;
  max-width: 160px;
  white-space: initial;

  ${Card}:hover & {
    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    transition: 1s ease-out;
  }
`
const SuperContainer = styled.div`
  padding-left: 15px;
  height: 491px;
`

const SliderRca2 = ({changeDisabled, setSecondPageRCA}) => {
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [
            {id: 1, image: '#car', description: 'Autoturism cu pînă la 9 locuri'},
            {id: 2, image: '#bus', description: 'Autovehicule destinate transportului de pers...'},
            {id: 3, image: '#tractor', description: 'Tractoare rutiere avind puterea motorului'},
            {id: 4, image: '#truck', description: 'Camioane si alte autovehicule a caror m...'},
            {id: 5, image: '#bike', description: 'Motociclete'}]
    });

    const toggleActive = (index) => {
        changeState({...appState, activeObject: appState.objects[index]});
    }

    const toggleActiveStyles = (index) => {
        if (appState.objects[index] === appState.activeObject) {
            return 'activeCard';
        } else {
            return 'card'
        }
    }

    useEffect(() => {
        if (appState.activeObject !== null) {
            setSecondPageRCA(true)
        }
    }, [appState.activeObject])


    useEffect(() => {
        if (appState.activeObject !== null) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }, [appState.activeObject])


    return (
        <SuperContainer>
            <MainContainer>
                <Tittle>Alege tipul autovehiculului</Tittle>
                <CardsContainer>
                    {
                        appState.objects.map((post, index) => {
                            return (
                                <div onClick={() => toggleActive(index)} className={toggleActiveStyles(index)}
                                     key={index}>
                                    <svg
                                        className={appState.objects[index] === appState.activeObject ? 'activeIcon' : 'cars'}>
                                        <use href={sprite + post.image}></use>
                                    </svg>
                                    <h4 className={appState.objects[index] === appState.activeObject ? 'active-card-description' : 'card-description'}>{post.description}</h4>
                                </div>
                            )
                        })
                    }

                </CardsContainer>
            </MainContainer>
        </SuperContainer>
    );
};

export {CardsContainer, Row, Card, StyledSVG, DescriptionCard, Tittle, SuperContainer, MainContainer}
export default SliderRca2;