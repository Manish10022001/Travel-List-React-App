export default function Stats({ items }) {
  //if no items then
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to you packing list. 🚀</em>
      </p>
    );

  const numItems = items.length; //length
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? `You go everything! Ready to Go ✈️`
          : `🎒 You have ${numItems} items on your list and you already packed ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
