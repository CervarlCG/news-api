import React, {Component} from 'react';

class News extends Component
{
    render()
    {
        return(
            <div className="col-md-5 offset-md-1 shadow-sm mb-5" onClick={this.handleClick}>
                {/* News banner */}
                <img src={this.props.news.urlToImage} className="w-100" alt="News banner"/>
                {/* News preview info*/}
                <div className="preview-data">
                    <p className="font-weight-bold">
                        {this.props.news.title}
                    </p>
                    <p className="text-secondary">
                        <small>  {this.props.news.description}</small>
                    </p>
                </div>
            </div>
        )
    }

    /**
     * Catch the click of the news
     */
    handleClick = () =>
    {
        console.log(this.props.id);
        if(this.props.onClick)
            this.props.onClick(this.props.id);
    }
}

export default News;