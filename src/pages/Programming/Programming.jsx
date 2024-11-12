import React from 'react';
import Header from '../../components/header/Header';
import MetaCertificate from '../../assets/Coursera_Meta_Certificate.jpg';
import IBMCertificate from '../../assets/Coursera_BackEnd.jpg';
import DeviceShop1 from '../../assets/DeviceShop1.jpg';
import DeviceShop2 from '../../assets/DeviceShop2.jpg';
import ColoradoCertificate from '../../assets/Coursera_Game_Development.jpg';
import WhiskerWink from '../../assets/WhiskerWink.jpg';
import Footer from '../../components/footer/Footer'
import './Programming.css';
import { Link } from 'react-router-dom';


const Programming = () => {
    return (
        <>
            <Header />
            <main>
                <h2>Programming</h2>
                <p>Due to the fact that I aim to link my career with software development, I am continuously enhancing my web development skills.</p>
                <h3>Skills</h3>
                <ul>
                    <li>web development</li>
                    <li>API creation</li>
                    <li>adaptive development</li>
                    <li>user-friendly web sites</li>
                    <li>authentication integration</li>
                    <li>working with databases</li>
                </ul>
                <h3>Tools</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ul style={{ width: '50%' }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React (React Router Dom, Testing Library)</li>
                        <li>Redux</li>
                        <li>Redux Toolkit</li>
                        <li>Jest</li>
                        <li>Axios</li>
                    </ul>
                    <div style={{ width: '50%' }}>
                        <ul style={{fontSize:'24px', margin:'0'}}>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Database Normalisation</li>
                            <li>Code principles (DRY, KISS, OOP principles...)</li>
                        </ul>
                        <div>
                            <b style={{fontSize:'24px', margin:'0'}}>Basics of</b>
                            <ul style={{fontSize:'24px', margin:'0'}}>
                            <li>Python</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <h3>Front-end internship</h3>
                <p>My first internship with Oleksandr Kovalov, where I learned front-end development(HTMl, CSS, JavaScript, React), resulted in the ability to create user-friendly websites, knowledge of list iteration, proficiency in working with components, and preparation for the front-end interview.</p>
                <h3>Back-end internship</h3>
                <p>
                During my back-end internship with Yurii Kylikov, I am learning C# and .Net. The tutor is guiding me in understanding best practices for working with databases. Currently, we are working on the last project and preparing for back-end part of an interview.                </p>
                <h3>Courses & Projects</h3>
                <p>The 'Meta Front-end Developer Capstone' was my first course on the Coursera platform. During this course, I gained practical experience in adaptive development and testing libraries. Subsequently, I enhanced the project by adding Firebase database, authentication, and hosting.</p>
                <iframe src="https://little-lemon-course.web.app/" width="100%”" height="600px"/>
                <div className="space"><span>one</span></div>
                <img style={{width: '100%'}} src={MetaCertificate} alt="Meta Front-end Developer Capstone Certificate Coursera" />
                <div className="space">
                    <span>one</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button' href="https://github.com/salamanovychanna/Meta-Course"><span>View Code on GitHub</span></a>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button'  href="https://little-lemon-course.web.app/"><span>Visit Website</span></a>
                </div>
                <div className="space">
                    <p>one</p>
                    <p>one</p>
                </div>
                <p>
                I successfully completed the 'Developing Back-end Apps with Node.js and Express' course by IBM on Coursera. This course significantly enhanced my understanding of JavaScript from a back-end perspective, allowing me to explore the Express framework within the Node.js environment.                    </p>
                <img style={{width: '100%'}} src={IBMCertificate} alt="IBM 'Developing Back-end Apps with Node.js and Express'Certificate Coursera" />
                <div className="space">
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <a target="_blank" rel="noopener noreferrer" className='a-button'  href="https://github.com/salamanovychanna/bookRetailorApp"><span>View Code on GitHub</span></a>
                </div>
                <div className="space">
                    <p>one</p>
                    <p>one</p>
                </div>
                <p>
                The 'Introduction to C# and Unity' course provided me with a solid foundation in C# programming. It was especially beneficial as I recently began learning C# and back-end development. Also, it introduced me to the basics of game development.                    </p>
                <img style={{width: '100%'}} src={ColoradoCertificate} alt="University of Colorado Introducation to C# and Unity Certificate Coursera" />
                <div className="space">
                    <p>one</p>
                    <p>one</p>
                </div>
                <p>
                “Device shop” API is the project I created with guidance of Yurii Kylikov during back-end internship. API is a linking between database and the application. <br/>
I coded some requests for creating user, cart, product promo code as well as updating/deleting them.<br/>
Also, the application includes a rate limiter. That allows API to set a limit for maximum amount of requests done in certain period of time. Consequently, the database will not be overloaded in times of high interest for the application.<br/>
Additionally, here I used some complex development practices like cascading deletion/creation. For example, it deletes Cart the moment its user-owner deleted. That saves time and recourses on two different requests. <br/>You can find the GetAllUsers request and additional related requests below.
                    </p>
                <img style={{width: '100%'}} src={DeviceShop1} alt="Device Shop API screenshot Swagger visulisation including GetAllCustomers request" />
                <img style={{width: '100%'}} src={DeviceShop2} alt="Device Shop API screenshot Swagger visulisation including list of requests" />
                <div className="space">
                    <p>one</p>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <a target="_blank" rel="noopener noreferrer" className='a-button'  href="https://github.com/salamanovychanna/DeviceShop"><span>View Code on GitHub</span></a>
                </div>
                <div className="space">
                    <p>one</p>
                    <p>two</p>
                    <p>three</p>
                    <p>four</p>
                </div>
                <div style={{position:'relative'}} >
                <p>
                    Recently, I took part in “NASA Space App Challenge”. The task was to create an application that will solve issues of people working in agricultural field. I organized my team to develop a web site. It includes dashboard with essential indicators such as participation, vegetation index, soil moisture, drought risk, and so on; an ability to consult with AI-based advices regarding the best practices and further strategy; and articles with expert advice. 
                    I was entirely responsible for the design, team management, and certain aspects of coding.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/design">Design</Link>
                <iframe src="https://forfarmers2.web.app/" width="100%”" height="600px"/>
                <div className="space">
                    <p>one</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button' href="https://github.com/salamanovychanna/forf"><span>View Code on GitHub</span></a>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button'  href="https://forfarmers2.web.app/"><span>Visit Website</span></a>
                </div>
                <div className="space">
                    <p>one</p>

                </div>
                <div className="space">
                    <p>one</p>
                    
                </div>
                <div style={{position:'relative'}} >
                <p>
                The “Whisker Wink” is a project designed for helping pets fins their home. I am the head of code department, managing the team to create a website containing list of pets in local shelters. That allows users to book a visit for a pet and adopt it in further. Currently, the project on its development phase. The estimated completion of the website is expected within the next few weeks.<br/>
                Regarding my leadership experience, I motivate and manage a team to work on it effectively. Additionally, I am communicating to extend my crew to fasten development process.
                </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/leadership">Leadership</Link>
            </div>
                <img style={{width: '100%'}} src={WhiskerWink} alt="Wisker Wink pet volunteering project. The screenshot of development" />
                <div className="space">
                    <p>one</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button' href="https://www.instagram.com/whisker.wink/"><span>Visit project Instagram</span></a>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button'  href="https://github.com/uliiiiiiii/whiskerWink"><span>View Code on the Github</span></a>
                </div>

                <div className="space">
                    <p>one</p>
                    <p>two</p>
                    <p>three</p>
                    <p>four</p>
                </div>
            </div>
            </main>
            <Footer/>
        </>
    );
};

export default Programming;