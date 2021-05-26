import React from 'react'

const Navbar = () => {
    return (
        <header class="fixed bg-gray-300 w-screen font-poiret font-bold flex">
            <div class="text-4xl w-5/12 text-left px-16 min-h-full m-auto">Grey Joyner</div>
            <nav class="text-2xl py-5 px-8 w-7/12 text-right">
                <a href="#home" class="py-2 px-6 border-b-2 border-gray-300 hover:border-gray-700">Home</a>
                <a href="#bio" class="py-2 px-6 border-b-2 border-gray-300 hover:border-gray-700">Bio</a>
                <a href="#cv" class="py-2 px-6 border-b-2 border-gray-300 hover:border-gray-700">CV</a>
                <a href="#portfolio" class="py-2 px-6 border-b-2 border-gray-300 hover:border-gray-700">Portfolio</a>
            </nav>
        </header>
    )
}

export default Navbar