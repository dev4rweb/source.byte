import React, {useState} from 'react';
import axios from "axios";
import Loader from "../../../Loader/Loader";

const SocialItem = ({link, setState}) => {
    const [social, setSocial] = useState(link);
    const [loading, setLoading] = useState(false);

    function changeHandler(e) {
        console.log(e.currentTarget.name);
        setSocial({
            ...social,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    function submitHandler(e) {
        setLoading(true);
        e.preventDefault();
        const fd = new FormData();
        fd.set('url', social.url);

        axios.post(`/api/socials/${social.id}`, fd)
            .then(res => {
                setLoading(false);
                // console.log(res.data);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="mb-3">
            <label htmlFor="steam" className="text-light">{social.name}
            </label>
            <input
                type="text"
                className="form-control"
                name="url"
                value={social.url}
                onChange={changeHandler}
            />
            <button
                className="btn btn-primary"
                onClick={submitHandler}
            >
                Change
            </button>
        </div>
    );
};

export default SocialItem;
