import React from 'react';
// import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

const Time = ({date}) => <>{
    formatDistanceToNow(new Date(Date.parse(date)), {
        addSuffix: true,
        locale: ruLocale
    })}
</>

// Time.propTypes = {
//     date: PropTypes.object
// }


export default Time