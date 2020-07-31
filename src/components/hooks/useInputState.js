import {useState} from 'react';

export default (initialValue) =>{
    const [value , setValue] = useState(initialValue);
    const handlechange =(event) =>{
        setValue(event.target.value);
    };
    const reset =() => {
        setValue('');
    };
    return [value , handlechange,reset];
}