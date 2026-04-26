import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;