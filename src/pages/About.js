
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from '../images/logo.svg'
const About = () => (
  <div id="cont" className='cont'>
  <div>ПРО МЕНЕ</div>

  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '80px', marginBottom:'20px'}}>
  <div style={{width: '100%',display: 'flex', flexDirection: 'raw', justifyContent: 'center'}}><img style={{width: '250px'}} src="../images/ava.jpg" alt=""></img></div>
    <div style={{width: '100%'}}>
      <div>Олександр Костенко</div>
      <div style={{color:'#77ABA5'}}>лікар-ортодонт</div>
      <div style={{ justifyContent: 'space-around', width: '100%', marginTop: '40px'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width:'30px', height: '30px', marginRight: '10px'}} src="../images/email.png" alt=""></img>  kostenko196@gmail.com</div>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width:'30px', height: '30px', marginRight: '10px'}} src="../images/smartphone.png" alt=""></img> +380935247313</div>
      </div>
    </div>
   
  </div>
  <div><img style={{width:"100%", height:"4px"}}
    src="../images/Rectangle 21.png" alt=""></img></div>


<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '40px', marginBottom:'10px', marginTop:'10px'}}>
<div  style={{textAlign: "center", marginBottom:'20px'}}>Коротка інформація</div>
<div className="rs">Лікар-ортодонт, працюю лише в найсучасніших техніках і якісними матеріалами. Близько 100 активних та 50 закінчених ортодонтичних пацієнтів. Маю спеціалізацію з ортодонтії, активно і регулярно відвідую фахові курси, майстер-класи та вебінари. Доступне для перегляду портфоліо та фото пацієнтів на етапах лікування. Досвід в ортодонтії більше 3,5 років. Викладаю в ДВНЗ "Ужгородський національний університет".</div>

  </div>
  <div><img style={{width:"100%", height:"4px"}}
    src="../images/Rectangle 21.png" alt=""></img></div>

<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '40px', marginBottom:'10px', marginTop:'10px'}}>
<div  style={{textAlign: "center", marginBottom:'20px'}}>Особисті якості</div>
<div className="rs">Ввічливий та професійний, умію запропонувати пацієнту найкращий варіант з багатьох наявних, ціную комфорт: як свій, так і пацієнтів з колегами. Постійно розвиваюся. Етичний по відношенню до колег. Маю орієнтовний прайс та власні матеріали. Розробив документацію для прийомів, яку також оцифровою. Усе наочно пояснюю пацієнтам.</div>

  </div>
  <div><img style={{width:"100%", height:"4px"}}
    src="../images/Rectangle 21.png" alt=""></img></div>

<div>
<div  style={{textAlign: "center", marginBottom:'20px'}}>Освіта</div>
<div className="rs"
  style={{padding: '0px 45px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', justifyContent: 'center'}}>
  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>аспірантура, здобувач ступеня доктора філософії</span>
    <div>2020 - тепер. час</div>
    </div>
  </div>

  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>спеціалізація з ортодонтії</span>
    <div>2020 - 2021</div>
    </div>
  </div>

  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>інтернатура, стоматологічний факультет</span>
    <div>2018 - 2020</div>
    </div>
  </div>

  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>юридичний факультет, бакалавр права</span>
    <div>2014 - 2019</div>
    </div>
    </div>
  
  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>стоматологічний факультет, спеціаліст</span>
    <div>2013 - 2018</div>
  </div>
</div>


</div>
  <div><img style={{width:"100%", height:"4px"}}
    src="../images/Rectangle 21.png" alt=""></img></div>


<div>
<div  style={{textAlign: "center", marginBottom:'20px'}}>Досвід роботи</div>
<div className="rs"
  style={{padding: '0px 45px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', justifyContent: 'center'}}>
  <div>
    <div>Стоматологія "PrimaDent"</div>
    <div className="smaller">
    <span>лікар-стоматолог</span>
    <div>04/2022 - тепер. час</div>
    </div>
  </div>

  <div>
    <div>Стоматологія "Platinum"</div>
    <div className="smaller">
    <span>лікар-ортодонт</span>
    <div>10/2021 - тепер. час</div>
    </div>
  </div>

  <div>
    <div>Стоматологія "Smile Studio"</div>
    <div className="smaller">
    <span>лікар-ортодонт</span>
    <div>02/2022 - тепер. час</div>
    </div>
  </div>

  <div>
    <div>Стоматологія "H&B" (м. Берегове)</div>
    <div className="smaller">
    <span>лікар-ортодонт</span>
    <div>03/2021 - тепер. час</div>
    </div>
    </div>
  
  <div>
    <div>ДВНЗ "Ужгородський національний університет"</div>
    <div className="smaller">
    <span>асистент кафедри</span>
    <div>09/2020 - тепер. час</div>
  </div>
</div>

<div>
    <div>Стоматологія White Ужгород</div>
    <div className="smaller">
    <span>лікар-ортодонт, співдиректор, співвласник</span>
    <div>09/2020 - тепер. час</div>
    </div>
  </div>

  <div>
    <div>Стоматологія "Синергія"</div>
    <div className="smaller">
    <span>лікар-ортодонт</span>
    <div>09/2020 - 02/2022</div>
    </div>
    </div>


</div>
  <div><img style={{width:"100%", height:"4px"}}
    src="../images/Rectangle 21.png" alt=""></img></div>
</div>
</div>



<div  style={{textAlign: "center", marginBottom:'20px'}}>Професійні вміння</div>
<div id="j" style={{padding: '20px 45px 20px 20px;'}}>
  <div className="g">

    <div style={{marginBottom: "20px"}}>
      🚀 техніка прямої дуги
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 мікро імпланти
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 створення та збереження Smile Arch
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 пружини Гудмана, крючки, відкриваючі/закриваючі пружини, еластичні тяги
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 два види ретенції: ретейнер і капи одночасно
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 робота різними матерілами, переважно американськими
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 оклюзивні накладки
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 ведення цифрової документації
    </div>


  </div>
  <div className="g">

    <div style={{marginBottom: "20px"}}>
      🚀 самолігатурні брекети
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 робота з широкими дугами
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 непряма фіксація
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 вигини по Шпеє-Антишпеє для корекції канту
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 психологічна робота з пацієнтами, їх підтримка
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 робота з видаленнями і без
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 індивідуальне позиціонування
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 робота з КТ
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 цифрова фіксація брекетів
    </div>
  </div>
  <div className="g">

    <div style={{marginBottom: "20px"}}>
      🚀 керамічні брекети
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 вистоке розташування брекетів
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 робота з еластиками
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 реставрації в процесі ортолікування
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 самостійно розроблена документація для ортодонтії (кожний прийом, рекомендації, брошури)
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 переліковування чужих пацієнтів
    </div>

    <div style={{marginBottom: "20px"}}>
      🚀 пасивне самолігування
    </div>
    <div style={{marginBottom: "20px"}}>
      🚀 співпраця з імплантологами
    </div>

  </div>
</div>
  </div>

);

export default About;


