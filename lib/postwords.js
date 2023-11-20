import networks from "../lib/networks"
import CryptoJS from "crypto-js";

export default function postworder(posthash,passw,chain){



  
    return getTransactionData(networks(chain), chain, posthash,passw)



    async function getTransactionData(rpc, chain, hash,passw) {
        const requestObject = {
            jsonrpc: "2.0",
            method: "eth_getTransactionByHash",
            params: [hash],
            id: chain,
        };


        try {
            const response = await fetch(rpc, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestObject),
            });

            const responseData = await response.json();

            if (responseData && responseData.result) {
                const reciept = responseData
                const cleanedHexString = reciept.result.input.slice(2);
                
                let decData = CryptoJS.enc.Hex.parse(cleanedHexString).toString(CryptoJS.enc.Utf8)
                let bytes = CryptoJS.AES.decrypt(decData, passw).toString(CryptoJS.enc.Utf8)


                


                const wordsli = bytes.split("<>");
                let decoword = deco(wordsli);
                let addressdetail = reciept.result.from
                let postdate = getTime(reciept.result.blockNumber, rpc)

                return {"words" : decoword,"from":addressdetail,"date":postdate}



            } else {
                console.log("null");
            }
        } catch (error) {
            console.log("RPC request error:", error);
        }
    }
    async function getTime(bnum ,rpc) {

        const rpcEndpoint = rpc

        const requestObject = {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [bnum, false],
            id: chain,
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
        return (date.toUTCString())

    }
    function deco(words) {
        var ccon = words
        const decodo = new TextDecoder();
        let tit = new Uint8Array(ccon[4].split(',').map(Number));
        let keywor = new Uint8Array(ccon[5].split(',').map(Number));
        let descri = new Uint8Array(ccon[6].split(',').map(Number));

        ccon[4] = decodo.decode(tit)
        ccon[5] = decodo.decode(keywor)
        ccon[6] = decodo.decode(descri)



        if (ccon[0] === "1x") {
            let namoe = new Uint8Array(ccon[1].split(',').map(Number));
            ccon[1] = decodo.decode(namoe)
            return ccon
        } else {
            return ccon
        }

    }

}
