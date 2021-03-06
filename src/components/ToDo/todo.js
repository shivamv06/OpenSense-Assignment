import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import AddItem from "./AddItem";
import './todo.css';




class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.task_list = this.props.task_list;
        this.createListItem = this.createListItem.bind(this);
    }

    createListItem() {
        this.props.newTaskHandler("Add description");
    }

    render() {
        console.log(this.task_list);
        return (
            <div className='toDo'>
                <div className="toDo-header">
                    <h3>Today's Tasks</h3>
                </div>
                <ul className="toDo-list">
                    {this.props.task_list.map((item) => {
                        if(item.createDate==new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()){
                        return <ListItem description={item.description} title={item.title} status={item.status} key={"todo_"+ item.id}  id={item.id} onStatusChange={this.props.onStatusChange} onTitleChange={this.props.onTitleChange} onDescpChange={this.props.onDescpChange} clickHandler={null}/>
                        }
                    })}
                    
                    <AddItem clickHandler={this.createListItem}/>
                </ul>
                
            </div>
        );
    }
}

export default ToDo;