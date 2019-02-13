import React from 'react';
import logoContact from '../images/contact_logo.png';
import contactIcon from '../images/contact_icon.png';
import hr from "../images/hr.svg";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showBtnText: 'WIĘCEJ',
            generatedCode: '',
            userCode: ''
        }
    }

    hideForm = () => {

        if (this.state.showBtnText === 'WIĘCEJ') {
            this.refs.contact_form.style.display = 'block';
            this.setState ({
                showBtnText: "MNIEJ"
            })
        } else {
            this.refs.contact_form.style.display = 'none';
            this.setState ({
                showBtnText: "WIĘCEJ"
            })
        }

    };


    checkName =(event) => {
        let nameInput = document.getElementById('fname');


        if (event.target.value.length < 7) {
            nameInput.style.borderColor ='red';
            nameInput.style.borderWidth ='2px';
        } else {
            nameInput.style.borderColor = 'white';
        }
    };


    checkMail =(event) => {
        let mailInput = document.getElementById('lname');

        if (event.target.value.length < 5 || event.target.value.indexOf('@') === -1) {
            mailInput.style.borderColor ='red';
            mailInput.style.borderWidth ='2px';
        } else {
            mailInput.style.borderColor = 'white';
        }
    };


    checkMessage =(event) => {
        let mssgInput = document.getElementById('subject');

        if (event.target.value.length < 10) {
            mssgInput.style.borderColor ='red';
            mssgInput.style.borderWidth ='2px';
        } else {
            mssgInput.style.borderColor = 'white';
        }

    };



    generateValidationCode = () => {
        let codeArray = [ 'SET457', 'FGH9FDG', 'RTJHG8' , '434GFDHJ', 'AWE546', 'FGH5678', '45FBDS', 'G7K903S', 'PBTD3423', 'E9G0S2F'];
        let result = Math.floor(Math.random() * codeArray.length);

        this.setState ({
           generatedCode: codeArray[result]
        })

    };

    generateUserCode = (event)=> {

        this.setState ({
            userCode: event.target.value
        });

    };



    componentDidMount() {

        this.generateValidationCode()

    }


    checkFinal =() => {

        if (this.state.userCode === this.state.generatedCode) {
            return true;
        } else {
           return false;
        }

    };





    render() {

        const borderStyle = {

        };

        if (this.checkFinal() !== true ) {
            borderStyle.border ='2px solid red'
        } else {
            borderStyle.border = '1px solid white'
        }


        return (
            <div>


                <div className="my-row bg_contact p-1 p-md-5" aria-label='Contact Info'>

                    <div className="container_1200">

                    <div className="row">

                    <div className="col-12 col-lg-5">

                        <div className="flex">
                            <img src= {contactIcon}/>

                            <div>
                            <h2> Kontakt</h2>
                            <img src={ hr} />
                            </div>
                        </div>



                    <div className="col-12 justify-content-around">

                        <img src= {logoContact} />
                    </div>

                    <div className="col-12">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non odio id quam suscipit blandit.</p>
                    </div>

                    <div className="col-12">
                        <p>Lorem Ipsum Sp. z o. o.
                            32-020 Kraków, Floriańska 1/1
                        </p>
                        <p>
                            +48 777 777 777
                            kontakt@kontakt.com.pl
                        </p>
                        <p>
                            KRS: 0000222 333
                            NIP: 679-222-22-22
                            REGON: 123456789</p>
                    </div>
                    </div>


                    <div className="col-11 col-lg-5 form_wrapper" ref='contact_form' style={{ display: 'd-none d-sm-block'}} aria-label='Contact Form'>

                        <form className="contact_container text-center">

                            <input type="text" id="fname" name="firstname" placeholder="imię i nazwisko" onChange={this.checkName} aria-label='Name'/>
                            <input type="text" id="lname" name="lastname" placeholder="e-mail"  onChange={this.checkMail} aria-label='email' />
                            <textarea id="subject" name="subject" placeholder="treść wiadomości" onChange={this.checkMessage}
                                      aria-label='type message'  />

                            <div className="flex">

                                <span id='input_txt' className="validation_generator"> {this.state.generatedCode} </span>
                                <input type='text' id='input_validation' placeholder='przepisz' onChange={this.generateUserCode} style={borderStyle} />

                            </div>

                            <input type="submit" value="WYSŁANIE FORMULARZA" aria-label='Send contact form' onClick={(event) => event.preventDefault()}/>

                        </form>

                    </div>


                    <button className="hide_btn d-block d-md-none" onClick={this.hideForm}> {this.state.showBtnText}</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;