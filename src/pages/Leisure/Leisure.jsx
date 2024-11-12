import React, { useEffect } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Books from '../../assets/books.jpg';
import IELTS from '../../assets/IELTS_Test_Form_Report_Salamanovych_Anna.jpg';

const Leisure = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Header/>
        <main>
        <h2>Leisure</h2>
        <p>My free time is filled with reading, communication, tennis, chess and learning English.</p>
        <h3>Learning English</h3>
        <p>I totally understand the significance of English regarding future career, education, and communication. Therefore, I have been learning it for years. Finally, I achieved 6.5 in IELTS test, which is B2+ a few weeks ago. I continuously learn on everyday basics reading documentation for programming, watching interesting videos on Youtube, and reading in English.</p>
        <img style={{width: '100%'}} src={IELTS} alt="IELTS Test Form Report Salamanovych Anna" />
        <h3>Reading</h3>
        <p>I enjoy reading in everning after a tiring day. It relieves and fulfills me. To an addition, it is great for my vocabulary and cleverness.</p>
        <img style={{width: '100%'}} src={Books} alt="IELTS Test Form Report Salamanovych Anna" />
        <h3>Table & Big Tennis</h3>
        <p>I have been playing big tennis in sport school for a couple of years and continued playing table tennis as a hobby with my brother and father.</p>
        <h3>Chess</h3>
        <p>I went to a chess club with my brother in my early years. We still organize home tournaments and battles spending great time together and improving our strategic mindset.</p>
        <h3>Communication</h3>
        <p>I find going on a walk with friends relaxing. They always give me a suitable advice. <br /> Also, I enjoy spending time with my family. My brother often makes me smile. We frequently spend great evenings tasting excellent dinner made by my mom.</p>
        </main>
        <Footer/>
        </>
    );
};

export default Leisure;