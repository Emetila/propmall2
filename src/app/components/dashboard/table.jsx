import React, { useState, useEffect } from 'react';
import { DataRow } from './data';
import style from './style.module.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     try {
  //       const response = await axios.get(DataRow);
  //       setTransactions(response.data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  useEffect(() => {
    // Simulating API call to fetch transactions
    const fetchTransactions = async () => {
      // Replace this with actual API call
      const mockData = [
        DataRow
      ];
      setTransactions(mockData);
    };

    fetchTransactions();
  }, []);

  const filterTransactions = (DataRow) => {
    if (filter === '<24 hours') return true;
    if (filter === 'last-week') return DataRow.day > 0;
    if (filter === 'last-month') return DataRow.day < 0;
    if (filter === 'custom') return DataRow.day < 0;
  };

  const sortTransactions = (a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'amount') {
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
    return 0;
  };

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);
  const toggleSortOrder = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  const filteredAndSortedTransactions = transactions
    .filter(filterTransactions)
    .sort(sortTransactions);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={style['transaction-page']}>
      <div className={style.titlesubbox}>
        <p>Tue, May 31st</p>
        <div>
          <p>Filter</p>
          <p>(1d)</p>
          <RiArrowDropDownLine onClick={toggleDropdown} />
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <select value={filter} onChange={handleFilterChange}>
              <option value="<24 hours">All</option>
              <option value="Last Week">Credit</option>
              <option value="Last Month">Debit</option>
              <option value="Custom">Status</option>
            </select>

            <select value={sortBy} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>

            {/* <button onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button> */}
          </div>

        </div>
      </div>


      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Transaction</th>
            <th>Details</th>
            <th>Amount</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {DataRow.map(DataRow => (
            <tr key={DataRow.id}>
              <td><img src={DataRow.Image} alt={DataRow.Image} /></td>
              <td>{DataRow.name}</td>
              <td>{DataRow.details}</td>
              <td>{DataRow.amount}</td>
              <td>{DataRow.status}</td>
              <td>{DataRow.more}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
