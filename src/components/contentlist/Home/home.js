import React from 'react';
import Paper from '@material-ui/core/Paper';

class MyHome extends React.Component
{
  render() {
    return (
      <Paper className = "home" elevation = {20}>
        <div>
        <h1 className = "title">Home Page</h1>
        </div>
        <br/>
        <div className = "text">
          Welcome to my home page.
        </div>
      </Paper>
    )
  }
}
export default MyHome