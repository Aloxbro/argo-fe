import React from 'react';

function Header() {
    return (
        <div>
            <header className="b-red m-auto text-align">
                <h1 className=" p-2" style={{ fontSize: '2em' }}>
                    <img className="max-w-100px" src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
                        Les Argonautes
                </h1>
            </header>
        </div>
    );
}

export default Header;
