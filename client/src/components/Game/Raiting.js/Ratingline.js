import React from 'react';

export default function Ratingline(props) {
  const { name, numb, idx } = props;
  return (
    <tr>
      <td>{idx}</td>
      <td>{name}</td>
      <td>{numb}</td>
    </tr>
  );
}
