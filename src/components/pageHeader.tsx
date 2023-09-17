import { useState } from 'react';
import './pageHeader.css';

const dropdownData = [
  {
    header: 'New Cars',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  {
    header: 'Used Cars',
    options: ['Option A', 'Option B', 'Option C'],
  },
  {
    header: 'Used Cars',
    options: ['Option A', 'Option B', 'Option C'],
  },
  {
    header: 'Servicing',
    options: ['Option A', 'Option B', 'Option C'],
  },
  {
    header: 'Commercials',
    options: ['Option A', 'Option B', 'Option C'],
  },
  {
    header: 'Motability',
    options: ['Option A', 'Option B', 'Option C'],
  },
];

export default function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState<number>(-1);

  const handleDropdownClick = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(-1); // Close the currently open dropdown
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  return (
    <div className={'header-container'}>
      {dropdownData.map((dropdown, index) => (
        <div key={index} className={'dropdown'}>
          <button
            type="button"
            className={`button ${openDropdown === index ? 'active' : ''}`}
            onClick={() => handleDropdownClick(index)}
          >
            {dropdown.header}
            <span className="down-arrow"> ▼</span>
          </button>
          {openDropdown === index && (
            <ul>
              {dropdown.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className={'search-container'}>
        <input
          type="text"
          className={'search-input'}
          placeholder={'Search...'}
        />
        <button className={'search-button'}>Search</button>
      </div>
    </div>
  );
}
