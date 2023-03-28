import { Component } from "react";
import petrik from '../images/petrik.jpg'

export default class SzakmaiTap extends Component{



    render(){


        return <div className="SzakmaiP">
            <h2>Pro-bono bulik:</h2>
            <ul>
                <li>
                Csibeavató, 2021. 08. 31.
                </li>
                <li>
                Karácsonyi bál, 2021. 12. 22.
                </li>
                <li>
                Farsangi mulatság, 2022. 02. 20.
                </li>
            </ul>
            <h2>Pro-bono bulik:</h2>
            <ul>
                <li>
                Tanárkarácsony, 2021. 12. 20.
                </li>
                <li>
                Ballagás, 2022. 04. 30.
                </li>
            </ul>
            <img src={petrik} alt="Petrik buli szobor"/>

        </div>
    }
}