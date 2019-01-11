import React, { Component } from 'react';

import "./style.css"
import "./components/list.js"
import ListItem from "./components/list.js";


class App extends Component {

    state = {
        data: [
        {
            id: 1,
            label: "Go to gym",
            isChecked: false,
            isRemoved: false
        },
        {
            id: 2,
            label: "Drink more water",
            isChecked: false,
            isRemoved: false
        },
        {
            id: 3,
            label: "Read books",
            isChecked: true,
            isRemoved: false
        }
    ],
    idCounter: 3,
};

    inputChanged = (id) => {
        let data = this.state.data;
        data[id].isChecked = data[id].isChecked ? false : true;
        
        this.setState({ data })
    }

    addTodo() {
        let data = this.state.data;
        let inputBox = document.getElementById('addItem')
        if (inputBox.value === "") {
            alert("Empty TODO can't be added");
        } else {
            data.unshift({
                id: this.state.idCounter + 1,
                label: inputBox.value,
                isChecked: false,
                isRemoved: false
            });
            this.setState({ idCounter: this.state.idCounter + 1 });
            this.setState({ data });
            inputBox.value = "";
            console.log("succed: key" + this.state.idCounter);
        }
    }

    removeButton() {
        let data = this.state.data;
        data.forEach( (item)=> {
            if (item.isChecked) {
                item.isRemoved = true;
            }
        });
        this.setState({ data })          
    }

    tagsRender() {
        if (this.state.data.length === 0) {
            return (<p className="todo">No TODO in list. HURRAH!</p>);
        } else {
            return (this.state.data.map( (item,key) => {
                if (item.isRemoved === false){
                    return (
                        <ListItem key={item.id} label={item.label} id={key} isChecked={item.isChecked} onClick={this.inputChanged}/>
                    );
                } else {
                    return null;
                }
            }));
        }
    }

    render() { 
        return (  
            <div id="todoBlock">
                <div id="todoForm">
                    <div id="head"><h1>My TODOs</h1></div>
                    <input type="text" id="addItem" placeholder="  Enter TODOs to add" /><br /><br />
                    <button id="addButton" onClick={()=> this.addTodo()}>Add TODO</button><br />
                    <button id="removeButton" onClick={()=>this.removeButton()}>Remove TODO</button>
                    <div id="lists">
                        <ul id='todos'>
                            {this.tagsRender()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App