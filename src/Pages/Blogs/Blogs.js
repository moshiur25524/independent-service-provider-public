import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Differenciate between Authentication and Authorization</h1>
            <p>
                Authentication and Authorization is a term of security of any website or any institute. Authentication means some formality or protocol to enter into something as like sign in and log in is must to scroll any facebook screen. On the other hand, Authorization means somebody is allowed to a protected side. He has a authority to enter into some pages of a website.
            </p>
            <h1>What other services does firebase provide other than authentication ?</h1>
            <p>
                Firebase is a tool to authorize any site. Without athorization, It has Cloud functionality. thay also provide custom domain. and they have realtime database.
                they provide cloud database to sync and store data for clind side and server side development.Cloud Storage is built for app developers to store and serve user-generated content.
            </p>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>Firebase is mainly used in authentication. Thats why I am using firebase. Ands besides firebase have some extra functionality. I can host my website through firebase. some database activity can be done by using firebase. Through firebase, sign in , sign up and sign out functionality can be done. firebase also provide some provider to log in such as google, facebook, twetter, github, microsoft etc.</p>
            <p>To implement authentication, there are more options. Among them parse, Back4App, AWS Amplify, kuzzle are most familiar for Athentication.</p>
        </div>
    );
};

export default Blogs;