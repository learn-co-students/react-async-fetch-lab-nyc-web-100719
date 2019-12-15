// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json)
            .then(data => {
                this.setState({data: data.people})
            })
    }

    
    render() {
        return <div>blah</div>
    }
}