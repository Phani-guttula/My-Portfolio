import React from 'react'
import Header from './Components/Header/Header'
import About  from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skill  from './Components/Skills/Skill'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'


export default function App() {
  return (
    <div>
    <Navbar />
        <div className="main-content">
            <section id="home"><Header /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skill /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </div>
  </div>
  )
}
