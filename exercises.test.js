const { Graph, breadthFirstSearch, depthFirstSearch } = require('./exercises');

describe('Graph', () => {
    it('can add a vertex to the graph', () => {
        const graph = new Graph();
        graph.addVertex('A');
        expect(graph.getVertex('A')).toEqual([]);
    });

    it('can add an edge between two verticies', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.getVertex('A')).toEqual(['B']);
        expect(graph.getVertex('B')).toEqual(['A']);
    });

    it('can remove an edge between two verticies', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.getVertex('A')).toEqual(['B']);
        expect(graph.getVertex('B')).toEqual(['A']);

        graph.removeEdge('A', 'B');

        expect(graph.getVertex('A')).toEqual([]);
        expect(graph.getVertex('B')).toEqual([]);
    });

    it('can remove a vertex from the graph', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.getVertex('A')).toEqual(['B']);
        expect(graph.getVertex('B')).toEqual(['A']);

        graph.removeVertex('A');

        expect(graph.getVertex('A')).toBeUndefined();
        expect(graph.getVertex('B')).toEqual([]);
    });
});

describe.skip('breadthFirstSearch', () => {
    it('can determine the path between two verticies using BFS', () => {
        const list = {
            'A': ['B', 'C', 'G'],
            'B': ['F', 'G', 'A'],
            'C': ['H'],
            'F': ['H', 'I', 'J'],
            'G': ['A'],
            'H': ['C', 'F'],
            'I': ['F'],
            'J': ['F'],
        }
        const graph = new Graph(list);

        expect(breadthFirstSearch(graph, 'A', 'J')).toEqual(['A', 'B', 'F', 'J']);
    });
});

describe.skip('depthFirstSearch', () => {
    it('can determine the path between two verticies using DFS', () => {
        const list = {
            'A': ['B', 'C', 'G'],
            'B': ['F', 'G', 'A'],
            'C': ['H'],
            'F': ['H', 'I', 'J'],
            'G': ['A'],
            'H': ['C', 'F'],
            'I': ['F'],
            'J': ['F'],
        }
        const graph = new Graph(list);

        expect(depthFirstSearch(graph, 'A', 'J')).toEqual(['A', 'B', 'F', 'J']);
    });
});