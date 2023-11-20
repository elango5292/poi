async function getLatestBlockNumber() {
    const rpcNodeURL = rpc;
    const response = await fetch(rpcNodeURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: chain,
            method: 'eth_blockNumber',
            params: [],
        }),
    });

    const data = await response.json();
    const latestBlockNumber = parseInt(data.result, 16);
    return latestBlockNumber;
}

async function getTransactionBlockNumber(txHash) {
    const rpcNodeURL = rpc;
    const response = await fetch(rpcNodeURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: chain,
            method: 'eth_getTransactionByHash',
            params: [txHash],
        }),
    });

    const data = await response.json();
    const transactionBlockNumber = parseInt(data.result.blockNumber, 16);
    return transactionBlockNumber;
}

export default async function checkConfirmations(hash,chain) {
    const latestBlockNumber = await getLatestBlockNumber();
    if (postHash !== "") {
        const transactionBlockNumber = await getTransactionBlockNumber(
            postHash
        );

        const PostConfirmationCount = latestBlockNumber - transactionBlockNumber;

        setPostConfirmations(PostConfirmationCount);

    };
    if (publishHash !== "") {
        const transactionBlockNumber = await getTransactionBlockNumber(
            publishHash
        );

        const PublishConfirmationCount = latestBlockNumber - transactionBlockNumber;

        setPublishConfirmations(PublishConfirmationCount)

    }

}