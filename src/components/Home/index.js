import React,{useState} from 'react';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import HeroSection from '../HeroSection/index';


const Home = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () =>{
     setIsOpen(!isOpen);
 }

 
 return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
          <Navbar toggle={toggle}></Navbar>  
          <HeroSection></HeroSection>
        </>
    )
}

export default Home
