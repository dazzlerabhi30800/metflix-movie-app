const Navbar = () => {
  return (
    <nav>
      <img src="/logo.png" alt="Metflix" />
      <div className="input--container">
        <form>
          <label className="hidden" htmlFor="movie-name">
            Hello
          </label>
          <input
            type="text"
            id="movieInput"
            name="movie-name"
            placeholder="Type to search"
          />
        </form>
        <div className="type--wrapper">
          <select name="movie-type">
            <option value="movie">Movie</option>
            <option value="movie">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
