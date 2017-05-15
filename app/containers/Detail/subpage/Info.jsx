import React from 'react'
import { getInfoData } from '../../../fetch/detail/detail.js'
import DetailInfo from '../../../components/DetailInfo'
class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailInfo: false
        }
    }
    componentDidMount() {
        var result = getInfoData('0514')
        result.then(res => {
            return res.json()
        }).then(json => {

            this.setState({
                detailInfo: json
            })
        })

    }
    render() {
        return (
            <div>
                {
                    this.state.detailInfo
                        ? <DetailInfo data={this.state.detailInfo} />
                        : ''
                }
            </div>
        )
    }
}

export default Info