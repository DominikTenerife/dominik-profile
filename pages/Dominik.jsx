import React from "react"
import myImage from "../images/my-pict-small.png"
import { NavLink } from "react-router-dom"


export default function Dominik () {
    return (
    <div className="component-container">
        <div className="page-container">

                <img src={myImage} alt="Dominik Piskorski professional photo" className="my-picture"/>

                
            <div className="cv-section">
        
                <h3>Work experience</h3>
                <ul>
                    <li>Founder, <a href="/" target="_blank">Archipelago Solutions</a>: 09/2022 - still</li>
                    <li>President, Managing Director, <a href="https://www.trzuskawica.pl/o-firmie/?lang=en" target="_blank" alt="website of Trzuskawica lime and limestone plant">Trzuskawica S.A, Poland</a> (subsidiary of CRH plc): 01/2019 to 07/2021</li>
                    <li>Board Member, Commercial Director, <a href="https://ozarow.com.pl/" target="_blank" alt="website of Ozarow cement company Poland">Cement Ożarów S.A. Poland </a>(subsidiary of CRH plc): 09/2016 to 12/2018</li>
                    <li>VP Commercial <a href="https://www.trzuskawica.pl/o-firmie/?lang=en" target="_blank" alt="website of Trzuskawica lime and limestone plant">Trzuskawica S.A, Poland</a> (subsidiary of CRH plc): 09/2014 to 08/2016</li>
                    <li>Managing Director Concrete Products - Poland,  <a href="https://crhmaterials.pl/" target="_blank" alt="website of CRH Materials Polska">CRH Materials Polska, Poland</a> (subsidiary of CRH plc): 04/2012 to 08/2014</li>
                    <li>Board Member, Sales & Marketing Director, <a href="https://www.trzuskawica.pl/o-firmie/?lang=en" target="_blank" alt="website of Trzuskawica lime and limestone plant">Trzuskawica S.A, Poland</a> (subsidiary of CRH plc): 06/2007 to 03/2012</li>
                    <li>Logistics Manager / Customer Service Manager, <a href="https://ozarow.com.pl/" target="_blank" alt="website of Ozarow cement company Poland">Cement Ożarów S.A. Poland </a>(subsidiary of CRH plc): 06/2003 to 05/2007</li>
                    <li>Market Analyst, <a href="https://ozarow.com.pl/" target="_blank" alt="website of Ozarow cement company Poland">Cement Ożarów S.A. Poland </a>(subsidiary of CRH plc): 08/1998 to 05/2003</li>

                    
                </ul>
            </div>

            <div className="cv-section">
                <h3>Education</h3>
                <ul>
                    <li>MBA Strategic Management, <a href="https://www.uwl.ac.uk/" target="_blank" alt="website of University of West London, formerly Thames Valley University"> Thames Valley University, London</a>(currently University of West London), 2000</li>
                    <li>Bachelor Business Administration, <a href="https://www.uwl.ac.uk/" target="_blank" alt="website of University of West London, formerly Thames Valley University"> Thames Valley University, London</a>(currently University of West London), 1998</li>
                    
                </ul>
            </div>

            

            <div className="cv-section">
                <h3>Organizations and Boards</h3>
                <ul>                
                    <li>President, <a href="https://www.wapno-info.pl/en/" target="_blank" alt="website of Polish Lime Association in Cracow, Stowarzyszenie Przemysłu Wapienniczego">Polish Lime Association, Cracow, Poland</a> : 05/2019 to 05/2021</li>
                    <li>Board Member, <a href="https://www.eula.eu/" target="_blank" alt="website of European Lime Association in Brussels">European Lime Association, Brussels, Belgium</a>: 06/2019 to 06/2021 and 02/2008 to 06/2012</li>
                    <li>Supervisory Board Member, <a href="https://www.cemet.pl/en/" target="_blank" alt="website of CEMET S.A. railway logistics company">CEMET S.A., Warsaw, Poland</a> : 01/2019 to 10/2021</li>
                    <li>Supervisory Board Member, <a href="https://crhmaterials.pl/" target="_blank" alt="website of CRH Materials Polska">Ergon Poland Sp. z o.o. Mszczonów, Poland</a> : 04/2014 to 10/2021</li>
                    <li>President of Supervisory Board, <a href="https://polbruk.pl/" target="_blank" alt="website of Polbruk S.A.concrete paving producer in Poland">Polbruk S.A., Gdańsk, Poland</a> : 10/2012 to 11/2014</li>
                    
                </ul>
            </div>
            
            </div>

            

        </div>
    )
}