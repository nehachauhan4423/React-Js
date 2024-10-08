import { Component } from "react";

class Header extends Component{
    constructor(){
        super();

        this.record= [
            {id:1, name:"John"},
            {id:2,name:"jane"},
            {id:3,name:"bob"}
        ]

        this.arr1 = [10,8,7];
        this.arr2 = [3,45,7];
        this.arr4 = [78,56,3];
        this.arr3 = [...this.arr1,500,800,600,...this.arr2,...this.arr4]
        console.log(this.arr1);
    }
        render(){
            return(
                <div align="center">
                    <h2>View User</h2>
                    <table align="center" border={1}>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.record.map((val,index)=>{
                                    return(
                                        <tr>
                                            <td>{++index}</td>
                                            <td>{val.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )       
        }
    }
export default Header