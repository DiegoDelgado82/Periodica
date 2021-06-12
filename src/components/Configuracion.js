import React,  {useState} from 'react';
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css';
//instalar npm i react-flexr
import './Configuracion.css';
import C0 from './images/cuadrado0.png'; import C1 from './images/cuadrado1.png';
import C4 from './images/cuadrado4.png';
import N1 from './images/N1.png';
import N2 from './images/N2.png';
import N3 from './images/N3.png';
import N4 from './images/N4.png';
import N5 from './images/N5.png';
import N6 from './images/N6.png';
import N7 from './images/N7.png';
import PEACE from './images/PEACE.png'


let Imagen, Periodo, Atomico, config, conf;
Imagen=C0;

function Casillas (){

  Periodo= parseInt(document.getElementsByName("Periodo")[0].value)
  Atomico= parseInt(document.getElementsByName("Atomico")[0].value)
  
  switch (Periodo) {
    case 1: 
          
          Atomico1()
          return(<div></div>);
    case 2: 
            Atomico2()
            return(<div></div>);
    case 3: 
           
            Atomico3()
            return(<div></div>);
    case 4: 
           Atomico4()
            return(<div></div>);
    case 5: 
           Atomico5()
            return(<div></div>);
            

    case 6: 
           Atomico6()
             
            return(<div></div>);
    case 7: 
           Atomico7()
            

            return(<div></div>);


  default:
          <label> sdsdfsd</label>
      return (
        <div></div>
      )
      


}

function Atomico1(){
  document.getElementById('s2').src=C0  
                        
  document.getElementById('1p2').src=C0
  document.getElementById('2p2').src=C0
  document.getElementById('3p2').src=C0

  document.getElementById('s3').src=C0  
  
  document.getElementById('1p3').src=C0
  document.getElementById('2p3').src=C0
  document.getElementById('3p3').src=C0

  document.getElementById('1d3').src=C0
  document.getElementById('2d3').src=C0
  document.getElementById('3d3').src=C0
  document.getElementById('4d3').src=C0
  document.getElementById('5d3').src=C0

  document.getElementById('s4').src=C0  

  document.getElementById('1p4').src=C0
  document.getElementById('2p4').src=C0
  document.getElementById('3p4').src=C0

  document.getElementById('1d4').src=C0
  document.getElementById('2d4').src=C0
  document.getElementById('3d4').src=C0
  document.getElementById('4d4').src=C0
  document.getElementById('5d4').src=C0

  document.getElementById('1f4').src=C0
  document.getElementById('2f4').src=C0
  document.getElementById('3f4').src=C0
  document.getElementById('4f4').src=C0
  document.getElementById('5f4').src=C0
  document.getElementById('6f4').src=C0
  document.getElementById('7f4').src=C0

  document.getElementById('s5').src=C0 

  document.getElementById('1p5').src=C0
  document.getElementById('2p5').src=C0
  document.getElementById('3p5').src=C0

  document.getElementById('1d5').src=C0
  document.getElementById('2d5').src=C0
  document.getElementById('3d5').src=C0
  document.getElementById('4d5').src=C0
  document.getElementById('5d5').src=C0

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0
  
  document.getElementById('s6').src=C0  

  document.getElementById('1p6').src=C0
  document.getElementById('2p6').src=C0
  document.getElementById('3p6').src=C0

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0 
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0
    if (Atomico==1){
     
        document.getElementById('s1').src=C1
        config='1s1'
        document.getElementById('config').innerHTML=config;
    }
        
    else{
        document.getElementById('s1').src=C4
        config='1s2'
        document.getElementById('config').innerHTML=config;
    };
}

function Atomico2(){

  document.getElementById('s2').src=C0  
                  
  document.getElementById('1p2').src=C0
  document.getElementById('2p2').src=C0
  document.getElementById('3p2').src=C0

  document.getElementById('s3').src=C0  
  
  document.getElementById('1p3').src=C0
  document.getElementById('2p3').src=C0
  document.getElementById('3p3').src=C0

  document.getElementById('1d3').src=C0
  document.getElementById('2d3').src=C0
  document.getElementById('3d3').src=C0
  document.getElementById('4d3').src=C0
  document.getElementById('5d3').src=C0

  document.getElementById('s4').src=C0  

  document.getElementById('1p4').src=C0
  document.getElementById('2p4').src=C0
  document.getElementById('3p4').src=C0

  document.getElementById('1d4').src=C0
  document.getElementById('2d4').src=C0
  document.getElementById('3d4').src=C0
  document.getElementById('4d4').src=C0
  document.getElementById('5d4').src=C0

  document.getElementById('1f4').src=C0
  document.getElementById('2f4').src=C0
  document.getElementById('3f4').src=C0
  document.getElementById('4f4').src=C0
  document.getElementById('5f4').src=C0
  document.getElementById('6f4').src=C0
  document.getElementById('7f4').src=C0

  document.getElementById('s5').src=C0 

  document.getElementById('1p5').src=C0
  document.getElementById('2p5').src=C0
  document.getElementById('3p5').src=C0

  document.getElementById('1d5').src=C0
  document.getElementById('2d5').src=C0
  document.getElementById('3d5').src=C0
  document.getElementById('4d5').src=C0
  document.getElementById('5d5').src=C0

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0
  
  document.getElementById('s6').src=C0  

  document.getElementById('1p6').src=C0
  document.getElementById('2p6').src=C0
  document.getElementById('3p6').src=C0

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0 
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0
  document.getElementById('s1').src=C4

  switch(Atomico){
    case 3: 
    
    document.getElementById('s2').src=C1
    document.getElementById('1p2').src=C0
    document.getElementById('2p2').src=C0
    document.getElementById('3p2').src=C0
    config='1s2 2s1'
    document.getElementById('config').innerHTML=config;
   
    return(<div></div>);
    case 4: 
    document.getElementById('s2').src=C4
    config='1s2 2s2'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 5: 
    document.getElementById('s2').src=C4
    document.getElementById('1p2').src=C1
    document.getElementById('2p2').src=C0
    document.getElementById('3p2').src=C0
    config='1s2 2s2 2p1'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 6: 
    document.getElementById('s2').src=C4
    document.getElementById('1p2').src=C1
    document.getElementById('2p2').src=C1
    document.getElementById('3p2').src=C0
    config='1s2 2s2 2p2'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 7: 
    document.getElementById('s1').src=C4
    document.getElementById('s2').src=C4
    document.getElementById('1p2').src=C1
    document.getElementById('2p2').src=C1
    document.getElementById('3p2').src=C1
    
    config='1s2 2s2 2p3'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 8: 
    document.getElementById('s1').src=C4
    document.getElementById('s2').src=C4
    document.getElementById('1p2').src=C4
    document.getElementById('2p2').src=C1
    document.getElementById('3p2').src=C1
    config='1s2 2s2 2p4'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 9: 
    document.getElementById('s1').src=C4
    document.getElementById('s2').src=C4
    document.getElementById('1p2').src=C4
    document.getElementById('2p2').src=C4
    document.getElementById('3p2').src=C1
    config='1s2 2s2 2p5'
    document.getElementById('config').innerHTML=config;
    return(<div></div>);
    case 10: 
    document.getElementById('s1').src=C4
    document.getElementById('s2').src=C4  
    document.getElementById('1p2').src=C4
    document.getElementById('2p2').src=C4
    document.getElementById('3p2').src=C4
    config='1s2 2s2 2p6'
    document.getElementById('config').innerHTML=config;
  
    return(<div></div>);
  }

}


function Atomico3(){

  document.getElementById('s1').src=C4

  document.getElementById('s2').src=C4  
  
  document.getElementById('1p2').src=C4
  document.getElementById('2p2').src=C4
  document.getElementById('3p2').src=C4

      document.getElementById('s4').src=C0  
  
    document.getElementById('1p4').src=C0
    document.getElementById('2p4').src=C0
    document.getElementById('3p4').src=C0
  
    document.getElementById('1d4').src=C0
    document.getElementById('2d4').src=C0
    document.getElementById('3d4').src=C0
    document.getElementById('4d4').src=C0
    document.getElementById('5d4').src=C0
  
    document.getElementById('1f4').src=C0
    document.getElementById('2f4').src=C0
    document.getElementById('3f4').src=C0
    document.getElementById('4f4').src=C0
    document.getElementById('5f4').src=C0
    document.getElementById('6f4').src=C0
    document.getElementById('7f4').src=C0

    document.getElementById('s5').src=C0 
  
    document.getElementById('1p5').src=C0
    document.getElementById('2p5').src=C0
    document.getElementById('3p5').src=C0
  
    document.getElementById('1d5').src=C0
    document.getElementById('2d5').src=C0
    document.getElementById('3d5').src=C0
    document.getElementById('4d5').src=C0
    document.getElementById('5d5').src=C0
  
    document.getElementById('1f5').src=C0
    document.getElementById('2f5').src=C0
    document.getElementById('3f5').src=C0
    document.getElementById('4f5').src=C0
    document.getElementById('5f5').src=C0
    document.getElementById('6f5').src=C0
    document.getElementById('7f5').src=C0
    
    document.getElementById('s6').src=C0  
  
    document.getElementById('1p6').src=C0
    document.getElementById('2p6').src=C0
    document.getElementById('3p6').src=C0
  
    document.getElementById('1d6').src=C0
    document.getElementById('2d6').src=C0
    document.getElementById('3d6').src=C0
    document.getElementById('4d6').src=C0
    document.getElementById('5d6').src=C0

    document.getElementById('s7').src=C0 
    document.getElementById('1p7').src=C0
    document.getElementById('2p7').src=C0
    document.getElementById('3p7').src=C0
     
switch (Atomico){

  case 11:
    
    document.getElementById('s3').src=C1 
   
    document.getElementById('1p3').src=C0
    document.getElementById('2p3').src=C0
    document.getElementById('3p3').src=C0
  
    document.getElementById('1d3').src=C0
    document.getElementById('2d3').src=C0
    document.getElementById('3d3').src=C0
    document.getElementById('4d3').src=C0
    document.getElementById('5d3').src=C0
    config='1s2 2s2 2p6 3s1' 
    document.getElementById('config').innerHTML=config;
    return(<div></div>);

  

    case 12:
        document.getElementById('s3').src=C4 
          
        document.getElementById('1p3').src=C0
        document.getElementById('2p3').src=C0
        document.getElementById('3p3').src=C0
      
        document.getElementById('1d3').src=C0
        document.getElementById('2d3').src=C0
        document.getElementById('3d3').src=C0
        document.getElementById('4d3').src=C0
        document.getElementById('5d3').src=C0
       
        config='1s2 2s2 2p6 3s2'  
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
    
    case 13:
        document.getElementById('s3').src=C4 
             
        document.getElementById('1p3').src=C1
        document.getElementById('2p3').src=C0
        document.getElementById('3p3').src=C0
         
        document.getElementById('1d3').src=C0
        document.getElementById('2d3').src=C0
        document.getElementById('3d3').src=C0
        document.getElementById('4d3').src=C0
        document.getElementById('5d3').src=C0
       
        config='1s2 2s2 2p6 3s2 3p1' 
        document.getElementById('config').innerHTML=config;
        return(<div></div>); 
    
    case 14:
        document.getElementById('s3').src=C4 
                 
        document.getElementById('1p3').src=C1
        document.getElementById('2p3').src=C1
        document.getElementById('3p3').src=C0
            
        document.getElementById('1d3').src=C0
        document.getElementById('2d3').src=C0
        document.getElementById('3d3').src=C0
        document.getElementById('4d3').src=C0
        document.getElementById('5d3').src=C0
        
        config='1s2 2s2 2p6 3s2 3p2'  
        document.getElementById('config').innerHTML=config;
        return(<div></div>);

    case 15:
          document.getElementById('s3').src=C4 
                     
            document.getElementById('1p3').src=C1
            document.getElementById('2p3').src=C1
            document.getElementById('3p3').src=C1
                
            document.getElementById('1d3').src=C0
            document.getElementById('2d3').src=C0
            document.getElementById('3d3').src=C0
            document.getElementById('4d3').src=C0
            document.getElementById('5d3').src=C0
            
            config='1s2 2s2 2p6 3s2 3p3'  
            document.getElementById('config').innerHTML=config;
            return(<div></div>);            
        
      case 16:
            document.getElementById('s3').src=C4 
                     
            document.getElementById('1p3').src=C4
            document.getElementById('2p3').src=C1
            document.getElementById('3p3').src=C1
                
            document.getElementById('1d3').src=C0
            document.getElementById('2d3').src=C0
            document.getElementById('3d3').src=C0
            document.getElementById('4d3').src=C0
            document.getElementById('5d3').src=C0
            
            config='1s2 2s2 2p6 3s2 3p4'  
            document.getElementById('config').innerHTML=config;
            return(<div></div>);            

      case 17:
                document.getElementById('s3').src=C4 
                         
                document.getElementById('1p3').src=C4
                document.getElementById('2p3').src=C4
                document.getElementById('3p3').src=C1
                    
                document.getElementById('1d3').src=C0
                document.getElementById('2d3').src=C0
                document.getElementById('3d3').src=C0
                document.getElementById('4d3').src=C0
                document.getElementById('5d3').src=C0
                
                config='1s2 2s2 2p6 3s2 3p5'     
                document.getElementById('config').innerHTML=config;
                return(<div></div>);         
    
      case 18:
                    document.getElementById('s3').src=C4 
                             
                    document.getElementById('1p3').src=C4
                    document.getElementById('2p3').src=C4
                    document.getElementById('3p3').src=C4
                        
                    document.getElementById('1d3').src=C0
                    document.getElementById('2d3').src=C0
                    document.getElementById('3d3').src=C0
                    document.getElementById('4d3').src=C0
                    document.getElementById('5d3').src=C0
                    
                    config='1s2 2s2 2p6 3s2 3p6'    
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);

     
        case 21:
                document.getElementById('s3').src=C4 
                                   
                document.getElementById('1p3').src=C4
                document.getElementById('2p3').src=C4
                document.getElementById('3p3').src=C4
                document.getElementById('s4').src=C4
                              
                document.getElementById('1d3').src=C1
                document.getElementById('2d3').src=C0
                document.getElementById('3d3').src=C0
                document.getElementById('4d3').src=C0
                document.getElementById('5d3').src=C0
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d1'   
                document.getElementById('config').innerHTML=config;
                return(<div></div>);                 
        case 22:
                document.getElementById('s3').src=C4 
                                   
                document.getElementById('1p3').src=C4
                document.getElementById('2p3').src=C4
                document.getElementById('3p3').src=C4
                document.getElementById('s4').src=C4
                              
                document.getElementById('1d3').src=C1
                document.getElementById('2d3').src=C1
                document.getElementById('3d3').src=C0
                document.getElementById('4d3').src=C0
                document.getElementById('5d3').src=C0
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d2' 
                document.getElementById('config').innerHTML=config;
                return(<div></div>);                 
        case 23:
                  document.getElementById('s3').src=C4 
                                     
                  document.getElementById('1p3').src=C4
                  document.getElementById('2p3').src=C4
                  document.getElementById('3p3').src=C4
                  document.getElementById('s4').src=C4
                                
                  document.getElementById('1d3').src=C1
                  document.getElementById('2d3').src=C1
                  document.getElementById('3d3').src=C1
                  document.getElementById('4d3').src=C0
                  document.getElementById('5d3').src=C0
                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d3'   
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>); 
        case 24:
                    document.getElementById('s3').src=C4 
                                       
                    document.getElementById('1p3').src=C4
                    document.getElementById('2p3').src=C4
                    document.getElementById('3p3').src=C4
                    document.getElementById('s4').src=C4
                                  
                    document.getElementById('1d3').src=C1
                    document.getElementById('2d3').src=C1
                    document.getElementById('3d3').src=C1
                    document.getElementById('4d3').src=C1
                    document.getElementById('5d3').src=C0
                    config='1s2 2s2 2p6 3s2 3p6 4s2 3d4'   
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);                                   
        case 25:
                      document.getElementById('s3').src=C4 
                                         
                      document.getElementById('1p3').src=C4
                      document.getElementById('2p3').src=C4
                      document.getElementById('3p3').src=C4
                      document.getElementById('s4').src=C4
                                    
                      document.getElementById('1d3').src=C1
                      document.getElementById('2d3').src=C1
                      document.getElementById('3d3').src=C1
                      document.getElementById('4d3').src=C1
                      document.getElementById('5d3').src=C1
                      config='1s2 2s2 2p6 3s2 3p6 4s2 3d5'   
                      document.getElementById('config').innerHTML=config;
                      return(<div></div>);       
        case 26:
                        document.getElementById('s3').src=C4 
                                           
                        document.getElementById('1p3').src=C4
                        document.getElementById('2p3').src=C4
                        document.getElementById('3p3').src=C4
                        document.getElementById('s4').src=C4
                                      
                        document.getElementById('1d3').src=C4
                        document.getElementById('2d3').src=C1
                        document.getElementById('3d3').src=C1
                        document.getElementById('4d3').src=C1
                        document.getElementById('5d3').src=C1
                        config='1s2 2s2 2p6 3s2 3p6 4s2 3d6'   
                        document.getElementById('config').innerHTML=config;
                        return(<div></div>);   
        case 27:
                          document.getElementById('s3').src=C4 
                                             
                          document.getElementById('1p3').src=C4
                          document.getElementById('2p3').src=C4
                          document.getElementById('3p3').src=C4
                          document.getElementById('s4').src=C4
                                        
                          document.getElementById('1d3').src=C4
                          document.getElementById('2d3').src=C4
                          document.getElementById('3d3').src=C1
                          document.getElementById('4d3').src=C1
                          document.getElementById('5d3').src=C1
                          config='1s2 2s2 2p6 3s2 3p6 4s2 3d7'   
                          document.getElementById('config').innerHTML=config;
                          return(<div></div>);               
        case 28:
                            document.getElementById('s3').src=C4 
                                               
                            document.getElementById('1p3').src=C4
                            document.getElementById('2p3').src=C4
                            document.getElementById('3p3').src=C4
                            document.getElementById('s4').src=C4
                                          
                            document.getElementById('1d3').src=C4
                            document.getElementById('2d3').src=C4
                            document.getElementById('3d3').src=C4
                            document.getElementById('4d3').src=C1
                            document.getElementById('5d3').src=C1
                            config='1s2 2s2 2p6 3s2 3p6 4s2 3d8'    
                            document.getElementById('config').innerHTML=config;
                            return(<div></div>);               
  
        case 29:
                            document.getElementById('s3').src=C4 
                                               
                            document.getElementById('1p3').src=C4
                            document.getElementById('2p3').src=C4
                            document.getElementById('3p3').src=C4
                            document.getElementById('s4').src=C4
                                          
                            document.getElementById('1d3').src=C4
                            document.getElementById('2d3').src=C4
                            document.getElementById('3d3').src=C4
                            document.getElementById('4d3').src=C4
                            document.getElementById('5d3').src=C1
                            config='1s2 2s2 2p6 3s2 3p6 4s2 3d9'  
                            document.getElementById('config').innerHTML=config;
                            return(<div></div>);     
          case 30:
                              document.getElementById('s3').src=C4 
                                                 
                              document.getElementById('1p3').src=C4
                              document.getElementById('2p3').src=C4
                              document.getElementById('3p3').src=C4
                              document.getElementById('s4').src=C4
                                            
                              document.getElementById('1d3').src=C4
                              document.getElementById('2d3').src=C4
                              document.getElementById('3d3').src=C4
                              document.getElementById('4d3').src=C4
                              document.getElementById('5d3').src=C4
                              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10'    
                              document.getElementById('config').innerHTML=config;
                              return(<div></div>);                 

}


}


function Atomico4(){
  document.getElementById('s1').src=C4
          
  document.getElementById('s2').src=C4  

  document.getElementById('1p2').src=C4
  document.getElementById('2p2').src=C4
  document.getElementById('3p2').src=C4

  document.getElementById('s3').src=C4  

  document.getElementById('1p3').src=C4
  document.getElementById('2p3').src=C4
  document.getElementById('3p3').src=C4

  document.getElementById('1d3').src=C0
  document.getElementById('2d3').src=C0
  document.getElementById('3d3').src=C0
  document.getElementById('4d3').src=C0
  document.getElementById('5d3').src=C0
  document.getElementById('1p4').src=C0
  document.getElementById('2p4').src=C0
  document.getElementById('3p4').src=C0

  document.getElementById('1d4').src=C0
  document.getElementById('2d4').src=C0
  document.getElementById('3d4').src=C0
  document.getElementById('4d4').src=C0
  document.getElementById('5d4').src=C0

  document.getElementById('1f4').src=C0
  document.getElementById('2f4').src=C0
  document.getElementById('3f4').src=C0
  document.getElementById('4f4').src=C0
  document.getElementById('5f4').src=C0
  document.getElementById('6f4').src=C0
  document.getElementById('7f4').src=C0

  document.getElementById('s5').src=C0 

  document.getElementById('1p5').src=C0
  document.getElementById('2p5').src=C0
  document.getElementById('3p5').src=C0

  document.getElementById('1d5').src=C0
  document.getElementById('2d5').src=C0
  document.getElementById('3d5').src=C0
  document.getElementById('4d5').src=C0
  document.getElementById('5d5').src=C0

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0
  
  document.getElementById('s6').src=C0  

  document.getElementById('1p6').src=C0
  document.getElementById('2p6').src=C0
  document.getElementById('3p6').src=C0

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0

  switch (Atomico){

    case 19:
      document.getElementById('s3').src=C4 
               
      document.getElementById('1p3').src=C4
      document.getElementById('2p3').src=C4
      document.getElementById('3p3').src=C4
          
      document.getElementById('1d3').src=C0
      document.getElementById('2d3').src=C0
      document.getElementById('3d3').src=C0
      document.getElementById('4d3').src=C0
      document.getElementById('5d3').src=C0
      document.getElementById('s4').src=C1
      
      
      config='1s2 2s2 2p6 3s2 3p6 4s1'    
      document.getElementById('config').innerHTML=config;
      return(<div></div>);

case 20:
document.getElementById('s3').src=C4 
                   
document.getElementById('1p3').src=C4
document.getElementById('2p3').src=C4
document.getElementById('3p3').src=C4
              
document.getElementById('1d3').src=C0
document.getElementById('2d3').src=C0
document.getElementById('3d3').src=C0
document.getElementById('4d3').src=C0
document.getElementById('5d3').src=C0
document.getElementById('s4').src=C4
config='1s2 2s2 2p6 3s2 3p6 4s2'    
document.getElementById('config').innerHTML=config;
return(<div></div>);                 

    case 31:
      
      document.getElementById('1d3').src=C4
      document.getElementById('2d3').src=C4
      document.getElementById('3d3').src=C4
      document.getElementById('4d3').src=C4
      document.getElementById('5d3').src=C4

      document.getElementById('1p4').src=C1
      document.getElementById('2p4').src=C0
      document.getElementById('3p4').src=C0
    
      document.getElementById('1d4').src=C0
      document.getElementById('2d4').src=C0
      document.getElementById('3d4').src=C0
      document.getElementById('4d4').src=C0
      document.getElementById('5d4').src=C0
      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1'
      document.getElementById('config').innerHTML=config;
      return(<div></div>);
  
    
  
      case 32:

        document.getElementById('1d3').src=C4
        document.getElementById('2d3').src=C4
        document.getElementById('3d3').src=C4
        document.getElementById('4d3').src=C4
        document.getElementById('5d3').src=C4
        

        document.getElementById('1p4').src=C1
        document.getElementById('2p4').src=C1
        document.getElementById('3p4').src=C0
      
        document.getElementById('1d4').src=C0
        document.getElementById('2d4').src=C0
        document.getElementById('3d4').src=C0
        document.getElementById('4d4').src=C0
        document.getElementById('5d4').src=C0
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2'
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
          
      
      case 33:

        document.getElementById('1d3').src=C4
        document.getElementById('2d3').src=C4
        document.getElementById('3d3').src=C4
        document.getElementById('4d3').src=C4
        document.getElementById('5d3').src=C4
        

        document.getElementById('1p4').src=C1
        document.getElementById('2p4').src=C1
        document.getElementById('3p4').src=C1
      
        document.getElementById('1d4').src=C0
        document.getElementById('2d4').src=C0
        document.getElementById('3d4').src=C0
        document.getElementById('4d4').src=C0
        document.getElementById('5d4').src=C0
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3'
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
      
      case 34:

        document.getElementById('1d3').src=C4
        document.getElementById('2d3').src=C4
        document.getElementById('3d3').src=C4
        document.getElementById('4d3').src=C4
        document.getElementById('5d3').src=C4
        

        document.getElementById('1p4').src=C4
        document.getElementById('2p4').src=C1
        document.getElementById('3p4').src=C1
      
        document.getElementById('1d4').src=C0
        document.getElementById('2d4').src=C0
        document.getElementById('3d4').src=C0
        document.getElementById('4d4').src=C0
        document.getElementById('5d4').src=C0
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4'
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
  
      case 35:
      
        document.getElementById('1d3').src=C4
        document.getElementById('2d3').src=C4
        document.getElementById('3d3').src=C4
        document.getElementById('4d3').src=C4
        document.getElementById('5d3').src=C4
            
      
       document.getElementById('1p4').src=C4
        document.getElementById('2p4').src=C4
        document.getElementById('3p4').src=C1
      
        document.getElementById('1d4').src=C0
        document.getElementById('2d4').src=C0
        document.getElementById('3d4').src=C0
        document.getElementById('4d4').src=C0
        document.getElementById('5d4').src=C0
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5'
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
          
        case 36:
      
          document.getElementById('1d3').src=C4
          document.getElementById('2d3').src=C4
          document.getElementById('3d3').src=C4
          document.getElementById('4d3').src=C4
          document.getElementById('5d3').src=C4
            
      
          document.getElementById('1p4').src=C4
          document.getElementById('2p4').src=C4
          document.getElementById('3p4').src=C4
        
          document.getElementById('1d4').src=C0
          document.getElementById('2d4').src=C0
          document.getElementById('3d4').src=C0
          document.getElementById('4d4').src=C0
          document.getElementById('5d4').src=C0
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
  
        case 39:
      
            document.getElementById('1d3').src=C4
            document.getElementById('2d3').src=C4
            document.getElementById('3d3').src=C4
            document.getElementById('4d3').src=C4
            document.getElementById('5d3').src=C4
            document.getElementById('s5').src=C4
        
            document.getElementById('1p4').src=C4
            document.getElementById('2p4').src=C4
            document.getElementById('3p4').src=C4
          
            document.getElementById('1d4').src=C1
            document.getElementById('2d4').src=C0
            document.getElementById('3d4').src=C0
            document.getElementById('4d4').src=C0
            document.getElementById('5d4').src=C0
            config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d1'
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
       
       case 40:
      
              document.getElementById('1d3').src=C4
              document.getElementById('2d3').src=C4
              document.getElementById('3d3').src=C4
              document.getElementById('4d3').src=C4
              document.getElementById('5d3').src=C4
              document.getElementById('s5').src=C4
          
              document.getElementById('1p4').src=C4
              document.getElementById('2p4').src=C4
              document.getElementById('3p4').src=C4
            
              document.getElementById('1d4').src=C1
              document.getElementById('2d4').src=C1
              document.getElementById('3d4').src=C0
              document.getElementById('4d4').src=C0
              document.getElementById('5d4').src=C0
              config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d2'
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
         
       
              case 41:
      
                document.getElementById('1d3').src=C4
                document.getElementById('2d3').src=C4
                document.getElementById('3d3').src=C4
                document.getElementById('4d3').src=C4
                document.getElementById('5d3').src=C4
                document.getElementById('s5').src=C4
            
                document.getElementById('1p4').src=C4
                document.getElementById('2p4').src=C4
                document.getElementById('3p4').src=C4
              
                document.getElementById('1d4').src=C1
                document.getElementById('2d4').src=C1
                document.getElementById('3d4').src=C1
                document.getElementById('4d4').src=C0
                document.getElementById('5d4').src=C0
                config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d3'
                document.getElementById('config').innerHTML=config;
                return(<div></div>);
           
                case 42:
      
                  document.getElementById('1d3').src=C4
                  document.getElementById('2d3').src=C4
                  document.getElementById('3d3').src=C4
                  document.getElementById('4d3').src=C4
                  document.getElementById('5d3').src=C4
                  document.getElementById('s5').src=C4
              
                  document.getElementById('1p4').src=C4
                  document.getElementById('2p4').src=C4
                  document.getElementById('3p4').src=C4
                
                  document.getElementById('1d4').src=C1
                  document.getElementById('2d4').src=C1
                  document.getElementById('3d4').src=C1
                  document.getElementById('4d4').src=C1
                  document.getElementById('5d4').src=C0
                  config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d4'
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>);
             
                  case 43:
      
                    document.getElementById('1d3').src=C4
                    document.getElementById('2d3').src=C4
                    document.getElementById('3d3').src=C4
                    document.getElementById('4d3').src=C4
                    document.getElementById('5d3').src=C4
                    document.getElementById('s5').src=C4
                
                    document.getElementById('1p4').src=C4
                    document.getElementById('2p4').src=C4
                    document.getElementById('3p4').src=C4
                  
                    document.getElementById('1d4').src=C1
                    document.getElementById('2d4').src=C1
                    document.getElementById('3d4').src=C1
                    document.getElementById('4d4').src=C1
                    document.getElementById('5d4').src=C1
                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d5'
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);

                    case 44:
      
                    document.getElementById('1d3').src=C4
                    document.getElementById('2d3').src=C4
                    document.getElementById('3d3').src=C4
                    document.getElementById('4d3').src=C4
                    document.getElementById('5d3').src=C4
                    document.getElementById('s5').src=C4
                
                    document.getElementById('1p4').src=C4
                    document.getElementById('2p4').src=C4
                    document.getElementById('3p4').src=C4
                  
                    document.getElementById('1d4').src=C4
                    document.getElementById('2d4').src=C1
                    document.getElementById('3d4').src=C1
                    document.getElementById('4d4').src=C1
                    document.getElementById('5d4').src=C1
                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d6'
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);
               
                    case 45:
      
                    document.getElementById('1d3').src=C4
                    document.getElementById('2d3').src=C4
                    document.getElementById('3d3').src=C4
                    document.getElementById('4d3').src=C4
                    document.getElementById('5d3').src=C4
                    document.getElementById('s5').src=C4
                
                    document.getElementById('1p4').src=C4
                    document.getElementById('2p4').src=C4
                    document.getElementById('3p4').src=C4
                  
                    document.getElementById('1d4').src=C4
                    document.getElementById('2d4').src=C4
                    document.getElementById('3d4').src=C1
                    document.getElementById('4d4').src=C1
                    document.getElementById('5d4').src=C1
                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d7'
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);
       
                    case 46:
      
                      document.getElementById('1d3').src=C4
                      document.getElementById('2d3').src=C4
                      document.getElementById('3d3').src=C4
                      document.getElementById('4d3').src=C4
                      document.getElementById('5d3').src=C4
                      document.getElementById('s5').src=C4
                  
                      document.getElementById('1p4').src=C4
                      document.getElementById('2p4').src=C4
                      document.getElementById('3p4').src=C4
                    
                      document.getElementById('1d4').src=C4
                      document.getElementById('2d4').src=C4
                      document.getElementById('3d4').src=C4
                      document.getElementById('4d4').src=C1
                      document.getElementById('5d4').src=C1
                      config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d8'
                      document.getElementById('config').innerHTML=config;
                      return(<div></div>);
       
                      case 47:
      
                        document.getElementById('1d3').src=C4
                        document.getElementById('2d3').src=C4
                        document.getElementById('3d3').src=C4
                        document.getElementById('4d3').src=C4
                        document.getElementById('5d3').src=C4
                        document.getElementById('s5').src=C4
                    
                        document.getElementById('1p4').src=C4
                        document.getElementById('2p4').src=C4
                        document.getElementById('3p4').src=C4
                      
                        document.getElementById('1d4').src=C4
                        document.getElementById('2d4').src=C4
                        document.getElementById('3d4').src=C4
                        document.getElementById('4d4').src=C4
                        document.getElementById('5d4').src=C1
                        config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d9'
                        document.getElementById('config').innerHTML=config;
                        return(<div></div>);
         
                        case 48:
      
                          document.getElementById('1d3').src=C4
                          document.getElementById('2d3').src=C4
                          document.getElementById('3d3').src=C4
                          document.getElementById('4d3').src=C4
                          document.getElementById('5d3').src=C4
                          document.getElementById('s5').src=C4
                      
                          document.getElementById('1p4').src=C4
                          document.getElementById('2p4').src=C4
                          document.getElementById('3p4').src=C4
                        
                          document.getElementById('1d4').src=C4
                          document.getElementById('2d4').src=C4
                          document.getElementById('3d4').src=C4
                          document.getElementById('4d4').src=C4
                          document.getElementById('5d4').src=C4
                          config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10'
                          document.getElementById('config').innerHTML=config;
                          return(<div></div>);
                case 57:

                            document.getElementById('1d3').src=C4
                            document.getElementById('2d3').src=C4
                            document.getElementById('3d3').src=C4
                            document.getElementById('4d3').src=C4
                            document.getElementById('5d3').src=C4
                            document.getElementById('s5').src=C4
                        
                            document.getElementById('1p4').src=C4
                            document.getElementById('2p4').src=C4
                            document.getElementById('3p4').src=C4
                          
                            document.getElementById('1d4').src=C4
                            document.getElementById('2d4').src=C4
                            document.getElementById('3d4').src=C4
                            document.getElementById('4d4').src=C4
                            document.getElementById('5d4').src=C4

                            document.getElementById('1p5').src=C4
                            document.getElementById('2p5').src=C4
                            document.getElementById('3p5').src=C4

                            document.getElementById('s6').src=C4
                            
                            document.getElementById('1f4').src=C1
                            document.getElementById('2f4').src=C0
                            document.getElementById('3f4').src=C0
                            document.getElementById('4f4').src=C0
                            document.getElementById('5f4').src=C0
                            document.getElementById('6f4').src=C0
                            document.getElementById('7f4').src=C0
                            

                            config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f1'
                            document.getElementById('config').innerHTML=config;
                            return(<div></div>);
                      
                    case 58:

                              document.getElementById('1d3').src=C4
                              document.getElementById('2d3').src=C4
                              document.getElementById('3d3').src=C4
                              document.getElementById('4d3').src=C4
                              document.getElementById('5d3').src=C4
                              document.getElementById('s5').src=C4
                          
                              document.getElementById('1p4').src=C4
                              document.getElementById('2p4').src=C4
                              document.getElementById('3p4').src=C4
                            
                              document.getElementById('1d4').src=C4
                              document.getElementById('2d4').src=C4
                              document.getElementById('3d4').src=C4
                              document.getElementById('4d4').src=C4
                              document.getElementById('5d4').src=C4
  
                              document.getElementById('1p5').src=C4
                              document.getElementById('2p5').src=C4
                              document.getElementById('3p5').src=C4
  
                              document.getElementById('s6').src=C4
                              
                              document.getElementById('1f4').src=C1
                              document.getElementById('2f4').src=C1
                              document.getElementById('3f4').src=C0
                              document.getElementById('4f4').src=C0
                              document.getElementById('5f4').src=C0
                              document.getElementById('6f4').src=C0
                              document.getElementById('7f4').src=C0
                              
  
                              config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f2'
                              document.getElementById('config').innerHTML=config;
                              return(<div></div>);
       
                     case 59:

                                document.getElementById('1d3').src=C4
                                document.getElementById('2d3').src=C4
                                document.getElementById('3d3').src=C4
                                document.getElementById('4d3').src=C4
                                document.getElementById('5d3').src=C4
                                document.getElementById('s5').src=C4
                            
                                document.getElementById('1p4').src=C4
                                document.getElementById('2p4').src=C4
                                document.getElementById('3p4').src=C4
                              
                                document.getElementById('1d4').src=C4
                                document.getElementById('2d4').src=C4
                                document.getElementById('3d4').src=C4
                                document.getElementById('4d4').src=C4
                                document.getElementById('5d4').src=C4
    
                                document.getElementById('1p5').src=C4
                                document.getElementById('2p5').src=C4
                                document.getElementById('3p5').src=C4
    
                                document.getElementById('s6').src=C4
                                
                                document.getElementById('1f4').src=C1
                                document.getElementById('2f4').src=C1
                                document.getElementById('3f4').src=C1
                                document.getElementById('4f4').src=C0
                                document.getElementById('5f4').src=C0
                                document.getElementById('6f4').src=C0
                                document.getElementById('7f4').src=C0
                               
    
                                config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f3'
                                document.getElementById('config').innerHTML=config;
                                return(<div></div>);
                    case 60:

                                  document.getElementById('1d3').src=C4
                                  document.getElementById('2d3').src=C4
                                  document.getElementById('3d3').src=C4
                                  document.getElementById('4d3').src=C4
                                  document.getElementById('5d3').src=C4
                                  document.getElementById('s5').src=C4
                              
                                  document.getElementById('1p4').src=C4
                                  document.getElementById('2p4').src=C4
                                  document.getElementById('3p4').src=C4
                                
                                  document.getElementById('1d4').src=C4
                                  document.getElementById('2d4').src=C4
                                  document.getElementById('3d4').src=C4
                                  document.getElementById('4d4').src=C4
                                  document.getElementById('5d4').src=C4
      
                                  document.getElementById('1p5').src=C4
                                  document.getElementById('2p5').src=C4
                                  document.getElementById('3p5').src=C4
      
                                  document.getElementById('s6').src=C4
                                  
                                  document.getElementById('1f4').src=C1
                                  document.getElementById('2f4').src=C1
                                  document.getElementById('3f4').src=C1
                                  document.getElementById('4f4').src=C1
                                  document.getElementById('5f4').src=C0
                                  document.getElementById('6f4').src=C0
                                  document.getElementById('7f4').src=C0
                                 
      
                                  config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f4'
                                  document.getElementById('config').innerHTML=config;
                                  return(<div></div>);
                      case 61:

                                    document.getElementById('1d3').src=C4
                                    document.getElementById('2d3').src=C4
                                    document.getElementById('3d3').src=C4
                                    document.getElementById('4d3').src=C4
                                    document.getElementById('5d3').src=C4
                                    document.getElementById('s5').src=C4
                                
                                    document.getElementById('1p4').src=C4
                                    document.getElementById('2p4').src=C4
                                    document.getElementById('3p4').src=C4
                                  
                                    document.getElementById('1d4').src=C4
                                    document.getElementById('2d4').src=C4
                                    document.getElementById('3d4').src=C4
                                    document.getElementById('4d4').src=C4
                                    document.getElementById('5d4').src=C4
        
                                    document.getElementById('1p5').src=C4
                                    document.getElementById('2p5').src=C4
                                    document.getElementById('3p5').src=C4
        
                                    document.getElementById('s6').src=C4
                                    
                                    document.getElementById('1f4').src=C1
                                    document.getElementById('2f4').src=C1
                                    document.getElementById('3f4').src=C1
                                    document.getElementById('4f4').src=C1
                                    document.getElementById('5f4').src=C1
                                    document.getElementById('6f4').src=C0
                                    document.getElementById('7f4').src=C0
                                    
        
                                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f5'
                                    document.getElementById('config').innerHTML=config;
                                    return(<div></div>);

                  case 62:

                                    document.getElementById('1d3').src=C4
                                    document.getElementById('2d3').src=C4
                                    document.getElementById('3d3').src=C4
                                    document.getElementById('4d3').src=C4
                                    document.getElementById('5d3').src=C4
                                    document.getElementById('s5').src=C4
                                
                                    document.getElementById('1p4').src=C4
                                    document.getElementById('2p4').src=C4
                                    document.getElementById('3p4').src=C4
                                  
                                    document.getElementById('1d4').src=C4
                                    document.getElementById('2d4').src=C4
                                    document.getElementById('3d4').src=C4
                                    document.getElementById('4d4').src=C4
                                    document.getElementById('5d4').src=C4
        
                                    document.getElementById('1p5').src=C4
                                    document.getElementById('2p5').src=C4
                                    document.getElementById('3p5').src=C4
        
                                    document.getElementById('s6').src=C4
                                    
                                    document.getElementById('1f4').src=C1
                                    document.getElementById('2f4').src=C1
                                    document.getElementById('3f4').src=C1
                                    document.getElementById('4f4').src=C1
                                    document.getElementById('5f4').src=C1
                                    document.getElementById('6f4').src=C1
                                    document.getElementById('7f4').src=C0
                                    
        
                                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f6'
                                    document.getElementById('config').innerHTML=config;
                                    return(<div></div>);

                                    
                  case 63:

                              document.getElementById('1d3').src=C4
                              document.getElementById('2d3').src=C4
                              document.getElementById('3d3').src=C4
                              document.getElementById('4d3').src=C4
                              document.getElementById('5d3').src=C4
                              document.getElementById('s5').src=C4
                          
                              document.getElementById('1p4').src=C4
                              document.getElementById('2p4').src=C4
                              document.getElementById('3p4').src=C4
                            
                              document.getElementById('1d4').src=C4
                              document.getElementById('2d4').src=C4
                              document.getElementById('3d4').src=C4
                              document.getElementById('4d4').src=C4
                              document.getElementById('5d4').src=C4

                              document.getElementById('1p5').src=C4
                              document.getElementById('2p5').src=C4
                              document.getElementById('3p5').src=C4

                              document.getElementById('s6').src=C4
                              
                              document.getElementById('1f4').src=C1
                              document.getElementById('2f4').src=C1
                              document.getElementById('3f4').src=C1
                              document.getElementById('4f4').src=C1
                              document.getElementById('5f4').src=C1
                              document.getElementById('6f4').src=C1
                              document.getElementById('7f4').src=C1
                              

                              config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f7'
                              document.getElementById('config').innerHTML=config;
                              return(<div></div>);

                  case 64:

                                document.getElementById('1d3').src=C4
                                document.getElementById('2d3').src=C4
                                document.getElementById('3d3').src=C4
                                document.getElementById('4d3').src=C4
                                document.getElementById('5d3').src=C4
                                document.getElementById('s5').src=C4
                            
                                document.getElementById('1p4').src=C4
                                document.getElementById('2p4').src=C4
                                document.getElementById('3p4').src=C4
                              
                                document.getElementById('1d4').src=C4
                                document.getElementById('2d4').src=C4
                                document.getElementById('3d4').src=C4
                                document.getElementById('4d4').src=C4
                                document.getElementById('5d4').src=C4
  
                                document.getElementById('1p5').src=C4
                                document.getElementById('2p5').src=C4
                                document.getElementById('3p5').src=C4
  
                                document.getElementById('s6').src=C4
                                
                                document.getElementById('1f4').src=C4
                                document.getElementById('2f4').src=C1
                                document.getElementById('3f4').src=C1
                                document.getElementById('4f4').src=C1
                                document.getElementById('5f4').src=C1
                                document.getElementById('6f4').src=C1
                                document.getElementById('7f4').src=C1
                               
                                config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f8'
                                document.getElementById('config').innerHTML=config;
                                return(<div></div>);

                    case 65:

                                  document.getElementById('1d3').src=C4
                                  document.getElementById('2d3').src=C4
                                  document.getElementById('3d3').src=C4
                                  document.getElementById('4d3').src=C4
                                  document.getElementById('5d3').src=C4
                                  document.getElementById('s5').src=C4
                              
                                  document.getElementById('1p4').src=C4
                                  document.getElementById('2p4').src=C4
                                  document.getElementById('3p4').src=C4
                                
                                  document.getElementById('1d4').src=C4
                                  document.getElementById('2d4').src=C4
                                  document.getElementById('3d4').src=C4
                                  document.getElementById('4d4').src=C4
                                  document.getElementById('5d4').src=C4
    
                                  document.getElementById('1p5').src=C4
                                  document.getElementById('2p5').src=C4
                                  document.getElementById('3p5').src=C4
    
                                  document.getElementById('s6').src=C4
                                  
                                  document.getElementById('1f4').src=C4
                                  document.getElementById('2f4').src=C4
                                  document.getElementById('3f4').src=C1
                                  document.getElementById('4f4').src=C1
                                  document.getElementById('5f4').src=C1
                                  document.getElementById('6f4').src=C1
                                  document.getElementById('7f4').src=C1
                                 
                                  config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f9'
                                  document.getElementById('config').innerHTML=config;
                                  return(<div></div>);
                
                    case 66:

                                    document.getElementById('1d3').src=C4
                                    document.getElementById('2d3').src=C4
                                    document.getElementById('3d3').src=C4
                                    document.getElementById('4d3').src=C4
                                    document.getElementById('5d3').src=C4
                                    document.getElementById('s5').src=C4
                                
                                    document.getElementById('1p4').src=C4
                                    document.getElementById('2p4').src=C4
                                    document.getElementById('3p4').src=C4
                                  
                                    document.getElementById('1d4').src=C4
                                    document.getElementById('2d4').src=C4
                                    document.getElementById('3d4').src=C4
                                    document.getElementById('4d4').src=C4
                                    document.getElementById('5d4').src=C4
      
                                    document.getElementById('1p5').src=C4
                                    document.getElementById('2p5').src=C4
                                    document.getElementById('3p5').src=C4
      
                                    document.getElementById('s6').src=C4
                                    
                                    document.getElementById('1f4').src=C4
                                    document.getElementById('2f4').src=C4
                                    document.getElementById('3f4').src=C4
                                    document.getElementById('4f4').src=C1
                                    document.getElementById('5f4').src=C1
                                    document.getElementById('6f4').src=C1
                                    document.getElementById('7f4').src=C1
                                   
                                    config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f10'
                                    document.getElementById('config').innerHTML=config;
                                    return(<div></div>);

                             case 67:

                                      document.getElementById('1d3').src=C4
                                      document.getElementById('2d3').src=C4
                                      document.getElementById('3d3').src=C4
                                      document.getElementById('4d3').src=C4
                                      document.getElementById('5d3').src=C4
                                      document.getElementById('s5').src=C4
                                  
                                      document.getElementById('1p4').src=C4
                                      document.getElementById('2p4').src=C4
                                      document.getElementById('3p4').src=C4
                                    
                                      document.getElementById('1d4').src=C4
                                      document.getElementById('2d4').src=C4
                                      document.getElementById('3d4').src=C4
                                      document.getElementById('4d4').src=C4
                                      document.getElementById('5d4').src=C4
        
                                      document.getElementById('1p5').src=C4
                                      document.getElementById('2p5').src=C4
                                      document.getElementById('3p5').src=C4
        
                                      document.getElementById('s6').src=C4
                                      
                                      document.getElementById('1f4').src=C4
                                      document.getElementById('2f4').src=C4
                                      document.getElementById('3f4').src=C4
                                      document.getElementById('4f4').src=C4
                                      document.getElementById('5f4').src=C1
                                      document.getElementById('6f4').src=C1
                                      document.getElementById('7f4').src=C1
                                     
                                      config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f11'
                                      document.getElementById('config').innerHTML=config;
                                      return(<div></div>);

                    case 68:

                                        document.getElementById('1d3').src=C4
                                        document.getElementById('2d3').src=C4
                                        document.getElementById('3d3').src=C4
                                        document.getElementById('4d3').src=C4
                                        document.getElementById('5d3').src=C4
                                        document.getElementById('s5').src=C4
                                    
                                        document.getElementById('1p4').src=C4
                                        document.getElementById('2p4').src=C4
                                        document.getElementById('3p4').src=C4
                                      
                                        document.getElementById('1d4').src=C4
                                        document.getElementById('2d4').src=C4
                                        document.getElementById('3d4').src=C4
                                        document.getElementById('4d4').src=C4
                                        document.getElementById('5d4').src=C4
          
                                        document.getElementById('1p5').src=C4
                                        document.getElementById('2p5').src=C4
                                        document.getElementById('3p5').src=C4
          
                                        document.getElementById('s6').src=C4
                                        
                                        document.getElementById('1f4').src=C4
                                        document.getElementById('2f4').src=C4
                                        document.getElementById('3f4').src=C4
                                        document.getElementById('4f4').src=C4
                                        document.getElementById('5f4').src=C4
                                        document.getElementById('6f4').src=C1
                                        document.getElementById('7f4').src=C1
                                       
                                        config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f12'
                                        document.getElementById('config').innerHTML=config;
                                        return(<div></div>);
                                    
                            case 69:

                                          document.getElementById('1d3').src=C4
                                          document.getElementById('2d3').src=C4
                                          document.getElementById('3d3').src=C4
                                          document.getElementById('4d3').src=C4
                                          document.getElementById('5d3').src=C4
                                          document.getElementById('s5').src=C4
                                      
                                          document.getElementById('1p4').src=C4
                                          document.getElementById('2p4').src=C4
                                          document.getElementById('3p4').src=C4
                                        
                                          document.getElementById('1d4').src=C4
                                          document.getElementById('2d4').src=C4
                                          document.getElementById('3d4').src=C4
                                          document.getElementById('4d4').src=C4
                                          document.getElementById('5d4').src=C4
            
                                          document.getElementById('1p5').src=C4
                                          document.getElementById('2p5').src=C4
                                          document.getElementById('3p5').src=C4
            
                                          document.getElementById('s6').src=C4
                                          
                                          document.getElementById('1f4').src=C4
                                          document.getElementById('2f4').src=C4
                                          document.getElementById('3f4').src=C4
                                          document.getElementById('4f4').src=C4
                                          document.getElementById('5f4').src=C4
                                          document.getElementById('6f4').src=C4
                                          document.getElementById('7f4').src=C1
                                         
                                          config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f13'
                                          document.getElementById('config').innerHTML=config;
                                          return(<div></div>);
                                case 70:

                                            document.getElementById('1d3').src=C4
                                            document.getElementById('2d3').src=C4
                                            document.getElementById('3d3').src=C4
                                            document.getElementById('4d3').src=C4
                                            document.getElementById('5d3').src=C4
                                            document.getElementById('s5').src=C4
                                        
                                            document.getElementById('1p4').src=C4
                                            document.getElementById('2p4').src=C4
                                            document.getElementById('3p4').src=C4
                                          
                                            document.getElementById('1d4').src=C4
                                            document.getElementById('2d4').src=C4
                                            document.getElementById('3d4').src=C4
                                            document.getElementById('4d4').src=C4
                                            document.getElementById('5d4').src=C4
              
                                            document.getElementById('1p5').src=C4
                                            document.getElementById('2p5').src=C4
                                            document.getElementById('3p5').src=C4
              
                                            document.getElementById('s6').src=C4
                                            
                                            document.getElementById('1f4').src=C4
                                            document.getElementById('2f4').src=C4
                                            document.getElementById('3f4').src=C4
                                            document.getElementById('4f4').src=C4
                                            document.getElementById('5f4').src=C4
                                            document.getElementById('6f4').src=C4
                                            document.getElementById('7f4').src=C4
                                           
                                            config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2 4d10 6s2 4f14 '
                                            document.getElementById('config').innerHTML=config;
                                            return(<div></div>);
         
       
          
        
        
        
        
        
        
         
  
  }
  
  


}

function Atomico5(){

  document.getElementById('s1').src=C4
       
  document.getElementById('s2').src=C4  

  document.getElementById('1p2').src=C4
  document.getElementById('2p2').src=C4
  document.getElementById('3p2').src=C4

  document.getElementById('s3').src=C4  

  document.getElementById('1p3').src=C4
  document.getElementById('2p3').src=C4
  document.getElementById('3p3').src=C4

  document.getElementById('1d3').src=C4
  document.getElementById('2d3').src=C4
  document.getElementById('3d3').src=C4
  document.getElementById('4d3').src=C4
  document.getElementById('5d3').src=C4

  document.getElementById('s4').src=C4  

  document.getElementById('1p4').src=C4
  document.getElementById('2p4').src=C4
  document.getElementById('3p4').src=C4

  document.getElementById('1d4').src=C0
  document.getElementById('2d4').src=C0
  document.getElementById('3d4').src=C0
  document.getElementById('4d4').src=C0
  document.getElementById('5d4').src=C0

  document.getElementById('1f4').src=C0
  document.getElementById('2f4').src=C0
  document.getElementById('3f4').src=C0
  document.getElementById('4f4').src=C0
  document.getElementById('5f4').src=C0
  document.getElementById('6f4').src=C0
  document.getElementById('7f4').src=C0

  document.getElementById('s5').src=C0 

  document.getElementById('1p5').src=C0
  document.getElementById('2p5').src=C0
  document.getElementById('3p5').src=C0

  document.getElementById('1d5').src=C0
  document.getElementById('2d5').src=C0
  document.getElementById('3d5').src=C0
  document.getElementById('4d5').src=C0
  document.getElementById('5d5').src=C0

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0
  
  document.getElementById('s6').src=C0  

  document.getElementById('1p6').src=C0
  document.getElementById('2p6').src=C0
  document.getElementById('3p6').src=C0

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0

  switch (Atomico){

    case 37:
          document.getElementById('1p4').src=C4
          document.getElementById('2p4').src=C4
          document.getElementById('3p4').src=C4
        
          document.getElementById('1d4').src=C0
          document.getElementById('2d4').src=C0
          document.getElementById('3d4').src=C0
          document.getElementById('4d4').src=C0
          document.getElementById('5d4').src=C0
          document.getElementById('s5').src=C1
          config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
      
    case 38:
          document.getElementById('1p4').src=C4
          document.getElementById('2p4').src=C4
          document.getElementById('3p4').src=C4
        
          document.getElementById('1d4').src=C0
          document.getElementById('2d4').src=C0
          document.getElementById('3d4').src=C0
          document.getElementById('4d4').src=C0
          document.getElementById('5d4').src=C0
          document.getElementById('s5').src=C4
          config='1s2 2s2 2p6 3s2 3p6 4s2 4p6 5s2'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    
    case 49:
      document.getElementById('1d4').src=C4
      document.getElementById('2d4').src=C4
      document.getElementById('3d4').src=C4
      document.getElementById('4d4').src=C4
      document.getElementById('5d4').src=C4
      document.getElementById('s5').src=C4
      document.getElementById('1p5').src=C1
      document.getElementById('2p5').src=C0
      document.getElementById('3p5').src=C0
      
      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1 '    
      document.getElementById('config').innerHTML=config;
      return(<div></div>);

    case 50:
      document.getElementById('1d4').src=C4
      document.getElementById('2d4').src=C4
      document.getElementById('3d4').src=C4
      document.getElementById('4d4').src=C4
      document.getElementById('5d4').src=C4
      document.getElementById('s5').src=C4
      document.getElementById('1p5').src=C1
      document.getElementById('2p5').src=C1
      document.getElementById('3p5').src=C0
        
      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2 '    
      document.getElementById('config').innerHTML=config;
      return(<div></div>);
    
    case 51:
      document.getElementById('1d4').src=C4
      document.getElementById('2d4').src=C4
      document.getElementById('3d4').src=C4
      document.getElementById('4d4').src=C4
      document.getElementById('5d4').src=C4
      document.getElementById('s5').src=C4
      document.getElementById('1p5').src=C1
      document.getElementById('2p5').src=C1
      document.getElementById('3p5').src=C1
        
      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3 '    
      document.getElementById('config').innerHTML=config;
      return(<div></div>);

    case 52:
      document.getElementById('1d4').src=C4
      document.getElementById('2d4').src=C4
      document.getElementById('3d4').src=C4
      document.getElementById('4d4').src=C4
      document.getElementById('5d4').src=C4
      document.getElementById('s5').src=C4
      document.getElementById('1p5').src=C4
      document.getElementById('2p5').src=C1
      document.getElementById('3p5').src=C1
          
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4 '    
        document.getElementById('config').innerHTML=config;
        return(<div></div>);

    case 53:
      document.getElementById('1d4').src=C4
      document.getElementById('2d4').src=C4
      document.getElementById('3d4').src=C4
      document.getElementById('4d4').src=C4
      document.getElementById('5d4').src=C4
      document.getElementById('s5').src=C4
      document.getElementById('1p5').src=C4
      document.getElementById('2p5').src=C4
      document.getElementById('3p5').src=C1
          
        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5 '    
        document.getElementById('config').innerHTML=config;
        return(<div></div>);
     
    case 54:
          document.getElementById('1d4').src=C4
          document.getElementById('2d4').src=C4
          document.getElementById('3d4').src=C4
          document.getElementById('4d4').src=C4
          document.getElementById('5d4').src=C4
          document.getElementById('s5').src=C4
          document.getElementById('1p5').src=C4
          document.getElementById('2p5').src=C4
          document.getElementById('3p5').src=C4
              
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 '    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
    
    case 71:
          document.getElementById('1d4').src=C4
          document.getElementById('2d4').src=C4
          document.getElementById('3d4').src=C4
          document.getElementById('4d4').src=C4
          document.getElementById('5d4').src=C4
          document.getElementById('s5').src=C4
          document.getElementById('1p5').src=C4
          document.getElementById('2p5').src=C4
          document.getElementById('3p5').src=C4
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4

          document.getElementById('1d5').src=C1
          document.getElementById('2d5').src=C0
          document.getElementById('3d5').src=C0
          document.getElementById('4d5').src=C0
          document.getElementById('5d5').src=C0

          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1'    
          document.getElementById('config').innerHTML=config;
          return(<div></div>);

    case 72:
          document.getElementById('1d4').src=C4
          document.getElementById('2d4').src=C4
          document.getElementById('3d4').src=C4
          document.getElementById('4d4').src=C4
          document.getElementById('5d4').src=C4
          document.getElementById('s5').src=C4
          document.getElementById('1p5').src=C4
          document.getElementById('2p5').src=C4
          document.getElementById('3p5').src=C4
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
  
          document.getElementById('1d5').src=C1
          document.getElementById('2d5').src=C1
          document.getElementById('3d5').src=C0
          document.getElementById('4d5').src=C0
          document.getElementById('5d5').src=C0
  
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);


      case 73:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
      
            document.getElementById('1d5').src=C1
            document.getElementById('2d5').src=C1
            document.getElementById('3d5').src=C1
            document.getElementById('4d5').src=C0
            document.getElementById('5d5').src=C0
      
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);

            
      case 74:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
      
            document.getElementById('1d5').src=C1
            document.getElementById('2d5').src=C1
            document.getElementById('3d5').src=C1
            document.getElementById('4d5').src=C1
            document.getElementById('5d5').src=C0
      
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);

      case 75:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
        
            document.getElementById('1d5').src=C1
            document.getElementById('2d5').src=C1
            document.getElementById('3d5').src=C1
            document.getElementById('4d5').src=C1
            document.getElementById('5d5').src=C1
        
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
  
      case 76:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
          
            document.getElementById('1d5').src=C4
            document.getElementById('2d5').src=C1
            document.getElementById('3d5').src=C1
            document.getElementById('4d5').src=C1
            document.getElementById('5d5').src=C1
          
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
      case 77:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
          
            document.getElementById('1d5').src=C4
            document.getElementById('2d5').src=C4
            document.getElementById('3d5').src=C1
            document.getElementById('4d5').src=C1
            document.getElementById('5d5').src=C1
          
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
      case 78:
            document.getElementById('1d4').src=C4
            document.getElementById('2d4').src=C4
            document.getElementById('3d4').src=C4
            document.getElementById('4d4').src=C4
            document.getElementById('5d4').src=C4
            document.getElementById('s5').src=C4
            document.getElementById('1p5').src=C4
            document.getElementById('2p5').src=C4
            document.getElementById('3p5').src=C4
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
          
            document.getElementById('1d5').src=C4
            document.getElementById('2d5').src=C4
            document.getElementById('3d5').src=C4
            document.getElementById('4d5').src=C1
            document.getElementById('5d5').src=C1
          
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d8'    
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
      case 79:
              document.getElementById('1d4').src=C4
              document.getElementById('2d4').src=C4
              document.getElementById('3d4').src=C4
              document.getElementById('4d4').src=C4
              document.getElementById('5d4').src=C4
              document.getElementById('s5').src=C4
              document.getElementById('1p5').src=C4
              document.getElementById('2p5').src=C4
              document.getElementById('3p5').src=C4
              document.getElementById('s6').src=C4
              document.getElementById('1f4').src=C4
              document.getElementById('2f4').src=C4
              document.getElementById('3f4').src=C4
              document.getElementById('4f4').src=C4
              document.getElementById('5f4').src=C4
              document.getElementById('6f4').src=C4
              document.getElementById('7f4').src=C4
            
              document.getElementById('1d5').src=C4
              document.getElementById('2d5').src=C4
              document.getElementById('3d5').src=C4
              document.getElementById('4d5').src=C4
              document.getElementById('5d5').src=C1
            
              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d9'    
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
        case 80:
                document.getElementById('1d4').src=C4
                document.getElementById('2d4').src=C4
                document.getElementById('3d4').src=C4
                document.getElementById('4d4').src=C4
                document.getElementById('5d4').src=C4
                document.getElementById('s5').src=C4
                document.getElementById('1p5').src=C4
                document.getElementById('2p5').src=C4
                document.getElementById('3p5').src=C4
                document.getElementById('s6').src=C4
                document.getElementById('1f4').src=C4
                document.getElementById('2f4').src=C4
                document.getElementById('3f4').src=C4
                document.getElementById('4f4').src=C4
                document.getElementById('5f4').src=C4
                document.getElementById('6f4').src=C4
                document.getElementById('7f4').src=C4
              
                document.getElementById('1d5').src=C4
                document.getElementById('2d5').src=C4
                document.getElementById('3d5').src=C4
                document.getElementById('4d5').src=C4
                document.getElementById('5d5').src=C4
              
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10'    
                document.getElementById('config').innerHTML=config;
                return(<div></div>);

        case 89:
                document.getElementById('1d4').src=C4
                document.getElementById('2d4').src=C4
                document.getElementById('3d4').src=C4
                document.getElementById('4d4').src=C4
                document.getElementById('5d4').src=C4
                document.getElementById('s5').src=C4
                document.getElementById('1p5').src=C4
                document.getElementById('2p5').src=C4
                document.getElementById('3p5').src=C4
                document.getElementById('s6').src=C4
                document.getElementById('1f4').src=C4
                document.getElementById('2f4').src=C4
                document.getElementById('3f4').src=C4
                document.getElementById('4f4').src=C4
                document.getElementById('5f4').src=C4
                document.getElementById('6f4').src=C4
                document.getElementById('7f4').src=C4
              
                document.getElementById('1d5').src=C4
                document.getElementById('2d5').src=C4
                document.getElementById('3d5').src=C4
                document.getElementById('4d5').src=C4
                document.getElementById('5d5').src=C4

                document.getElementById('1p6').src=C4
                document.getElementById('2p6').src=C4
                document.getElementById('3p6').src=C4
                document.getElementById('s7').src=C4

                document.getElementById('1f5').src=C1
                document.getElementById('2f5').src=C0
                document.getElementById('3f5').src=C0
                document.getElementById('4f5').src=C0
                document.getElementById('5f5').src=C0
                document.getElementById('6f5').src=C0
                document.getElementById('7f5').src=C0
              
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f1'    
                document.getElementById('config').innerHTML=config;
                return(<div></div>);
                
        case 90:
                document.getElementById('1d4').src=C4
                document.getElementById('2d4').src=C4
                document.getElementById('3d4').src=C4
                document.getElementById('4d4').src=C4
                document.getElementById('5d4').src=C4
                document.getElementById('s5').src=C4
                document.getElementById('1p5').src=C4
                document.getElementById('2p5').src=C4
                document.getElementById('3p5').src=C4
                document.getElementById('s6').src=C4
                document.getElementById('1f4').src=C4
                document.getElementById('2f4').src=C4
                document.getElementById('3f4').src=C4
                document.getElementById('4f4').src=C4
                document.getElementById('5f4').src=C4
                document.getElementById('6f4').src=C4
                document.getElementById('7f4').src=C4
              
                document.getElementById('1d5').src=C4
                document.getElementById('2d5').src=C4
                document.getElementById('3d5').src=C4
                document.getElementById('4d5').src=C4
                document.getElementById('5d5').src=C4

                document.getElementById('1p6').src=C4
                document.getElementById('2p6').src=C4
                document.getElementById('3p6').src=C4
                document.getElementById('s7').src=C4

                document.getElementById('1f5').src=C1
                document.getElementById('2f5').src=C1
                document.getElementById('3f5').src=C0
                document.getElementById('4f5').src=C0
                document.getElementById('5f5').src=C0
                document.getElementById('6f5').src=C0
                document.getElementById('7f5').src=C0
              
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2'    
                document.getElementById('config').innerHTML=config;
                return(<div></div>);
        case 91:
                  document.getElementById('1d4').src=C4
                  document.getElementById('2d4').src=C4
                  document.getElementById('3d4').src=C4
                  document.getElementById('4d4').src=C4
                  document.getElementById('5d4').src=C4
                  document.getElementById('s5').src=C4
                  document.getElementById('1p5').src=C4
                  document.getElementById('2p5').src=C4
                  document.getElementById('3p5').src=C4
                  document.getElementById('s6').src=C4
                  document.getElementById('1f4').src=C4
                  document.getElementById('2f4').src=C4
                  document.getElementById('3f4').src=C4
                  document.getElementById('4f4').src=C4
                  document.getElementById('5f4').src=C4
                  document.getElementById('6f4').src=C4
                  document.getElementById('7f4').src=C4
                
                  document.getElementById('1d5').src=C4
                  document.getElementById('2d5').src=C4
                  document.getElementById('3d5').src=C4
                  document.getElementById('4d5').src=C4
                  document.getElementById('5d5').src=C4
  
                  document.getElementById('1p6').src=C4
                  document.getElementById('2p6').src=C4
                  document.getElementById('3p6').src=C4
                  document.getElementById('s7').src=C4
  
                  document.getElementById('1f5').src=C1
                  document.getElementById('2f5').src=C1
                  document.getElementById('3f5').src=C1
                  document.getElementById('4f5').src=C0
                  document.getElementById('5f5').src=C0
                  document.getElementById('6f5').src=C0
                  document.getElementById('7f5').src=C0
                
                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3'    
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>);
        case 92:
                  document.getElementById('1d4').src=C4
                  document.getElementById('2d4').src=C4
                  document.getElementById('3d4').src=C4
                  document.getElementById('4d4').src=C4
                  document.getElementById('5d4').src=C4
                  document.getElementById('s5').src=C4
                  document.getElementById('1p5').src=C4
                  document.getElementById('2p5').src=C4
                  document.getElementById('3p5').src=C4
                  document.getElementById('s6').src=C4
                  document.getElementById('1f4').src=C4
                  document.getElementById('2f4').src=C4
                  document.getElementById('3f4').src=C4
                  document.getElementById('4f4').src=C4
                  document.getElementById('5f4').src=C4
                  document.getElementById('6f4').src=C4
                  document.getElementById('7f4').src=C4
                
                  document.getElementById('1d5').src=C4
                  document.getElementById('2d5').src=C4
                  document.getElementById('3d5').src=C4
                  document.getElementById('4d5').src=C4
                  document.getElementById('5d5').src=C4
  
                  document.getElementById('1p6').src=C4
                  document.getElementById('2p6').src=C4
                  document.getElementById('3p6').src=C4
                  document.getElementById('s7').src=C4
  
                  document.getElementById('1f5').src=C1
                  document.getElementById('2f5').src=C1
                  document.getElementById('3f5').src=C1
                  document.getElementById('4f5').src=C1
                  document.getElementById('5f5').src=C0
                  document.getElementById('6f5').src=C0
                  document.getElementById('7f5').src=C0
                
                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4'    
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>);
        case 93:
                    document.getElementById('1d4').src=C4
                    document.getElementById('2d4').src=C4
                    document.getElementById('3d4').src=C4
                    document.getElementById('4d4').src=C4
                    document.getElementById('5d4').src=C4
                    document.getElementById('s5').src=C4
                    document.getElementById('1p5').src=C4
                    document.getElementById('2p5').src=C4
                    document.getElementById('3p5').src=C4
                    document.getElementById('s6').src=C4
                    document.getElementById('1f4').src=C4
                    document.getElementById('2f4').src=C4
                    document.getElementById('3f4').src=C4
                    document.getElementById('4f4').src=C4
                    document.getElementById('5f4').src=C4
                    document.getElementById('6f4').src=C4
                    document.getElementById('7f4').src=C4
                  
                    document.getElementById('1d5').src=C4
                    document.getElementById('2d5').src=C4
                    document.getElementById('3d5').src=C4
                    document.getElementById('4d5').src=C4
                    document.getElementById('5d5').src=C4
    
                    document.getElementById('1p6').src=C4
                    document.getElementById('2p6').src=C4
                    document.getElementById('3p6').src=C4
                    document.getElementById('s7').src=C4
    
                    document.getElementById('1f5').src=C1
                    document.getElementById('2f5').src=C1
                    document.getElementById('3f5').src=C1
                    document.getElementById('4f5').src=C1
                    document.getElementById('5f5').src=C1
                    document.getElementById('6f5').src=C0
                    document.getElementById('7f5').src=C0
                  
                    config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f5'    
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);
        case 94:
                      document.getElementById('1d4').src=C4
                      document.getElementById('2d4').src=C4
                      document.getElementById('3d4').src=C4
                      document.getElementById('4d4').src=C4
                      document.getElementById('5d4').src=C4
                      document.getElementById('s5').src=C4
                      document.getElementById('1p5').src=C4
                      document.getElementById('2p5').src=C4
                      document.getElementById('3p5').src=C4
                      document.getElementById('s6').src=C4
                      document.getElementById('1f4').src=C4
                      document.getElementById('2f4').src=C4
                      document.getElementById('3f4').src=C4
                      document.getElementById('4f4').src=C4
                      document.getElementById('5f4').src=C4
                      document.getElementById('6f4').src=C4
                      document.getElementById('7f4').src=C4
                    
                      document.getElementById('1d5').src=C4
                      document.getElementById('2d5').src=C4
                      document.getElementById('3d5').src=C4
                      document.getElementById('4d5').src=C4
                      document.getElementById('5d5').src=C4
      
                      document.getElementById('1p6').src=C4
                      document.getElementById('2p6').src=C4
                      document.getElementById('3p6').src=C4
                      document.getElementById('s7').src=C4
      
                      document.getElementById('1f5').src=C1
                      document.getElementById('2f5').src=C1
                      document.getElementById('3f5').src=C1
                      document.getElementById('4f5').src=C1
                      document.getElementById('5f5').src=C1
                      document.getElementById('6f5').src=C1
                      document.getElementById('7f5').src=C0
                    
                      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6'    
                      document.getElementById('config').innerHTML=config;
                      return(<div></div>);
        case 95:
                        document.getElementById('1d4').src=C4
                        document.getElementById('2d4').src=C4
                        document.getElementById('3d4').src=C4
                        document.getElementById('4d4').src=C4
                        document.getElementById('5d4').src=C4
                        document.getElementById('s5').src=C4
                        document.getElementById('1p5').src=C4
                        document.getElementById('2p5').src=C4
                        document.getElementById('3p5').src=C4
                        document.getElementById('s6').src=C4
                        document.getElementById('1f4').src=C4
                        document.getElementById('2f4').src=C4
                        document.getElementById('3f4').src=C4
                        document.getElementById('4f4').src=C4
                        document.getElementById('5f4').src=C4
                        document.getElementById('6f4').src=C4
                        document.getElementById('7f4').src=C4
                      
                        document.getElementById('1d5').src=C4
                        document.getElementById('2d5').src=C4
                        document.getElementById('3d5').src=C4
                        document.getElementById('4d5').src=C4
                        document.getElementById('5d5').src=C4
        
                        document.getElementById('1p6').src=C4
                        document.getElementById('2p6').src=C4
                        document.getElementById('3p6').src=C4
                        document.getElementById('s7').src=C4
        
                        document.getElementById('1f5').src=C1
                        document.getElementById('2f5').src=C1
                        document.getElementById('3f5').src=C1
                        document.getElementById('4f5').src=C1
                        document.getElementById('5f5').src=C1
                        document.getElementById('6f5').src=C1
                        document.getElementById('7f5').src=C1
                      
                        config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7'    
                        document.getElementById('config').innerHTML=config;
                        return(<div></div>);
            case 96:
                          document.getElementById('1d4').src=C4
                          document.getElementById('2d4').src=C4
                          document.getElementById('3d4').src=C4
                          document.getElementById('4d4').src=C4
                          document.getElementById('5d4').src=C4
                          document.getElementById('s5').src=C4
                          document.getElementById('1p5').src=C4
                          document.getElementById('2p5').src=C4
                          document.getElementById('3p5').src=C4
                          document.getElementById('s6').src=C4
                          document.getElementById('1f4').src=C4
                          document.getElementById('2f4').src=C4
                          document.getElementById('3f4').src=C4
                          document.getElementById('4f4').src=C4
                          document.getElementById('5f4').src=C4
                          document.getElementById('6f4').src=C4
                          document.getElementById('7f4').src=C4
                        
                          document.getElementById('1d5').src=C4
                          document.getElementById('2d5').src=C4
                          document.getElementById('3d5').src=C4
                          document.getElementById('4d5').src=C4
                          document.getElementById('5d5').src=C4
          
                          document.getElementById('1p6').src=C4
                          document.getElementById('2p6').src=C4
                          document.getElementById('3p6').src=C4
                          document.getElementById('s7').src=C4
          
                          document.getElementById('1f5').src=C4
                          document.getElementById('2f5').src=C1
                          document.getElementById('3f5').src=C1
                          document.getElementById('4f5').src=C1
                          document.getElementById('5f5').src=C1
                          document.getElementById('6f5').src=C1
                          document.getElementById('7f5').src=C1
                        
                          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f8'    
                          document.getElementById('config').innerHTML=config;
                          return(<div></div>);
          case 97:
                            document.getElementById('1d4').src=C4
                            document.getElementById('2d4').src=C4
                            document.getElementById('3d4').src=C4
                            document.getElementById('4d4').src=C4
                            document.getElementById('5d4').src=C4
                            document.getElementById('s5').src=C4
                            document.getElementById('1p5').src=C4
                            document.getElementById('2p5').src=C4
                            document.getElementById('3p5').src=C4
                            document.getElementById('s6').src=C4
                            document.getElementById('1f4').src=C4
                            document.getElementById('2f4').src=C4
                            document.getElementById('3f4').src=C4
                            document.getElementById('4f4').src=C4
                            document.getElementById('5f4').src=C4
                            document.getElementById('6f4').src=C4
                            document.getElementById('7f4').src=C4
                          
                            document.getElementById('1d5').src=C4
                            document.getElementById('2d5').src=C4
                            document.getElementById('3d5').src=C4
                            document.getElementById('4d5').src=C4
                            document.getElementById('5d5').src=C4
            
                            document.getElementById('1p6').src=C4
                            document.getElementById('2p6').src=C4
                            document.getElementById('3p6').src=C4
                            document.getElementById('s7').src=C4
            
                            document.getElementById('1f5').src=C4
                            document.getElementById('2f5').src=C4
                            document.getElementById('3f5').src=C1
                            document.getElementById('4f5').src=C1
                            document.getElementById('5f5').src=C1
                            document.getElementById('6f5').src=C1
                            document.getElementById('7f5').src=C1
                          
                            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9'    
                            document.getElementById('config').innerHTML=config;
                            return(<div></div>);
            case 98:
                              document.getElementById('1d4').src=C4
                              document.getElementById('2d4').src=C4
                              document.getElementById('3d4').src=C4
                              document.getElementById('4d4').src=C4
                              document.getElementById('5d4').src=C4
                              document.getElementById('s5').src=C4
                              document.getElementById('1p5').src=C4
                              document.getElementById('2p5').src=C4
                              document.getElementById('3p5').src=C4
                              document.getElementById('s6').src=C4
                              document.getElementById('1f4').src=C4
                              document.getElementById('2f4').src=C4
                              document.getElementById('3f4').src=C4
                              document.getElementById('4f4').src=C4
                              document.getElementById('5f4').src=C4
                              document.getElementById('6f4').src=C4
                              document.getElementById('7f4').src=C4
                            
                              document.getElementById('1d5').src=C4
                              document.getElementById('2d5').src=C4
                              document.getElementById('3d5').src=C4
                              document.getElementById('4d5').src=C4
                              document.getElementById('5d5').src=C4
              
                              document.getElementById('1p6').src=C4
                              document.getElementById('2p6').src=C4
                              document.getElementById('3p6').src=C4
                              document.getElementById('s7').src=C4
              
                              document.getElementById('1f5').src=C4
                              document.getElementById('2f5').src=C4
                              document.getElementById('3f5').src=C4
                              document.getElementById('4f5').src=C1
                              document.getElementById('5f5').src=C1
                              document.getElementById('6f5').src=C1
                              document.getElementById('7f5').src=C1
                            
                              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10'    
                              document.getElementById('config').innerHTML=config;
                              return(<div></div>);
            case 99:
                                document.getElementById('1d4').src=C4
                                document.getElementById('2d4').src=C4
                                document.getElementById('3d4').src=C4
                                document.getElementById('4d4').src=C4
                                document.getElementById('5d4').src=C4
                                document.getElementById('s5').src=C4
                                document.getElementById('1p5').src=C4
                                document.getElementById('2p5').src=C4
                                document.getElementById('3p5').src=C4
                                document.getElementById('s6').src=C4
                                document.getElementById('1f4').src=C4
                                document.getElementById('2f4').src=C4
                                document.getElementById('3f4').src=C4
                                document.getElementById('4f4').src=C4
                                document.getElementById('5f4').src=C4
                                document.getElementById('6f4').src=C4
                                document.getElementById('7f4').src=C4
                              
                                document.getElementById('1d5').src=C4
                                document.getElementById('2d5').src=C4
                                document.getElementById('3d5').src=C4
                                document.getElementById('4d5').src=C4
                                document.getElementById('5d5').src=C4
                
                                document.getElementById('1p6').src=C4
                                document.getElementById('2p6').src=C4
                                document.getElementById('3p6').src=C4
                                document.getElementById('s7').src=C4
                
                                document.getElementById('1f5').src=C4
                                document.getElementById('2f5').src=C4
                                document.getElementById('3f5').src=C4
                                document.getElementById('4f5').src=C4
                                document.getElementById('5f5').src=C1
                                document.getElementById('6f5').src=C1
                                document.getElementById('7f5').src=C1
                              
                                config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11'    
                                document.getElementById('config').innerHTML=config;
                                return(<div></div>);
          case 100:
                                  document.getElementById('1d4').src=C4
                                  document.getElementById('2d4').src=C4
                                  document.getElementById('3d4').src=C4
                                  document.getElementById('4d4').src=C4
                                  document.getElementById('5d4').src=C4
                                  document.getElementById('s5').src=C4
                                  document.getElementById('1p5').src=C4
                                  document.getElementById('2p5').src=C4
                                  document.getElementById('3p5').src=C4
                                  document.getElementById('s6').src=C4
                                  document.getElementById('1f4').src=C4
                                  document.getElementById('2f4').src=C4
                                  document.getElementById('3f4').src=C4
                                  document.getElementById('4f4').src=C4
                                  document.getElementById('5f4').src=C4
                                  document.getElementById('6f4').src=C4
                                  document.getElementById('7f4').src=C4
                                
                                  document.getElementById('1d5').src=C4
                                  document.getElementById('2d5').src=C4
                                  document.getElementById('3d5').src=C4
                                  document.getElementById('4d5').src=C4
                                  document.getElementById('5d5').src=C4
                  
                                  document.getElementById('1p6').src=C4
                                  document.getElementById('2p6').src=C4
                                  document.getElementById('3p6').src=C4
                                  document.getElementById('s7').src=C4
                  
                                  document.getElementById('1f5').src=C4
                                  document.getElementById('2f5').src=C4
                                  document.getElementById('3f5').src=C4
                                  document.getElementById('4f5').src=C4
                                  document.getElementById('5f5').src=C4
                                  document.getElementById('6f5').src=C1
                                  document.getElementById('7f5').src=C1
                                
                                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12'    
                                  document.getElementById('config').innerHTML=config;
                                  return(<div></div>);
            case 101:
                                  document.getElementById('1d4').src=C4
                                  document.getElementById('2d4').src=C4
                                  document.getElementById('3d4').src=C4
                                  document.getElementById('4d4').src=C4
                                  document.getElementById('5d4').src=C4
                                  document.getElementById('s5').src=C4
                                  document.getElementById('1p5').src=C4
                                  document.getElementById('2p5').src=C4
                                  document.getElementById('3p5').src=C4
                                  document.getElementById('s6').src=C4
                                  document.getElementById('1f4').src=C4
                                  document.getElementById('2f4').src=C4
                                  document.getElementById('3f4').src=C4
                                  document.getElementById('4f4').src=C4
                                  document.getElementById('5f4').src=C4
                                  document.getElementById('6f4').src=C4
                                  document.getElementById('7f4').src=C4
                                
                                  document.getElementById('1d5').src=C4
                                  document.getElementById('2d5').src=C4
                                  document.getElementById('3d5').src=C4
                                  document.getElementById('4d5').src=C4
                                  document.getElementById('5d5').src=C4
                  
                                  document.getElementById('1p6').src=C4
                                  document.getElementById('2p6').src=C4
                                  document.getElementById('3p6').src=C4
                                  document.getElementById('s7').src=C4
                  
                                  document.getElementById('1f5').src=C4
                                  document.getElementById('2f5').src=C4
                                  document.getElementById('3f5').src=C4
                                  document.getElementById('4f5').src=C4
                                  document.getElementById('5f5').src=C4
                                  document.getElementById('6f5').src=C4
                                  document.getElementById('7f5').src=C1
                                
                                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13'    
                                  document.getElementById('config').innerHTML=config;
                                  return(<div></div>);
            case 102:
                                  document.getElementById('1d4').src=C4
                                  document.getElementById('2d4').src=C4
                                  document.getElementById('3d4').src=C4
                                  document.getElementById('4d4').src=C4
                                  document.getElementById('5d4').src=C4
                                  document.getElementById('s5').src=C4
                                  document.getElementById('1p5').src=C4
                                  document.getElementById('2p5').src=C4
                                  document.getElementById('3p5').src=C4
                                  document.getElementById('s6').src=C4
                                  document.getElementById('1f4').src=C4
                                  document.getElementById('2f4').src=C4
                                  document.getElementById('3f4').src=C4
                                  document.getElementById('4f4').src=C4
                                  document.getElementById('5f4').src=C4
                                  document.getElementById('6f4').src=C4
                                  document.getElementById('7f4').src=C4
                                
                                  document.getElementById('1d5').src=C4
                                  document.getElementById('2d5').src=C4
                                  document.getElementById('3d5').src=C4
                                  document.getElementById('4d5').src=C4
                                  document.getElementById('5d5').src=C4
                  
                                  document.getElementById('1p6').src=C4
                                  document.getElementById('2p6').src=C4
                                  document.getElementById('3p6').src=C4
                                  document.getElementById('s7').src=C4
                  
                                  document.getElementById('1f5').src=C4
                                  document.getElementById('2f5').src=C4
                                  document.getElementById('3f5').src=C4
                                  document.getElementById('4f5').src=C4
                                  document.getElementById('5f5').src=C4
                                  document.getElementById('6f5').src=C4
                                  document.getElementById('7f5').src=C4
                                
                                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14'    
                                  document.getElementById('config').innerHTML=config;
                                  return(<div></div>);
  }


}

function Atomico6(){
  document.getElementById('s1').src=C4
  document.getElementById('s2').src=C4  
  document.getElementById('1p2').src=C4
  document.getElementById('2p2').src=C4
  document.getElementById('3p2').src=C4
  document.getElementById('s3').src=C4  
  document.getElementById('1p3').src=C4
  document.getElementById('2p3').src=C4
  document.getElementById('3p3').src=C4
  document.getElementById('1d3').src=C4
  document.getElementById('2d3').src=C4
  document.getElementById('3d3').src=C4
  document.getElementById('4d3').src=C4
  document.getElementById('5d3').src=C4
  document.getElementById('s4').src=C4  
  document.getElementById('1p4').src=C4
  document.getElementById('2p4').src=C4
  document.getElementById('3p4').src=C4
  document.getElementById('s5').src=C4  
  document.getElementById('1d4').src=C4
  document.getElementById('2d4').src=C4
  document.getElementById('3d4').src=C4
  document.getElementById('4d4').src=C4
  document.getElementById('5d4').src=C4
  document.getElementById('1p5').src=C4
  document.getElementById('2p5').src=C4
  document.getElementById('3p5').src=C4

  document.getElementById('1f4').src=C0
  document.getElementById('2f4').src=C0
  document.getElementById('3f4').src=C0
  document.getElementById('4f4').src=C0
  document.getElementById('5f4').src=C0
  document.getElementById('6f4').src=C0
  document.getElementById('7f4').src=C0

  document.getElementById('1d5').src=C0
  document.getElementById('2d5').src=C0
  document.getElementById('3d5').src=C0
  document.getElementById('4d5').src=C0
  document.getElementById('5d5').src=C0

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0
  
  document.getElementById('s6').src=C0  

  document.getElementById('1p6').src=C0
  document.getElementById('2p6').src=C0
  document.getElementById('3p6').src=C0

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0

  switch (Atomico){

    case 55:
          document.getElementById('s6').src=C1
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 56:
          document.getElementById('s6').src=C4
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);

    case 81:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
        
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4

          document.getElementById('1p6').src=C1
          document.getElementById('2p6').src=C0
          document.getElementById('3p6').src=C0
          
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 82:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
          
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
  
          document.getElementById('1p6').src=C1
          document.getElementById('2p6').src=C1
          document.getElementById('3p6').src=C0
            
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);

    case 83:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C1
          document.getElementById('2p6').src=C1
          document.getElementById('3p6').src=C1
              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 84:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C4
          document.getElementById('2p6').src=C1
          document.getElementById('3p6').src=C1
              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 85:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C4
          document.getElementById('2p6').src=C4
          document.getElementById('3p6').src=C1
              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 86:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C4
          document.getElementById('2p6').src=C4
          document.getElementById('3p6').src=C4
              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 103:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C4
          document.getElementById('2p6').src=C4
          document.getElementById('3p6').src=C4
          document.getElementById('s7').src=C4

          document.getElementById('1f5').src=C4
          document.getElementById('2f5').src=C4
          document.getElementById('3f5').src=C4
          document.getElementById('4f5').src=C4
          document.getElementById('5f5').src=C4
          document.getElementById('6f5').src=C4
          document.getElementById('7f5').src=C4

          document.getElementById('1d6').src=C1
          document.getElementById('2d6').src=C0
          document.getElementById('3d6').src=C0
          document.getElementById('4d6').src=C0
          document.getElementById('5d6').src=C0

              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 104:
          document.getElementById('s6').src=C4
          document.getElementById('1f4').src=C4
          document.getElementById('2f4').src=C4
          document.getElementById('3f4').src=C4
          document.getElementById('4f4').src=C4
          document.getElementById('5f4').src=C4
          document.getElementById('6f4').src=C4
          document.getElementById('7f4').src=C4
            
          document.getElementById('1d5').src=C4
          document.getElementById('2d5').src=C4
          document.getElementById('3d5').src=C4
          document.getElementById('4d5').src=C4
          document.getElementById('5d5').src=C4
    
          document.getElementById('1p6').src=C4
          document.getElementById('2p6').src=C4
          document.getElementById('3p6').src=C4
          document.getElementById('s7').src=C4

          document.getElementById('1f5').src=C4
          document.getElementById('2f5').src=C4
          document.getElementById('3f5').src=C4
          document.getElementById('4f5').src=C4
          document.getElementById('5f5').src=C4
          document.getElementById('6f5').src=C4
          document.getElementById('7f5').src=C4

          document.getElementById('1d6').src=C1
          document.getElementById('2d6').src=C1
          document.getElementById('3d6').src=C0
          document.getElementById('4d6').src=C0
          document.getElementById('5d6').src=C0

              
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d2'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 105:
            document.getElementById('s6').src=C4
            document.getElementById('1f4').src=C4
            document.getElementById('2f4').src=C4
            document.getElementById('3f4').src=C4
            document.getElementById('4f4').src=C4
            document.getElementById('5f4').src=C4
            document.getElementById('6f4').src=C4
            document.getElementById('7f4').src=C4
              
            document.getElementById('1d5').src=C4
            document.getElementById('2d5').src=C4
            document.getElementById('3d5').src=C4
            document.getElementById('4d5').src=C4
            document.getElementById('5d5').src=C4
      
            document.getElementById('1p6').src=C4
            document.getElementById('2p6').src=C4
            document.getElementById('3p6').src=C4
            document.getElementById('s7').src=C4
  
            document.getElementById('1f5').src=C4
            document.getElementById('2f5').src=C4
            document.getElementById('3f5').src=C4
            document.getElementById('4f5').src=C4
            document.getElementById('5f5').src=C4
            document.getElementById('6f5').src=C4
            document.getElementById('7f5').src=C4
  
            document.getElementById('1d6').src=C1
            document.getElementById('2d6').src=C1
            document.getElementById('3d6').src=C1
            document.getElementById('4d6').src=C0
            document.getElementById('5d6').src=C0
  
                
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d3'
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
      case 106:
              document.getElementById('s6').src=C4
              document.getElementById('1f4').src=C4
              document.getElementById('2f4').src=C4
              document.getElementById('3f4').src=C4
              document.getElementById('4f4').src=C4
              document.getElementById('5f4').src=C4
              document.getElementById('6f4').src=C4
              document.getElementById('7f4').src=C4
                
              document.getElementById('1d5').src=C4
              document.getElementById('2d5').src=C4
              document.getElementById('3d5').src=C4
              document.getElementById('4d5').src=C4
              document.getElementById('5d5').src=C4
        
              document.getElementById('1p6').src=C4
              document.getElementById('2p6').src=C4
              document.getElementById('3p6').src=C4
              document.getElementById('s7').src=C4
    
              document.getElementById('1f5').src=C4
              document.getElementById('2f5').src=C4
              document.getElementById('3f5').src=C4
              document.getElementById('4f5').src=C4
              document.getElementById('5f5').src=C4
              document.getElementById('6f5').src=C4
              document.getElementById('7f5').src=C4
    
              document.getElementById('1d6').src=C1
              document.getElementById('2d6').src=C1
              document.getElementById('3d6').src=C1
              document.getElementById('4d6').src=C1
              document.getElementById('5d6').src=C0
    
                  
              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d4'
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
        case 107:
                document.getElementById('s6').src=C4
                document.getElementById('1f4').src=C4
                document.getElementById('2f4').src=C4
                document.getElementById('3f4').src=C4
                document.getElementById('4f4').src=C4
                document.getElementById('5f4').src=C4
                document.getElementById('6f4').src=C4
                document.getElementById('7f4').src=C4
                  
                document.getElementById('1d5').src=C4
                document.getElementById('2d5').src=C4
                document.getElementById('3d5').src=C4
                document.getElementById('4d5').src=C4
                document.getElementById('5d5').src=C4
          
                document.getElementById('1p6').src=C4
                document.getElementById('2p6').src=C4
                document.getElementById('3p6').src=C4
                document.getElementById('s7').src=C4
      
                document.getElementById('1f5').src=C4
                document.getElementById('2f5').src=C4
                document.getElementById('3f5').src=C4
                document.getElementById('4f5').src=C4
                document.getElementById('5f5').src=C4
                document.getElementById('6f5').src=C4
                document.getElementById('7f5').src=C4
      
                document.getElementById('1d6').src=C1
                document.getElementById('2d6').src=C1
                document.getElementById('3d6').src=C1
                document.getElementById('4d6').src=C1
                document.getElementById('5d6').src=C1
      
                    
                config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d5'
                document.getElementById('config').innerHTML=config;
                return(<div></div>);
          case 108:
                  document.getElementById('s6').src=C4
                  document.getElementById('1f4').src=C4
                  document.getElementById('2f4').src=C4
                  document.getElementById('3f4').src=C4
                  document.getElementById('4f4').src=C4
                  document.getElementById('5f4').src=C4
                  document.getElementById('6f4').src=C4
                  document.getElementById('7f4').src=C4
                    
                  document.getElementById('1d5').src=C4
                  document.getElementById('2d5').src=C4
                  document.getElementById('3d5').src=C4
                  document.getElementById('4d5').src=C4
                  document.getElementById('5d5').src=C4
            
                  document.getElementById('1p6').src=C4
                  document.getElementById('2p6').src=C4
                  document.getElementById('3p6').src=C4
                  document.getElementById('s7').src=C4
        
                  document.getElementById('1f5').src=C4
                  document.getElementById('2f5').src=C4
                  document.getElementById('3f5').src=C4
                  document.getElementById('4f5').src=C4
                  document.getElementById('5f5').src=C4
                  document.getElementById('6f5').src=C4
                  document.getElementById('7f5').src=C4
        
                  document.getElementById('1d6').src=C4
                  document.getElementById('2d6').src=C1
                  document.getElementById('3d6').src=C1
                  document.getElementById('4d6').src=C1
                  document.getElementById('5d6').src=C1
        
                      
                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d6'
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>);
          case 109:
                  document.getElementById('s6').src=C4
                  document.getElementById('1f4').src=C4
                  document.getElementById('2f4').src=C4
                  document.getElementById('3f4').src=C4
                  document.getElementById('4f4').src=C4
                  document.getElementById('5f4').src=C4
                  document.getElementById('6f4').src=C4
                  document.getElementById('7f4').src=C4
                    
                  document.getElementById('1d5').src=C4
                  document.getElementById('2d5').src=C4
                  document.getElementById('3d5').src=C4
                  document.getElementById('4d5').src=C4
                  document.getElementById('5d5').src=C4
            
                  document.getElementById('1p6').src=C4
                  document.getElementById('2p6').src=C4
                  document.getElementById('3p6').src=C4
                  document.getElementById('s7').src=C4
        
                  document.getElementById('1f5').src=C4
                  document.getElementById('2f5').src=C4
                  document.getElementById('3f5').src=C4
                  document.getElementById('4f5').src=C4
                  document.getElementById('5f5').src=C4
                  document.getElementById('6f5').src=C4
                  document.getElementById('7f5').src=C4
        
                  document.getElementById('1d6').src=C4
                  document.getElementById('2d6').src=C4
                  document.getElementById('3d6').src=C1
                  document.getElementById('4d6').src=C1
                  document.getElementById('5d6').src=C1
        
                      
                  config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d7'
                  document.getElementById('config').innerHTML=config;
                  return(<div></div>);
          case 110:
                    document.getElementById('s6').src=C4
                    document.getElementById('1f4').src=C4
                    document.getElementById('2f4').src=C4
                    document.getElementById('3f4').src=C4
                    document.getElementById('4f4').src=C4
                    document.getElementById('5f4').src=C4
                    document.getElementById('6f4').src=C4
                    document.getElementById('7f4').src=C4
                      
                    document.getElementById('1d5').src=C4
                    document.getElementById('2d5').src=C4
                    document.getElementById('3d5').src=C4
                    document.getElementById('4d5').src=C4
                    document.getElementById('5d5').src=C4
              
                    document.getElementById('1p6').src=C4
                    document.getElementById('2p6').src=C4
                    document.getElementById('3p6').src=C4
                    document.getElementById('s7').src=C4
          
                    document.getElementById('1f5').src=C4
                    document.getElementById('2f5').src=C4
                    document.getElementById('3f5').src=C4
                    document.getElementById('4f5').src=C4
                    document.getElementById('5f5').src=C4
                    document.getElementById('6f5').src=C4
                    document.getElementById('7f5').src=C4
          
                    document.getElementById('1d6').src=C4
                    document.getElementById('2d6').src=C4
                    document.getElementById('3d6').src=C4
                    document.getElementById('4d6').src=C1
                    document.getElementById('5d6').src=C1
          
                        
                    config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d8'
                    document.getElementById('config').innerHTML=config;
                    return(<div></div>);
            case 111:
                      document.getElementById('s6').src=C4
                      document.getElementById('1f4').src=C4
                      document.getElementById('2f4').src=C4
                      document.getElementById('3f4').src=C4
                      document.getElementById('4f4').src=C4
                      document.getElementById('5f4').src=C4
                      document.getElementById('6f4').src=C4
                      document.getElementById('7f4').src=C4
                        
                      document.getElementById('1d5').src=C4
                      document.getElementById('2d5').src=C4
                      document.getElementById('3d5').src=C4
                      document.getElementById('4d5').src=C4
                      document.getElementById('5d5').src=C4
                
                      document.getElementById('1p6').src=C4
                      document.getElementById('2p6').src=C4
                      document.getElementById('3p6').src=C4
                      document.getElementById('s7').src=C4
            
                      document.getElementById('1f5').src=C4
                      document.getElementById('2f5').src=C4
                      document.getElementById('3f5').src=C4
                      document.getElementById('4f5').src=C4
                      document.getElementById('5f5').src=C4
                      document.getElementById('6f5').src=C4
                      document.getElementById('7f5').src=C4
            
                      document.getElementById('1d6').src=C4
                      document.getElementById('2d6').src=C4
                      document.getElementById('3d6').src=C4
                      document.getElementById('4d6').src=C4
                      document.getElementById('5d6').src=C1
            
                          
                      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d9'
                      document.getElementById('config').innerHTML=config;
                      return(<div></div>);
            case 112:
                      document.getElementById('s6').src=C4
                      document.getElementById('1f4').src=C4
                      document.getElementById('2f4').src=C4
                      document.getElementById('3f4').src=C4
                      document.getElementById('4f4').src=C4
                      document.getElementById('5f4').src=C4
                      document.getElementById('6f4').src=C4
                      document.getElementById('7f4').src=C4
                        
                      document.getElementById('1d5').src=C4
                      document.getElementById('2d5').src=C4
                      document.getElementById('3d5').src=C4
                      document.getElementById('4d5').src=C4
                      document.getElementById('5d5').src=C4
                
                      document.getElementById('1p6').src=C4
                      document.getElementById('2p6').src=C4
                      document.getElementById('3p6').src=C4
                      document.getElementById('s7').src=C4
            
                      document.getElementById('1f5').src=C4
                      document.getElementById('2f5').src=C4
                      document.getElementById('3f5').src=C4
                      document.getElementById('4f5').src=C4
                      document.getElementById('5f5').src=C4
                      document.getElementById('6f5').src=C4
                      document.getElementById('7f5').src=C4
            
                      document.getElementById('1d6').src=C4
                      document.getElementById('2d6').src=C4
                      document.getElementById('3d6').src=C4
                      document.getElementById('4d6').src=C4
                      document.getElementById('5d6').src=C4
            
                          
                      config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7d2 5f14 6d10'
                      document.getElementById('config').innerHTML=config;
                      return(<div></div>);
    
  
  }
}
function Atomico7(){
  document.getElementById('s1').src=C4
          
  document.getElementById('s2').src=C4  

  document.getElementById('1p2').src=C4
  document.getElementById('2p2').src=C4
  document.getElementById('3p2').src=C4

  document.getElementById('s3').src=C4  

  document.getElementById('1p3').src=C4
  document.getElementById('2p3').src=C4
  document.getElementById('3p3').src=C4

  document.getElementById('1d3').src=C4
  document.getElementById('2d3').src=C4
  document.getElementById('3d3').src=C4
  document.getElementById('4d3').src=C4
  document.getElementById('5d3').src=C4

  document.getElementById('s4').src=C4  

  document.getElementById('1p4').src=C4
  document.getElementById('2p4').src=C4
  document.getElementById('3p4').src=C4

  document.getElementById('1d4').src=C4
  document.getElementById('2d4').src=C4
  document.getElementById('3d4').src=C4
  document.getElementById('4d4').src=C4
  document.getElementById('5d4').src=C4

  document.getElementById('1f4').src=C4
  document.getElementById('2f4').src=C4
  document.getElementById('3f4').src=C4
  document.getElementById('4f4').src=C4
  document.getElementById('5f4').src=C4
  document.getElementById('6f4').src=C4
  document.getElementById('7f4').src=C4

  document.getElementById('s5').src=C4  

  document.getElementById('1p5').src=C4
  document.getElementById('2p5').src=C4
  document.getElementById('3p5').src=C4

  document.getElementById('1d5').src=C4
  document.getElementById('2d5').src=C4
  document.getElementById('3d5').src=C4
  document.getElementById('4d5').src=C4
  document.getElementById('5d5').src=C4

  document.getElementById('1f5').src=C0
  document.getElementById('2f5').src=C0
  document.getElementById('3f5').src=C0
  document.getElementById('4f5').src=C0
  document.getElementById('5f5').src=C0
  document.getElementById('6f5').src=C0
  document.getElementById('7f5').src=C0

  document.getElementById('s6').src=C4  

  document.getElementById('1p6').src=C4
  document.getElementById('2p6').src=C4
  document.getElementById('3p6').src=C4

  document.getElementById('1d6').src=C0
  document.getElementById('2d6').src=C0
  document.getElementById('3d6').src=C0
  document.getElementById('4d6').src=C0
  document.getElementById('5d6').src=C0

  document.getElementById('s7').src=C0
  document.getElementById('1p7').src=C0
  document.getElementById('2p7').src=C0
  document.getElementById('3p7').src=C0  
  switch (Atomico){

    case 87:
          document.getElementById('s7').src=C1
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    case 88:
          document.getElementById('s7').src=C4
          config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1'
          document.getElementById('config').innerHTML=config;
          return(<div></div>);
    
    case 113:
            document.getElementById('1f5').src=C4
            document.getElementById('2f5').src=C4
            document.getElementById('3f5').src=C4
            document.getElementById('4f5').src=C4
            document.getElementById('5f5').src=C4
            document.getElementById('6f5').src=C4
            document.getElementById('7f5').src=C4
            document.getElementById('1d6').src=C4
            document.getElementById('2d6').src=C4
            document.getElementById('3d6').src=C4
            document.getElementById('4d6').src=C4
            document.getElementById('5d6').src=C4
            document.getElementById('s7').src=C4 
            document.getElementById('1p7').src=C1
            document.getElementById('2p7').src=C0
            document.getElementById('3p7').src=C0

            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1'
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
    case 114:
            document.getElementById('1f5').src=C4
            document.getElementById('2f5').src=C4
            document.getElementById('3f5').src=C4
            document.getElementById('4f5').src=C4
            document.getElementById('5f5').src=C4
            document.getElementById('6f5').src=C4
            document.getElementById('7f5').src=C4
            document.getElementById('1d6').src=C4
            document.getElementById('2d6').src=C4
            document.getElementById('3d6').src=C4
            document.getElementById('4d6').src=C4
            document.getElementById('5d6').src=C4
            document.getElementById('s7').src=C4 
            document.getElementById('1p7').src=C1
            document.getElementById('2p7').src=C1
            document.getElementById('3p7').src=C0
    
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2'
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
    case 115:
            document.getElementById('1f5').src=C4
            document.getElementById('2f5').src=C4
            document.getElementById('3f5').src=C4
            document.getElementById('4f5').src=C4
            document.getElementById('5f5').src=C4
            document.getElementById('6f5').src=C4
            document.getElementById('7f5').src=C4
            document.getElementById('1d6').src=C4
            document.getElementById('2d6').src=C4
            document.getElementById('3d6').src=C4
            document.getElementById('4d6').src=C4
            document.getElementById('5d6').src=C4
            document.getElementById('s7').src=C4 
            document.getElementById('1p7').src=C1
            document.getElementById('2p7').src=C1
            document.getElementById('3p7').src=C1
    
            config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3'
            document.getElementById('config').innerHTML=config;
            return(<div></div>);
    case 116:
              document.getElementById('1f5').src=C4
              document.getElementById('2f5').src=C4
              document.getElementById('3f5').src=C4
              document.getElementById('4f5').src=C4
              document.getElementById('5f5').src=C4
              document.getElementById('6f5').src=C4
              document.getElementById('7f5').src=C4
              document.getElementById('1d6').src=C4
              document.getElementById('2d6').src=C4
              document.getElementById('3d6').src=C4
              document.getElementById('4d6').src=C4
              document.getElementById('5d6').src=C4
              document.getElementById('s7').src=C4 
              document.getElementById('1p7').src=C4
              document.getElementById('2p7').src=C1
              document.getElementById('3p7').src=C1
    
              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4'
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
    case 117:
              document.getElementById('1f5').src=C4
              document.getElementById('2f5').src=C4
              document.getElementById('3f5').src=C4
              document.getElementById('4f5').src=C4
              document.getElementById('5f5').src=C4
              document.getElementById('6f5').src=C4
              document.getElementById('7f5').src=C4
              document.getElementById('1d6').src=C4
              document.getElementById('2d6').src=C4
              document.getElementById('3d6').src=C4
              document.getElementById('4d6').src=C4
              document.getElementById('5d6').src=C4
              document.getElementById('s7').src=C4 
              document.getElementById('1p7').src=C4
              document.getElementById('2p7').src=C4
              document.getElementById('3p7').src=C1
    
              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5'
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
    case 118:
              document.getElementById('1f5').src=C4
              document.getElementById('2f5').src=C4
              document.getElementById('3f5').src=C4
              document.getElementById('4f5').src=C4
              document.getElementById('5f5').src=C4
              document.getElementById('6f5').src=C4
              document.getElementById('7f5').src=C4
              document.getElementById('1d6').src=C4
              document.getElementById('2d6').src=C4
              document.getElementById('3d6').src=C4
              document.getElementById('4d6').src=C4
              document.getElementById('5d6').src=C4
              document.getElementById('s7').src=C4 
              document.getElementById('1p7').src=C4
              document.getElementById('2p7').src=C4
              document.getElementById('3p7').src=C4
    
              config='1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6'
              document.getElementById('config').innerHTML=config;
              return(<div></div>);
          
  }


}

}



function CambiaImagen(){
  document.getElementById('s1').src=C0
  if (document.getElementById('s1').src=={Imagen}) {
    
    return (
  
      <div>You are a Admin.</div>
      
    )
  } else  {
    document.getElementById('s1').src=C4
    return (
      <div>You are a Manager.</div>
    )
  }
  

  document.getElementById('s1').style.display = 'none';
  }


function Configuracion() {

  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (



<div  className="bg"  >

{/* <div  className="bg"  style={{backgroundImage: `url(${Fondo})` ,backgroundRepeat: 'no-repeat'}}<button onClick={()=>CambiaImagen()}>Ocultar</button><br/>*/}
<img className="Imagen" src={PEACE}  ></img>
<b><label > Periodo:  </label> 
<input type="number" min="0" max="7" name="Periodo"  ></input>
<label > &nbsp; &nbsp;&nbsp;Número Atómico: </label> </b>
<input type="number" min="0" max="115" name="Atomico"  ></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={()=>Casillas()}>Cargar</button> <br/><br/>
<div>

{/*PERIODO 7*/}
<Grid className= "123" align={'bottom' }>
   
   <Cell size='1/70' align='left'>
    <img  id= "N7" src= {N7} ></img>
    </Cell>
    <Cell size='1/70' align='left'>  
    </Cell>
   
    <Cell size='1/70' align='left'>
    <img  id= "s7" src= {C0} ></img>
    </Cell>
    <Cell className="casilla" size='1/70' align='left'>  
    </Cell>
    
    <Cell className="casilla" size='1/70' align='left'>
      <img id="1p7"src={C0} onClick={{}}></img>
    </Cell>
    <Cell className="casilla"size='1/70' align='left'>
      <img id="2p7"src={C0} onClick={{}}></img>
    </Cell>
    <Cell className="casilla"size='1/70' align='left'>
      <img id="3p7"src={C0} onClick={{}}></img>
    </Cell>
</Grid>

{/*PERIODO 6*/}
<Grid align={'bottom' }>
        <Cell size='1/70' align='left'>
          <img  id= "N6" src= {N6} ></img>
        </Cell>
        <Cell size='1/70' align='left'>  
        </Cell>
       
        <Cell className="casilla" size='1/70' align='left' style={{display:'inline'}} >
          <img id="s6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla" size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla" size='1/70' align='left'>
          <img id="1p6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2p6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3p6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>

        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1d6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2d6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3d6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4d6"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5d6"src={C0} onClick={{}}></img>
        </Cell>
        
        
</Grid>

{/*PERIODO 5*/}
<Grid align={'bottom' }>
        <Cell size='1/70' align='left'>
          <img  id= "N5" src= {N5} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
       
        <Cell className="casilla"size='1/70' align='left' style={{display:'inline'}} >
          <img id="s5"src={C0} onClick={{}}></img>
          
        </Cell>
        <Cell className="casilla" size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla" size='1/70' align='left'>
          <img id="1p5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2p5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3p5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1d5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2d5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3d5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4d5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5d5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>

        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="6f5"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="7f5"src={C0} onClick={{}}></img>
        </Cell>

</Grid>

{/*PERIODO 4*/}
<Grid align={'bottom' }>
        <Cell size='1/70' align='left'>
            <img  id= "N4" src= {N4} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"size='1/70' align='left' style={{display:'inline'}} >
            <img id="s4"src={C0} onClick={{}}></img>
        </Cell>
        
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="1p4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2p4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3p4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>

        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1d4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2d4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3d4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4d4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5d4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>

        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="6f4"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="7f4"src={C0} onClick={{}}></img>
        </Cell>

</Grid>

{/*PERIODO 3*/}
        <Grid align={'bottom' }>
        <Cell size='1/70' align='left'>
        <img  id= "N3" src= {N3} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        
        <Cell className="casilla"size='1/70' align='left' style={{display:'inline'}} >
          <img id="s3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="1p3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2p3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3p3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        <img id="1d3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2d3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="3d3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="4d3"src={C0} onClick={{}}></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="5d3"src={C0} onClick={{}}></img>
        </Cell>
        
        
</Grid>


{/*PERIODO 2*/}
<Grid align={'bottom' }>
        
        <Cell size='1/70' align='left'>
            <img  id= "N2" src= {N2} ></img>
        </Cell>
        
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        
        <Cell className="casilla"id="1s2"size='1/70' align='left'>
          <img id="s2"src={C0} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        <Cell className="casilla"id="p2"size='1/70' align='left'>  
        <img id="1p2" src={C0} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>
          <img id="2p2" src={C0}></img>
        </Cell>
        <Cell className="casilla">
          <img id="3p2"src={C0} ></img> 
          <b><label align="left"style={{fontStyle:'italic'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
          Configuración Electrónica:&nbsp; </label>
        <label id="config" align='left'></label></b>
        </Cell>
        
   
   
   
        
</Grid>


{/*PERIODO 1*/}
<Grid align={'bottom' }>

        <Cell size='1/70' align='left'>
          <img  id= "N1" src= {N1} ></img>
        </Cell>
        <Cell className="casilla"size='1/70' align='left'>  
        </Cell>
        
        <Cell className="casilla"size='1/70' align='left'>
          <img id="s1"src={C0} onClick={{}}></img>
        </Cell>
       
</Grid>



</div>          
        
      

      </div>
  );
}

export default Configuracion;
