async function fetchData(url, body){
    return fetch(url, body);
}

export async function getEthBlockLatest() 
{
    return fetchData('https://cloudflare-eth.com',{
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
}

export async function getEthBlockByID(id)
{
    return fetchData('https://cloudflare-eth.com',{
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: ['latest', false],
          id: id,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    });
}