import { Component } from "react";
import axios from "axios"



export default class PersonList extends Component{
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    };

    render() {
        return (
            
            <div>
                <h2 style={{backgroundColor: 'green', padding: '20px', marginTop: '0'}}>User List</h2>
                {this.state.persons.map((person) => (
                    <div style={{ display: 'flex', backgroundColor: 'lightblue', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '100px' }}>
                            <p>
                                {person.gender === 'male' ? 'Mr. ' : 'Miss '}
                                {`${person.name.first} ${person.name.last} - ${person.login.uuid}`}
                            </p>
                            <img
                                src={person.picture.large}
                                alt="user"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                }}
                            />
                            <button style={{ padding:'5px', backgroundColor: 'blue', color: 'white', marginTop: '30px', borderRadius: '10%'}}>Details</button>

                        </div>
        
                        <div style={{ paddingLeft: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <p>User Name: {person.name.first} {person.name.last}</p>
                            <p>Gender: {person.gender}</p>
                            <p>Time Zone Description: {person.location.timezone.description}</p>
                            <p>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</p>
                            <p>Email: {person.email}</p>
                            <p>Birth Date and Age: {person.dob.date} ({person.dob.age} years old)</p>
                            <p>Register Date: {person.registered.date}</p>
                            <p>Phone#: {person.phone}</p>
                            <p>Cell#: {person.cell}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
        
    }
    

}




