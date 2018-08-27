import React, {Component} from 'react'

class SingleSide extends Component {

    render() {
        let item = this.props.item;
        if (item.urlToImage) {
            return (
                <div>
                    <div className="divider"></div>
                    <a href={item.url} target="_blank">
                        <div className="section">
                            <h5>{item.source.name}</h5>
                            <p>{item.title}</p>
                        </div>
                    </a>
                </div>


            );
        } else {
            return ('');
        }
    }
}

export default SingleSide;