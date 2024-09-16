import { Component } from "react";

class Users extends Component {
    render() {
        return (
            <div>
                <h2 align="center">USERS</h2>
                    <table align="center">
                        <thead>
                            <tr>
                                <th>GRID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>COURSE</th>
                                <th>CITY</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.information.map((information, i) => (
                                       <tr >
                                       <td>{information.grid}</td>
                                        <td>{information.name}</td>
                                        <td>{information.email}</td>
                                        <td>{information.password}</td>
                                        <td>{information.course.join(" , ")}</td>
                                        <td>{information.city}</td>
                                       </tr>
                            ))
                        }
                        </tbody>
                    </table>
                
            </div>
        );
    }
}
export default Users