

async function getTime(bnum) {

    const rpcEndpoint = "https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/";

    const requestObject = {
        jsonrpc: "2.0",
        method: "eth_getBlockByNumber",
        params: [bnum, false],
        id: 1,
    };

    const response = await fetch(rpcEndpoint, {
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
