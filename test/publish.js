const { Publisher } = require("@pact-foundation/pact");
const path = require("path");

const opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "pacts")],
    pactBroker: "http://lon-lnx-lslv02.crwin.crnet.org:9292/",
    pactBrokerUsername: "CRUK01",
    pactBrokerPassword: "GGd{xL2&7v*NbR4r",
    consumerVersion: '0.0.1',
};

new Publisher(opts)
  .publishPacts()
  .then(() => {
    console.log("Pact contract publishing complete!")
  })
  .catch(e => {
    console.log("Pact contract publishing failed: ", e)
  })
