import React from 'react';
import mini_arrow_down from '../images/mini_arrow_down.png';
import mini_arrow_up from '../images/mini_arrow_up.png';

class FilterSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFloorVisible: false,
            isStatusVisible: false,
            isGardenVisible: false,
            isPriceVisible: false,

            flatsArray: [
                { id: 'P11A', floor: 'parter',sqm: '23,45m', ogrodek: 'ogródek', cena: 350.000 , plan: 'pobierz', status:'Wolny'},
                { id: 'P12A', floor: 'II piętro',sqm: '34,54m', ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'rezerwacja'},
                { id: 'P13A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P14A', floor: 'III piętro',sqm: '65,35m',  ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'rezerwacja'},
                { id: 'P15A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P16A', floor: 'parter',sqm: '65,35m', ogrodek: 'ogródek 14m', cena: '250 000zl', plan: 'pobierz', status:'sprzedane'},
                { id: 'P17A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P18A', floor: 'III piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '250 000zl', plan: 'pobierz', status:'rezerwacja'},
                { id: 'P19A', floor: 'parter',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P20A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'sprzedane'},
                { id: 'P11A', floor: 'parter',sqm: '23,45m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P12A', floor: 'II piętro',sqm: '34,54m', ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'rezerwacja'},
                { id: 'P13A', floor: 'parter',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P14A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'sprzedane'},
                { id: 'P15A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P16A', floor: 'II piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P17A', floor: 'parter',sqm: '65,35m', ogrodek: 'strych', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P18A', floor: 'I piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '350 000zl', plan: 'pobierz', status:'wolny'},
                { id: 'P19A', floor: 'III piętro',sqm: '65,35m', ogrodek: 'ogródek', cena: '250 000zl', plan: 'pobierz', status:'rezerwacja' },
                { id: 'P20A', floor: 'parter',sqm: '65,35m', ogrodek: 'strych', cena: '250 000zl', plan: 'pobierz', status:'sprzedane'},
            ],

            currentPage: 1,
            flatsPerPage: 10,

            selected_kondygnacja: "kondygnacja",
            selected_status: "status",
            selected_garden: "Ogródek/strych",
            selected_price: "Cena",
            startFiltering: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }



    filterFlats =() => {
        let filteredElements = this.state.flatsArray;


        if (this.state.selected_kondygnacja !== "kondygnacja"  ) {
            filteredElements =  filteredElements.filter((element)=> {

                return element.floor === this.state.selected_kondygnacja

            })
        }


        if(this.state.selected_status !== "status"  ) {
            filteredElements = filteredElements.filter((element) => {

                return element.status === this.state.selected_status

            })
        }

        if  (this.state.selected_garden !== "Ogródek/strych"  ) {

            filteredElements = filteredElements.filter((element) => {

                return element.ogrodek === this.state.selected_garden

            })
        }

        if  (this.state.selected_price !== "Cena"  ) {

            filteredElements = filteredElements.filter((element) => {

                return element.cena === this.state.selected_price

            })
        }


        return filteredElements

    };

    changeSelectKondygnacja =(event) => {

        this.setState ({
            selected_kondygnacja: event.target.value
        })
    };

    changeSelectStatus =(event) => {

        this.setState ({
            selected_status: event.target.value
        })
    };

    changeSelectGarden =(event) => {

        this.setState ({
            selected_garden: event.target.value
        })
    };


    changeSelectPrice =(event) => {

        this.setState ({
            selected_price: event.target.value
        })
    };



    render() {

        // let { flatsArray,  currentPage, flatsPerPage } = this.state;
        //
        // let indexOfLastFlat = currentPage * flatsPerPage;
        // let indexOfFirstFlat = indexOfLastFlat - flatsPerPage;
        //
        // let getArray = flatsArray.map( element => {
        //      return element.id
        // });
        //
        // let flats_final = getArray.slice(indexOfFirstFlat, indexOfLastFlat);
        //
        //
        // let renderFlatNumber = flats_final.map((flats, index) => {
        //     return <li key={index}>{flats}</li>;
        //
        // });
        //
        //
        // let pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(getArray.length / flatsPerPage); i++) {
        //     pageNumbers.push(i);
        // }
        //
        // let renderPageNumbers = pageNumbers.map(number => {
        //     return (
        //         <nav aria-label="Page navigation">
        //             <ul className="pagination">
        //                 <li className="page-item">
        //                     <a className="page-link"
        //             key={number}
        //             id={number}
        //             onClick={this.handleClick}
        //         >
        //             {number}
        //                     </a>
        //                 </li>
        //             </ul>
        //         </nav>
        //     );
        // });

        return (


            <div className="container_1200">
                <div className="my-row bg_filter p-0 pb-3 pt-3" aria-label='search results filter'>


                    <div className="flex col-6 col-sm-2 mr-0 mb-3">
                        <select value={this.state.selected_kondygnacja} onChange={this.changeSelectKondygnacja} >
                            <option value=""> Kondygnacja</option>
                            <option value="parter"> Parter</option>
                            <option value="I piętro"> I piętro</option>
                            <option value="II piętro"> II piętro </option>
                            <option value="III piętro"> III piętro </option>
                        </select>
                    </div>


                    <div className="flex col-6 col-sm-2 mr-0 mb-3">
                        <select value={this.state.selected_status} onChange={this.changeSelectStatus}>
                            <option value=""> Status</option>
                            <option value="wolny"> Wolny </option>
                            <option value="rezerwacja"> Rezerwacja </option>
                            <option value="sprzedane"> Sprzedane </option>
                        </select>

                    </div>

                    <div className="flex col-6 col-sm-2 mr-0 mb-3">
                        <select value={this.state.selected_garden} onChange={this.changeSelectGarden}>
                            <option value=""> Ogródek/strych </option>
                            <option value="ogródek"> Ogródek </option>
                            <option value="strych"> Strych </option>
                        </select>
                    </div>

                    <div className="flex col-6 col-sm-2 mr-0 mb-3">
                        <select value={this.state.selected_price} onChange={this.changeSelectPrice}>
                            <option value=""> Cena</option>
                            <option value="100"> do 100.000zl </option>
                            <option value="200"> do 200.000zl </option>
                            <option value="350.000"> do 300.000zl </option>
                            <option value="400"> do 400.000zl </option>
                            <option value="500"> do 500.000zl </option>
                        </select>
                    </div>

                    <div className="flex col-12 col-lg-4 mr-0">
                        <button className="btn_filter" onClick ={() => this.setState ({ startFiltering: true})}> FILTROWANIE </button>
                    </div>

                    <div className="col-12" aria-label='Search results'>


                        <table className="align-content-center col-12">

                            <tbody>
                            <tr>
                                <td><strong> nr budynku mieszkania </strong> </td>
                                <td><strong> kondygnacja </strong></td>
                                <td><strong> powierzchnia użytkowa </strong> </td>
                                {/*<td ><strong>  powierzchnia ogródka/strychu </strong></td>*/}
                                {/*<td ><strong> cena brutto </strong></td>*/}
                                {/*<td ><strong> plan </strong></td>*/}
                                {/*<td ><strong> status </strong></td>*/}
                            </tr>



                            <tr>
                                <td className="flex-column">
                                    <img src={mini_arrow_down}/>
                                    <img src={mini_arrow_up}/>
                                </td>

                                <td className="flex-column">
                                    <img src={mini_arrow_down}/>
                                    <img src={mini_arrow_up}/>
                                </td>

                                <td className="flex-column">
                                    <img src={mini_arrow_down}/>
                                    <img src={mini_arrow_up}/>
                                </td>

                                {/*<td className="flex-column">*/}
                                {/*<img src={mini_arrow_down}/>*/}
                                {/*<img src={mini_arrow_up}/>*/}
                                {/*</td>*/}

                                {/*<td className="flex-column">*/}
                                {/*<img src={mini_arrow_down}/>*/}
                                {/*<img src={mini_arrow_up}/>*/}
                                {/*</td>*/}

                                {/*<td className="flex-column">*/}
                                {/*<img src={mini_arrow_down}/>*/}
                                {/*<img src={mini_arrow_up}/>*/}
                                {/*</td>*/}

                            </tr>


                            {

                               !this.state.startFiltering && this.state.flatsArray.map(element => {

                                    return (
                                        <tr>
                                            <td> {element.id} </td>
                                            <td> {element.floor} </td>
                                            <td> {element.sqm} </td>
                                            {/*<td> {element.ogrodek}</td>*/}
                                            {/*<td> {element.cena} </td>*/}
                                            {/*<td> {element.plan}</td>*/}
                                            {/*<td> {element.status} </td>*/}
                                        </tr>
                                    )
                                })
                            }



                            {

                                this.state.startFiltering && this.filterFlats().map(element => {

                                    return (
                                        <tr>
                                            <td> {element.id} </td>
                                            <td> {element.floor} </td>
                                            <td> {element.sqm} </td>
                                            {/*<td> {element.ogrodek}</td>*/}
                                            {/*<td> {element.cena} </td>*/}
                                            {/*<td> {element.plan}</td>*/}
                                            {/*<td> {element.status} </td>*/}
                                        </tr>
                                    )
                                })
                            }


                            </tbody>


                        </table>




                        </div>

                </div>
                {/*<div className='flex col-3 mt-4' id='page-numbers' aria-label='result page number'>*/}

                    {/*<ul>*/}
                        {/*{renderFlatNumber}*/}
                    {/*</ul>*/}
                    {/*<ul id="page-numbers">*/}
                        {/*{renderPageNumbers}*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>


        );
    }
}

export default FilterSection;

