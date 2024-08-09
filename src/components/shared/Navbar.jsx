const Navbar = ({ handleNav }) => {
  return (
    <div className="mx-auto mb-6 flex h-24 max-w-[1240px] select-none flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
      <h1 className="text-3xl font-black text-[#00df9a] sm:text-5xl 2xl:ml-14">
        Movie CRUD
      </h1>
      <button
        className="flex items-center rounded-md bg-[#00df9a] px-2 py-2 font-bold sm:py-4"
        onClick={handleNav}
      >
        <i className="bx bx-add-to-queue bx-sm mr-1.5"></i>Add Movie
      </button>
    </div>
  );
};

export default Navbar;
