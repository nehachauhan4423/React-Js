import { Component } from "react";

class Users extends Component {
    constructor(props) {
        super();
        console.log(props);
    }

    render() {
        return (
            <div align="center">
               
                    <h2 align="center">USERS</h2>
                    {
                        this.props.neha.map((users, i) => {
                            const { id, name, age, course } = users
                            return (
                                <div>
                                    <span>{id}</span>&nbsp;&nbsp;&nbsp;
                                    <span>{name}</span>&nbsp;&nbsp;&nbsp;
                                    <span>{age}</span>&nbsp;&nbsp;
                                    <span>{course.join(" , ")}</span>&nbsp;
                                </div>
                            )
                        })
                    }
               

                      <h2>COLOR</h2>  
                      {
                        this.props.color.map((c)=>{
                            return(
                                <div>
                                    <span>{color}</span>
                                </div>
                            )
                        })
                      }

            </div>
        )
    }
}
export default Users