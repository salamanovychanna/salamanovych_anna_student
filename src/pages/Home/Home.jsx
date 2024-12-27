import { useContext, useEffect } from "react";
import {ReaderContext} from '../../context';
import "./Home.css"

const Home = () => {

    console.log(window.location.href)
    const reader = useContext(ReaderContext)
        console.log()

    useEffect(()=>{
        alert("Please, I insist on watching the website on the big screen. ")
    }, [])
    return (
        <main className="home-main" >
            <span style={{textAlign:'left', width: '70%', fontWeight:'400', fontFamily:"'MonteCarlo', 'serif'", fontSize: '40px'}}>Dear {reader} </span>
            <h1 style={{margin: '2px', textAlign:'center', width: '100%', fontWeight:'400', fontSize: '64px'}}>I am Salamanovych Anna</h1>
            <span style={{textAlign:'right', width: '70%', color:'#616163', fontSize: '20px'}}>programmer, designer, and leader</span>
        </main>
    );
};

export default Home;