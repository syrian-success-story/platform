import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));


function TitleInput(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: '',
      multiline: 'Controlled',
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id={props.id}
          label={props.label}
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </form>
    );}

export default TitleInput;
