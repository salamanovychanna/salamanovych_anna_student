import { Link } from 'react-router-dom';
import Header from '../../components/header/Header'
import Performance1 from '../../assets/Performance1.jpg';
import Performance2 from '../../assets/Performance2.jpg';

import { useEffect } from 'react';
const Academic = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Header/>
        <main>
        <h2>Academic</h2>
        <h3>Opympiads and excellent grades</h3>
        <p>I always were an excellent student with grades above 10/12. Additionally, my results are getting better every year. My GPA was 11/12 in ninth grade, while the year later, it became 11.2/12. My commendation sheet for academic achievements is below.</p>
        <p>Moreover, I participated in Olympiads for programming and IT last years. That resulted in multiple price-winning places.</p>
        <iframe src="https://drive.google.com/file/d/1hozsnr9ng-1hL2jqHylk76rd-Yb_Jkns/preview" width="100%" height="700" allow="autoplay"></iframe>

        <h3>Performance in Honor of Olga Kobylianska Day - Ukrainian Poet</h3>
        <div style={{position:'relative'}} >
                <p>
                    A year ago, my class teacher suggested me to play Hanusia in Olha Kobylianska's "Valse Melanqolique" due to Kobylianska's honor day. Consequently, I agreed to and started the preparation with our team. <br/>
                    The moment, when I began performing, was  filled with the silence of the graveyard in the assembly hall. My character was shouting "Shut up! You do not understand it". It was the peak of a fight with a roomate. <br/>
                    The scene illustrated below.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/art">Art</Link>
            </div>

            <div className='design-images'>
                <img style={{objectFit:'cover', width: '48.5%'}} src={Performance1} alt="Performance photo" /> 
                <img style={{objectFit:'cover', width: '48.5%'}} src={Performance2} alt="Performance photo" />
            </div>

        </main>

        </>
    );
};

export default Academic;