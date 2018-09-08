/**
  Write the most basic utility function that 
  "promisifies" Readable Stream (Wraps the stream 
  into a Promise)

const readable = getReadableStreamSomehow();

readable.on('data', (chunk) => {
  // The 'data' event is emitted whenever the stream
   is relinquishing ownership of a chunk of data to a consumer.
});

readable.on('end', (data) => {
  // The 'end' event is emitted when there is no
   more data to be consumed from the stream.
});

readable.on('error', () => {
  // well, an error has happened
});
*/

function promisifyStream(stream) {
  // Your code here
}

// Example usage
var stream = API.getStream("file");
promisifyStream(stream)
  .then(result => {
    console.log("stream finished with result", result);
  })
  .catch(error => {
    console.error(error);
  });
