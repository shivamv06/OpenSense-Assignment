import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import "./done.css";

class Done extends React.Component {
    constructor(props) {
        super(props);
        this.taskClearHandler = this.props.taskClearHandler;
    }

    render() {
        return (
            <div className='done'>
                <div className="done-header">
                    <h3>Completed</h3>
                </div>
                <ul className="done-list">
                    {this.props.task_list.map((item) => {
                        if (item.status=='complete')
                            return <ListItem description={item.description} title={item.title} onStatusChange={this.props.onStatusChange} status={item.status} onTitleChange={this.props.onTitleChange} key={"done"+ item.id} id={item.id} clickHandler={this.taskClearHandler} onDescpChange={this.props.onDescpChange}/>
                    })}
                </ul>
                
            </div>
        );
    }
}

export default Done;