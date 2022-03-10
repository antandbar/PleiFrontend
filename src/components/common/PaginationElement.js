import React, { Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './css/PaginationElement.css';


export default class PaginationElement extends Component {

    constructor(props){
        super(props);
        this.state = {
            pageCount: 0
        }
    }
    setPagination = async (numPage,e) => {
        e.preventDefault();
        this.props.pagination(5,numPage);
        this.setState({pageCount:numPage})   
    };

    setFirstPage = async (numPage,e) => {
        e.preventDefault();
        this.props.pagination(5,numPage);
        this.setState({pageCount:numPage})    
    };

    setLastPage = async (e) => {
        const numPage = Math.ceil(this.props.numRecords/5) * 5 - 5;
        e.preventDefault();
        this.props.pagination(5,numPage); 
        this.setState({pageCount:numPage})   
    };

    setOneMorePage = async (e) => {
        let numPage = this.state.pageCount;
        numPage +=5;
        const totalField = Math.ceil(this.props.numRecords/5) * 5 - 5;
        e.preventDefault();
 
        if (numPage <= totalField) {
            this.props.pagination(5,numPage); 
            this.setState({pageCount:numPage})   
        }
    };

    setOneLessPage = async (e) => {
        let numPage = this.state.pageCount;
        numPage -=5;
        e.preventDefault();
 
        if (numPage >= 0) {
            this.props.pagination(5,numPage); 
            this.setState({pageCount:numPage})   
        }
    };

    
    render() {
        return (
            <Pagination className='pagination-box' aria-label="Page navigation example">
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link'  href="#" onClick={this.setFirstPage.bind(this,0)}>
                        {"<<"}
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#" onClick={this.setOneLessPage}>
                        {"<"}
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href= "#" onClick={this.setPagination.bind(this,0)}>
                        1 
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 5) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#" onClick={this.setPagination.bind(this,5)}>
                        2
                    </PaginationLink >
                </PaginationItem>
            }
            {(this.props.numRecords > 10) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#" onClick={this.setPagination.bind(this,10)}>
                        3
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#" onClick={this.setOneMorePage}>
                        {">"}
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#" onClick={this.setLastPage}>
                        {">>"}
                    </PaginationLink>
                </PaginationItem>
            }
            </Pagination>

      
        );
    }
    
}