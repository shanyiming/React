import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MyTemplet  from '../../../templet';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';


class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
          <span className = "row1"> <h1><b>External Images</b></h1></span>


                   <div className = "avatar-display">
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/efvfv5b5g1zgpsf56gb04lthx.png"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/2gbbqgmkn46izkexugz6nrke7.png"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/fnlx6x51qf3k697p7a4psc7oi.gif"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/6gwdfu3zzbrkedgh6ielhq06e.png"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/9bi8n6gaunjj0np2dwss2m07b.png"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/63/full/4889_los_angeles_dodgers-cap-2012.png"
                       />
                       <Avatar
                           src="http://content.sportslogos.net/logos/54/82/full/8848_brooklyn_dodgers-cap-1934.png"
                       />


                   </div>





           <h1 className = "row"><b>Letters</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#1B61ED'}}>D</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>O</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>D</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>G</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>E</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>R</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>S</Avatar>
                   </div>

       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `

    import Avatar from '@material-ui/core/Avatar';

     <div>
       <Avatar
           src="your link"
       />
       <Avatar>
         <Your Icon>
       </Avatar>
       <Avatar>
         Your Text
       </Avatar>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplet content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;