import React, { useState } from "react";
import "./App.css";
import Data from "./Data.js";
import Country from "./Country.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    address:"",
    city:"",
    state:"",
    zip:"",
    comments:"false",
    offers:"false",
    candidates:"false",
    pushNotifications:""
  });

  // console.log(formData);

  function collectData(e) {
    const{name,value,checked,type}=e.target;
    setFormData(prevForm=>{
      return {...prevForm, [name]:type==="checkbox"?checked:value}
      }
    );
  }

  function validForm(){
    if (!formData.firstName.trim()) {
      return false;
    }
    if (!formData.lastName.trim()) {
      return false;
    }
    if (!formData.country.trim()) {
      return false;
    }
    if (!formData.state.trim()) {
      return false;
    }
    if (!formData.city.trim()) {
      return false;
    }
    if (!formData.zip.trim()) {
      return false;
    }
    if (!formData.address.trim()) {
      return false;
    }
    if (!formData.pushNotifications.trim()) {
      return false;
    }
    if (!formData.email.trim()) {
      return false;
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return false;
    }
    return true;
  }

  function submitForm(e){
    // e.preventDefault();
    console.log(formData);
    if(validForm()===true)toast.success("Form is successfully Submitted",{ position:"bottom-center",});
  }

  return (
    <div className="w-full my-7 md:max-w-[50%] mx-auto shadow-md p-8">
      <form className="gap-4">
        <label
          for="firstName"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          First name
        </label>
        <input
         onChange={collectData}
          name="firstName"
          placeholder="Sharansh"
          required
          className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        ></input>

        <label
          for="lastName"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Last name
        </label>
        <input
          onChange={collectData}
          name="lastName"
          placeholder="Nayak"
          required
          className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        ></input>

        <label
          for="email"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Email Address
        </label>
        <input
          onChange={collectData}
          name="email"
          required
          placeholder="nayaksharansh@gmail.com"
          className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        ></input>

        <Country Data={Data} setFormData={setFormData}></Country>

        <label
          for="address"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Street Address
        </label>

        <input
        required
          onChange={collectData}
          name="address"
          placeholder="185, Virau"
          className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        ></input>

        <label
          for="zip"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Zip / Postal code
        </label>
        <input
        required
          onChange={collectData}
          name="zip"
          placeholder="472331"
          className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        ></input>

        <div>
          <div className="text-sm font-semibold leading-6 text-gray-900">
            By Email
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  onChange={collectData}
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  value="false"
                ></input>
              </div>
              <div className="ml-3 text-sm leading-6">
                <label for="comments" className="font-medium text-gray-900">
                  Comments
                </label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  onChange={collectData}
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  value="false"
                ></input>
              </div>
              <div className="ml-3 text-sm leading-6">
                <label for="candidates" className="font-medium text-gray-900">
                  Candidates
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  onChange={collectData}
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  value="false"
                ></input>
              </div>
              <div className="ml-3 text-sm leading-6">
                <label for="offers" className="font-medium text-gray-900">
                  Offers
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="contents text-sm font-semibold leading-6 text-gray-900">
            Push Notifications
          </div>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
              required
                onChange={collectData}
                id="pushEverything"
                name="pushNotifications"
                type="radio"
                className="h-4 w-4"
                value="Everything"
              ></input>
              <label
                for="pushEverything"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Everything
              </label>
            </div>
            <div className="flex items-center">
              <input
              required
                onChange={collectData}
                id="pushEmail"
                name="pushNotifications"
                type="radio"
                className="h-4 w-4"
                value="Same as email"
              ></input>
              <label
                for="pushEmail"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Same as email
              </label>
            </div>
            <div className="flex items-center">
              <input
              required
                onChange={collectData}
                id="pushNothing"
                name="pushNotifications"
                type="radio"
                className="h-4 w-4"
                value="No push notifications"
              ></input>
              <label
                for="pushNothing"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                No push notifications
              </label>
            </div>
          </div>
        </div>

        <div className="my-3">
          <button
            type="submit" onClick={submitForm}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default App;
