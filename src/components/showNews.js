import React, {Component} from 'react';

class ShowNews extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            author: null
        }
    }

    render()
    {
        if(!this.state.author) return null;
        return(
            <div className="container mt-5">
                <div className="row">
                    {/*Side nav for the author info */}
                    <div className="col-3 text-center">
                        {/* Author Picture */}
                        <img src={this.state.author.picture.large} className="rounded-circle mb-3" alt="Author"/>
                        {/* Author name */}
                        <p>
                            {this.state.author.name.title + " " + this.state.author.name.first + " " + this.state.author.name.last}
                        </p>
                        {/*  Author email */}
                        <p>
                            {this.state.author.email}
                        </p>
                        <button className="btn-primary btn" onClick={this.props.onClear}>Home</button>
                    </div>
                    
                    {/* Section for the news*/}
                    <div className="col-9 shadow">
                        {/* Title */}
                        <h1>
                            {this.props.news.title}
                        </h1>
                        {/* Create date */}
                        <p>
                            Created at: 
                            <span className="ml-1">{this.props.news.publishedAt}</span>
                        </p>

                        {/* Small description */}
                        <p className="text-secondary">
                            <small>{this.props.news.description}</small>
                        </p>
                        {/* Banner */}
                        <img src={this.props.news.urlToImage} className="rounded w-100" alt="news"/>
                        
                        {/* News Content */}
                        <p>
                            {this.props.news.content}
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }

    /*
        Fetch the author from the API 'randomuser'
    */
    componentDidMount()
    {
        let url = 'https://randomuser.me/api/';
        fetch(url)
        .then(response => response.json())
        .then(response =>
        {
            this.setState({author: response.results[0]});
        })
        .catch(err => console.error(err));
    }
}

export default ShowNews;