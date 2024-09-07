function Navbar() {
  return (
    <div
      className="w-full max-w-[1400px] bg-[#fadcd9] h-[101px] rounded-2xl px-6  flex items-center
        justify-between shadow-2xl"
    >
      <div className="text-[25px]">
        <span className="font-light italic .header_label">JULIA</span> HUANG
      </div>
      <div className="flex gap-x-12 text-[16px] font-light ">
        <div>PROJECTS</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}

export default Navbar;
