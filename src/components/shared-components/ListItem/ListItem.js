import React from "react";
import './ListItem.css';

import ContentEditable from 'react-contenteditable';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            checked: false
        };  

        this.contentEditable = React.createRef();
        this.contentEditable1 = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }

    handleClick() {
        if (!this.props.clickHandler) 
            return;
        this.props.clickHandler(this.state.id);
        this.setState(prevState => ({ checked: !prevState.checked }));
    }

    change(event) {
        console.log("things changing");
        console.log(event.target.value);
        this.props.onDescpChange(this.props.id, event.target.value);
    }
    changeTitle(event) {
        console.log("things changing");
        console.log(event.target.value);
        this.props.onTitleChange(this.props.id, event.target.value);
    }
    selectionChange(e){
console.log(e.target.value);
this.props.onStatusChange(this.props.id, e.target.value);
    }
    render() {
        console.log("statu"+this.props.status);
        let checkBox_style = "checkBox";
        if (this.state.status=='complete')
            checkBox_style += " checkBox-checked";
        
        let textStyle = "item-text";
        if (this.state.checked)
            textStyle += " item-text-checked";

        return (
           
            <div className='listItem'>
                <div className="checkBox-container">
                    <div className={checkBox_style} onClick={this.handleClick}></div>
                </div>
                
                <div className="textArea">
               
                    <ContentEditable
                        innerRef={this.contentEditable1}
                        html={this.props.title} // innerHTML of the editable div
                        //disabled={(this.state.status=='complete' ? true: false}       // use true to disable editing
                        onChange={this.changeTitle} // handle innerHTML change
                        //tagName='p'
                        className={textStyle}
                        style={{wordBreak: "break-all"}}
                    />
               
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.props.description} // innerHTML of the editable div
                      //  disabled="true"    // use true to disable editing
                        onChange={this.change} // handle innerHTML change
                        tagName='p'
                        className={textStyle}
                        style={{wordBreak: "break-all"}}
                    />
                    <span>Progress : </span>
                    <select onChange={this.selectionChange.bind(this)} value={this.props.status}>
                    
                <option>--select--</option>
                    <option value="inprogress">Inprogrees</option>
                    <option value="pending">Pending</option>
                    <option value="abandon">Abandon</option>
                    <option value="complete">Completed</option>
                </select>
                </div>
                

            </div>
        );
    }
}

export default ListItem;