import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import TempletAction from '../../actions/TempletAction/templetAction.js'


class MyTemplet extends React.Component
{
  handleChange = (event, value) => {
    this.props.switchTabs(event, value);
  };

  resetTabView = () =>{
    this.props.resetValue();
  };

  render() {
    const { value } = this.props;
    return (
      <div className = "root">
        <Paper className="paper" elevation = {20}>
          <AppBar position="static" className="templet-appbar">
            <div className = "tab-content">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={this.props.name}/>
              <Tab label="Sample Usage" />
            </Tabs>
            </div>
          </AppBar>
          {value === 0 && this.props.content}
          {value === 1 && this.props.sampleUsage}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    value: state.navReducer.value
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    switchTabs: (event, value) => {dispatch(TempletAction.SwitchTabs(event,value))},
  }
}



export default connect(mapStateToProps,mapDispatchtoProps)(MyTemplet);
