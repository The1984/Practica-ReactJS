import React from 'react'
import ExcerciseForm from '../components/ExerciseForm.js'
import Card from '../components/Card.js'

class ExerciseNew extends React.Component
{

    state = {
        form : {
            title : '',
            description : '', 
            img : '',
            leftColor : '',
            rightColor : ''
            
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()
            console.log(json)
        } catch (error) {

        }
    }

    handleChange = e =>
    {
        this.setState({
            form : {
                ...this.state.form, //permite no sobre escribir lo que ya tenia antes.
                [e.target.name] : e.target.value
            }
        })
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-sm">
                    <Card
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <ExcerciseForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }

}

export default ExerciseNew