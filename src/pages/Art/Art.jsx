import { Link } from 'react-router-dom';
import Header from '../../components/header/Header'

const Art = () => {
    return (
        <>
        <Header/>
        <main>
        <h2>Dear HMC committee,</h2>

        <p>I you are watching this in the morning on Tuesday, please come back to the web site in the everyning. With all due respect, I am unable to publish the rest of the pages due to technical issues.
        I will genuinely appreaite, if you would give me a couple of hours to solve the errors.</p>
        
        <p>Additionally, you might see the page that is already available - <Link style={{fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813'}} to="/design">Design</Link></p>

        <p> Kind Regards, </p>

        <p>Salamanovych Anna</p>
        </main>

        </>
    );
};

export default Art;