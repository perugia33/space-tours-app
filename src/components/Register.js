 import React, {useState} from 'react';
 import { useNavigate } from 'react-router';
 import "bootstrap/dist/css/bootstrap.css";
//  import "../App.css"
 import "./Register.css"
 
 function Register() {

  const [form, setForm]= useState ({
        name: "",
        email:  "",
        destination:"",
        passengers: "",
  })
  const  navigate = useNavigate();


  // Update State
  function updateForm(value){
      return setForm((prev) =>  {
        return  {...prev, ...value};
      });
  }

  // Event Handler  - Form Submission
async function onSubmit(e) {
    e.preventDefault();
    //  Add new passenger  to db
    const newUser =  {...form};

    await fetch( "http://localhost:5000/user/add", {
          method: "POST",
          headers: {
            "Content-Type":  "application/json",
          },
          body: JSON.stringify(newUser),
        })
        .catch(error  => {
          window.alert(error);
          return;
        });
        setForm({name: "" ,  email: "",  destination: "", passengers: ""});
        navigate("/")
      }

   return (

     <div className="reg-container">
      <h2 className="text-white mb-5 ms-3">Register Here for Your Trip!</h2>
      <br></br>
        <form onSubmit={onSubmit}>
           <fieldset>
                <div className="row mb-5  ms-3  text-white">
                        <label   for="colFormLabelLg" className= "col-md-2 col-form-label col-form-label-lg" >Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control  mx-sm-3" 
                            id="name-field" 
                            value={form.name}
                            placeholder="Name"
                            onChange={(e)  => updateForm( {name: e.target.value} )}
                            />
                      </div>
                </div>
           </fieldset>
           <fieldset>
                <div className="row mb-5  ms-3 text-white">
                        <label for="email" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                        <div className="col-sm-8"> 
                        <input type="email" className="form-control  form-control-md"
                         id="email-field" 
                          placeholder="Email"
                          value={form.email}
                          onChange={(e)  => updateForm( {email: e.target.value} )}
                          />
                        </div>
                </div>
             </fieldset>

             <fieldset class="row  mb-5  text-white  ms-3">
                      <legend class=" bg- white col-form-label col-lg-12   fs-5">Choose Your Destination</legend>
                      <div class="row row-cols-3  g-2 align-items-center">
                        <div class="form-check">
                          <input class="form-check-input"
                           type="radio" 
                           name="destinationOptions"
                           id="destinationCarina" 
                           value="Carina Nebula" 
                           checked={form.destination === "Carina Nebula"}
                           onChange={(e)  => updateForm( {destination: e.target.value} )}
                           />
                          <label class="form-check-label fs-5" for="destinationCarina">
                          Carina Nebula
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" 
                          type="radio" 
                          name="destinationOptions"
                          id="destinationStephan"
                           value="Stephan's Quintet"
                           checked={form.destination === "Stephan's Quintet"}
                           onChange={(e)  => updateForm( {destination: e.target.value} )}
                           />
                          <label class="form-check-label fs-5" for="destinationStephan">
                          Stephan's Quintet
                              </label>
                            </div>
                        <div class="form-check">
                          <input class="form-check-input"
                           type="radio"
                          name="destinationOptions" 
                          id="destinationSouthern" 
                          value=" Southern Ring Nebula"
                          checked={form.destination === "Southern Ring Nebula"}
                           onChange={(e)  => updateForm( {destination: e.target.value} )}
                            />
                          <label class=" form-check-label fs-5" for="destinationSouthern">
                          Southern Ring Nebula
                            </label>
                         </div>

                     </div>
               </fieldset>


            <fieldset>
                <div className="row mb-5  ms-3 text-white">
                        <label for="passengers" className="col-sm-4 col-form-label col-form-label-lg">Passengers</label>
                        <div className="col-sm-6"> 
                        <input type="text" class="form-control  form-control-lg"
                         id="passenger-field"  
                         placeholder="Number of Passengers"
                        value={form.passengers} 
                         onChange={(e)  => updateForm( {passengers: e.target.value} )} 
                         />
                         
                        </div>
                </div>
             </fieldset>
          
            <button  className =" fs-6  text btn btn-primary mb-5  ms-4"
            type="submit"
            value="Create User"
            >Submit
            </button>

        </form>
        
    </div>
   )
 }
 
 export default Register;



//  <div  className="form-check">
//  <input class="form-check-input" type="radio" name="destinations"  id="destination1" value="option1" checked/>
//  <label class=" fs-4  text    form-check-label" for="destination1">
//      Carina
//  </label>
// </div>
// <div  className="form-check">
//  <input className="form-check-input" type="radio" name="destinations"  id="destination2" value="option2" />
//  <label className="  fs-4  text    form-check-label" for="destination2 ">
//      Stephan's Quintet
//  </label>
// </div>
// <div  className="form-check">
//  <input className =" form-check-input" type="radio" name="destinations"  id="destination3" value="option3" />
//  <label className =" fs-4  text   form-check-label" for="destination3">
//      SMAC
//  </label>
// </div>
