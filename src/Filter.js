import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [rateFilter, setRateFilter] = useState('');

    const handleFilter = () => {
    onFilter({ title: titleFilter, rate: rateFilter });
};

return (
    <div className="filter">
        <input type="text" placeholder="Filter by Title" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}/>
        <input type="number" placeholder="Filter by Rating" value={rateFilter} onChange={(e) => setRateFilter(e.target.value)}/>
        <button onClick={handleFilter}>Apply Filter</button>
    </div>
);
};

export default Filter;