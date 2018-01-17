import React, { Component } from 'react';
import Back from '../Image/back.png';
import Sent from '../Image/sent.png';

class AddItem extends Component {
    Add() {
        let Items = [{}];
        Items = JSON.parse(localStorage.getItem("Items"));
        Items[Items.length] = {
            "Item": this.text.value,
            "Comments": null,
            "Date": new Date()
        };

        localStorage.setItem("Items", JSON.stringify(Items));
        window.location.replace("/");
    }
    render() {
        return (
            <div className="createItem">
                <button onClick={()=> {window.location.replace("/")}}><img src={Back}/></button>
                <div>Create new item</div>
                <input type="text" placeholder="New item title..." autoFocus="true" ref={(input) => this.text = input}/>
                <button onClick={this.Add.bind(this)}><img src={Sent}/></button>
            </div>
        );
    }
}

export default AddItem;
