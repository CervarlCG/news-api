import React, {Component} from 'react';
import ShowNews from './showNews';
import Pagination from './Pagination';

class News extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            news: [],
            currentNews: null,
        }
    }

    render()
    {
        if(this.state.currentNews)
            //Show the current news
            return(
                <ShowNews news={this.state.currentNews} onClear={this.handleClear}/>
                )
        else
            //Shwo the preview of all news
            return(
                <div className="container">
                    <h1 className="text-center mb-3" style={{color: "#cc2131"}}>Nintendo News</h1>
                    <Pagination news={this.state.news} onSelect={this.handleCurrentNews}/>
                </div>
            )
    }

    /* 
        Fetch all the Nintendo news
    */
    componentDidMount()
    {
        let url =   'http://newsapi.org/v2/everything?' +
                    'q=Nintendo&' +
                    'sortBy=popularity&' +
                    'apiKey=96eeab904944428c90aa6f9b2271a4a5';
        fetch(url)
        .then(response => response.json())
        .then(response =>{
            //Setting a ID
            let news = response.articles.map((article, idx) =>
            { 
                article.id = idx
                return article;
            })
            //Update
            this.setState({news});
        })
        .catch(err =>{
            console.log(err);
        })
    }

    /* 
        Catch all news received from the API
    */
    handleCurrentNews = (newsID) =>{
        this.setState({currentNews: this.state.news[newsID]});
    }

    /* 
        Clear the current news to show all
    */
    handleClear = () =>
    {
        this.setState({currentNews: null});
    }
}

export default News;