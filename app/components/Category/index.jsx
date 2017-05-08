import React from 'react'
import ReactSwipe from 'react-swipe'
import './style.less'
class Category extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            index: 0
        }
    }
    render(){
        let opt ={
            auto: 2000,
            callback: (index)=>{
                this.setState({index: index})
            }
        }
        return (
            <div id="category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <ul className="category-show-index">
                    <li className={this.state.index===0?'active':''}></li>
                    <li className={this.state.index===1?'active':''}></li>
                    <li className={this.state.index===2?'active':''}></li>
                </ul>
            </div>
            
        )
    }
}

export default Category