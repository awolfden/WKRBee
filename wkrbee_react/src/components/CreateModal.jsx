import React from 'react';
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
    marginBottom: 10
  },
  modalButton: {
    backgroundColor: theme.palette.secondary.light,
    border: '1px solid green',
    marginTop: 20,
    marginBottom: 20,
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

export default function CreateModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    status: 'ACTIVE',
    dateOfEmployment: '',
    dateOfBirth: '',
    id: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  const createEmployee = async (formData, e) => {
    e.preventDefault();
    try {
        const createdEmployee = await fetch(`http://localhost:9001/employees/`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await createdEmployee.json();

        if(parsedResponse.message === 'successfully added employee'){
            setValues({
              firstName: '',
              middleInitial: '',
              lastName: '',
              status: 'ACTIVE',
              dateOfEmployment: '',
              dateOfBirth: '',
              id: '',
            })
            props.getEmployees();
        }

    } catch(err) {
        console.log(err)
    }
  }



  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        Add New Employee
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
            <h2 id="transition-modal-title">Add New Employee</h2>
            <form onSubmit={createEmployee.bind(null, values)}>
                <div className='modalDiv'>
                    <div>
                        <TextField
                            id="standard-name"
                            label='First Name'
                            className={classes.textField}
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Middle Initial"
                            className={classes.textField}
                            value={values.middleInitial}
                            onChange={handleChange('middleInitial')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
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
                            className={classes.textField}
                            value='ACTIVE' // <= always active until deactivated with delete
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label={"Date Of Hire: "}
                            className={classes.textField}
                            value={values.dateOfHire}
                            onChange={handleChange('dateOfEmployment')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Date of Birth"
                            className={classes.textField}
                            value={values.dateOfBirth}
                            onChange={handleChange('dateOfBirth')}
                            margin="normal"
                        />
                    </div>
                </div>
                <Button type='submit' onClick={handleClose} variant='contained' className={classes.modalButton}>
                    Create Employee
                </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};