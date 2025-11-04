
async function healthCheckOK(url) {
    const response = await fetch(`${url}/healthcheck`,{method: "GET"})

    return response.status === 200;
}

module.exports = {healthCheckOK};