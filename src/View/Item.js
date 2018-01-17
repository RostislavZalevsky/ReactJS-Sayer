import React, { Component } from 'react';
import Back from '../Image/back.png';
import Sent from '../Image/sent.png';
import Remove from '../Image/cancel.png';

let Items = [{}];
let Item;
let id;
class RemoveItem extends Component {
    GetItem() {
        id = this.props.match.params.id;
        Items = JSON.parse(localStorage.getItem("Items"));
        Item = Items[id];

        let comments = [];
        if (Item.Comments != undefined || Item.Comments != null) {
            for (var i = Item.Comments.length - 1; i >= 0; i--) {
                comments.push(
                    <div key={i}>
                        <div>{Item.Comments[i].Comment}</div>
                        {/*<div>{Item.Comments[i].Date}</div>*/}
                    </div>
                );
            }
        }

        return (
            <div className="item">
                <button onClick={()=>window.location.replace("/")}><img src={Back}/></button>
                <div>{Item.Item}</div>
                <button title="Remove item" onClick={this.RemoveItem}><img src={Remove}/></button>
                <input type="text" placeholder="New comment goes here..." ref={(input) => this.text = input}/>
                <button onClick={this.AddComment.bind(this)}><img src={Sent}/></button>
                {comments}
            </div>
        );
    }

    AddComment() {
        var i = Item.Comments !== null ? Item.Comments.length : 0;
        if(i === 0) Items[id].Comments = [{}];
            Items[id].Comments[i] = {
                "Comment": this.text.value,
                "Date": new Date()
            };

        localStorage.setItem("Items", JSON.stringify(Items));
        window.location.replace("");
    }

    RemoveItem() {
        Items.splice(id, 1);
        localStorage.setItem("Items", JSON.stringify(Items));
        window.location.replace("/");
    }

    render() {
        return this.GetItem();
    }
}

export default RemoveItem;
