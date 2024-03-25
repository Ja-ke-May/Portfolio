

const Navbar = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-600/80">Jacob May</h1>
      <h2 className="text-md lg:text-xl mt-1">Full-stack Web Developer</h2>
      <h3 className="absolute right-2 lg:right-4 top-4 flex flex-row text-lg lg:text-2xl">
        
          {/* <Link href="/cv"> */}
            <span className="hover:text-red-600 mr-2">CV</span>
          {/* </Link> */}
          | 
          {/* <Link href="/contact"> */}
            <span className="hover:text-red-600 ml-2">Contact</span>
          {/* </Link> */}
        
      </h3>
    </div>
  );
}

export default Navbar;
