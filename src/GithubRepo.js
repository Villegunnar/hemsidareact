import * as React from "react"
import './App.css';

export default class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            dataIsLoaded: false
        };
    }
    componentDidMount() {
        fetch("https://api.github.com/users/villegunnar/repos")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    dataIsLoaded: true
                });
            })
    }
    render() {
        const { items, dataIsLoaded } = this.state;
        if (!dataIsLoaded) return <div className="loading"><h2>Loading Repositorys</h2></div>;
        return (
            <div className="repos">
                {items.map((item) => (<div className="repos-div">
                    <h3 key={item.id}>{item.name}</h3>
                    <p key={item.id}>{item.description}</p>
                    <button className="buttonL" key={item.id}><a href={item.html_url} target="blank" >Go to repo</a> </button>
                    <hr className="Line" />
                </div>
                ))}
            </div>
        );
    }
}