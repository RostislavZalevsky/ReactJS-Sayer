import React, { Component } from 'react';
import ImagePlus from "../Image/plus.png";

let Items= [{}];

class App extends Component {
    GetItems() {
        let html = [];
        Items = JSON.parse(localStorage.getItem("Items"));

        for(var i = Items.length-1; i >= 0; i--) {
            if(Items[i] !== null) {
                html.push(
                    <div className="listItem" key={i} onClick={this.GetItem.bind(this, i)}>
                        <div>{Items[i].Item}</div>
                        <div>{Items[i].Comments !== null ? Items[i].Comments.length : 0}</div>
                        <div>{Items[i].Date}</div>
                    </div>
                );
            }
        }
        return html;
    }

    GetItem(id) {
        window.location.replace("/Item/" + id);
    }

    render() {
        // var Items = [{}];
        //  Items[0] = {"Item": "ITEM!",
        //     "Comments": [
        //         {
        //             "Comment": "Com",
        //             "Date": "date"
        //         },
        //         {
        //             "Comment": "Com2",
        //             "Date": "date2"
        //         }
        //     ],
        //     "Date": "asdasd"};
        //
        //  Items[1] = {"Item": "ITEM!",
        //     "Comments": [
        //         {
        //             "Comment": "Com",
        //             "Date": "date"
        //         },
        //         {
        //             "Comment": "Com2",
        //             "Date": "date2"
        //         }
        //     ],
        //     "Date": "asdasd"};

        //Items = JSON.parse(localStorage.getItem("Items"));
        // localStorage.setItem("Items", JSON.stringify(Items));

        return (
            <div>
                <header>Sayer<button onClick={()=>{window.location.replace("/AddItem")}}><img src={ImagePlus}/></button></header>
                <main>{this.GetItems()}</main>
            </div>
        );
    }
}

export default App;