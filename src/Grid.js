import React from 'react';
import Faker from 'faker';

const Grid = () => {

    return(
        <div className="ui vertically divided grid">
            <div className="two column row">
                <div className="column">
                    <img className="ui fluid centered image" alt="QR code" src={Faker.image.cats()} style={{width: 'auto', height: '60%'}}/>
                </div>
                <div className="ui column">
                    <form className="ui form">
                        <textarea placeholder="Tell us more" rows="3"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default Grid;