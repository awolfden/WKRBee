import React from 'react';
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

function ShowModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const employeeId = props.employeeId; // the id of the employee clicked on passed down
  const thisEmployee = props.allEmployees.filter(emp => emp._id === employeeId);
  const employee = thisEmployee[0];


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };


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
                            value={employee.firstName}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Middle Initial"
                            className={classes.textField}
                            value={employee.middleInitial}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
                            className={classes.textField}
                            value={employee.lastName}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Employment Status"
                            className={classes.textField}
                            value={employee.status}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label={"Date Of Hire: "}
                            className={classes.textField}
                            value={employee.dateOfEmployment}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Date of Birth"
                            className={classes.textField}
                            value={employee.dateOfBirth}
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

const mapStateToProps = (state) =>({
  allEmployees: state.employees
});

export default connect(mapStateToProps)(ShowModal);
