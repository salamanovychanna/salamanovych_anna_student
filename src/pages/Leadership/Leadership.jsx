import { Link } from 'react-router-dom';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import BusinessHUBCetificate from '../../assets/BusinessHUBCertificate.JPG';
import BusinessHUBScene from '../../assets/BusinessHUB_Scene.jpg';
import BusinessHUBWriting from '../../assets/BusinessHUBWriting.jpg';
import BusinessHUBLection from '../../assets/BusinessHUBFull.jpg'
import WhiskerWink from '../../assets/WhiskerWink.jpg';
import NASAScreen from '../../assets/NASAScreen.png';
import { useEffect } from 'react';

const Leadership = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Header/>
        <main>
        <h2>Leadership & Business</h2>
        <p>Over the last the years, I comprehended th importance of being able to lead people and significance of management to my future career. </p>
        <h3>Business HUB</h3>
        <p>Therefore, I completed BusinessHUB including 8 lections and final judgement. At the final judgement, I presented our idea to more than one hundred listeners. Consequently, we won second place and were given a prize.<br/>
        The images of our preparation process before the final judgement and certificate are below.
        </p>
        <div className='design-images'>
                <img style={{width: '56.5%', objectFit:'cover'}} src={BusinessHUBScene} alt="Business HUB, preparation process" />
                <img style={{width: '42%'}} src={BusinessHUBWriting} alt="'Kill or Die' mock card" />
            </div>
            <img style={{width: '100%'}} src={BusinessHUBCetificate} alt="Business HUB Certificate" />             
            <img style={{width: '100%'}} src={BusinessHUBLection} alt="Business HUB Lection" /> 
        <h3>Whisker Wink</h3>
        <div style={{position:'relative'}} >
                <p>
                The “Whisker Wink” is a project designed for helping pets fins their home. I am the head of code department, managing the team to create a website containing list of pets in local shelters. That allows users to book a visit for a pet and adopt it in further. Currently, the project on its development phase. The estimated completion of the website is expected within the next few weeks.<br/>
                Regarding my leadership experience, I motivate and manage a team to work on it effectively. Additionally, I am communicating to extend my crew to fasten development process.
                </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/programming">Programming</Link>
            </div>
                <img style={{width: '100%'}} src={WhiskerWink} alt="Wisker Wink pet volunteering project. The screenshot of development" />
                <div className="space">
                    <p>one</p>
                </div>
                <h3>
                Harvard Crimson Global Case Comp </h3>
                <p>I participated in Harvard Crimson Global Case Comp a few weeks ago. My team were given a problem, where Oura company requires a better srtategy for extending and maintaining its client base due to high competition. I organized a team, assigning tasks to members based on their strengths. Eventually, we came up with the solution below. Currently, we are waiting for the certificates and detailed results.</p>
                <iframe src="https://drive.google.com/file/d/158PfAo2lTzmegopetig-GPLIR3gCCHrF/preview" width="100%" height="680" allow="autoplay"></iframe>
                
                <h3>NASA Space Challenge Apps</h3>
                <div style={{position:'relative'}} >
                <p>
                    Recently, I took part in “NASA Space App Challenge”. The task was to create an application that will solve issues of people working in agricultural field. I organized my team to develop a web site. It includes dashboard with essential indicators such as participation, vegetation index, soil moisture, drought risk, and so on; an ability to consult with AI-based advices regarding the best practices and further strategy; and articles with expert advice. 
                    I was entirely responsible for the design, team management, and certain aspects of coding. <br />
                    I immediately analyzed that one member is an idea generator, while others are executors. So, we have been working on the idea with the first one, and others only implemented it.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/design">Design</Link>
                </div>
                <img style={{width: '100%'}} src={NASAScreen} alt="NASA screenshot from the website" />
                <div className="space">
                    <p>one</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button' href="https://github.com/salamanovychanna/forf"><span>View Code on GitHub</span></a>
                    <a target="_blank" rel="noopener noreferrer"  className='a-button'  href="https://forfarmers2.web.app/"><span>Visit Website</span></a>
                </div>
                
        </main>
        <Footer/>
        </>
    );
};

export default Leadership;