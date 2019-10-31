import React from 'react';
import Paho from 'paho-mqtt';
import Faker from 'faker';
import './index.css';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {myList: []};
        this.makeClientID = this.makeClientID.bind(this);
        this.startMQTT = this.startMQTT.bind(this);
    }

    makeClientID() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    startMQTT = (count, client, playlist) => {
        var hostname = '140.116.72.65',
            port = 1885,
            clientID = this.makeClientID(),
            timeout = 5,
            keepAlive = 100,
            cleanSession = false,
            ssl = false,
            topic = 'ijbox';

        client = new Paho.Client(hostname, port, clientID);

        var options = {
            invocationContext: {
                host: hostname,
                port: port,
                path: client.path,
                clientID: clientID
            },
            timeout: timeout,
            keepAliveInterval: keepAlive,
            cleanSession: cleanSession,
            useSSL: ssl,
            onSuccess: onConnect,
            onFailure: error => console.log(error)
        };

        function send() {
            var s = `{"event": "getPlaylist"}`;
            var message = new Paho.Message(s);
            message.destinationName = topic;
            client.send(message);
        }
    
        function onConnect() {
            console.log("onConnected");
            client.subscribe(topic);
            send();
        };

        function onConnectionLost(responseObject) {
            console.log(responseObject);
            if (responseObject.errorCode !== 0)
                console.log("onConnectLost:" + responseObject.errorMessage);
            setTimeout(function() {
                count++;
                if (count < 10)
                    this.startMQTT(client, count);
            }, 3000);
        }

        function onMessageArrived(message) {

            playlist = [];
            var payload = JSON.parse(message.payloadString)
            console.log(payload)

                if (payload["event"] === "sendPlaylist") {
                    var l = payload["videoIDs"].length;
                    document.getElementById("playlist_part").innerHTML = '';
                    document.getElementById("playlist_part").style.display = "block";
                    for (var i = 1; i < l + 1; i++) {
                        // set the details of the item
                        var line = document.createElement("div");
                        line.className = "playlist_bar item";
                        line.id = "playlist_bar"+ i;
                        line.style = "background-color: rgb(128, 128, 128);";
                        // add this item into list
                        document.getElementById("playlist_part").appendChild(line);
                        document.getElementById("playlist_bar" + i).innerHTML = payload["videoTitles"][i - 1]
                    }
                    document.getElementById("playlist_bar"+(payload["index"]+1)).style.backgroundColor = "#00bcd4"
                }
        }
        client.connect(options);
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;
    }

    componentDidMount() {
        var count = 0;
        var client;
        var playlist = [];
        this.startMQTT(count, client, playlist);
        setInterval(this.setState({myList: playlist}), 10);
        setInterval(console.log(this.state.myList), 10);
    }

    render() {
        return(
            <div id="playlist_part" className="ui divided items">
                <div className="playlist_bar" id="playlist_bar1" onclick="onclick_bar(this)"></div>
                <div className="playlist_bar" id="playlist_bar2" onclick="onclick_bar(this)"></div>
                <div className="playlist_bar" id="playlist_bar3" onclick="onclick_bar(this)"></div>
                <div className="playlist_bar" id="playlist_bar4" onclick="onclick_bar(this)"></div>
                <div className="playlist_bar" id="playlist_bar5" onclick="onclick_bar(this)"></div>
                <div className="playlist_bar" id="playlist_bar6" onclick="onclick_bar(this)"></div>
            </div>
        );
    }
}
export default Playlist;