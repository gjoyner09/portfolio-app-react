import React from 'react'

const Footer = () => {
    return (
        <footer class="fixed bottom-0 bg-gray-300 w-full h-10">
            <div class="float-right h-full flex flex-wrap">
                <div class="font-poiret text-2xl font-bold m-auto px-6">Contact</div>
                <a href="https://linkedin.com/in/grey-joyner/" target="_blank" rel="noopener" class="px-4"><img src="../img/linkedin.svg" class="h-full w-8" alt="linkedin" /></a>
                <a href="https://twitter.com/code__grey" target="_blank" rel="noopener" class="px-4"><img src="../img/twitter.svg" class="h-full w-8" alt="twitter" /></a>
                <a href="https://github.com/gjoyner09" target="_blank" rel="noopener" class="px-4"><img src="../img/github.svg" class="h-full w-8" alt="github" /></a>
                <a href="mailto:gjoyner09@gmail.com" target="_blank" rel="noopener" class="px-4"><img src="../img/gmail.svg" class="h-full w-8" alt="gmail" /></a>
            </div>
        </footer>
    )
}

export default Footer