import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            el6Toggled: false,
            el7Toggled: false,
        };
    }

    toggleEl6 = () => {
        this.setState({ el6Toggled: !this.state.el6Toggled });
    };

    toggleEl7 = () => {
        this.setState({ el7Toggled: !this.state.el7Toggled });
    };

    render() {
        return (
            <div>
                <p>
                    Освіта: <br />
                    Крюківщинська загальноосвітня школа І-ІІІ ступенів <br />
                    НТУУ "КПІ", м. Київ
                </p>

                <h3>Хобі:</h3>
                <ul>
                    <li>Геймінг</li>
                    <li>Аматорська астрономія</li>
                    <li>Аматорський спорт</li>
                </ul>

                <h3
                    id="el6"
                    onClick={this.toggleEl6}
                    className={this.state.el6Toggled ? "colored1" : ""}
                    style={{ cursor: "pointer" }}
                >
                    Улюблені фільми:
                </h3>

                <ol
                    id="el7"
                    onClick={this.toggleEl7}
                    className={this.state.el7Toggled ? "colored2" : ""}
                    style={{ cursor: "pointer" }}
                >
                    <li>«Інтерстеллар», 2014</li>
                    <li>«Прибуття», 2016</li>
                    <li>«Джокер», 2019</li>
                </ol>

                <p>
                    <b>Львів</b> — культурна столиця України, відома своєю архітектурою,
                    кавовими традиціями та унікальною атмосферою. Місто засноване у
                    середині XIII століття й отримало назву на честь князя Лева
                    Даниловича. Львів поєднує в собі європейську вишуканість і український
                    дух: старовинні кам’яниці, затишні вулички та легендарні кав’ярні
                    створюють неповторний шарм. Місто відоме також своєю історією як
                    осередок науки, культури та освіти. До списку ЮНЕСКО внесено
                    історичний центр Львова — серце міста, де кожна вулиця дихає
                    історією.
                </p>
            </div>
        );
    }
}

export default Content;

