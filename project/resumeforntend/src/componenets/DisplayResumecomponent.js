import TitleComponent from "./Titlecomponent";
import { useStyles } from "../screens/Usercss";
import { Grid, Avatar } from "@mui/material";
import { serverURL, getData, postData } from "../services/FetchDjangoServices";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function DisplayResumeComponent(props) {
  //  alert(id)
  var classes = useStyles()
  const location = useLocation()
  console.log(location.state)
  const [detail, setDetail] = useState([])
 
  //  alert(JSON.stringify("send data",detail))
  useEffect(function () {
    fetchAllDetail()

  }, [])
  const fetchAllDetail = async (id)=> {
    var result = await postData('name_by_detail', { id: location.state.id })
    //  alert(JSON.stringify("data",result.data))
     console.log(result.data)
    setDetail(result.data)
  }

  return (<div className={classes.root}>
    <div className={classes.box}>
      <Grid item xs={12}>
        <TitleComponent name='Candidate Detail' />
      </Grid>

      <paper elevation={5} style={{ display: "flex", padding: "15px", width: '90%', height: 'auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <div style={{ display: 'flex', textDecoration: "underline", alignItems: "center", justifyContent: 'center', fontSize: 24, }}>Resume</div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              Name: {detail?.name}
            </div>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space between' }}  >

            <Grid item xs={12} >
              <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
                Gender: {detail?.gender}
              </div>
            </Grid>

            <Grid item xs={12}>
              <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
                Date of Birth: {detail?.dob}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
                Locality: {detail?.locality}
              </div>
            </Grid>
            <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              Pincode: {detail?.pin}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              State: {detail?.states}
            </div>
          </Grid>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column',alignItems:'flex-end', justifyContent: 'center' }}>
            <div style={{ fontFamily: "kanit", fontSize: 18 }}>Aplication No.{detail.id}</div>
            <div><Avatar alt="Remy Sharp"  sx={{ width: 200, height: 160 }} variant="rounded" src={`${serverURL}/${detail?.prfl_image}`}size={'large'} style={{border: '2px solid gray',marginRight:80,marginTop:10}} /></div>

          </Grid>


<Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              City: {detail?.city}
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              JobLocation: {detail?.job_city}
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              MobileNo: {detail?.mobileno}
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              Emailid: {detail?.email}
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ fontWeight: "bold", fontFamily: "kanit", fontSize: 18, }}>
              Attecthment:{<span style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'lighter' }}>DownloadFile</span>}
            </div>
          </Grid>
        </Grid>

      </paper>
    </div>
  </div>)
}