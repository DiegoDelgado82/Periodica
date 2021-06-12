import H from './images/H.png'; import Li from './images/Li.png'; import Be from './images/Be.png'; import He from './images/He.png'; import Na from './images/Na.png';
import Mg from './images/Mg.png';import K from './images/K.png';import Ca from './images/Ca.png';import Rb from './images/Rb.png';import Sr from './images/Sr.png';
import Cs from './images/Cs.png';import Ba from './images/Ba.png';import Fr from './images/Fr.png';import Ra from './images/Ra.png';import B from './images/B.png';
import C from './images/C.png';import O from './images/O.png';import N from './images/N.png';import F from './images/F.png';import Ne from './images/Ne.png';import Si from './images/Si.png';
import P from './images/P.png';import S from './images/S.png';import Cl from './images/Cl.png';import Ar from './images/Ar.png';import Ga from './images/Ga.png';
import Ge from './images/Ge.png';import As from './images/As.png';import Se from './images/Se.png';import Br from './images/Br.png';import Kr from './images/Kr.png';
import In from './images/In.png';import Sn from './images/Sn.png';import Sb from './images/Sb.png';import Te from './images/Te.png';import I from './images/I.png';
import Xe from './images/Xe.png';import Tl from './images/Tl.png';import Pb from './images/Pb.png';import Bi from './images/Bi.png';import Po from './images/Po.png';
import At from './images/At.png';import Rn from './images/Rn.png';import Nh from './images/Nh.png';import Fl from './images/Fl.png';import Mc from './images/Mc.png';
import Lv from './images/Lv.png';import Ts from './images/Ts.png';import Og from './images/Og.png';import Al from './images/Al.png';import AC from './images/AC.png';
import LA from './images/LA.png';import DF from './images/Default.png';import Negro from './images/Negro.png';
import PEACE from './images/PEACE.png';
import ReactTooltip from 'react-tooltip' ;//INSTALAR
import './Periodica.css';

import React, {Component, useState} from 'react';

import Elemento from './Elemento';


const Periodica = () => {

       // const [numero, setnumero]= useState('');
        const [isOpen, setIsOpen] = useState(false);
    
        const abrirVentana =  (id) => {
            setIsOpen(!isOpen);
            ActualizarPadre(id);
            return 
        
            
        }
        

return(
    <>
    <div>
    
    {isOpen && <Elemento
      content={<>
     
     
      </>}
      //handleClose={abrirVentana("Hola")} 
      
    />}
      </div>
<p>
<img className="Imagen" src={PEACE}  ></img>
   <br/>
<b> <h1 className="prueba1"style = {{color:'red'}}>TABLA PERIÓDICA DE LOS ELEMENTOS</h1></b>   
</p>
<div>



<button   className="Btn0"> </button> <span></span>

<button  data-tip data-for= "H" onClick={(e)=>{ abrirVentana("100") }}   className="Btn"style = {{backgroundColor:'#5C8BA7'}} > 
<ReactTooltip id="H" type="light"> <b><span style={{fontSize:20}}> Hidrógeno </span></b><span style={{fontSize:15}}><br /> Se utiliza como combustible</span></ReactTooltip> 
    <img src={H} ></img></button> 
    
    
<button className="Btn1"> </button>
<button className="Btn1"></button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>
<button className="Btn7"> </button>
<button className="Btn7"> </button>

<button  data-tip data-for= "HE"   className="Btn"style = {{backgroundColor:'#CB4220'}} > 
<ReactTooltip id="HE" type="light"> <b><span style={{fontSize:20}}> Helio  </span></b><span style={{fontSize:15}}><br /> Se utiliza en los Zeppelin</span></ReactTooltip> 
<img src={He} ></img></button> 

</div>

<div >

{/* segunda fila */}
<button className="Btn0" >  </button> <span></span>
<button data-tip data-for= "L" onClick={()=>{ }} className="Btn"style = {{backgroundColor:'#940519'}}>
<ReactTooltip id="L" type="light"> <b><span style={{fontSize:20}}> Litio </span></b><span style={{fontSize:15}}><br /> USO</span></ReactTooltip>
<img src={Li} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}onClick={()=>{ActualizarPadre(1)}} > <img src={Be} ></img></button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>

<button className="Btn"style = {{backgroundColor:'#EDF21A'}}onClick={()=>{ActualizarPadre(5)}}> <img src={B} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={C} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={N} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={O} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={F} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Ne} ></img></button>
</div>

{/*'#970519'*/}
<div>
{/* tercer fila */}
<button className="Btn0" > </button> <span></span>
<button className="Btn"style = {{backgroundColor:'#940519'}}> <img src={Na}></img></button> 
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}> <img src={Mg} onFocus={() => alert('Magnesio')}></img></button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn1"> </button>
<button className="Btn8"> </button>
<button className="Btn8"> </button>

<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Al} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={Si} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={P} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={S} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={Cl} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Ar} ></img></button>
</div>



<div>
{/* cuarta fila */}
<button className="Btn0" > </button> <span></span>
<button className="Btn"style = {{backgroundColor:'#940519'}}> <img src={K} onFocus={() => alert('HIDROGENO')}></img></button>
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}> <img src={Ca} onFocus={() => alert('HIDROGENO')}></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>

<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Ga} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={Ge} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={As} ></img></button>
<button className="Btn"style = {{backgroundColor:'#F5B633'}}> <img src={Se} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={Br} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Kr} ></img></button>


</div>

<div>

{/* 5ta fila */}
<button className="Btn0" > </button> <span></span>
<button className="Btn"style = {{backgroundColor:'#940519'}}> <img src={Rb} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}> <img src={Sr} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={In} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Sn} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={Sb} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={Te} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={I} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Xe} ></img></button>

</div>
<div>
{/* 6ta fila */}
<button className="Btn0" > </button> <span></span>
<button className="Btn"style = {{backgroundColor:'#940519'}}> <img src={Cs} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}> <img src={Ba} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Tl} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Pb} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Bi} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> <img src={Po} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={At} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Rn} ></img></button>
</div>
<div>
{/* 7ma fila */}
<button className="Btn0" > </button> <span></span>
<button className="Btn"style = {{backgroundColor:'#940519'}}> <img src={Fr} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EF67D5'}}> <img src={Ra} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#2A0FF5'}}> <img src={DF} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Nh} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Fl} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Mc} ></img></button>
<button className="Btn"style = {{backgroundColor:'#0FF75C'}}> <img src={Lv} ></img></button>
<button className="Btn"style = {{backgroundColor:'#5C8BA7'}}> <img src={Ts} ></img></button>
<button className="Btn"style = {{backgroundColor:'#CB4220'}}> <img src={Og} ></img></button>
</div>
<div>
<br/>
{/* Fila LA */}

<button className="Btn0" style = {{width:52}} > </button> <span></span>
<button className="Acl"> <img src={LA} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>

</div>
{/* Fila AC */}
<div>
<button className="Btn0" style = {{width:52}} > </button> <span></span>
<button className="Acl"> <img src={AC} ></img></button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>
<button className="Btn"style = {{backgroundColor:'#EDF21A'}}> </button>

{/*<Elemento numeroAtomico= {numero}/>*/}
</div>
</>
)   ;



function ActualizarPadre(id) {
    
    //setnumero(id);
    console.log('Datos del padre', id);
   
    
    return
}




}
export default Periodica;