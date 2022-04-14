import React from "react";
import "./styles.css";

export default function Table(props) {
  const { header, rows } = props;
  return (
    <table className="table table-striped">
      <thead>
        {header.map((el, i) => (
          <th>{el}</th>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr>
            {row.map((value, i) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
