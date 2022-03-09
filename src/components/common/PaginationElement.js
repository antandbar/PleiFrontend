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
        console.log(numPage);
        //console.log(Math.ceil(this.props.numRecords/5))
        this.props.pagination(5,numPage);   
    };
    
    render() {
       /*  console.log(this.props.numUsers) */
        return (
            <Pagination className='pagination-box' aria-label="Page navigation example">
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link'  href="#">
                        {"<<"}
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#">
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
                    <PaginationLink className='pagination-link' href="#">
                        {">"}
                    </PaginationLink>
                </PaginationItem>
            }
            {(this.props.numRecords > 0) &&
                <PaginationItem className='pagination-item'>
                    <PaginationLink className='pagination-link' href="#">
                        {">>"}
                    </PaginationLink>
                </PaginationItem>
            }
            </Pagination>

      
        );
    }
    
}