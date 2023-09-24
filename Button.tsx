// import React from 'react';
// import { useState } from 'react';
// import { Button } from '@mui/material';
// type propsType = {
//     lable: string,
//     theme: "light" | "dark",
//      on?: (a:any)=> void
// }
// export default function ARButton(props: propsType) {
//     const { lable, theme, on } = props

//     return <>
//         <Button variant='contained'
//             style={
//                 theme == "dark" ?
//                     { backgroundColor: "darkblue" }
//                     : { backgroundColor: "lightsalmon" }
//             }
//             onClick={on}>{lable}</Button>
//     </>
// }
type propsType = {
    label: string;
    onClick?: any;
};

export default function BAButton(props: propsType) {
    const { label, onClick } = props;
    return (
        <button
            onClick={onClick}
            className=" p-2 "
        >
            {label}
        </button>
    );
}