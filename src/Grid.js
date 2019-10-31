import React from 'react';
// import Faker from 'faker';

const Grid = () => {

    return(
        <React.Fragment>
            <div className="ui vertically divided grid">
                <div className="two column row" style={{height: '40vh'}}>
                    <div className="column" style={{height: '40vh'}}>
                        <img className="ui fluid centered image" alt="QR code" src={require('./qrcode.png')} style={{width: 'auto', height: '60%'}}/>
                    </div>
                    <div className="ui column">
                        <form className="ui form">
                            <textarea placeholder="Tell us more" rows="3"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );

}
export default Grid;