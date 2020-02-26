import React, {Component} from "react";
import axios from "axios";

export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            idkey:"",
            firstname:"",
            lastname:"",
            villageID:"",
            villageName:"",
            Subdistrict:"",
            District:"",
            Province:"",
            zipcode:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = 'http://35.185.186.61:3000/data';
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            villageID:this.state.villageID,
            villageName:this.state.villageName,
            Subdistrict:this.state.Subdistrict,
            District:this.state.District,
            Province:this.state.Province,
            zipcode:this.state.zipcode
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            villageID:"",
            villageName:"",
            Subdistrict:"",
            District:"",
            Province:"",
            zipcode:""
        });
    }

    render() {
        return(
            <div>
                <div className="App">
                    <h2>Register</h2>
                    <hr/>
                </div>
                <form className="container p-3 mb-2 bg-dark text-white" >
                    <div className="form-row">
                        <div className="form-group col-md-2" >
                            <label className="text-white">id</label>
                            <input type="number" className="form-control" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="text-white">firstname</label>
                            <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="text-white">lastname</label>
                            <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="text-white">villageID</label>
                            <input type="number" className="form-control" id="villageID" onChange={this.handleChang} value={this.state.villageID}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="text-white">villageName</label>
                            <input type="text" className="form-control" id="villageName" onChange={this.handleChang} value={this.state.villageName}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="text-white">Subdistrict</label>
                            <input type="text" className="form-control" id="Subdistrict" onChange={this.handleChang} value={this.state.Subdistrict}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="text-white">District</label>
                            <input type="text" className="form-control" id="District" onChange={this.handleChang} value={this.state.District}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="text-white">Province</label>
                            <input type="text" className="form-control" id="Province" onChange={this.handleChang} value={this.state.Province}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label className="text-white">zipcode</label>
                            <input type="number" className="form-control" id="zipcode" onChange={this.handleChang} value={this.state.zipcode}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                </form>
            </div>
        );
    }
}