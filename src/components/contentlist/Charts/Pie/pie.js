import React, { Component } from 'react';
import MyTemplet  from '../../../templet';
import {RadialChart} from 'react-vis';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';
class MyPie extends Component
{

  renderPie()
  {
    const myData = [
    {angle: 1, label: ''},
    {angle: 2, label: ''},
    {angle: 3, label: ''}
  ]
    return (
      <div className = "pie-display">
        <RadialChart data={myData} width={400} height={400} showLabels/>
      </div>
    );
  }
  render()
  {
    let output = this.renderPie();
    let myName = "Pie";
    let string = `
    import {RadialChart} from 'react-vis';

    const myData = [
    {angle: 1, label: 'Type 1'},
    {angle: 2, label: 'Type 2'},
    {angle: 3, label: 'Type 3'}
    ]
    return (
      <div>
        <RadialChart data={myData} width={400} height={400} showLabels/>
      </div>
    );  `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplet content = {output} name = {myName} sampleUsage={code}/>
      </div>
    );
  }
}

export default MyPie;