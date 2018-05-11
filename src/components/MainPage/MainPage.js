import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Form from './Form';

class MainPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>CODE_SPBGTI</h1>
                <Grid>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className={'description'} align="justify">
                                Мы - это студенческое IT-комьюнити CODE_SPBGTI и мы провели полную реорганизацию, готовим много крутых проектов и мероприятий: хатактоны, лекции, митапы...
                                Один из самых успешных наших проектов — это менторство, в котором ребята создают проекты в open-source репозиториях под руководством более опытных студентов-программистов и активистов PiterPy Meetup и SPb Frontend.
                                В прошлом цикле менторства наши студенты разработали приложение для старост, бота для расписаний, приложение для отдела диспетчеризации, интерактивную карту вуза и небольшую 2d-игру.
                                Мы планируем начать новый цикл менторства с июня и уже набираем студентов. Ребята будут реализовывать проекты, большинство из которых направлено на улучшение студенческой жизни.
                                Будем вести ребят до конца августа, а затем по итогам будем планировать следующую итерацию менторства.<Form/>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className={'links'} align="justify">

                                Всевозможные ссылки на все что угодно:<br/>

                                <img className={'link-icon'} src='images/telegram.svg'/>Telegram: <a href="#" target="_blank">@code_spbgti</a><br/>

                                <img className={'link-icon'} src='images/vk.svg'/>VK: <a href="https://vk.com/code_spbgti" target="_blank">code_spbgti</a><br/>

                                <img className={'link-icon'} src='images/slack.svg'/>Slack: <a href="#" target="_blank">spbgti</a><br/>

                                <img className={'link-icon'} src='images/youtube.svg'/>YouTube: <a href="#" target="_blank">code_spbgti</a><br/>

                                <img className={'link-icon'} src='images/github.svg'/>Github: <a href="https://github.com/spbgti" target="_blank">Техноложка</a><br/>

                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MainPage;