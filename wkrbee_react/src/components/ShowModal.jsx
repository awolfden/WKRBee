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

export default function ShowModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const employee = props.employee;
  console.log(employee._id);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    firstName: employee.firstName,
    middleInitial: employee.middleInitial,
    lastName: employee.lastName,
    status: employee.status,
    dateOfHire: employee.dateOfEmployment,
    dateOfBirth: employee.dateOfBirth,
    id: employee._id,
    multiline: 'Controlled',
    currency: 'EUR',
  });

  console.log(values);
  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        View Employee
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
            <h2 id="transition-modal-title">{employee.firstName} {employee.middleInitial} {employee.lastName}</h2>
            <form >
                <div className='modalDiv'>
                    <div>
                        <TextField
                            id="standard-name"
                            label='First Name'
                            className={classes.textField}
                            value={values.firstName}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Middle Initial"
                            className={classes.textField}
                            value={values.middleInitial}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
                            className={classes.textField}
                            value={values.lastName}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Employment Status"
                            className={classes.textField}
                            value={values.status}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label={"Date Of Hire: "}
                            className={classes.textField}
                            value={values.dateOfHire}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Date of Birth"
                            className={classes.textField}
                            value={values.dateOfBirth}
                            margin="normal"
                        />
                    </div>
                    <TextField
                        id="standard-name"
                        label="Employee ID"
                        className={classes.textField}
                        value={employee._id}
                        margin="normal"
                    />
                </div>
                
                <Button type='submit' onClick={handleClose} variant='contained' className={classes.modalButton}>
                    Done
                </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}