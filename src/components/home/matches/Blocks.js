import React, {Component} from 'react';
import {firebaseMatches} from '../../../firebase';
import {firebaseLooper, arrayReverse} from '../../ui/misc'
import MatchesBlock from '../../ui/matches_block';
import {Slide} from 'react-reveal'

class Blocks extends Component{

    state={
        matches:[]
    }


    ShowMatches=(matches)=>(

        matches ?
            matches.map((match)=>
                 (
                <Slide bottom key={match.id}>
                <div className="item"  >
                    <div className="wrapper">
                       <MatchesBlock match={match}/>
                    </div>
                </div>
                </Slide>
                )
            )
            :null
        )




    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches=firebaseLooper(snapshot);

            this.setState({
                matches: arrayReverse(matches)
            })
        })

    }

    render(){

        return(
            <div className="home_matches">
                { this.ShowMatches(this.state.matches)}
            </div>
        )
    }
}

export default Blocks;