import React, { useState } from 'react';
import '../styles/dsa2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faDiagramProject, 
  faThList, 
  faCodeBranch, 
  faCubes, 
  faForward, 
  faHashtag, 
  faSitemap, 
  faChartLine, 
  faRoute, 
  faBolt 
} from '@fortawesome/free-solid-svg-icons';

const Dsa2 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="dsa-container">
      <section className="dsa-section">
        <h1>
          <FontAwesomeIcon icon={faBrain} /> <FontAwesomeIcon icon={faDiagramProject} /> Data Structures & Algorithms
        </h1>

        <ArrayAccordion 
          isActive={activeAccordion === 'array'} 
          onToggle={() => toggleAccordion('array')} 
        />
        
        <LinkedListAccordion 
          isActive={activeAccordion === 'linked-list'} 
          onToggle={() => toggleAccordion('linked-list')} 
        />
        
        <StackAccordion 
          isActive={activeAccordion === 'stack'} 
          onToggle={() => toggleAccordion('stack')} 
        />
        
        <QueueAccordion 
          isActive={activeAccordion === 'queue'} 
          onToggle={() => toggleAccordion('queue')} 
        />
        
        <HashTableAccordion 
          isActive={activeAccordion === 'hash-table'} 
          onToggle={() => toggleAccordion('hash-table')} 
        />
        
        <BinarySearchTreeAccordion 
          isActive={activeAccordion === 'binary-search-tree'} 
          onToggle={() => toggleAccordion('binary-search-tree')} 
        />
        
        <GraphAccordion 
          isActive={activeAccordion === 'graph'} 
          onToggle={() => toggleAccordion('graph')} 
        />
        
        <DijkstraAccordion 
          isActive={activeAccordion === 'dijkstra'} 
          onToggle={() => toggleAccordion('dijkstra')} 
        />
        
        <BinarySearchAccordion 
          isActive={activeAccordion === 'binary-search'} 
          onToggle={() => toggleAccordion('binary-search')} 
        />
        
        <QuickSortAccordion 
          isActive={activeAccordion === 'quick-sort'} 
          onToggle={() => toggleAccordion('quick-sort')} 
        />
      </section>
    </div>
  );
};

// Array Component
const ArrayAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faThList} /> Array</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>An array is a collection of items stored at contiguous memory locations. The items can be of the same type or different types.</p>
        </div>

        <div className="time-complexity">
          Time Complexities:<br />
          Access: <span>O(1)</span><br />
          Search: <span>O(n)</span><br />
          Insertion: <span>O(n)</span> (at end: O(1), at beginning/middle: O(n))<br />
          Deletion: <span>O(n)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="80" y="70" fill="#ffffff" textAnchor="middle">5</text>
            <rect x="110" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="140" y="70" fill="#ffffff" textAnchor="middle">8</text>
            <rect x="170" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="200" y="70" fill="#ffffff" textAnchor="middle">3</text>
            <rect x="230" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="260" y="70" fill="#ffffff" textAnchor="middle">1</text>
            <rect x="290" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="320" y="70" fill="#ffffff" textAnchor="middle">9</text>
            <rect x="350" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="380" y="70" fill="#ffffff" textAnchor="middle">4</text>
            <rect x="410" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="440" y="70" fill="#ffffff" textAnchor="middle">7</text>
            <rect x="470" y="30" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="500" y="70" fill="#ffffff" textAnchor="middle">2</text>
          </svg>
        </div>

        <div className="code-block">
          // Array Operations<br />
          const arr = [5, 8, 3, 1, 9, 4, 7, 2];<br />
          <br />
          // Access element at index 2<br />
          console.log(arr[2]); // Output: 3<br />
          <br />
          // Insert element at end<br />
          arr.push(6);<br />
          <br />
          // Remove element from end<br />
          arr.pop();<br />
          <br />
          // Insert element at beginning<br />
          arr.unshift(0);<br />
          <br />
          // Remove element from beginning<br />
          arr.shift();<br />
          <br />
          // Find index of element<br />
          const index = arr.indexOf(9); // Returns 4
        </div>
      </div>
    </div>
  );
};

// Linked List Component
const LinkedListAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faCodeBranch} /> Linked List</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A linked list is a linear data structure where elements are not stored at contiguous memory locations. Each element (node) contains a data field and a reference (link) to the next node.</p>
        </div>

        <div className="time-complexity">
          Time Complexities:<br />
          Access: <span>O(n)</span><br />
          Search: <span>O(n)</span><br />
          Insertion: <span>O(1)</span> at head, <span>O(n)</span> at tail<br />
          Deletion: <span>O(1)</span> at head, <span>O(n)</span> at tail
        </div>

        <div className="visualization">
          <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#00ff8f"/>
              </marker>
            </defs>
            
            {/* Nodes */}
            <rect x="50" y="50" width="60" height="40" rx="5" className="linked-list-node"/>
            <text x="80" y="75" className="label">5</text>
            
            <rect x="170" y="50" width="60" height="40" rx="5" className="linked-list-node"/>
            <text x="200" y="75" className="label">8</text>
            
            <rect x="290" y="50" width="60" height="40" rx="5" className="linked-list-node"/>
            <text x="320" y="75" className="label">3</text>
            
            <rect x="410" y="50" width="60" height="40" rx="5" className="linked-list-node"/>
            <text x="440" y="75" className="label">1</text>
            
            {/* Arrows */}
            <line x1="110" y1="70" x2="170" y2="70" className="linked-list-arrow"/>
            <line x1="230" y1="70" x2="290" y2="70" className="linked-list-arrow"/>
            <line x1="350" y1="70" x2="410" y2="70" className="linked-list-arrow"/>
            
            {/* Null at end */}
            <text x="490" y="75" className="label">NULL</text>
          </svg>
        </div>

        <div className="code-block">
          // Linked List Implementation<br />
          class Node {'{'}<br />
          &nbsp;&nbsp;constructor(data) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.data = data;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.next = null;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}<br />
          <br />
          class LinkedList {'{'}<br />
          &nbsp;&nbsp;constructor() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.head = null;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.size = 0;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Add element to end<br />
          &nbsp;&nbsp;append(data) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const newNode = new Node(data);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (!this.head) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.head = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let current = this.head;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (current.next) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.next;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current.next = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.size++;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Insert at position<br />
          &nbsp;&nbsp;insertAt(data, index) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (index {'<'} 0 || index {'>'} this.size) return false;<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const newNode = new Node(data);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let current = this.head;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let previous;<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (index === 0) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newNode.next = current;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.head = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let i = 0;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (i {'<'} index) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;previous = current;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.next;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newNode.next = current;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;previous.next = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.size++;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Stack Component
const StackAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faCubes} /> Stack</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added and removed from the same end (called the top).</p>
        </div>

        <div className="time-complexity">
          Time Complexities:<br />
          Push: <span>O(1)</span><br />
          Pop: <span>O(1)</span><br />
          Peek: <span>O(1)</span><br />
          Search: <span>O(n)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="100" height="40" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="100" y="75" fill="#ffffff" textAnchor="middle">Push</text>
            <rect x="50" y="100" width="100" height="40" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="100" y="125" fill="#ffffff" textAnchor="middle">Pop</text>
            <rect x="50" y="150" width="100" height="40" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="100" y="175" fill="#ffffff" textAnchor="middle">Peek</text>
            <rect x="50" y="200" width="100" height="40" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="100" y="225" fill="#ffffff" textAnchor="middle">Top</text>
            <line x1="100" y1="240" x2="100" y2="270" stroke="#00ff8f" strokeWidth="2"/>
            <text x="100" y="290" fill="#ffffff" textAnchor="middle">Stack</text>
          </svg>
        </div>

        <div className="code-block">
          // Stack Implementation<br />
          class Stack {'{'}<br />
          &nbsp;&nbsp;constructor() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.items = [];<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Add element to top of stack<br />
          &nbsp;&nbsp;push(element) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.items.push(element);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Remove element from top of stack<br />
          &nbsp;&nbsp;pop() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (this.isEmpty()) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Underflow";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.pop();<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// View top element without removing<br />
          &nbsp;&nbsp;peek() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items[this.items.length - 1];<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Check if stack is empty<br />
          &nbsp;&nbsp;isEmpty() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.length === 0;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Get stack size<br />
          &nbsp;&nbsp;size() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.length;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Queue Component
const QueueAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faForward} /> Queue</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.</p>
        </div>

        <div className="time-complexity">
          Time Complexities:<br />
          Enqueue: <span>O(1)</span><br />
          Dequeue: <span>O(1)</span><br />
          Front: <span>O(1)</span><br />
          Search: <span>O(n)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="80" y="85" fill="#ffffff" textAnchor="middle">Front</text>
            <rect x="120" y="50" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="150" y="85" fill="#ffffff" textAnchor="middle">Data</text>
            <rect x="190" y="50" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="220" y="85" fill="#ffffff" textAnchor="middle">Data</text>
            <rect x="260" y="50" width="60" height="60" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="290" y="85" fill="#ffffff" textAnchor="middle">Rear</text>
            <line x1="110" y1="80" x2="120" y2="80" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="180" y1="80" x2="190" y2="80" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="250" y1="80" x2="260" y2="80" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
          </svg>
        </div>

        <div className="code-block">
          // Queue Implementation<br />
          class Queue {'{'}<br />
          &nbsp;&nbsp;constructor() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.items = [];<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Add element to the queue<br />
          &nbsp;&nbsp;enqueue(element) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.items.push(element);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Remove element from the queue<br />
          &nbsp;&nbsp;dequeue() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (this.isEmpty()) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Underflow";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.shift();<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Get front element<br />
          &nbsp;&nbsp;front() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (this.isEmpty()) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "No elements in Queue";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items[0];<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Check if queue is empty<br />
          &nbsp;&nbsp;isEmpty() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.length === 0;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Get queue size<br />
          &nbsp;&nbsp;size() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return this.items.length;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Hash Table Component
const HashTableAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faHashtag} /> Hash Table</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A hash table is a data structure that implements an associative array abstract data type, where keys are mapped to values using a hash function.</p>
        </div>

        <div className="time-complexity">
          Time Complexities (average case):<br />
          Insert: <span>O(1)</span><br />
          Delete: <span>O(1)</span><br />
          Search: <span>O(1)</span><br />
          Worst case (all collisions): <span>O(n)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
            {/* Hash table structure */}
            <rect x="50" y="50" width="400" height="40" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
            <text x="250" y="75" fill="#ffffff" textAnchor="middle">Hash Table</text>
            
            {/* Buckets */}
            <rect x="50" y="100" width="80" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="90" y="120" fill="#ffffff" textAnchor="middle">0</text>
            <rect x="130" y="100" width="80" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="170" y="120" fill="#ffffff" textAnchor="middle">1</text>
            <rect x="210" y="100" width="80" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="250" y="120" fill="#ffffff" textAnchor="middle">2</text>
            <rect x="290" y="100" width="80" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="330" y="120" fill="#ffffff" textAnchor="middle">3</text>
            <rect x="370" y="100" width="80" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="410" y="120" fill="#ffffff" textAnchor="middle">4</text>
            
            {/* Key-value pairs */}
            <rect x="70" y="150" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="90" y="170" fill="#ffffff" textAnchor="middle">"A"</text>
            <rect x="70" y="190" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="90" y="210" fill="#ffffff" textAnchor="middle">1</text>
            
            <rect x="150" y="150" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="170" y="170" fill="#ffffff" textAnchor="middle">"B"</text>
            <rect x="150" y="190" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="170" y="210" fill="#ffffff" textAnchor="middle">2</text>
            
            <rect x="230" y="150" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="250" y="170" fill="#ffffff" textAnchor="middle">"C"</text>
            <rect x="230" y="190" width="40" height="30" fill="#111" stroke="#00e5ff" strokeWidth="1"/>
            <text x="250" y="210" fill="#ffffff" textAnchor="middle">3</text>
            
            {/* Hash function */}
            <text x="250" y="30" fill="#00ff8f" textAnchor="middle">hashFunction(key) → index</text>
          </svg>
        </div>

        <div className="code-block">
          // Hash Table Implementation<br />
          class HashTable {'{'}<br />
          &nbsp;&nbsp;constructor(size = 53) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.keyMap = new Array(size);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;_hash(key) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let total = 0;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const PRIME = 31;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i {'<'} Math.min(key.length, 100); i++) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const char = key[i];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const value = char.charCodeAt(0) - 96;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total = (total * PRIME + value) % this.keyMap.length;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return total;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;set(key, value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const index = this._hash(key);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (!this.keyMap[index]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.keyMap[index] = [];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.keyMap[index].push([key, value]);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;get(key) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const index = this._hash(key);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (this.keyMap[index]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i {'<'} this.keyMap[index].length; i++) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (this.keyMap[index][i][0] === key) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.keyMap[index][i][1];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return undefined;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Binary Search Tree Component
const BinarySearchTreeAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faSitemap} /> Binary Search Tree</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A binary search tree (BST) is a node-based binary tree where each node has at most two children. For each node, all elements in the left subtree are less than the node's value, and all elements in the right subtree are greater.</p>
        </div>

        <div className="time-complexity">
          Time Complexities (average case):<br />
          Access: <span>O(log n)</span><br />
          Search: <span>O(log n)</span><br />
          Insertion: <span>O(log n)</span><br />
          Deletion: <span>O(log n)</span><br />
          Worst case (unbalanced tree): <span>O(n)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#00ff8f"/>
              </marker>
            </defs>
            
            {/* Nodes */}
            <circle cx="250" cy="50" r="20" className="node"/>
            <text x="250" y="55" className="label">50</text>
            
            <circle cx="150" cy="120" r="20" className="node"/>
            <text x="150" y="125" className="label">30</text>
            
            <circle cx="350" cy="120" r="20" className="node"/>
            <text x="350" y="125" className="label">70</text>
            
            <circle cx="100" cy="190" r="20" className="node"/>
            <text x="100" y="195" className="label">20</text>
            
            <circle cx="200" cy="190" r="20" className="node"/>
            <text x="200" y="195" className="label">40</text>
            
            <circle cx="300" cy="190" r="20" className="node"/>
            <text x="300" y="195" className="label">60</text>
            
            <circle cx="400" cy="190" r="20" className="node"/>
            <text x="400" y="195" className="label">80</text>
            
            {/* Edges */}
            <line x1="230" y1="70" x2="160" y2="100" className="edge"/>
            <line x1="270" y1="70" x2="340" y2="100" className="edge"/>
            <line x1="130" y1="140" x2="110" y2="170" className="edge"/>
            <line x1="170" y1="140" x2="190" y2="170" className="edge"/>
            <line x1="330" y1="140" x2="310" y2="170" className="edge"/>
            <line x1="370" y1="140" x2="390" y2="170" className="edge"/>
          </svg>
        </div>

        <div className="code-block">
          // Binary Search Tree Implementation<br />
          class Node {'{'}<br />
          &nbsp;&nbsp;constructor(value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.value = value;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.left = null;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.right = null;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}<br />
          <br />
          class BinarySearchTree {'{'}<br />
          &nbsp;&nbsp;constructor() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.root = null;<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;insert(value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const newNode = new Node(value);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (!this.root) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.root = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let current = this.root;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;while (true) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (value === current.value) return undefined;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (value {'<'} current.value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!current.left) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current.left = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.left;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!current.right) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current.right = newNode;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.right;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;find(value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (!this.root) return false;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let current = this.root;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;let found = false;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;while (current && !found) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (value {'<'} current.value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.left;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'} else if (value {'>'} current.value) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.right;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;found = true;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return found ? current : false;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Graph Component
const GraphAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faChartLine} /> Graph</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>A graph is a non-linear data structure consisting of nodes (vertices) and edges that connect these vertices. Graphs can be directed or undirected, and weighted or unweighted.</p>
        </div>

        <div className="time-complexity">
          Time Complexities (for common operations with adjacency list):<br />
          Add Vertex: <span>O(1)</span><br />
          Add Edge: <span>O(1)</span><br />
          Remove Vertex: <span>O(V + E)</span><br />
          Remove Edge: <span>O(E)</span><br />
          Query: <span>O(V + E)</span>
        </div>

        <div className="visualization">
          <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#00ff8f"/>
              </marker>
            </defs>
            
            {/* Nodes */}
            <circle cx="100" cy="100" r="20" className="node"/>
            <text x="100" y="105" className="label">A</text>
            
            <circle cx="200" cy="50" r="20" className="node"/>
            <text x="200" y="55" className="label">B</text>
            
            <circle cx="300" cy="100" r="20" className="node"/>
            <text x="300" y="105" className="label">C</text>
            
            <circle cx="250" cy="200" r="20" className="node"/>
            <text x="250" y="205" className="label">D</text>
            
            <circle cx="150" cy="200" r="20" className="node"/>
            <text x="150" y="205" className="label">E</text>
            
            {/* Edges */}
            <line x1="120" y1="100" x2="180" y2="60" className="edge"/>
            <line x1="220" y1="60" x2="280" y2="100" className="edge"/>
            <line x1="300" y1="120" x2="260" y2="180" className="edge"/>
            <line x1="240" y1="200" x2="160" y2="200" className="edge"/>
            <line x1="140" y1="180" x2="120" y2="120" className="edge"/>
            <line x1="170" y1="70" x2="170" y2="180" className="edge"/>
          </svg>
        </div>

        <div className="code-block">
          // Graph Implementation (Adjacency List)<br />
          class Graph {'{'}<br />
          &nbsp;&nbsp;constructor() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList = {};<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;addVertex(vertex) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (!this.adjacencyList[vertex]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList[vertex] = [];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;addEdge(vertex1, vertex2) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList[vertex1].push(vertex2);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList[vertex2].push(vertex1);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;removeEdge(vertex1, vertex2) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v =&nbsp;v {'>'} v !== vertex2<br />
          &nbsp;&nbsp;&nbsp;&nbsp;);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v => v !== vertex1<br />
          &nbsp;&nbsp;&nbsp;&nbsp;);<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;removeVertex(vertex) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;while (this.adjacencyList[vertex].length) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const adjacentVertex = this.adjacencyList[vertex].pop();<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.removeEdge(vertex, adjacentVertex);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;delete this.adjacencyList[vertex];<br />
          &nbsp;&nbsp;{'}'}<br />
          <br />
          &nbsp;&nbsp;// Depth First Search (Recursive)<br />
          &nbsp;&nbsp;DFSRecursive(start) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const result = [];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const visited = {};<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const adjacencyList = this.adjacencyList;<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;(function dfs(vertex) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!vertex) return null;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[vertex] = true;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.push(vertex);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adjacencyList[vertex].forEach(neighbor => {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!visited[neighbor]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dfs(neighbor);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br />
          &nbsp;&nbsp;&nbsp;&nbsp;})(start);<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return result;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Dijkstra's Algorithm Component
const DijkstraAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faRoute} /> Dijkstra's Algorithm</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.</p>
        </div>

        <div className="time-complexity">
          Time Complexity: <span>O((V + E) log V)</span> with priority queue
        </div>

        <div className="visualization">
          <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#00ff8f"/>
              </marker>
            </defs>

            {/* Edges */}
            <line x1="130" y1="160" x2="240" y2="80" className="edge"/>
            <line x1="130" y1="160" x2="240" y2="240" className="edge"/>
            <line x1="270" y1="80" x2="380" y2="150" className="edge"/>
            <line x1="270" y1="240" x2="380" y2="170" className="edge"/>
            <line x1="410" y1="150" x2="520" y2="150" className="edge"/>
            <line x1="550" y1="150" x2="660" y2="150" className="edge"/>

            {/* Nodes */}
            <circle cx="100" cy="160" r="30" className="node"/>
            <text x="100" y="165" className="label">A</text>

            <circle cx="250" cy="80" r="30" className="node"/>
            <text x="250" y="85" className="label">B</text>

            <circle cx="250" cy="240" r="30" className="node"/>
            <text x="250" y="245" className="label">C</text>

            <circle cx="400" cy="150" r="30" className="node"/>
            <text x="400" y="155" className="label">D</text>

            <circle cx="550" cy="150" r="30" className="node"/>
            <text x="550" y="155" className="label">E</text>

            <circle cx="670" cy="150" r="30" className="node"/>
            <text x="670" y="155" className="label">F</text>
          </svg>
        </div>

        <div className="code-block">
          // Dijkstra's Algorithm Implementation<br />
          function dijkstra(graph, start) {'{'}<br />
          &nbsp;&nbsp;const distances = {};<br />
          &nbsp;&nbsp;const pq = new PriorityQueue();<br />
          &nbsp;&nbsp;distances[start] = 0;<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;// Initialize distances with Infinity<br />
          &nbsp;&nbsp;for (const vertex in graph) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (vertex !== start) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;distances[vertex] = Infinity;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;pq.enqueue(vertex, distances[vertex]);<br />
          &nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;while (!pq.isEmpty()) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const current = pq.dequeue().val;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;for (const neighbor in graph[current]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const distance = distances[current] + graph[current][neighbor];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (distance {'<'} distances[neighbor]) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;distances[neighbor] = distance;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pq.enqueue(neighbor, distance);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;return distances;<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Binary Search Component
const BinarySearchAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faBrain} /> Binary Search</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item.</p>
        </div>

        <div className="time-complexity">
          Time Complexity: <span>O(log n)</span>
        </div>

        <div className="code-block">
          // Binary Search Implementation<br />
          function binarySearch(arr, target) {'{'}<br />
          &nbsp;&nbsp;let left = 0;<br />
          &nbsp;&nbsp;let right = arr.length - 1;<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;while (left {'<='} right) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const mid = Math.floor((left + right) / 2);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] === target) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return mid;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] {'<'} target) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left = mid + 1;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right = mid - 1;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;return -1; // Target not found<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

// Quick Sort Component
const QuickSortAccordion = ({ isActive, onToggle }) => {
  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2><FontAwesomeIcon icon={faBolt} /> Quick Sort</h2>
        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <div className="algorithm-info">
          <p>QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.</p>
        </div>

        <div className="time-complexity">
          Time Complexity: <span>O(n log n)</span> average case, <span>O(n²)</span> worst case
        </div>

        <div className="code-block">
          // Quick Sort Implementation<br />
          function quickSort(arr, left = 0, right = arr.length - 1) {'{'}<br />
          &nbsp;&nbsp;if (left {'<'} right) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;const pivotIndex = partition(arr, left, right);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, left, pivotIndex - 1);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, pivotIndex + 1, right);<br />
          &nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;return arr;<br />
          {'}'}<br />
          <br />
          function partition(arr, left, right) {'{'}<br />
          &nbsp;&nbsp;const pivot = arr[right];<br />
          &nbsp;&nbsp;let i = left;<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;for (let j = left; j {'<'} right; j++) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] {'<'} pivot) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[arr[i], arr[j]] = [arr[j], arr[i]];<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;<br />
          &nbsp;&nbsp;[arr[i], arr[right]] = [arr[right], arr[i]];<br />
          &nbsp;&nbsp;return i;<br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

export default Dsa2;