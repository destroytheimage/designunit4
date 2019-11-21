import React from 'react'
import { Article } from '../src/components/Article'
import { Image } from '../src/components/Image'
import { SwitchImage } from '../src/components/SwitchImage'
import { TextBlock } from '../src/components/TextBlock'
import { Title } from '../src/components/Title'
import { UnitHighlight } from '../src/components/UnitHighlight'

export default () => (
    <Article>
        <Title>О НАС</Title>
        <p>
            Проектная студия design unit 4 созвана в 2016.
        </p>
        <p>
            Концепция студии базируется на специфике предприятия креативной индустрии
            и передовых средств поддержки и тестирования проектных решений. Что позволяет
            оптимизировать процесс проектирования, сместить распределение времени, ресурсов
            и усилий в рамках каждого проекта в пользу работы над качеством концепции в основании
            решений и её реализацией в материале.
        </p>

        <SwitchImage
            images={[
                {
                    buttonText: 'добавить чёткости',
                    src: 'https://unit4.io/files/about/team.jpg',
                },
                {
                    buttonText: 'stop it',
                    src: 'https://unit4.io/files/about/team.gif',
                },
            ]}
        />

        {/* <h2>Аналитика и консалтинг</h2>
        <h2>Градостроительное и архитектурное проектирование</h2>
        <h2>Социально-культурное проектирование</h2>
        <h2>Дизайн городской среды</h2>
        <h2>Архитектурное проектирование</h2>
        <h2>Предметный дизайн</h2>
        <h2>Брендинг</h2>
        <h2>Авторский надзор</h2> */}

        <TextBlock>

            <p>
                В каждом проекте студия стремится работать в
                непосредственном контакте с производителями, чтобы контролировать соблюдение концептуальных
                решений при их материализации как на производстве, так и на стройплощадке.
            </p>
            <p>
                Мы знаем силу дизайна и щедро делимся ею.
            </p>
        </TextBlock>

        <UnitHighlight newWindow items={[
            {
                text: 'студия',
                href: 'https://issuu.com/unit4/docs/design_unit_4_studio',
            },
            {
                text: 'компетенции',
                href: 'https://issuu.com/unit4/docs/design_unit_4_portfolio',
            },
            {
                text: 'линейка продуктов по развитию городской среды',
                href: 'https://issuu.com/unit4/docs/mla_design_unit_4_products',
            },
        ]} />

        <TextBlock>
            <p>Данияр Юсупов<br />
                Владимир Петросян<br />
                Надежда Кузнецова<br />
                Елизавета Владимирова</p>
            <p>
                Марина Цай<br />
                Сергей Барышев<br />
                Николай Медведенко<br />
                Роман Тимашев<br />
                Григорий Балуев<br />
                Вероника Серебрякова
            </p>
        </TextBlock>

    </Article>
)
