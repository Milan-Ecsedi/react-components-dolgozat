import { Component, ReactNode } from "react";
import Djimg from '../images/dj.jpg'

export default class MainPage extends Component{


render(){
    
    return <div className="MainP">
        <h1>Üdvözöllek DJ Petrik weboldalán!
            Válassz a fenti lehetőségek közül!
        </h1>
        <img src={Djimg} alt="Petrik Dj kép" />
    </div>
}
}