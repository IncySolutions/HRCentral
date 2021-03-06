import * as React from 'react';
import styles from './resourcerequest.module.scss';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
      },
    },
  })
);

export default function ResoureRequest() {

  const classes = useStyles();
  // const [designation,Setdesignation]=React.useState("");
  // const [jobProfile,SetjobProfile]=React.useState("");
  // const [jobType,SetjobType]=React.useState("");
  // const [BudgetRange,SetBudgetRange]=React.useState("");


  // function handledesignationchange(event){  
  //   Setdesignation(event.target.value)
  // }
  // function handlejobProfile(event){  

  //   SetjobProfile(event.target.value)
  // }
  // function handlejobType(event){  

  //   SetjobType(event.target.value)
  // }
  // function handleBudgetRange(event){  

  //   SetBudgetRange(event.target.value)
  // }
  // function handleSubmit ()  {

  //   const url = 'http://localhost:55466/api/resourcerequestpost'
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ "Job_ID":"022078925508" })
  //   };
  //     fetch(url, requestOptions)
  //     .then(response => console.log('Submitted successfully'))
  //     .catch(error => console.log('Form submit error', error))

  // };

  return (
    <Box className={classes.root}>
    <Card>
      <CardContent>
        <Typography variant="h3">Card Title</Typography>
      </CardContent>
      <CardActions>
        <Button>share</Button>
      </CardActions>
    </Card>
  </Box>
    // <div>

    //   <Paper>
    //     <header>
    //       <p>Application Form</p>
    //     </header>
    //     <form className="form" >

    //       <div className={styles.div_class}>
    //         <TextField className="form" label="Employee ID" />
    //         <TextField style={{ margin: "0px 30px" }} className={styles.form2} label="Fist Name" />
    //         <TextField style={{ margin: "0px 30px" }} className="form" id="standard-basic" label="Last Name" />
    //       </div>

    //       <div className={styles.div_class}>
    //         <TextField className="form" id="standard-basic" label="Email Id" />
    //         <TextField style={{ margin: "0px 30px" }} className="form" id="standard-basic" label="Designation" value={designation} onChange={handledesignationchange} />
    //         <TextField style={{ margin: "0px 30px" }} className="form" id="standard-basic" label="Job Profile" value={jobProfile} onChange={handlejobProfile} />
    //       </div>

    //       <div className={styles.div_class}>
    //         <TextField className="form" id="standard-basic" label="Experience" />
    //         <TextField style={{ margin: "0px 30px" }} className="form" id="standard-basic" label="Job Type" value={jobType} onChange={handlejobType} />
    //         <TextField style={{ margin: "0px 30px" }} className="form" id="standard-basic" label="Budget Range" value={BudgetRange} onChange={handleBudgetRange} />
    //       </div>
    //       <div>
    //         <FormControl fullWidth >
    //           <TextField
    //             label="Job Decription"
    //             multiline
    //             rows={2}
    //             maxRows={4}
    //           />
    //         </FormControl>
    //       </div>

    //       <Box textAlign='center'>
    //         <Button style={{ margin: "40px" }} variant="contained" color="primary" onClick={handleSubmit}>Submitt</Button>
    //       </Box>

    //     </form>
    //   </Paper>
    // </div>
  );

}