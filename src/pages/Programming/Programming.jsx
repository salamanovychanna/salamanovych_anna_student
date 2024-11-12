import React from 'react';
import Header from '../../components/header/Header';
import MetaCertificate from '../../assets/Coursera_Meta_Certificate.jpg';
import IBMCertificate from '../../assets/Coursera_BackEnd.jpg';
import './Programming.css'


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
                <p>My first internship with Oleksandr Kovalov, where I learned front-end development, resulted in the ability to create user-friendly websites, knowledge of list iteration, proficiency in working with components, and preparation for the front-end interview.</p>
                <h3>Back-end internship</h3>
                <p style={{color:'red'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid culpa dolore eveniet ipsam? Facere aut molestiae similique fuga! Magnam provident porro saepe facere nemo?</p>
                <h3>Courses & Projects</h3>
                <p>The 'Meta Front-end Developer Capstone' was my first course on the Coursera platform. During this course, I gained practical experience in adaptive development and testing libraries. Subsequently, I enhanced the project by adding Firebase database, authentication, and hosting.</p>
                <iframe src="https://little-lemon-course.web.app/" width="100%”" height="600px"/>
                <div className="space"><span>one</span></div>
                <img style={{width: '100%'}} src={MetaCertificate} alt="Meta Front-end Developer Capstone Certificate Coursera" />
                <div className="space">
                    <span>one</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a className='a-button' href="https://github.com/salamanovychanna/Meta-Course"><span>View Code on GitHub</span></a>
                    <a className='a-button'  href="https://little-lemon-course.web.app/"><span>Visit Website</span></a>
                </div>
                <div className="space">
                    <p>one</p>
                    <p>one</p>
                </div>
                <p style={{color:'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia vel accusamus? Libero amet commodi sit autem perferendis. Doloribus, explicabo placeat vero aliquam, praesentium veniam vitae adipisci reiciendis cupiditate iste sit, sapiente nisi eum aut fugit ipsum repudiandae dignissimos sint veritatis esse quaerat rem. Repellendus, aut eaque! Ad, temporibus fugiat!</p>
                <img style={{width: '100%'}} src={IBMCertificate} alt="IBM 'Developing Back-end Apps with Node.js and Express' Certificate Coursera" />
                <div className="space">
                    <span>one</span>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <a className='a-button'  href="https://github.com/salamanovychanna/bookRetailorApp"><span>View Code on GitHub</span></a>
                </div>
            </main>

        </>
    );
};

export default Programming;