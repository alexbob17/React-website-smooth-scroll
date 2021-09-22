import React,{useState} from 'react';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import HeroSection from '../HeroSection/index';
import InfoSection from '../InfoSection';
import {homeObjOne,homeObjTwo,homeObjThree} from '../InfoSection/Data';
import Services from '../Services';


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
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Services/>
          <InfoSection {...homeObjThree} />

        </>
    )
}

export default Home
