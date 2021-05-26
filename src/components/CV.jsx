import React from 'react'

const CV = () => {
    return (
        <section id="cv">
        <header id="cv-title">CV</header>
        <div id="cv-div">
            <div class="cv-img"><img src="../img/coder-academy.jpg" alt="Coder Academy logo" id="coder-academy"/></div>
            <div class="cv-text">
                <div id="ca-text-background" class="cv-text-1"></div>
                <div id="ca-text" class="cv-text-2">
                    <b>Coder Academy, Bootcamp Graduate, 2021</b>
                    <ul>
                        <li>Learned technologies including JavaScript, React, node.js, Ruby, HTML/CSS, Git and more</li>
                        <li>Received Diploma of Information Technology</li>
                    </ul>
                </div>
            </div>
            <div class="cv-text">
                <div id="qmentor-text-background" class="cv-text-1"></div>
                <div id="qmentor-text" class="cv-text-2">
                    <b>qmentor, Founder, 2020-Present</b>
                    <ul>
                        <li>Founded qmentor, a virtual LGBTQ mentorship program</li>
                        <li>Grew the program to over 100 participants across the globe</li>
                        <li><a href="http://qmentor.org" target="_blank" rel="noopener">www.qmentor.org</a></li>
                    </ul>
                </div>
            </div>
            <div class="cv-img"><img src="../img/qmentor.png" alt="qmentor logo" id="qmentor"/></div>
            <div class="cv-img"><img src="../img/ROA.png" alt="ROA logo" id="roa"/></div>
            <div class="cv-text">
                <div id="roa-text-background" class="cv-text-1"></div>
                <div id="roa-text" class="cv-text-2">
                    <b>Regional Opportunities Australia, Chief Operating Officer, 2020-Present</b>
                    <ul>
                        <li>Worked across all operations of ROA, a nonprofit helping migrants and refugees find work in regional Australia</li>
                        <li>Led the mentorship program, streamlined operations and developed strategy</li>
                    </ul>
                </div>
            </div>
            <div class="cv-text">
                <div id="gemba-text-background" class="cv-text-1"></div>
                <div id="gemba-text" class="cv-text-2">
                    <b>Gemba, Senior Strategy Consultant, 2018-2020</b>
                    <ul>
                        <li>Sold and led consulting engagements for Gemba, an Australian sport and entertainment management consulting firm</li>
                        <li>Worked with clients including the NRL, Paralympics Australia, Hoyts and more</li>
                    </ul>
                </div>
            </div>
            <div class="cv-img"><img src="../img/gemba.png" alt="Gemba logo" id="gemba" /></div>
            <div class="cv-img"><img src="../img/woolworths.jpg" alt="Woolworths logo" id="woolworths"/></div>
            <div class="cv-text">
                <div id="woolworths-text-background" class="cv-text-1"></div>
                <div id="woolworths-text" class="cv-text-2">
                    <b>Woolworths, Senior Strategy Associate, 2015-2018</b>
                    <ul>
                        <li>Managed strategy projects as a member of the Corporate Strategy team</li>
                        <li>Focused on Woolworths' digital and ecommerce strategy</li>
                        <li>Ran Proud at Woolworths Group, the organisation's LGBTQ inclusivity group</li>
                    </ul>
                </div>
            </div>
            <div class="cv-text">
                <div id="mckinsey-text-background" class="cv-text-1"></div>
                <div id="mckinsey-text" class="cv-text-2">
                    <b>McKinsey, Business Analyst, 2013-2015</b>
                    <ul>
                        <li>Worked on consulting engagements for McKinsey, the leading management consulting firm</li>
                        <li>Gained experience across industries including retail, airlines, healthcare and more</li>
                    </ul>
                </div>
            </div>
            <div class="cv-img"><img src="../img/mckinsey.jpg" alt="McKinsey logo" id="mckinsey" /></div>
            <div class="cv-img"><img src="../img/brown.jpg" alt="Brown University logo" id="brown"/></div>
            <div class="cv-text">
                <div id="brown-text-background" class="cv-text-1"></div>
                <div id="brown-text" class="cv-text-2">
                    <b>Brown University, Bachelors in Applied Maths and Economics, 2009-2013</b>
                    <ul>
                        <li>Received a 4.0/4.0 GPA and was awarded with Magna Cum Laude (the university's highest academic distinction)</li>
                        <li>Studied abroad for semesters in Seville, Spain and Berlin, Germany</li>
                    </ul>
                </div>
            </div>
            <div id="cv-link"><a href="../cv.pdf" target="_blank">Download CV</a></div>
        </div>
    </section>
    )
}

export default CV