import React from 'react'
import './style.less'

class CityList extends React.Component {
    handleChangeCity(event){
        let target = event.target
        if(this.props.handleChangeCity){
            // console.log(target.innerText)
            this.props.handleChangeCity(target.innerText)
        }
    }

    render() {
        
        return (
            <div id="city-list">
                <h2>热门城市</h2>
                <ul className="clear-fix" onClick={this.handleChangeCity.bind(this)}>
                    {
                        this.props.allcity.map((city, index) => {
                            return <li key={index}>
                                        <span>{city}</span>
                                    </li>
                        })
                    }
                </ul>
            </div>

        )
    }
}

CityList.defaultProps = {
    allcity: ['北京', '上海', '广州', '深圳', '杭州', '天津', '成都', '西安', '重庆', '苏州', '南京', '厦门']
}

export default CityList