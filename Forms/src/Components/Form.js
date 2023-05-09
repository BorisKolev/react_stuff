import React from "react"

export default function Form()
{

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    function handleFormData(event)
    {
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault()
        console.log(formData)

    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="FirstName"
                onChange={handleFormData}
                name="firstName"
                value={formData.firstName}
            />
            <br/>
            <input
                type="text"
                placeholder="FirstName"
                onChange={handleFormData}
                name="lastName"
                value={formData.lastName}
            />
            <br/>
            <input
                type="text"
                placeholder="email"
                onChange={handleFormData}
                name="email"
                value={formData.email}   
            />
            <br/>
            <textarea
                placeholder="comment"
                onChange={handleFormData}
                name="comment"
                value={formData.comment}   
            />
            <br/>
            <input 
                type="checkbox"
                onChange={handleFormData}
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly} 
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>
            <fieldset>
                
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"    
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleFormData}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleFormData}
                />
                <label htmlFor="part-time">Part-time</label>
                <br/>

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleFormData}
                />
                <label htmlFor="full-time">Full-time</label>
                <br/>

            </fieldset>

            <br/>
            <br/>

            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleFormData}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
            </select>

            <br/>
            <br/>

            <button> Submit </button>

        </form>
    )
}