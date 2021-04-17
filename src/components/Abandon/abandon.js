import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import "./abandon.css";

class Abandon extends React.Component {
    constructor(props) {
        super(props);
        this.taskCompleteHandler = this.props.taskCompleteHandler;
    }

    
    render () {
        return (
            <div className='abandon'>
                <div className="abandon-header">
                    <h3>Abandon</h3>
                </div>
                <ul className="abandon-list">
                    {this.props.task_list.map((item) => {
                        if(item.status=='abandon'){
                        return <ListItem description={item.description} title={item.title} onTitleChange={this.props.onTitleChange} onStatusChange={this.props.onStatusChange} status={item.status} key={"doing_"+ item.id} id={item.id} clickHandler={this.taskCompleteHandler} onDescpChange={this.props.onDescpChange}/>
                        }
                    })}
                </ul>
                
            </div>
        );
    }
}

export default Abandon;