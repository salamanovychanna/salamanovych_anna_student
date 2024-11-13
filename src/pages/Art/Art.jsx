import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Art = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Header/>
        <main>
        <h2>Art</h2>
        <p>When I was 6, I did gymnastics. When I was 8, I went to music school and played piano here. In 2022, I found dance to be a form of art for me. It certainly increased my self-esteem and ability to express myself better.</p>
        <h3>Music</h3>
        <p>I have been a student at the music school for six years. Below is an example of my performance, where I performed at academic concert at Chernivtsi Music School No. 1.</p>
        <iframe src="https://drive.google.com/file/d/1tnvAXwpGBlVR6QGwmOwcj7-Kf2zOqj3o/preview" width="100%" height="530" allow="autoplay"></iframe>
        <h3>Dance</h3>
        <p>In Novomber 2022, I started my dancing journay with Tymur Karpinskyi. It was hip hop style of dance. When Tymur moved on to another city, I started explore different tutors. On of them was Maria in "Move on" dance studio. This is her choreography.</p>
        <iframe src="https://drive.google.com/file/d/1pzB3zh6ejJk62YysLw8UeOntV-FLwKBp/preview" width="100%" height="600" allow="autoplay"></iframe>        <h3>Performing arts</h3>
        <div style={{position:'relative'}} >
                <p>
                    A year ago, my class teacher suggested me to play Hanusia in Olha Kobylianska's "Valse Melanqolique" due to Kobylianska's honor day. Consequently, I agreed to and started the preparation with our team. <br/>
                    The moment, when I began performing, was  filled with the silence of the graveyard in the assembly hall. My character was shouting "Shut up! You do not understand it". It was the peak of a fight with a roomate. <br/>
                    The scene illustrated below.
                    </p>
                <Link style={{position:'absolute', fontSize:'40px', fontFamily: "'MonteCarlo', 'sans'", fontWeight: '400', textDecoration:'underline', color: '#341813', top: '0', transform:'translateY(-100%)', right:'0'}} to="/academic">Academic</Link>
            </div>
         <iframe src="https://drive.google.com/file/d/1vGBdD7Tej-VlDK6nVxC9pYitVm4N0VcX/preview" width="100%" height="600" allow="autoplay"></iframe>        
         </main>
        <Footer></Footer>
        </>
    );
};

export default Art;