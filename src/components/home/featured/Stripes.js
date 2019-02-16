import React, {Component} from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';

export default class Stripes extends Component{

            state={
                stripes:[{background:'#98c5e9', left:120,delay:0,rotate:25,top:-225},
                         {background:'#ffffff',left: 360,delay:200,rotate: 25,top:-397},
                         {background:'#98c5e9',left:600,delay:400,rotate:25,top:-498}]
            }

        showStripes=()=>{
            return (
                this.state.stripes.map((stripe,i)=>{return(
                    <Animate key={i}
                        show={true}
                        start={{
                              background: '#ffffff',
                              opacity:0,
                              left:0,
                              rotate:0,
                              top:0
                        }}
                        enter={{
                             background: [stripe.background],
                             opacity:[1],
                             left:[stripe.left],
                             top:[stripe.top],
                             rotate:[stripe.rotate],
                             timing:{delay:stripe.delay, duration:200, ease:easePolyOut}
                        }}
                    >
                        {({opacity,left,top,rotate,background})=>{
                            return(
                                <div className="stripe"
                                     style={{background, opacity,transform:`rotate(${rotate}deg) translate(${left}px,${top}px)`}}

                                >

                                </div>
                            )
                        }}
                    </Animate>
                )})
            )
        }
    render(){
        return(
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        )
    }
}
