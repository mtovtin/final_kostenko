import React from "react";
import logo from '../images/logo.svg'

const Navbar = () => {
    return (


<nav style={{zIndex:'2', overflow: 'hidden'}} class="navbar navbar-expand-lg" id='nb'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id="logo" src={logo} alt=""></img></a>
    <button onClick={() => {document.getElementById('cont').style.display==='none'? document.getElementById('cont').style.display='block':document.getElementById('cont').style.display='none';
    document.getElementById('footer').style.display==='none'? document.getElementById('footer').style.display='block':document.getElementById('footer').style.display='none';}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">ГОЛОВНА</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/about">ПРО МЕНЕ</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/advantages">НАШІ ПЕРЕВАГИ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/braces">НАШІ БРЕКЕТИ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/rules">ПРАВИЛА ДЛЯ ПАЦІЄНТІВ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/feedback">ВІДГУКИ</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>


    )
}
export default Navbar