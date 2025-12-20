import React from 'react'

export default function Table({columns, data, onSort}){
  return (
    <div className="table-wrap">
      <table className="ui-table">
        <thead>
          <tr>
            {columns.map((c,i)=> (
              <th key={i} onClick={()=> onSort && onSort(c)}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row,ri)=> (
            <tr key={ri}>
              {columns.map((c,ci)=> (
                <td key={ci}>{c.render? c.render(row): row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
