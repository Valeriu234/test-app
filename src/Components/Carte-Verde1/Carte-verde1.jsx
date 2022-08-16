import './Carte-Verde1.css'
import styled from "styled-components";
import car from '../../images/icons/machine-icons/car.svg'
import bus from '../../images/icons/machine-icons/bus.svg'
import motorcycle from '../../images/icons/machine-icons/bike.svg'
import { Row,Card,DescriptionCard,StyledSVG,MainContainer,SuperContainer,Tittle} from "../Slider-RCA2/Slider-RCA2";
import minibus from '../../images/icons/machine-icons/minibus.svg'
import minitruck from '../../images/icons/machine-icons/minitruck.svg'
import truck from '../../images/icons/machine-icons/truck.svg'
import {useState} from "react";

const CardsContainer2 = styled.div`
    display: flex;
  flex-direction: column;
  gap: 20px;
  width: 700px;
  height: 415px;
  align-items: center;
`



 const CarteVerde1 = () => {
     // const [appState, changeState] = useState({
     //     activeObject: null,
     //     objects: [
     //         {id: 1, image: '#bike', description: 'Motocicleta B'}],
     //         {id: 1, image: '#car', description:'Autoturisme A},
     //         {id: 2, image: '#bus',description:'Autovehicule destinate transportului de pers...' },
     //         {id: 3, image: '#tractor', description: 'Tractoare rutiere avind puterea motorului' },
     //         {id: 4, image: '#truck', description: 'Camioane si alte autovehicule a caror m...'}
     //
     // });
     return(
        <SuperContainer>
            <MainContainer>
                <Tittle>Alege tipul autovehiculului</Tittle>
                <CardsContainer2>
                        <Card className='active-image'  id='moto-green-book'>
                            <StyledSVG src={motorcycle}/>
                            <DescriptionCard>Motociclete B</DescriptionCard>
                        </Card>
                        <Card >
                            <StyledSVG src={car}/>
                            <DescriptionCard>Autoturisme A</DescriptionCard>
                        </Card>
                        <Card >
                            <StyledSVG src={minitruck}/>
                            <DescriptionCard>Camion pina la 3.5 tone</DescriptionCard>
                        </Card>
                        <Card >
                            <StyledSVG src={truck}/>
                            <DescriptionCard>Camion mai mult de 3,5 tone</DescriptionCard>
                        </Card>
                        <Card >
                            <StyledSVG src={minibus}/>
                            <DescriptionCard>Microbuz pina la 20 de tone</DescriptionCard>
                        </Card >
                        <Card >
                            <StyledSVG src={bus}/>
                            <DescriptionCard>Autobuz peste 20 de locuri</DescriptionCard>
                        </Card>

                </CardsContainer2>
            </MainContainer>
        </SuperContainer>
    )
}


export default CarteVerde1