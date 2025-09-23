import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebService();

  async function waitForWebService() {
    return retry(checkStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function checkStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (!response.ok) {
        throw new Error("Web service is not ready yet");
      }
    }
  }
}

const orchestrator = {
  waitForAllServices,
};

export default orchestrator;
