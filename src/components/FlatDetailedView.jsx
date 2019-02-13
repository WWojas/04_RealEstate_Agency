import React from 'react';
import floor_1 from '../images/floor_4.png';
import floor_2 from '../images/floor_2.jpg';
import floor_3 from '../images/floor_3.svg';
import floor_4 from '../images/floor_3.jpg';
import floor_5 from '../images/floor_X.png';



class FlatDetailedView extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            floorId: floor_5,
            totalSize: '89,32m',
            item_1: 'salon z aneksem kuchennym', item_1_sqm: '19,50m',
            item_2: 'lazienka', item_2_sqm: '11,33m',
            item_3: 'pokój', item_3_sqm: '18,43m',
            item_4: 'garderoba', item_4_sqm: '9,62m',
            item_5: 'hol', item_5_sqm: '6,50m',
            item_6: 'przedpokoj', item_6_sqm: '8,26m',


            floors: [
                { id: floor_1, totalSize: '64,32m' ,
                    item_1: 'salon z aneksem kuchennym', item_1_sqm: '25,50m',
                    item_2: 'lazienka', item_2_sqm: '6,33m',
                    item_3: 'pokój', item_3_sqm: '12,43m',
                    item_4: 'garderoba', item_4_sqm: '1,62m',
                    item_5: 'hol', item_5_sqm: '5,50m',
                    item_6: 'przedpokoj', item_6_sqm: '3,26m',
                    button_text: 'PARTER LEWY'
                },

                { id: floor_2, totalSize: '120,32m' ,
                    item_1: 'salon z aneksem kuchennym', item_1_sqm: '12,50m',
                    item_2: 'lazienka', item_2_sqm: '23,3m',
                    item_3: 'pokój', item_3_sqm: '43,43m',
                    item_4: 'garderoba', item_4_sqm: '4,62m',
                    item_5: 'hol', item_5_sqm: '12,50m',
                    item_6: 'przedpokoj', item_6_sqm: '4,26m',
                    button_text: 'PARTER PRAWY'},

                { id: floor_3, totalSize: '87,32m' ,
                    item_1: 'salon z aneksem kuchennym', item_1_sqm: '12,50m',
                    item_2: 'lazienka', item_2_sqm: '45,33m',
                    item_3: 'pokój', item_3_sqm: '23,43m',
                    item_4: 'garderoba', item_4_sqm: '5,62m',
                    item_5: 'hol', item_5_sqm: '10,50m',
                    item_6: 'przedpokoj', item_6_sqm: '7,26m',
                    button_text: 'PIĘTRO LEWE'},

                { id: floor_4, totalSize: '89,32m' ,
                    item_1: 'salon z aneksem kuchennym', item_1_sqm: '19,50m',
                    item_2: 'lazienka', item_2_sqm: '11,33m',
                    item_3: 'pokój', item_3_sqm: '18,43m',
                    item_4: 'garderoba', item_4_sqm: '9,62m',
                    item_5: 'hol', item_5_sqm: '6,50m',
                    item_6: 'przedpokoj', item_6_sqm: '8,26m',
                    button_text: 'PIĘTRO PRAWE'}
            ]

        }
    }

    zoomIn = () => {
        let myImg = document.getElementById("detailed_view_img");
        let currWidth = myImg.clientWidth;
        let currHeight = myImg.clientHeight;
        if (currWidth === 2500) return false;
        else {
            myImg.style.width = (currWidth + 30) + "px";
            myImg.style.height = (currHeight + 30) + "px";
        }
    }

    zoomOut =() => {
        let myImg = document.getElementById("detailed_view_img");
        let currWidth = myImg.clientWidth;
        let currHeight = myImg.clientHeight;
        if (currWidth === 100) return false;
        else {
            myImg.style.width = (currWidth - 30) + "px";
            myImg.style.height = (currHeight - 30) + "px";
        }
    }



    render() {


        return (


                <div className="my-row flat_detailed_bg extra_margin_bottom p-0 p-md-5">

                    <div className="col-12">

                        <div className="my-row justify-content-center">


                            <div className="row flex-row-reverse text-center">

                                <div className="col-12 col-md-6">
                            {

                                this.state.floors.map(element => {


                                    return (<button className="col-5 btn-dark" onClick={() =>

                                        this.setState({
                                            floorId: element.id,
                                            totalSize: element.totalSize,
                                            item_1: element.item_1,
                                            item_1_sqm: element.item_1_sqm,
                                            item_2: element.item_2,
                                            item_2_sqm: element.item_2_sqm,
                                            item_3: element.item_3,
                                            item_3_sqm: element.item_3_sqm,
                                            item_4: element.item_4,
                                            item_4_sqm: element.item_4_sqm,
                                            item_5: element.item_5,
                                            item_5_sqm: element.item_5_sqm,
                                            item_6: element.item_6,
                                            item_6_sqm: element.item_6_sqm
                                        })}> {element.button_text} </button>)


                                })

                            }

                                    <div className="d-none d-md-block">
                                        <div className=" detailed_view_img ">

                                            <table>
                                                <tbody>
                                                <tr>
                                                    <th colSpan={2}>Powierzchnia użytkowa</th>
                                                    <th></th>
                                                    <th>{this.state.totalSize}</th>
                                                </tr>
                                                <tr>
                                                    <td className="details_icon"> 1</td>
                                                    <td colSpan={2}> {this.state.item_1}</td>
                                                    <td align="right"><strong>{this.state.item_1_sqm}</strong></td>
                                                </tr>

                                                <tr>
                                                    <td className="details_icon"> 2</td>
                                                    <td colSpan={2}> {this.state.item_2}</td>
                                                    <td><strong>{this.state.item_2_sqm}</strong></td>
                                                </tr>

                                                <tr>
                                                    <td className="details_icon"> 3</td>
                                                    <td colSpan={2}> {this.state.item_3}</td>
                                                    <td><strong>{this.state.item_3_sqm}</strong></td>
                                                </tr>

                                                <tr>
                                                    <td className="details_icon"> 4</td>
                                                    <td colSpan={2}> {this.state.item_3}</td>
                                                    <td><strong>{this.state.item_3_sqm}</strong></td>
                                                </tr>

                                                <tr>
                                                    <td className="details_icon"> 5</td>
                                                    <td colSpan={2}> {this.state.item_4}</td>
                                                    <td><strong>{this.state.item_4_sqm}</strong></td>
                                                </tr>

                                                <tr>
                                                    <td className="details_icon"> 6</td>
                                                    <td colSpan={2}> {this.state.item_5}</td>
                                                    <td><strong>{this.state.item_5_sqm}</strong></td>
                                                </tr>


                                                <tr>
                                                    <td className="details_icon"> 7</td>
                                                    <td colSpan={2}> {this.state.item_6}</td>
                                                    <td><strong>{this.state.item_6_sqm}</strong></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 col-md-6">
                            <img src= {this.state.floorId} className=" flex img-fluid col-12" id="detailed_view_img"/>

                            <div className="zoom_wrapper d-block d-sm-none">

                                <button className="zoom_btn" onClick={this.zoomIn}> + </button>
                                <button className="zoom_btn" onClick={this.zoomOut}> - </button>
                            </div>

                                </div>

                                <div className="d-block d-md-none">
                            <div className=" detailed_view_img ">

                                <table>
                                    <tbody>
                                    <tr>
                                        <th colSpan={2}>Powierzchnia użytkowa</th>
                                        <th> </th>
                                        <th>{this.state.totalSize}</th>
                                    </tr>
                                    <tr>
                                        <td  className="details_icon"> 1</td>
                                        <td colSpan={2}> {this.state.item_1}</td>
                                        <td align="right"><strong>{this.state.item_1_sqm}</strong></td>
                                    </tr>

                                    <tr>
                                        <td className="details_icon"> 2</td>
                                        <td colSpan={2}> {this.state.item_2}</td>
                                        <td><strong>{this.state.item_2_sqm}</strong></td>
                                    </tr>

                                    <tr>
                                        <td className="details_icon"> 3</td>
                                        <td colSpan={2}> {this.state.item_3}</td>
                                        <td><strong>{this.state.item_3_sqm}</strong></td>
                                    </tr>

                                    <tr>
                                        <td className="details_icon"> 4</td>
                                        <td colSpan={2}> {this.state.item_3}</td>
                                        <td><strong>{this.state.item_3_sqm}</strong></td>
                                    </tr>

                                    <tr>
                                        <td className="details_icon"> 5</td>
                                        <td colSpan={2}> {this.state.item_4}</td>
                                        <td><strong>{this.state.item_4_sqm}</strong></td>
                                    </tr>

                                    <tr>
                                        <td className="details_icon"> 6</td>
                                        <td colSpan={2}> {this.state.item_5}</td>
                                        <td><strong>{this.state.item_5_sqm}</strong></td>
                                    </tr>


                                    <tr>
                                        <td className="details_icon"> 7</td>
                                        <td colSpan={2}> {this.state.item_6}</td>
                                        <td><strong>{this.state.item_6_sqm}</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlatDetailedView;