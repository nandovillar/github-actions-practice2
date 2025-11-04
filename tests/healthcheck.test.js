const { healthCheckOK } = require("../src/healthcheck");

test("Healthcheck response 200", async() => {
    const url = process.env.URL_Healthcheck;
    expect(url).toBeDefined();

    const ok = await healthCheckOK(url);
    expect(ok).toBe(true);

});
