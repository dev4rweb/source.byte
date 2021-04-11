import React, {useState, useEffect, useCallback} from 'react';
import s from './TeamBoxes.module.scss'
import TeamCard from "./TeamCard/TeamCard";
import imgOne from '../../../assets/img/team/1.png';
import imgTwo from '../../../assets/img/team/2.png';
import imgThree from '../../../assets/img/team/3.png';
import imgFour from '../../../assets/img/team/4.png';
import imgFive from '../../../assets/img/team/5.png';
import imgSix from '../../../assets/img/team/6.png';
import imgSeven from '../../../assets/img/team/7.png';
import imgEight from '../../../assets/img/team/8.png';
import {useHttp} from "../../hooks/http.hook";
import Loader from "../Loader/Loader";

const TeamBoxes = () => {
    const team = [
        {photo: imgOne, name: 'Terri Tomlinson', pos: 'UI/UX designer'},
        {photo: imgTwo, name: 'Beck Fritz', pos: 'UI/UX designer'},
        {photo: imgThree, name: 'Suzannah Quintana', pos: 'UI/UX designer'},
        {photo: imgFour, name: 'Ariya West', pos: 'UI/UX designer'},
        {photo: imgFive, name: 'Pollyanna Doherty', pos: 'UI/UX designer'},
        {photo: imgSix, name: 'Nasir Salter', pos: 'UI/UX designer'},
        {photo: imgSeven, name: 'Kaden Mcdonnell', pos: 'UI/UX designer'},
        {photo: imgEight, name: 'Jose Healy', pos: 'UI/UX designer'},
    ];
    const [state, setState] = useState(team);
    const {request, loading} = useHttp();

    const fetchData = useCallback(async () => {
        try{
            const fetched = await request('/ourTeam');
            // console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <Loader/>
    }

    return (
        <div className={s.teamBoxes}>
            {state.map((item, index)=> <TeamCard key={index} item={item}/>)}
        </div>
    );
};

export default TeamBoxes;
