import React, { Component } from 'react';
import MyTemplet  from '../../../templet';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';
class MyVerticalBar extends Component
{

  renderBar()
  {
    const data = [
      {x: 'A', y: 10},
      {x: 'B', y: 15},
      {x: 'C', y: 20},
      {x: 'D', y: 25},
      {x: 'E', y: 30}
    ];
    return (
      <div className = "bar-display">
        <XYPlot margin={{left: 70, top: 20}} xType="ordinal" width={700} height={700} yDomain={[0, 30]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis />
          <VerticalBarSeries
            data={data}
          />
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderBar();
    let myName = "Bar";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';

    const data1 = [
      {x: 'Apple', y: 10},
      {x: 'Banana', y: 12},
      {x: 'Orange', y: 4},
    ];

    const data2 = [
      {x: 'Apple', y: 18},
      {x: 'Banana', y: 15},
      {x: 'Orange', y: 7},
    ];

    return (
      <XYPlot margin={{left: 70}} xType="ordinal" width={500} height={500} yDomain={[0, 30]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis  />
        <YAxis />
        <VerticalBarSeries
          data={data1}
        />
        <VerticalBarSeries
          data={data2}
        />
      </XYPlot>
    )
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplet content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyVerticalBar;
