import React from 'react';
import './Paginagion.scss'


const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#"><span>1</span></a></li>
                <li className="page-item"><a className="page-link" href="#"><span>2</span></a></li>
                <li className="page-item"><a className="page-link" href="#"><span>3</span></a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;