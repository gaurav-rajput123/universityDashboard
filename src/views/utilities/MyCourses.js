import React from 'react';
import SubCard from './SubCard.js';
import SubjectHeading from './SujectHeading';

function MyCourses() {
    const subjects = [
        {
            title: 'General English',
            image: 'https://media.istockphoto.com/vectors/english-vector-id1047570732?k=20&m=1047570732&s=612x612&w=0&h=fcgzlrNrq_hws1ykrLSpyBVZoIGr54EUueD6WAEVW0c='
        },
        {
            title: 'Computer Fundamentals',
            image: 'https://media.wiley.com/product_data/coverImage300/22/11190396/1119039622.jpg'
        },
        {
            title: 'Windows',
            image: 'https://www.howtogeek.com/wp-content/uploads/2021/06/windows_11_generic_hero_1.jpg?height=200p&trim=2,2,2,2'
        },
        {
            title: 'NetWorking',
            image: 'https://dailyillini.com/wp-content/uploads/2018/02/Networking-01-900x900.png'
        },

        {
            title: 'Internet, HTML/ DHTML, MS Office',
            image: 'https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg'
        },
        {
            title: 'General Aptitude',
            image: 'https://leverageedu.com/blog/wp-content/uploads/2020/03/Quantitative-Aptitude.jpg'
        }
    ];
    return (
        <div style={{ width: '100%', background: '#F3F5FB' }}>
            {/* <SubjectHeading title="Data Entry Operator" subject="Windows, Networking & Computer Fundamentals" /> */}
            {subjects.map((obj, index) => (
                <SubCard key={index} data={obj} />
            ))}
            {/* <SubCard/> */}
        </div>
    );
}

export default MyCourses;
