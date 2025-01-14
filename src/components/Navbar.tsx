import { Cart } from "./Cart"


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b w-full">
         <div className='max-w-6xl mx-auto  flex h-16 items-center justify-end px-4'>
      <div className='flex items-center gap-4'>
        <Cart />
      </div>
    </div>
    </nav>
 
  )
}

export default Navbar