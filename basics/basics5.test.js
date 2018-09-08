/**
 * Use built-in methods
 *
 * Implement Queue class to pass the tests
 * add method should add a new element in the beginning of the queue
 * remove element should remove element from the end of the queue
 *
 * Queue – is a First-In-First-Out (FIFO) data structure
 *
 * Use built-in methods, try to solve with one line expressions per method
 */
class Queue {
  constructor(queue = []) {
    this.queue = queue;
  }
  enqueue() {}
  dequeue() {}
  clear() {}
}

describe("Queue", () => {
  const q = new Queue([10, 15, 5]);
  it("should add items to the beginning of the queue", () => {
    q.enqueue(20);
    expect(q.queue).toEqual([10, 15, 5, 20]);
  });
  it("should remove items from the end of the queue", () => {
    q.dequeue();
    expect(q.queue).toEqual([15, 5, 20]);
  });
  it("should clear the queue", () => {
    q.clear();
    expect(q.queue).toEqual([]);
  });
});
