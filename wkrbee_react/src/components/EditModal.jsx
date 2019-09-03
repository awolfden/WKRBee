import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
  },
  modalButton: {
    backgroundColor: theme.palette.secondary.light,
    border: '1px solid green',
    marginTop: 20,
    float: "right"
  }, 
  modalDeleteButton: {
    backgroundColor: theme.palette.secondary.light,
    border: '1px solid #7008036c',
    marginTop: 20,
    float: "left"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

function EditModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  // identifies the specific employee based on the id passed down from parent clicked on 
  const employeeId = props.employeeId; 
  const thisEmployee = props.allEmployees.filter(emp => emp._id === employeeId);
  const employee = thisEmployee[0];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// using local state for the form submission 
  const [values, setValues] = React.useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    status: '',
    dateOfHire: '',
    dateOfBirth: '',
    id: ''
  });

 // implemented a re-render when the correct employee is identified through 
 // the filter by id above to get correct values in place
  useEffect(() => {
    setValues({
      firstName: employee.firstName,
      middleInitial: employee.middleInitial,
      lastName: employee.lastName,
      status: employee.status,
      dateOfHire: employee.dateOfEmployment,
      dateOfBirth: employee.dateOfBirth,
      id: employee._id
    })
  }, [employee])
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (formData, e) => {
    e.preventDefault();

    try {
        const updatedEmployee = await fetch(`http://localhost:9001/employees/` + employee._id, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await updatedEmployee.json();
        console.log(parsedResponse);        
        props.getEmployees();

    } catch(err) {
        console.log(err)
    }        
  };

  const handleDelete = async (deletedEmployeeId) => {

    try{
        const deleteWorkout = await fetch(`http://localhost:9001/employees/${deletedEmployeeId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await deleteWorkout.json();
        if(parsedResponse.status === 200){ 
          props.getEmployees();
        }

    } catch(err) {
        console.log(err);
    }

  };

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        Edit Employee
      </button>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit {employee.firstName} {employee.middleInitial} {employee.lastName}</h2>
            <form onSubmit={handleSubmit.bind(null, values)}>
                <div className='modalDiv'>
                    <div>
                        <TextField
                            id="standard-name"
                            label='First Name'
                            name='firstName'
                            className={classes.textField}
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Middle Initial"
                            name='middleInitial'
                            className={classes.textField}
                            value={values.middleInitial}
                            onChange={handleChange('middleInitial')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
                            name='lastName'
                            className={classes.textField}
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Employment Status"
                            name='status'
                            className={classes.textField}
                            value='ACTIVE' // <= always active until deactivated
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label={"Date Of Hire: "}
                            name='dateOfHire'
                            className={classes.textField}
                            value={values.dateOfHire}
                            onChange={handleChange('dateOfHire')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Date of Birth"
                            name='dateOfBirth'
                            className={classes.textField}
                            value={values.dateOfBirth}
                            onChange={handleChange('dateOfBirth')}
                            margin="normal"
                        />
                    </div>
                    
                </div>
                <Button onClick={() => handleDelete(employee._id)} variant='contained' className={classes.modalDeleteButton}>
                    Deactivate Employee
                </Button>
                <Button type='submit' onClick={handleClose} variant='contained' className={classes.modalButton}>
                    Submit Changes
                </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}



const mapStateToProps = (state) =>({
  state: state,
  allEmployees: state.employees
});

export default connect(mapStateToProps)(EditModal);
