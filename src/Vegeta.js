import React, { Component } from 'react';
import vegeta from './vegeta.png';

class Vegeta extends Component {

    render() {

        const { hits, addOne, name } = this.props;

        return (
            <div className="col">
                <img src={vegeta} alt="vegeta" /><br />
                <button onClick={addOne} className="btn btn-success"> {name} Frappe</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scpe="col">Coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       );
    }
}

export default Vegeta;

