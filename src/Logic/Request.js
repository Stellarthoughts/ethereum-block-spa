// Requests to Cloudfare API and handling

async function handleEth_getBlockByNumber(res) {
  if (res.status !== 200) {
    throw new Response("API request failed. Oh no", { status: res.status });
  }
	const json = await res.json();
	if (json.error != null) {
		throw new Response(`API answered, but ended in error — ${json.error.message}`, {
			status: 404,
		});
	}
  return json;
}

async function handleEth_blockNumber(res) {
	if (res.status !== 200) {
    throw new Response("API request failed. Oh no", { status: res.status });
  }
  return res;
}

export async function getEthBlockNumber() {
  const body = {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_blockNumber",
      params: [],
      id: 3,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch("https://cloudflare-eth.com", body);
  return handleEth_blockNumber(res);
}

export async function getEthBlockLatest() {
  const body = {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["latest", true],
      id: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch("https://cloudflare-eth.com", body);
  return handleEth_getBlockByNumber(res);
}

export async function getEthBlockByID(id) {
  const body = {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["0x" + id.toString(16), true],
      id: 2,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch("https://cloudflare-eth.com", body);
  return handleEth_getBlockByNumber(res);
}
