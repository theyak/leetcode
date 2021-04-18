/**
 * My directed graph class.
 * 
 * For an introduction to graphs, visit:
 * - https://trykv.medium.com/algorithms-on-graphs-lets-talk-depth-first-search-dfs-and-breadth-first-search-bfs-5250c31d831a
 * - https://trykv.medium.com/algorithms-on-graphs-directed-graphs-and-cycle-detection-3982dfbd11f5
 */

/**
 * Generic vertex object used by Graph class
 */
class Vertex {
	constructor(val) {
		// Value of vertex
		this.val = val;

		// Neighbors of vertex. Generally used in non tree graphs
		this.neighbors = [];

		// Vertexes coming into this vertex.
		// It is often useful to consider the "start" of a graph
		// to be a vertex with no incoming verticies.
		// Can also be used as a "parent" for binary trees.
		this.incoming = [];

		// Flag indicating if vertex was visited.
		// Used often while traversing a graph.
		this.visited = false;

		// Flag indicating if vertex is being explored.
		// Used often while traversing a graph.
		this.exploring = false;

		// Setting a color of vertex. This is used when you
		// need multiple states of a vertex while traversing a graph.
		this.color = null;
	}

	/**
	 * Adds a directional edge from this vertex to another vertex.
	 * @param {Vertex} v
	 */
	addEdge(v) {
		this.neighbors.push(v);
		v.incoming.push(this);
	}
}

class Graph {
	constructor() {
		this.verticies = new Map();
	}

	/**
	 * Adds a Vertex to the graph.
	 *
	 * @param {string|number} val
	 */
	addVertex(val) {
		let vertex = new Vertex(val);
		this.verticies.set(val, vertex);
		return vertex;
	}

	/**
	 * Adds a directed edge from one vertex to another
	 *
	 * @param {Vertex|string} v1 Add directed edge from this vertex
	 * @param {Vertex|string} v2 Vertex to connect edge from
	 */
	addEdge(v1, v2) {
		if (typeof(v1) === "string") {
			v1 = this.verticies.get(v1);
		}
		if (typeof v2 === "string") {
			v2 = this.verticies.get(v2);
		}

		if (v1 && v2) {
			v1.addEdge(v2);
		}
	}

	reset() {
		for (let v of this.verticies) {
			v[1].color = null;
			v[1].visited = false;
			v[1].exploring = false;
		}
	}

	/**
	 * Determines if a graph is cyclic
	 */
	isCyclic() {
		this.reset();

		for (let v of this.verticies) {
			let vertex = v[1];
			let cyclic = this.isCyclicFromVertex(vertex);
			if (cyclic) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check to see if a cycle is formed when traversing graph
	 * from a single vertex.
	 *
	 * @param {Vertex} v
	 * @returns boolean
	 */
	isCyclicFromVertex(v) {
		if (typeof v === "string") {
			v = this.getVertex(v);
		}

		if (v.visited) {
			return false;
		}

		if (v.exploring) {
			return true;
		}

		v.exploring = true;
		for (let n of v.neighbors) {
			let cyclic = this.isCyclicFromVertex(n);
			if (cyclic) {
				return true;
			}
		}

		v.exploring = false;
		v.visited = true;
		return false;
	}

	dfs(start, end, path = []) {
		this.reset();
		const paths = [];
		helper(start);
		return paths;

		function helper(v, path = []) {

			v.visited = true;
			path.push(v);

			if (v === end) {
				paths.push([...path]);
			} else {
				for (let n of v.neighbors) {
					if (!n.visited) {
						helper(n, path);
					}
				}
			}

			path.pop();
			v.visited = false;
		}
	}

	/**
	 * Perform a breadth first traversal on graph.
	 * BFS allows to find the shortest path in a graph
	 * This just tells us if we can reach one node from another.
	 *
	 * @param {Vertex} start Vertex to start at
	 * @param {Vertex} end The desired end goal/destination
	 * @param {Vertex[]} Path taken to reach node.
	 */
	bfs(start, end) {
		this.reset();

		start = this.getVertex(start);
		end = this.getVertex(end);

		let queue = [];
		let path = [start];

		queue.push([start, path]);

		start.visited = true;

		while (queue.length > 0) {
			let [v, p] = queue.shift();

			for (let n of v.neighbors) {
				if (n === end) {
					return p.concat(n);
				}

				if (!n.visited) {
					n.visited = true;
					n.predecesor = v; // This is another way to view path, by backtracking
					queue.push([n, p.concat(n)]);
				}
			}
		}
		return [];
	}

	/**
	 * Retrieve a vertex
	 *
	 * @param {string|Vertex} val
	 * @returns {Vertex}
	 */
	getVertex(val) {
		if (typeof val === "string") {
			return this.verticies.get(val);
		} else {
			return val;
		}
	}
}


const graph = new Graph();
const v1 = graph.addVertex("a");
const v2 = graph.addVertex("b");
const v3 = graph.addVertex("c");
const v4 = graph.addVertex("d");
const v5 = graph.addVertex("e");
const v6 = graph.addVertex("f");
graph.addEdge(v1, "b");
graph.addEdge(v2, "c");
graph.addEdge("c", "d");
graph.addEdge("c", "e");
graph.addEdge("d", "e");
graph.addEdge("e", "a");
//console.log(graph.verticies.get("e"));

console.log("Breadth First Search path");
console.log(graph.bfs(v1, v5).map(a => a.val));
//console.log(graph.verticies);
//console.log(graph.verticies)

console.log("Depth First Search paths");
let paths = graph.dfs(v1, v5);
for (let p of paths) {
	console.log(p.map(a => a.val));
}
