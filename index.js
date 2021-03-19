console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");

    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  })
    .then((clientData) => {
      clientData.fromPromise = true;

      return clientData;
    })
    .then((data) => {
      console.log("Modified", data);
    });
});
