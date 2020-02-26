import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import './Showdata.css';

export default class Showdata extends Component{
    constructor() {
        super();
        this.state ={
            list:[],
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
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('/data')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }

    onDelete=(user)=>{
        let url = 'http://35.185.186.61:3000/delete';
        let data = {
            idkey:user.userid
        }
        axios.put(url,data)
        setTimeout(()=>{this.componentDidMount()},100)
    }

    openModal() {
        this.setState({
            visible : true
        });

    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    call=(user)=>{
        this.openModal();
        this.setState({
            idkey:user.userid,
            firstname:user.firstname,
            lastname:user.lastname,
            villageID:user.villageID,
            villageName:user.villageName,
            Subdistrict:user.Subdistrict,
            District:user.District,
            Province:user.Province,
            zipcode:user.zipcode
        })
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        let url = 'http://35.185.186.61:3000/data';
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            villageID:this.state.villageID,
            villageName:this.state.villageName,
            Subdistrict:this.state.Subdistrict,
            District:this.state.Subdistrict,
            Province:this.state.Province,
            zipcode:this.state.zipcode
        }
        axios.put(url,data)
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
            Distric:this.state.Subdistrict,
            Province:this.state.Province,
            zipcode:this.state.zipcode
        }
        axios.put(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            villageID:"",
            villageName:"",
            Subdistrict:"",
            Distric:"",
            Province:"",
            zipcode:""
        });
        setTimeout(()=>{this.componentDidMount()},50)
    }
    render() {
        let {list} = this.state;

        return (
            <div className="App">
                <h2>Users Information</h2>
                <hr/>
                <div className="container p-3 my-3 bg-dark text-white">
                    <table className="table table-dark">
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>villageID</th>
                            <th>Subdistrict</th>
                            <th>Distric</th>
                            <th>Province</th>
                            <th>zipcode</th>
                        </thead>
                        <tbody>
                                {list.map((user) =>{
                                    return(
                                        <tr>
                                            <td>{user.userid}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.villageID}</td>
                                            <td>{user.villageName}</td>
                                            <td>{user.Subdistrict}</td>
                                            <td>{user.District}</td>
                                            <td>{user.Province}</td>
                                            <td>{user.zipcode}</td>
                                            <td><button type="button" class="btn btn-warning" onClick={()=>this.call(user)}>Edit</button></td>
                                            <td><button type="button" class="btn btn-danger"  onClick={()=>this.onDelete(user)}>Delet</button></td>
                                            <div className="box">
                                                <Modal visible={this.state.visible}
                                                       width="1200"
                                                       height="600"
                                                       effect="fadeInUp"
                                                       onClickAway={() => this.closeModal()}
                                                >
                                                    <form className="container" id="form">
                                                        <div className="form-row">
                                                            <div className="form-group col-md-2" >
                                                                <h3><label >id : {user.userid}</label></h3>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className>firstname</label>
                                                                <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>lastname</label>
                                                                <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label>villageID</label>
                                                                <input type="number" className="form-control" id="villageID" onChange={this.handleChang} value={this.state.villageID}/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>villageName</label>
                                                                <input type="text" className="form-control" id="villageName" onChange={this.handleChang} value={this.state.villageName}/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label>Subdistrict</label>
                                                                <input type="text" className="form-control" id="Subdistrict" onChange={this.handleChang} value={this.state.Subdistrict}/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>District</label>
                                                                <input type="text" className="form-control" id="District" onChange={this.handleChang} value={this.state.District}/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label>Province</label>
                                                                <input type="text" className="form-control" id="Province" onChange={this.handleChang} value={this.state.Province}/>
                                                            </div>
                                                            <div className="form-group col-md-2">
                                                                <label>zipcode</label>
                                                                <input type="number" className="form-control" id="zipcode" onChange={this.handleChang} value={this.state.zipcode}/>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                                                    </form>
                                                </Modal>
                                            </div>
                                        </tr>
                                    )})}
                        </tbody>
                    </table>
                </div><br/>
            </div>
        );
    }
}