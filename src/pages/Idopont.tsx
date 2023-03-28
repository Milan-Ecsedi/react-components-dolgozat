import { Component } from "react";

interface State{
    name: string;
    partyDate: string;
    description: string;
    message:string;
}

export default class Idopont extends Component<{}, State>{


    constructor(props:{}){
        super(props)
        this.state={
            name: '',
            partyDate:'',
            description:'',
            message:''
        }
    }

handleData=()=>{

if(this.state.name===''|| this.state.description===''|| this.state.partyDate===''){

    this.setState({message:'Kötelező az összes beviteli mezőt kitölteni'})
}
else{
    this.setState({message:'Köszönjük a megkeresését'})
}

}

render(){

    return <div className="card">
        <div className="card-body">
            <h4 className="card-title">Időpont foglalás</h4>
            <p>név:</p>
            <input type="text" value={this.state.name} onChange={e=> this.setState({name: e.currentTarget.value})}/>
            <p>rendezvény dátuma:</p>
            <input type='date' value={this.state.partyDate} onChange={e=> this.setState({partyDate: e.currentTarget.value})}/>
            <p>leírás:</p>
            <input type="text" value={this.state.description} onChange={e=> this.setState({description: e.currentTarget.value})}/><br></br>
            <button className="btn btn-success" onClick={this.handleData}>Küldés</button>
            <p>{this.state.message}</p>
        </div>


    </div>
}

}