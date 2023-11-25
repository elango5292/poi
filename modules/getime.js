
import networks from "../lib/networks"

async function getTime(bnum,chain) {

var rpc=networks(chain)


    const requestObject = {
        jsonrpc: "2.0",
        method: "eth_getBlockByNumber",
        params: [bnum, false],
        id: 1,
    };

    const response = await fetch(rpc, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObject),
    });

    const responseData = await response.json();
    const timestamp = parseInt(responseData.result.timestamp * 1000)
    const date = new Date(timestamp);
    return(date.toUTCString())

}

module.exports = getTime;
