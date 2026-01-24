export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100);

  return (
    <footer className='stats'>
      <em>
        {numItems === 0 ?
          'No items, please start parking your items' : `you have ${numItems} item on your list and you have already parked ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
