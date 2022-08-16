import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";





    const User = (props) => (

        // Records will be viewed in this table after get method
        <tr>
            <td>{props.user.name}</td>
            {/* <td> {props.user.email}</td> */}
            <td>{props.user.destination}</td>
            <td>{props.user.passengers}</td>
        </tr>
    );
    export default function Manifest() {
        const [passengers, setPassengers] = useState([]);
        
        // This method fetches the records from the database.
        useEffect(() => {
          async function getUsers() {
            const response = await fetch(`http://localhost:5000/user/`);
        
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
            }
        
            const passengers  = await response.json();
            setPassengers(passengers)
          }
        
          getUsers();
        
          return;
        }, [passengers.length]);
        
    
        
        // This method will map out the records on the table
        // function passengerList (){
        //   return passengers.map((passenger) => {
        //     return (
        //         <Manifest
        //         passenger={passenger}
        //         key= {passenger._id}             
        //     />
        //     );
        //   });
        // }


      

    return(
        <div>
            <h3>Passenger Manifest</h3>
            <table className= "table table-striped"   style= {{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Number of Passengers</th>
                    </tr>
                </thead>
                <tbody>{passengerList ()}</tbody>
            </table>
        </div>
);
};

    


    