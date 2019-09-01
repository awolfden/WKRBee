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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const employee = props.employee;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    firstName: employee.firstName,
    middleInitial: employee.middleInitial,
    lastName: employee.lastName,
    status: employee.status,
    dateOfHire: employee.dateOfEmployment,
    dateOfBirth: employee.dateOfBirth,
    id: employee.id,
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit hit');
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleClose();
    console.log('delete hit');
  }

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
            <form onSubmit={handleSubmit}>
                <div className='modalDiv'>
                    <div>
                        <TextField
                            id="standard-name"
                            label='First Name'
                            // placeholder='First Name'
                            className={classes.textField}
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Middle Initial"
                            // placeholder="Middle Initial"
                            className={classes.textField}
                            value={values.middleInitial}
                            onChange={handleChange('middleInitial')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
                            // placeholder="Last Name"
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
                            // placeholder="Employment Status"
                            className={classes.textField}
                            value={values.status}
                            onChange={handleChange('status')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label={"Date Of Hire: " + employee.dateOfEmployment}
                            // placeholder="Date Of Hire"
                            className={classes.textField}
                            value={values.dateOfHire}
                            onChange={handleChange('dateOfHire')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Date of Birth"
                            // placeholder="Date of Birth"
                            className={classes.textField}
                            value={values.dateOfBirth}
                            onChange={handleChange('dateOfBirth')}
                            margin="normal"
                        />
                    </div>
                    <TextField
                        id="standard-name"
                        label="Employee ID"
                        // placeholder="Employee ID"
                        className={classes.textField}
                        value={values.id}
                        onChange={handleChange('id')}
                        margin="normal"
                    />
                </div>
                <Button onClick={handleDelete} variant='contained' className={classes.modalDeleteButton}>
                    Delete Employee
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