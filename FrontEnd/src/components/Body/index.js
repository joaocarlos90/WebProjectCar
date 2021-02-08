import *as S from './styles';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/bugatti.png';
import image2 from '../../assets/ferrari_gtc4.png';
import image3 from '../../assets/ferrari458.png';
import image4 from '../../assets/Mclaren.png';
import image5 from '../../assets/pagani.png';
import image6 from '../../assets/porche.png';
import image7 from '../../assets/bmwfooter2.png';


class DemoCarousel extends Component {
    render() {
        return (
            <S.Container>
            <Carousel>
                <div>
                <img src={image1} alt="Bugatti"/>
                    <p className="legend">O Bugatti Veyron 16.4 Grand Sport Vitesse é uma versão do Grand Sport com o motor do Super Sport. Produz uma potência máxima de 1.200 cv a 6.400 rpm e torque de 1.500 N·m a 3.000–5.000 rpm. Vai de 0–100 km/h em 2,6 segundos. É considerado o carro de teto aberto mais rápido do mundo, atingindo 408,84 km/h.</p>
                </div>
                <div>
                 <img src={image2} alt="Ferrari GTC 4"/>
                    <p className="legend">A GTC4Lusso é movida por um motor V12 de 6,3 litros, que entrega 690 cv e torque máximo de 71 kgfm. Dados divulgados pela Ferrari indicam aceleração de 0 a 100 km/h em 3,4 segundos e velocidade máxima de 335 km/h. ... A velocidade final é de 320 km/h.</p>
                </div>
                <div>
                 <img src={image3} alt="Ferrari 458"/>   
                    <p className="legend">É equipada com um motor V8 de 4499 cilindradas,ASPIRADO, de cárter seco, posicionado no meio da carroçaria em V (com ângulo de 90º entre os pistões). Possui um giro máximo de 9000 rpm e uma relação de compressão de 12.5:1.</p>
                </div>
                <div>
                 <img src={image4} alt="Mclaren"/>   
                    <p className="legend">O F1 GTR teve apenas dezoito unidades produzidas, com o motor V12 de 600 HP (608 CV) a 7500 rpm e com a velocidade máxima de 386,7 km/h. Seu peso total é de 1012 kg.</p>
                </div>
                <div>
                 <img src={image5} alt="Pagani"/>   
                    <p className="legend">O Huayra tem um V12 central de 60º com 730 cv, concebido pela divisão AMG da Mercedes-Benz e assinado por um engenheiro da empresa. O Huayra é capaz de chegar aos 360 km/h.</p>
                </div>
                <div>
                 <img src={image6} alt="Porche Carreira"/>   
                    <p className="legend">A velocidade máxima chega a 293 km/h. Tal como o Carrera S, o 911 Carrera tem rodas maiores na traseira. Os pneus e rodas medem 235/40 R19 à frente e 295/35 R20 atrás. Os enormes discos de freio tem 33 cm de diâmetro e pinças de quatro pistões.</p>
                </div>
                <div>
                 <img src={image7} alt="BMW 320 I"/>   
                    <p className="legend">O BMW 320i 2021 é equipado com um motor 2.0 TwinPower Turbo ActiveFlex, que desenvolve 184 cavalos de potência e 30,6 kgfm de torque, a 1.350 rpm, com câmbio automático de oito marchas. Segundo dados da marca, o modelo consegue acelerar de 0 a 100 km/h em 7,1 segundos e alcançar velocidade máxima de 240 km/h.</p>
                </div>
                
            </Carousel>
            renderThumbs: (children: React.ReactChild[]) => React.ReactChild[]
            </S.Container>
        );
    }
};

export default DemoCarousel;
