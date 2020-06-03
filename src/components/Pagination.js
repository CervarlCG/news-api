import React, {Component} from 'react';
import Preview from './preview';

class Pagination extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            page: 0
        }
    }
    render()
    {
        //The 10 news to show
        let content = this.getCurrentNews();
        
        return(
            <>
            <div className="row">
                {/* The 10 news*/}
                {
                    content.map((news) => {
                        return <Preview news={news} key={news.id} id={news.id} onClick={this.props.onSelect}/>
                    })
                }
            </div>
            <div className="row">
                {/* Prev page button*/}
                <div className="col-5 offset-md-1 mb-3">
                    {
                        this.state.page > 0 ?
                        <button onClick={this.prevPage} className="btn btn-primary w-100">Anterior</button>
                        :
                        null
                    }
                </div>
                {/* Next page button*/}
                <div className="col-5 offset-md-1 mb-3">
                    {
                        (this.state.page * 10) + 10 < this.props.news.length ?
                        <button onClick={this.nextPage} className="btn btn-primary w-100">Siguiente</button>
                        :
                        null
                    }
                </div>
            </div>
            
            </>
        )
    }

    /*
        Get the 10 current news of the page
    */
    getCurrentNews = () =>
    {
        let content = [];
        let index = this.state.page * 10;
        for(let i = index; i < index + 10; i++)
        {
            if(this.props.news[i])
                content.push(this.props.news[i]);
        }
        return content;
    }

    /**
     * Set the next page
     */
    nextPage = () =>
    {
        if((this.state.page * 10) + 10 < this.props.news.length)
            this.setState((prevState) =>{
                return {
                    page: prevState.page + 1
                }
            } )
        window.scrollTo(0, 0)
    }

    /**
     * Set the prev page
     */
    prevPage = () =>
    {
        if(this.state.page > 0)
            this.setState((prevState) =>{
                return {
                    page: prevState.page - 1
                }
            } )
        window.scrollTo(0, 0)
    }
}

export default Pagination;