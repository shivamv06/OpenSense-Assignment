import React from 'react';
import ToDo from './components/ToDo/todo';
import Doing from './components/Doing/doing';
import Pending from './components/Pending/pending';
import Done from './components/Done/done';
import Abandon from './components/Abandon/abandon';
import './ToDoApp.css';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_list: [{id:233,description:'QA-43822-View all parts link for Product series doesn\'t list all parts',finished:false,status:'inprogress',createDate:'17/3/2021',title:'QA-43822'},
            {id:2343,description:'Fixing the CMS template for distributors',finished:false,status:'complete',createDate:'16/3/2021',title:'Fixing the CMS'},
            {id:223,description:'Return 404 page for channels which get unpublished',finished:false,status:'pending',createDate:'17/3/2021',title:'Return 404 page'},
            {id:2239,description:'Content deleted from CMS found in Google',finished:false,status:'inprogress',createDate:'16/3/2021',title:'Content deleted from CMS'}]
        };
        this.newTaskHandler = this.newTaskHandler.bind(this);
        this.taskClearHandler = this.taskClearHandler.bind(this);
        this.taskCompleteHandler = this.taskCompleteHandler.bind(this);
        this.onDescpChange = this.onDescpChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        
    }

    newTaskHandler(descp) {
        this.setState(prevState => {
            return {
                task_list: prevState.task_list.concat({
                    id: "task" + new Date().getTime(),
                    description: descp,
                    finished: false,
                    createDate: new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
                    status:'inprogress',
                    title:'title'
                })
            };
        });
    }

    taskCompleteHandler(id) {
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.finished = !item.finished;
                return item;
            })
        }));
    }

    taskClearHandler(id) {
        this.setState(prevState => ({
            task_list: prevState.task_list.filter(item => item.id !== id)
        }));
    }

    onDescpChange(id, new_descp) {
        console.log("id: " + id);
        console.log("new description: " + new_descp);
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.description = new_descp;
                return item;
            })
        }));
        console.log(this.state.task_list);
    }
    onStatusChange(id, status) {
        console.log("id: " + id);
        console.log("new description: " + status);
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.status = status;
                return item;
            })
        }));
        console.log(this.state.task_list);
    }
    onTitleChange(id, title) {
        console.log("id: " + id);
        console.log("new description: " + title);
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.title = title;
                return item;
            })
        }));
        console.log(this.state.task_list);
    }

    render() {
        return (
            <div className="toDoApp">
                <ToDo task_list={this.state.task_list} newTaskHandler={this.newTaskHandler} onStatusChange={this.onStatusChange} onTitleChange={this.onTitleChange} onDescpChange={this.onDescpChange}/>
                <Pending task_list={this.state.task_list} newTaskHandler={this.newTaskHandler} onStatusChange={this.onStatusChange} onTitleChange={this.onTitleChange} onDescpChange={this.onDescpChange}/>
                <Doing task_list={this.state.task_list} taskCompleteHandler={this.taskCompleteHandler} onStatusChange={this.onStatusChange} onTitleChange={this.onTitleChange} onDescpChange={this.onDescpChange}/>
                <Abandon task_list={this.state.task_list} taskCompleteHandler={this.taskCompleteHandler} onStatusChange={this.onStatusChange} onTitleChange={this.onTitleChange} onDescpChange={this.onDescpChange}/>
                <Done task_list={this.state.task_list} taskClearHandler={this.taskClearHandler} onStatusChange={this.onStatusChange} onTitleChange={this.onTitleChange} onDescpChange={this.onDescpChange}/>
            </div>
        );
    }
}


export default ToDoApp;