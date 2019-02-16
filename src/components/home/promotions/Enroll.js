import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/FormFields'
import {Validate} from '../../ui/misc'

class Enroll extends Component{
    state={
        formErroe: false,
        formSuccess:'',
        formDate: {
            email: {
                element: 'input',
                value: '',

                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: "Please enter Your e-mail"
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }
    submitForm(){}
    updateForm(element){
        const newFormData={...this.state.formDate};

        const newElement={...newFormData[element.id]};
        newElement.value=element.event.target.value;


        newFormData[element.id]=newElement;
        let validData=Validate(newElement);
        newElement.valid=validData[0];
        newElement.validationMessage=validData[1];

        this.setState({
            formDate:newFormData
        })




    }

    render(){

        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=>{this.submitForm(event)}}>
                        <div className="enroll_title">Enter your e-mail</div>
                        <div className="enroll_input">
                            <FormField id={'email'} formdate={this.state.formDate} change={(element)=>this.updateForm(element)}/>
                        </div>
                    </form>
                </div>

            </Fade>
        )
    }
}

export default Enroll;