function Toolbar() {
    return (
        <div className='bg-sky-500 shadow-lg'>
            <div className='w-10\12 mx-auto py-4 flex text-white justify-between'>
                <div>
                    logo and link
                </div>
                <div>
                    <button className='w-fit h-fit px-4 py-3 bg-red-500'>sign in</button>
                    <button className='w-fit h-fit px-4 py-3 bg-red-500'>sign up</button>

                </div>
            </div>
        </div>
    )
}

export default Toolbar