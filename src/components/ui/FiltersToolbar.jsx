import React from 'react'

export default function FiltersToolbar({search, onSearch, filters, onFilterChange, onSave}){
  return (
    <div className="filters-toolbar">
      <input className="filters-search" placeholder="Search" value={search||''} onChange={e=>onSearch && onSearch(e.target.value)} />
      <div className="filters-list">
        {filters && filters.map((f,i)=> (
          <label key={i} className="filter-item">
            <input type="checkbox" checked={!!f.value} onChange={e=>onFilterChange && onFilterChange(f.key,e.target.checked)} /> {f.label}
          </label>
        ))}
      </div>
      {onSave && <button className="btn btn-secondary" onClick={onSave}>Save preset</button>}
    </div>
  )
}
