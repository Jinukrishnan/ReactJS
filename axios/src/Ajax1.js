import React,{Component} from 'react';
import axios from 'axios';


class Ajax1 extends Component{
    constructor(){
        super();
        this.state={
                posts:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(Response=>{

        this.setState({posts:Response.data})
        })
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((itm,k)=>{
                        return(
                            <tr>
                            <td> {itm.id}</td>
                            <td>{itm.title}</td>
                        </tr>
                        )
                    })}


                    
                </tbody>
            </table>

        )
    }
}
export default Ajax1;