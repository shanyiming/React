import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';
import MyTemplet  from '../../../templet';
import * as Icons from '@material-ui/icons';

const styles = theme => ({
  root: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip1: {
    margin: theme.spacing.unit,
    backgroundColor: "#002f6c"
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: "#002f6c"
  }
});


function handleClick() {
  alert('Hi');
}

function MyChips(props) {
  const { classes } = props;
  const BlueToothIcon = Icons['BluetoothDisabledTwoTone'];
  let output = (
    <div className={classes.root}>
      <Chip label="Chip" className={classes.chip1} />
      <Chip
        icon = {<BlueToothIcon />}
        label="Bluetooth"
        className={classes.chip}
        color="#002f6c"
        onClick={handleClick}
      />
    </div>
  );

  let myName = "Chips";

  let string = `

    import Avatar from '@material-ui/core/Avatar';
    import Chip from '@material-ui/core/Chip';
    return (
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Your text"
        onClick={Your click func}
      />
      <Chip
        icon={Your icon}
        label="Your text"
        onDelete={Your delete func}
        color="Your color"
      />

    );`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplet content = {output} name = {myName} sampleUsage = {code}/>
    </div>
  );
}

MyChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyChips);