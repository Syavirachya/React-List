import React, { useState } from 'react';
import ModalData from './Modal';
import Modal from 'react-modal'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Style'




function Input_Form() {
    const classes = useStyles();

    const input = {
        nama:"",
        tanggallahir: "", 
        jeniskelamin:"",   
        alamat: "",  
        phone: "",
        email:"", 
        job: "", 
    };

    
    const [
        { nama,
         tanggallahir,
         jeniskelamin, 
         alamat, 
         phone, 
         email,
         job}, setInput] = useState(input);


    const [file, setFile]= useState([]);
    
    const [data, setData] = useState([])

    const controlHand = e => {
        const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [name]: value }));
    };

    const fotoHand = e => {
        let src = setFile(URL.createObjectURL(e.target.files[0]))
        setInput(prevState => ({ ...prevState, name: src }));
    }

    
    const simpanHand = e => {
        e.preventDefault();
        setData([...data, { "id": data.length + 1, "nama": nama, "tanggallahir": tanggallahir, "jeniskelamin": jeniskelamin, "alamat":alamat, "phone":phone, "email":email,"job":job, 'file':file }]);
        setInput({nama:"", tanggallahir: "",jeniskelamin: "",alamat: "", phone:"",email:"",job:""
        })
        setFile([])
        setModalIsOpen(true)
       
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalStyle = {
    content:{
    position: 'absolute',
    width: '55%',
    inset: '40px',
    overflow: 'auto',
    outline: 'none',
    padding: '10px',
    marginLeft: '20%'
        }
    }

    const modalIsClose = (e) =>{
        e.preventDefault([])
            setModalIsOpen(false)
    }

    const resetHand = e => {
        e.preventDefault();
        setData([])
        setInput({
            nama:"",
            tanggallahir: "",
            jeniskelamin: "",
            alamat: "",
            phone:"",
            email:"",
            job:""
        })
        setFile([])
    }

    return(
        <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Form Kartu Nama
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                "Silahkan Isi Form dibawah ini Untuk Membuat Kartu Nama"
              </Typography>
              <div className={classes.heroButtons}>
              </div>
            </Container>
          </div>
        <>
        <div className="container d-flex justify-content-center mt-5">
            <form id='form' onSubmit={simpanHand} className='form'>
            <div className='card' id="form-input-card">
            <div className="card-body">
                    
                    

                    <div className="form-group">
                        <label for="nama" className='form-label'>Nama Lengkap</label>
                        <input type="text" className="form-control" name='nama' id="nama" placeholder="Masukan Nama Lengkap Anda" value={nama} onChange={controlHand}/>
                    </div>

          
                    <div className="form-group">
                        <label for="tanggallahir"className='form-label'>Tanggal Lahir</label>
                        <input type="date" className="form-control" name='tanggallahir' id="birthdate" value={tanggallahir} onChange={controlHand}/>
                    </div>

                    <div className="form-group">
                    <label className='form-label'>Jenis Kelamin</label>
                        <select className="form-select" name='jeniskelamin' id='jeniskelamin' value={jeniskelamin}  onChange={controlHand} >
                            <option id='pilih' value="none">Pilih Jenis Kelamin</option>
                            <option id='laki' value="Laki-laki">Laki-laki</option>
                            <option id='perempuan' value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    
                
                    <div className='form-group'>
                      <label className='form-label' for="alamat">Alamat Domisili</label>
                      <textarea className="form-control" name='alamat' id="alamat" placeholder="Masukan alamat domisili Anda" value={alamat} onChange={controlHand}/>
                    </div>

                    <div className="form-group">
                        <label  className='form-label' for="phone">No. Handphone</label>
                        <input type="number" className="form-control" name='phone' id="phone" placeholder="Masukan No. Handphone" value={phone} onChange={controlHand}/>
                    </div>

                    <div className="form-group">
                        <label for="email" className='form-label'>Email</label><br/>
                        <input type="text" className="form-control" name='email' id="email" placeholder="Masukan Email Anda" value={email} onChange={controlHand}/>
                    </div>                    


                    <div className="form-group">
                        <label className='form-label'>Job</label><br/>
                        <select className="form-select" name='job' id='job' value={job}  onChange={controlHand} >
                            <option id='qa' value="IT Quality Assurance">IT Quality Assurance</option>
                            <option id='pa' value="IT Product Analyst">IT Product Analyst</option>
                            <option id='ss' value="Support Specialist">Support Specialist</option>
                            <option id='sa' value="System Analyst">System Analyst</option>
                            <option id='fd' value="FullStack Developer">FullStack Developer</option>
                            <option id='ue' value="User Experience Designer">User Experience Designer</option>
                            <option id='ne' value="Network Engineer">Network Engineer</option>
                            <option id='da' value="Database Administrator">Database Administrator</option>
                            <option id='fd' value="Frontend Developer">Frontend Developer</option>
                            <option id='bd' value="Backend Developer">Backend Developer</option>
                        </select>
                        
                    </div>
            
                    <div className='form-group'>
                        <label className='form-label'>Upload Foto</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={fotoHand}
                        />
                    </div>
                 <div className='row'>
                        <div className='col'>
                            <button
                                className="button"
                                type="submit"
                                data-bs-toggle="modal" 
                                data-bs-target="#previewCard"
                            >
                            Submit
                            </button>
                        </div>
                        <div className='col'>
                            <button
                                className="button"
                                type="button"
                                onClick={resetHand}
                                 >
                            Reset
                            </button>
                        </div>
                    </div>
                <Modal
                
                    isOpen={modalIsOpen}
                    style={modalStyle}
                    ariaHideApp={false}
                    onRequestClose={() => setModalIsOpen(true)}
                 >
                <div className="modal" id="previewCard" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    
                    <ModalData data={data}  nama={nama}tanggallahir={tanggallahir} jeniskelamin={jeniskelamin}alamat={alamat} phone={phone}email={email} job={job}file={file}/>
                    <button
                        className='btn-close'
                        onClick={modalIsClose}>
                        Close
                        </button>
                </div>
           
                </div>
                </Modal>
                </div>
            
            </div>
        
               </form>
            
            </div>
            </>
            
         
      </main>
    </React.Fragment>
        
    )

}

export default Input_Form;