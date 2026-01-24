import { useState } from 'react';

export function ParkingList({ items, onDeleteItem, onToggleItem, onClearItems }) {

  const [filter, setFilter] = useState('all');
  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'packed') return item.packed;
    if (filter === 'unpacked') return !item.packed;
  });
  return (
    <div className='list'>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div>
        <select>
          <option value='all'>All</option>
          <option value='packed'>Packed</option>
          <option value='unpacked'>Unpacked</option>
        </select>

      </div>
      <div className='clear'>
        <button onClick={() => onClearItems()}>Clear all</button>
      </div>

    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type='checkbox' checked={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
