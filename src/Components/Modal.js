import React from 'react';
import './Input_Form.css';
import Card from './Card';

function Modal(props){
return(
<div id="previewCard">
                {props.data.map(data => (
                    <div className="data-card" key={data.id}>
                        <Card onClose={data.closeHand} key={data.length}
                         nama={data.nama} 
                         tanggallahir={data.tanggallahir} 
                         jeniskelamin={data.jeniskelamin} 
                         alamat={data.alamat} 
                         phone={data.phone} 
                         email={data.email} 
                         job={data.job}
                          file={data.file}/>
                    </div>
                    ))
                                
                }
                </div>
)
}
export default Modal;