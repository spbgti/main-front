import React from "react";
import {Button, FormGroup, FormControl, ControlLabel, Alert, InputGroup, Row, Grid, Col, Modal} from "react-bootstrap";


let Api = require('../../utils/Api');

const regexpName = new RegExp('^[А-ЯЁ][а-яё]*$');

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            nameStatus: false,
            emailStatus: false
        }

        this.sendEmail = this.sendEmail.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    sendEmail(e) {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email
        };
        Api.sendEmail(data)
            .then(function (response) {
                console.log(response);
            }.bind(this));
    }

    handleChangeEmail(e) {
        const emailValue = e.target.value;
        this.setState({email: emailValue});
        if (regexpName.test(emailValue)) {
            this.setState({emailStatus: true})
        } else {
            this.setState({emailStatus: false})
        }
    }

    handleChangeName(e) {
        const nameValue = e.target.value;
        this.setState({name: nameValue});
        if (regexpName.test(nameValue)) {
            this.setState({nameStatus: true})
        } else {
            this.setState({nameStatus: false})
        }
    }

    getNameState() {
        if (this.state.nameStatus) {
            return 'success'
        } else {
            return 'error'
        }
    }

    getEmailState() {
        if (this.state.emailStatus) {
            return 'success'
        } else {
            return 'error'
        }
    }

    render() {
        return (
            <div className={'container'}>
                <Col lg={6} md={6}>
                <p align="justify" className='offer'>У вас есть для нас предложение? Тогда <a className='link' onClick={this.handleShow}>отправьте</a> нам контактные данные и мы обязательно с вами свяжемся.</p>
                </Col>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Свяжитесь с нами</Modal.Title>
                    </Modal.Header>
                    <form>
                        <Col lg={6} md={6}>
                            <FormGroup className='formGroup' validationState={this.getNameState()}>
                                <ControlLabel>Как к вам обращаться?</ControlLabel>
                                <FormControl value={this.state.name}
                                             placeholder="Введите имя, ник и т.п."
                                             onChange={this.handleChangeName.bind(this)}/>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </Col>
                        <Col lg={6} md={6}>
                            <FormGroup className='formGroup' validationState={this.getEmailState()}>
                                <ControlLabel>Ваша почта для связи</ControlLabel>
                                <FormControl value={this.state.email}
                                             placeholder="Введите ваш email"
                                             onChange={this.handleChangeEmail.bind(this)}/>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </Col>
                    </form>
                    <Modal.Footer>
                        <Button onClick={this.sendEmail}>Отправить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Form;