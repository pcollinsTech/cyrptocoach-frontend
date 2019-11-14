import React from "react";
import { Link } from "react-router-dom";
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const MarketRow = ({ market }) => {
    const { id, name, volume_24hr_usd, percent_total_volume } = market;
    let volume = numberWithCommas(parseFloat(volume_24hr_usd).toFixed(2));
    let percentage = numberWithCommas(parseFloat(percent_total_volume).toFixed(2));
    return (
        <tr key={id}>
            <th scope="row">
                <Link to={`exchange/${id}`}>{name}</Link>
            </th>
            <td>${volume}</td>
            <td>{percentage}%</td>
        </tr>
    );
};

export default MarketRow;
