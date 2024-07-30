import { Grid, TextField, Avatar, Button, Paper } from "@mui/material";
import { useStyles } from "./Usercss";
import TitleComponent from "../componenets/Titlecomponent";
import { useState,useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { postData,getData } from "../services/FetchDjangoServices";
import Swal from "sweetalert2"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate,useLocation } from "react-router-dom";
import Divider from '@mui/material/Divider';
import DisplayResumeComponent from "../componenets/DisplayResumecomponent";

export default function UserInterface(props) {
  var classes = useStyles()
  const navigate=useNavigate();

  const [name, setName] = useState("")
  const [states, setStates] = useState('')
  const [city, setCity] = useState('')
  const [dob, setDob] = useState('1111-11-11')
  const [job_city, setJob_City] = useState([])
  const [gender, setGender] = useState('')
  const [locality, setlocality] = useState('')
  const [emailid, setEmailId] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [pincode, setPincode] = useState('')
  const [prfl_image, setPrfl_image] = useState({ url: '', bytes: '' })
  const [file, setFile] = useState({ url: '', bytes: '' })
  const [btn,setBtn]=useState(false)
  const[resumeList,setResumeList]=useState([])

  const handleCitys = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setJob_City([...job_city, value]);

    } else {
      setJob_City(job_city.filter((event) => event !== value));
    }
    console.log(job_city)
  };

  const handleChangeprfl = (event) => {
    setPrfl_image({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
  }
  const handleChangeFile = (event) => {
    setFile({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    setBtn(true)
    
  }

  const handleSubmit = async () => {
    var formData = new FormData()

    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('states', states);
    formData.append('city', city);
    formData.append('locality', locality);
    formData.append('job_city', job_city);
    formData.append('email', emailid);
    formData.append('mobileno', mobileno);
    formData.append('pin', pincode);
    formData.append('file_image', file.bytes);
    formData.append('prfl_image', prfl_image.bytes)
    var result = await postData('resume_submit', formData)
    console.log(formData)
    if (result.status) {
      Swal.fire({
        icon: 'success',
        title: result.message,
        showConfirmButton: false,
        timer: 5000
      })
       {fetchAllResume()} 
    }
    else {
      Swal.fire({

        icon: 'error',
        title: result.message,
        showConfirmButton: false,
        timer: 5000
      })
    }
  }

  useEffect(function(){
    fetchAllResume()
   
     },[])
     const fetchAllResume=async()=>{
      var result=await getData('resume_list')
      // alert(JSON.stringify(result.data))
      setResumeList(result.data)
         }

        
     function ListAllResume(){
      return resumeList.map((item,i)=>{
      
          return(  
      <div style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'flex-start', alignItems: 'flex-start', marginRight: '0' }}>
      <Button  variant="text" onClick={()=>navigate('/displayresume' ,{state: { id:item.id }})} >{i+1}: <div style={{textDecoration:"underline"}}>{item.name}</div></Button>
    
      <Divider component="li" style={{display:"flex", width:"100%", background:"black"}} />
    </div>) 
      })
      
     }

  return (<div className={classes.root}>
    <div className={classes.box}>

      <Grid item xs={12}>
        <TitleComponent name='Resume' />
      </Grid>
      <Grid container style={{ display: 'flex', justifyContent: "center", flexDirection: "row",width:"100%" }} >
        <Grid item xs={7.5} >
          <Paper elevation={5} style={{display: "flex", padding: "15px", width: '90%', height: 'auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={8} >
                <TextField size="small" value={name} fullWidth label='Name'
                  onChange={(event) => setName(event.target.value)} />
              </Grid>
              <Grid item xs={4} >
                <TextField size="small" type='date' value={dob} fullWidth label='Dob' onChange={(event) => setDob(event.target.value)} />
              </Grid>
              <Grid item xs={12} >
                <FormControl>
                  <FormLabel >Gender</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(event) => setGender(event.target.value)} />
                    <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(event) => setGender(event.target.value)} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={6} >
                <TextField size="small" value={locality} fullWidth label='Locality' onChange={(event) => setlocality(event.target.value)} />
              </Grid>
              <Grid item xs={6} >
                <TextField size="small" value={pincode} fullWidth label='Pincode' onChange={(event) => setPincode(event.target.value)} />
              </Grid>
              <Grid item xs={6} >
                <TextField size="small" value={states} fullWidth label='States' onChange={(event) => setStates(event.target.value)} />
              </Grid>
              <Grid item xs={6} >
                <TextField size="small" value={city} fullWidth label='City' onChange={(event) => setCity(event.target.value)} />
              </Grid>
              <Grid item xs={6} >
                <TextField size="small" value={emailid} fullWidth label='Emailid' onChange={(event) => setEmailId(event.target.value)} />
              </Grid>
              <Grid item xs={6} >
                <TextField size="small" value={mobileno} fullWidth label='Mobile no.' onChange={(event) => setMobileno(event.target.value)} />
              </Grid>

              <Grid item xs={12} >
                <FormLabel style={{ fontStyle: "bold", fontSize: 20 }}>Job Cities</FormLabel>
                <FormGroup onClick={handleCitys} value={job_city} size="small"  row>

                  <FormControlLabel control={<Checkbox checked={job_city.includes('Indore')} />} value={"Indore"} label="Indore" />
                  <FormControlLabel control={<Checkbox checked={job_city.includes('Pune')} />} value={"Pune"} label="Pune" />
                  <FormControlLabel control={<Checkbox checked={job_city.includes('Banglore')} />} value={"Banglore"} label="Banglore" />
                  <FormControlLabel control={<Checkbox checked={job_city.includes('Mumbai')} />} value={"Mumbai"} label="Mumbai" />
                </FormGroup>
              </Grid>
              {/* {job_city} */}

              <Grid item xs={6}>
                <Button
                  component="label"

                  variant="contained"

                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <input
                    size={"small"}
                    type="file"
                    hidden
                    accept="file/*"
                    multipule
                    onChange={handleChangeFile} />

                </Button>
              </Grid>

              <Grid item xs={6} style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                {btn ? <LoadingButton loading loadingIndicator="Loading…" variant="contained">
                  {/* Fetch data */}
                </LoadingButton>
                  : <></>
                }
              </Grid>

              <Grid item xs={6}>
                <Button size="small" variant="contained" component='label'>
                  Upload Profile Image
                  <input
                    size={"small"}
                    onChange={handleChangeprfl}
                    type="file"
                    hidden
                    accept="image/*"
                    multipule />
                </Button>

              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  alt=" Image"
                  src={prfl_image.url}
                  variant="rounded"
                  sx={{ width: 50, height: 50 }}
                />
              </Grid>
              <Grid item xs={12}  >
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '100' }}>
                  <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          
        </Grid>
        <Grid item xs={.4}>
        <div style={{display:"flex", width:".5%", height:"570px", background:"black"}}></div>
        </Grid>
        <Grid item xs={4.1} >
          <div style={{display: 'flex', flexDirection: 'column', textDecoration: "underline", alignItems:"center" }}>List of Resume</div>
               {ListAllResume()}
 


        </Grid>
       
      </Grid>
    </div>
  </div>)
}