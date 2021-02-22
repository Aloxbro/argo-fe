import React from 'react';

function Header() {
    return (
        <div>
            <header className="m-auto text-align">
                <h1 className="p-20px" style={{ fontSize: '2em' }}>
                    <img className="max-w-100px pr-10px" src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
                        Les Argonautes
                </h1>
            </header>
        </div>
    );
}

export default Header;
