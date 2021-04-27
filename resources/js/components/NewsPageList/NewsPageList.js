import React, {useState} from 'react';
import s from '../../Pages/NewsPage/NewsPage.module.scss'
import NewsCard from "../NewsCard/NewsCard";
import Pagination from "../Pagination/Pagination";

const NewsPageList = ({news}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(9); // news in one page
    // Get current news
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className={`container ${s.cardWrapper}`}>
                {currentNews.map((item, index) => {
                    return (
                        <NewsCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
            {news.length > newsPerPage &&
            <div className={s.paginationWrapper}>
                <Pagination
                postsPerPage={newsPerPage}
                totalPosts={news.length}
                paginate={paginate}
                currentPage={currentPage}
                />
            </div>
            }

        </div>
    );
};

export default NewsPageList;
