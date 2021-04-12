import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import s from './AdminPage.module.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import AdminPageHome from "./AdminPageHome/AdminPageHome";
import AdminPageAbout from "./AdminPageAbout/AdminPageAbout";
import AdminPageGames from "./AdminPageGames/AdminPageGames";
import AdminPageNews from "./AdminPageNews/AdminPageNews";
import AdminPageJobs from "./AdminPageJobs/AdminPageJobs";
import AdminPageContacts from "./AdminPageContacts/AdminPageContacts";
import AdminPagePress from "./AdminPagePress/AdminPagePress";
import AdminPageSubmit from "./AdminPageSubmit/AdminPageSubmit";
import AdminPageSocial from "./AdminPageSocial/AdminPageSocial";
import AdminPageOurTeam from "./AdminPageOurTeam/AdminPageOurTeam";

const AdminPage = ({adminPage}) => {
    const title = adminPage[0].title || 'title';
    const content = adminPage[0].content || 'content';
    const image = adminPage[0].image || '';
    return (
        <div className="container-fluid">
            <Tabs className={s.adminPage}>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>About</Tab>
                    <Tab>Games</Tab>
                    <Tab>News</Tab>
                    <Tab>Jobs</Tab>
                    <Tab>Contacts</Tab>
                    <Tab>Press</Tab>
                    <Tab>Submit your game</Tab>
                    <Tab>Social</Tab>
                    <Tab>Our Team</Tab>
                    <InertiaLink
                        href="/logout"
                        method="post"
                        as="button"
                        type="button"
                    >
                        Logout
                    </InertiaLink>
                </TabList>

                <main>
                    <TabPanel>
                        <AdminPageHome/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageAbout/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageGames/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageNews/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageJobs/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageContacts/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPagePress/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageSubmit/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageSocial/>
                    </TabPanel>
                    <TabPanel>
                        <AdminPageOurTeam/>
                    </TabPanel>
                </main>
            </Tabs>
        </div>
    );
};

export default AdminPage;