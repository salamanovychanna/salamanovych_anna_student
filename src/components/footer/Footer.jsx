import React, { useContext } from 'react';
import { ReaderContext } from '../../context';

const Footer = () => {

    const reader = useContext(ReaderContext)

    return (
        <footer style={{margin: '60px 15% 0 15%'}}>
            <span style={{textAlign:'left', width: '70%', fontWeight:'400', fontFamily:"'MonteCarlo', 'serif'", fontSize: '50px', color:'#341813'}}>Dear {reader} </span>
            <p>I kindly ask you to review all the pages on my web site on the left.</p>
            <p>Kind Regards,</p>
            <p style={{fontStyle: 'italic'}}>Salamanovych Anna</p>
        </footer>
    );
};

export default Footer;