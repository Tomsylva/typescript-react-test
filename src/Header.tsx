import React, {useState} from 'react'

interface HeaderProps {
    buttonText: string;
}

function Header({buttonText}: HeaderProps) {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count +1);
    }

    return (
        <div>
            <h1>HEADER</h1>
            <button onClick={increment}>{buttonText}</button>
            <p>{count}</p>
        </div>
    )
}

export default Header
