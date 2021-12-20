import React from 'react';
import './Input_Form.css';



function Card(props){
    
    return (
        <>
                <div className='card'>
                       <div className='prevGroup'>
                       <div className="top-container"> <img src={props.file} className="profile-img" alt='foto' />
                        <div className="ml-3">
                          <h5 className="nama">{props.nama}</h5>
                          <span className="jk">{props.jeniskelamin}</span><br/><br/>
                          <span className="mail">{props.tanggallahir}</span>
        
                            </div>
                         </div>
                         <br/>
                         
                         
                         <div className="name-container">
                             
                             <div className="middle-container d-flex justify-content-between align-items-center mt-4 p-4">
                                
                                 <div className="d-flex flex-column"> 
                                     <span className="job">{props.job}</span> <br/>
                                     <span className="alamat">{props.alamat}</span> <br/>
                                     <span className="phonenumdetail">{props.phone}</span><br/>
                                     <span className="emaildetail">{props.email}</span>


                                 </div>
                             </div>

                             
                        
                            
                         </div>
                        
                       </div>
                       </div>
                    
               
      

        </>

    )
}

export default Card;