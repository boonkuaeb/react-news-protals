import React, {Component} from 'react'

class NewsSingle extends Component {

    render() {
        let item = this.props.item;
        if(item.urlToImage) {
            return (
                <div className="col s4">
                    <div className="card">
                        <div className="card-image">
                            <img src={item.urlToImage} alt={item.title}/>
                            <span className="card-title">{item.source.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{item.title}</p>
                        </div>
                        <div className="card-action">
                            <a href={item.url} target="_blank">Full article</a>
                        </div>
                    </div>
                </div>
            );
        }else{
            return ('');
        }
    }
}

export default NewsSingle;