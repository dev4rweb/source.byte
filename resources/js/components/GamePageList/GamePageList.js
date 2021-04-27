import React, {useState} from 'react';
import s from '../../Pages/GamesPage/GamesPage.module.scss'
import Pagination from "../Pagination/Pagination";
import GamesCard from "../GamesCard/GamesCard";

function GamePageList({games}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(16); // games in one page
    // Get current games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className={s.cards}>
                {currentGames.map((item, index) => {
                    return (
                        <GamesCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
            {games.length > gamesPerPage &&
            <Pagination
                postsPerPage={gamesPerPage}
                totalPosts={games.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            }

        </div>
    );
}

export default GamePageList;
