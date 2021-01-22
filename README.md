# Problem Set 11.6 - Graphs

## Directions
Respond to short response questions in clear, concise sentences directly within this file. Use markdown to ensure that your answers are formatted correctly.

### Short Response Questions
**1. What are the properties of a graph?**

**2. What types of problems do graphs help us solve? What are some of the limitations?**

**3. What is the difference between breadth-first and depth-first search? When might you choose one over the other?** 


### Coding Exercises
Answer the following questions in `exercises.js`. Ensure all tests are passing before submitting this problem set.

1. **Implement a Graph Class:** Implement a graph class. Your class should respond to the following methods:
   - `addVertex`
   - `removeVertex`
   - `addEdge`
   - `removeEdge`


2. **Breadth-First Search:** Implement a `breadthFirstSearch` function that takes in a graph, a start vertex, and an end vertex to search for, and attempts to locate the given vertex using a breadth-first search algorithm. The function should return `true` if a path exists between the start and end vertices, and should return `false` is no path exists. As a reminder, BFS algorithms should search along each level before proceeding further down the graph.

3. **Depth-First Search:** Implement a `depthFirstSearch` function that takes in a graph, a start vertex, and an end vertex to search for, and attempts to locate the given vertex using a depth-first search algorith.  The function should return `true` if a path exists between the start and end vertices, and should return `false` is no path exists. As a reminder, DFS algortihms should search down paths before moving on to other neighbors. 
