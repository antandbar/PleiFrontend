import React, { Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './css/PaginationElement.css';


export default class PaginationElement extends Component {

    
    render() {
        return (
            
            <Pagination className='pagination-box' aria-label="Page navigation example">
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link'  href="#">
                {"<<"}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                {"<"}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                    2
                </PaginationLink >
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                    {">"}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className='pagination-item'>
                <PaginationLink className='pagination-link' href="#">
                    {">>"}
                </PaginationLink>
            </PaginationItem>
            </Pagination>
      
        );
    }
    
}