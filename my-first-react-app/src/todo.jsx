const todo = () => {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue.trim() === '') return;
    setArr(prev => [...prev, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addToList}>Add To List</button>

      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default todo;
