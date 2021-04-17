import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import "./pending.css";

class Pending extends React.Component {
    constructor(props) {
        super(props);
        this.taskCompleteHandler = this.props.taskCompleteHandler;
    }

    
    render () {
        return (
            <div className='pending'>
                <div className="pending-header">
                    <h3>Pending</h3>
                </div>
                <ul className="pending-list">
                    {this.props.task_list.map((item) => {
                        if(item.status=='pending'){
                        return <ListItem description={item.description} title={item.title} onTitleChange={this.props.onTitleChange} onStatusChange={this.props.onStatusChange} status={item.status} key={"doing_"+ item.id} id={item.id} clickHandler={this.taskCompleteHandler} onDescpChange={this.props.onDescpChange}/>
                        }
                    })}
                </ul>
                
            </div>
        );
    }
}

export default Pending;