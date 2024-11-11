import './Design.css'
import ELandLogo from '../../assets/ELand_logo_half.jpg';
import ELandMockUPHalf from '../../assets/ELand_mock_half.jpg'
import ELandMockUPFull from '../../assets/ELand_Mockup_full.jpg'
import FlumeLogo from '../../assets/Flume_Logo.jpg'
import FlumeMockHalf from './../../assets/Flume_mock_half.png'
import FlumeMockFull from './../../assets/Flume_mock_full.jpg'
import GlowenLogo from '../../assets/Glowen_Logo.jpg'
import GlowenMockHalf from './../../assets/Glowen_Mock_half.jpg'
import GlowenMockFull from './../../assets/Glowen_mock_full.jpg'
import KillORDieLogo from './../../assets/KillORDie_Logo.jpg'
import KillORDieMockFullBags from './../../assets/KillORDie_Mock_Full_bags.jpg'
import KillORDieMockHalf from './../../assets/KillORDie_Mock_Half.jpg'
import KillORDieMockFullTShirt from './../../assets/KillORDie_Mock_Tshirt.jpg'
import FORF1 from './../../assets/FORF1.jpg'
import FORF2 from './../../assets/FORF2.jpg'
import FORF3 from './../../assets/FORF3.jpg'
import FORF4 from './../../assets/FORF4.jpg'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'








const Design = () => {
    return (
        <>
        <Header/>
        <main>
            <h2>Design</h2>
            <p>I decided to explore web and graphic design because this is beneficial for understanding the creation of a website. Eventually, I gained expertise by learning colour theory, the rules of composition, the basics of marketing, and typography.</p>
            <h3>Graphic design</h3>
            <p>This logo was created for English school “ELand”. </p>
            <div className='design-images'>
                <img style={{width: '42%'}} src={ELandLogo} alt="ELand logo" /> 
                <img style={{width: '56%'}} src={ELandMockUPHalf} alt="ELand Mock up Billboard" />
            </div>
            <img style={{width: '100%'}} src={ELandMockUPFull} alt="ELand Mock up Phone Screen" />

            <div className="space"><p>one space</p><p>two space</p><p>three space</p></div>

            <p>The logotype was created for the 'Flume' brand – a floral brand.</p>
            <div className='design-images'>
                <img style={{width: '50%'}} src={FlumeLogo} alt="Flume logo" /> 
                <img style={{width: '51%'}} src={FlumeMockHalf} alt="Flume Mock up flowerpot" />
            </div>
            <img style={{width: '100%'}} src={FlumeMockFull} alt="Flume Mock up Letters" />

            <div className="space"><p>one space</p><p>two space</p><p>three space</p></div>

            <p>The design was created for the 'GLOWEN' brand – a cosmetics brand.</p>
            <div className='design-images'>
                <img style={{width: '48.5%'}} src={GlowenLogo} alt="Glowen logo" /> 
                <img style={{width: '48.5%'}} src={GlowenMockHalf} alt="Glowen Mock up Box" />
            </div>
            <img style={{width: '100%'}} src={GlowenMockFull} alt="Glowen Mock up Bottles for Cosmetics" />

            <div className="space"><p>one space</p><p>two space</p><p>three space</p></div>

            <p>The logotype was created for the 'Kill or Die' brand – an online retailer specializing in clothing.</p>
            <div className='design-images'>
                <img style={{width: '48.5%'}} src={KillORDieLogo} alt="'Kill or Die' logo" /> 
                <img style={{width: '48.5%'}} src={KillORDieMockHalf} alt="'Kill or Die' mock card" />
            </div>
            <img style={{width: '100%', marginBottom: '15px'}} src={KillORDieMockFullBags} alt="'Kill or Die' mock bags" />
            <img style={{width: '100%'}} src={KillORDieMockFullTShirt} alt="'Kill or Die' mock tshirt" />

            <h3>Web design</h3>
            <div style={{position:'relative'}} >
                <p>
                    Recently, I took part in “NASA Space App Challenge”. The task was to create an application that will solve issues of people working in agricultural field. I organized my team to develop a web site. It includes dashboard with essential indicators such as participation, vegetation index, soil moisture, drought risk, and so on; an ability to consult with AI-based advices regarding the best practices and further strategy; and articles with expert advice. 
                    I was entirely responsible for the design, team management, and certain aspects of coding.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/programming">Programming</Link>
            </div>
            <img style={{width: '100%', marginBottom: '15px'}} src={FORF1} alt="FORF screen homepage" />
            <img style={{width: '100%', marginBottom: '15px'}} src={FORF2} alt="FORF screen dashboard" />
            <img style={{width: '100%', marginBottom: '15px'}} src={FORF3} alt="FORF screen AI advice" />
            <img style={{width: '100%', marginBottom: '15px'}} src={FORF4} alt="FORF screen blogs" />
            <h3>Design of book layouts</h3>
            <div style={{position:'relative'}} >
                <p>
                As an active student at Lyceum No. 5 "Oriina," I didn’t hesitate to help design the Legion of Will book of victories for the military-patriotic game "Dzhura." You can see the full content and design elements below.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/programming">Programming</Link>
            </div>
            <iframe src="https://drive.google.com/file/d/13mOMcfYv2ok3Txz9KBUq4hCWr_ls_F36/preview" width="100%" height="1000" allow="autoplay"></iframe>
        </main>
        <Footer/>
        </>
    );
};

export default Design;