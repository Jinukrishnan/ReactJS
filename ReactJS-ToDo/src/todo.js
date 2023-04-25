import React,{Component} from "react";


class ToDo extends Component{
    constructor(props){
        super(props);
            this.state={
                items:["item1","item2"],
                txtContent:""
            };
        }


        txtChange=(e)=>{
            this.setState({txtContent:e.target.value});   
        }
    
        addItem = (e)=>{
            // alert("Add Item")
            let currentText=this.state.txtContent;
            let currentItems=this.state.items;
            currentItems.push(currentText);
            this.setState({items:currentItems})
        }

        removeItem=(i)=>{
            // alert(i)

            if(!window.confirm("Are You Want to Delete The Tas.?"))
            {
                return;
            }

            let currentItems=this.state.items;
            currentItems.splice(i,1);
            this.setState({items:currentItems});

        }

    render(){
        return(
            <div className="container">
                <div >
                    <h3>TODO</h3>
                </div>
                <div className="">
                    <input type="text"  placeholder="Add Task" onChange={this.txtChange}/>
                    <button className="btn btn-primary" onClick={this.addItem}>Add</button>
                    <br/><br/>
                    <ul>  
                        {this.state.items.map((itm,k)=>{
                            return(
                                <li>{itm} <button className="btn btn-warning" onClick={()=>{this.removeItem(k)}}>Delete</button></li>
                            )
                        })}
                        
                    </ul>
                        {/* <p>{this.state.txtContent}</p> */}
                </div>
            </div>
        );

        
    }
}


export default ToDo;