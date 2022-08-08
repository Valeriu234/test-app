import React from 'react';
import styled from "styled-components";
import SVG from "react-inlinesvg";
import car from '../../images/icons/machine-icons/car.svg'
import bus from '../../images/icons/machine-icons/bus.svg'
import tractor from '../../images/icons/machine-icons/tractor.svg'
import fura from  '../../images/icons/machine-icons/truck.svg'
import motorcycle from '../../images/icons/machine-icons/bike.svg'

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
    display: flex;
    width: 700px;
  align-items: center;
    flex-direction: column;
    gap: 40px;
    flex-wrap: wrap;
  height: 415px;
   
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
  height: 125px;
  gap: 7px;
  background: #FFFFFF;
  box-shadow: 0px 5px 15px 2px rgba(27, 25, 24, 0.05);
  border-radius: 7px;
`

const StyledSVG = styled(SVG)`
    width: 50px;
    height: 50px;
    & path {
      fill: #1B1918;
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
`
const SuperContainer = styled.div`
    padding-left: 15px;
`

const SliderRca2 = () => {
    return (
        <SuperContainer>
        <MainContainer>
            <Tittle>Alege tipul autovehiculului</Tittle>
           <CardsContainer>
               <Row>
               <Card>
               <StyledSVG src={car}/>
                   <DescriptionCard>Autoturism cu pînă la 9 locuri</DescriptionCard>
               </Card>
               <Card>
                   <StyledSVG src={bus}/>
                   <DescriptionCard>Autovehicule destinate transportului de pers...</DescriptionCard>
               </Card>
               <Card>
                   <StyledSVG src={tractor}/>
                   <DescriptionCard>Tractoare rutiere avind puterea motorului</DescriptionCard>
               </Card>
               </Row>
               <Row>
               <Card>
                   <StyledSVG src={fura}/>
                   <DescriptionCard>Camioane si alte autovehicule a caror m...</DescriptionCard>
               </Card>
               <Card>
                   <StyledSVG src={motorcycle}/>
                   <DescriptionCard>Motociclete</DescriptionCard>
               </Card>
               </Row>
           </CardsContainer>
        </MainContainer>
        </SuperContainer>
    );
};

export default SliderRca2;