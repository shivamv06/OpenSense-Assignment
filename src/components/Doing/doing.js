import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import "./doing.css";

class Doing extends React.Component {
    constructor(props) {
        super(props);
        this.taskCompleteHandler = this.props.taskCompleteHandler;
    }

    
    render () {
        return (
            <div className='doing'>
                <div className="doing-header">
                    <h3>Inprogress</h3>
                </div>
                <ul className="doing-list">
                    {this.props.task_list.map((item) => {
                        if(item.status=='inprogress'){
                        return <ListItem description={item.description} title={item.title} onTitleChange={this.props.onTitleChange} onStatusChange={this.props.onStatusChange} status={item.status} key={"doing_"+ item.id} id={item.id} clickHandler={this.taskCompleteHandler} onDescpChange={this.props.onDescpChange}/>
                        }
                    })}
                </ul>
                
            </div>
        );
    }
}

export default Doing;