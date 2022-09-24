function handleEth_getBlockByNumber(res) {
  return res;

}

export async function getEthBlockLatest() {
    const res = await fetch('https://cloudflare-eth.com',{
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: ['latest', true],
          id: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    });
    return handleEth_getBlockByNumber(res);
}

export async function getEthBlockByID(id){
    const res = await fetch('https://cloudflare-eth.com',{
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: [id.toString(16), true],
          id: 2,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    });
    return handleEth_getBlockByNumber(res);
}