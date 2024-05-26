import { CiMenuBurger } from "react-icons/ci";
function Toolbar() {
    return (
        <div className='bg-sky-500 shadow-lg'>
            <div className='w-11\12 md:w-10/12 mx-auto py-4 flex text-white justify-between items-centre'>
                <div classname='flex gap-4'>
                    <div classname='text-2xl md:text-4xl font-semibold'>Logo</div>
                    <div className='hidden md:flex'>
                     Links
                    </div>
                </div>
                <div className='hidden md:flex gap-4'>
                    <button className='w-fit h-fit px-6 py-3 border border-white text-sm capitalize '>sign in</button>
                    <button className='w-fit h-fit px-6 py-3 border border-white  text-sm capitalize  text-sky-500 bg-white'>sign up</button>

                </div>
                <CiMenuBurger className='text-4xl md:hidden' />
            </div>
        </div>
    )
}

export default Toolbar