import React, { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/dsasection.css';

const DSASection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const dataStructures = [
    {
      id: 'array',
      icon: faThList,
      title: 'Array',
      description: 'An array is a collection of items stored at contiguous memory locations. The items can be of the same type or different types.',
      timeComplexity: {
        access: 'O(1)',
        search: 'O(n)',
        insertion: 'O(n) (at end: O(1), at beginning/middle: O(n))',
        deletion: 'O(n)'
      },
      visualization: (
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
      ),
      code: `// Array Operations
const arr = [5, 8, 3, 1, 9, 4, 7, 2];

// Access element at index 2
console.log(arr[2]); // Output: 3

// Insert element at end
arr.push(6);

// Remove element from end
arr.pop();

// Insert element at beginning
arr.unshift(0);

// Remove element from beginning
arr.shift();

// Find index of element
const index = arr.indexOf(9); // Returns 4`
    },
    {
      id: 'linked-list',
      icon: faCodeBranch,
      title: 'Linked List',
      description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. Each element (node) contains a data field and a reference (link) to the next node.',
      timeComplexity: {
        access: 'O(n)',
        search: 'O(n)',
        insertion: 'O(1) at head, O(n) at tail',
        deletion: 'O(1) at head, O(n) at tail'
      },
      visualization: (
        <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill="#00ff8f"/>
            </marker>
          </defs>
          
          {/* Nodes */}
          <rect x="50" y="50" width="60" height="40" rx="5" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
          <text x="80" y="75" fill="#ffffff" textAnchor="middle">5</text>
          
          <rect x="170" y="50" width="60" height="40" rx="5" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
          <text x="200" y="75" fill="#ffffff" textAnchor="middle">8</text>
          
          <rect x="290" y="50" width="60" height="40" rx="5" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
          <text x="320" y="75" fill="#ffffff" textAnchor="middle">3</text>
          
          <rect x="410" y="50" width="60" height="40" rx="5" fill="#111" stroke="#00e5ff" strokeWidth="2"/>
          <text x="440" y="75" fill="#ffffff" textAnchor="middle">1</text>
          
          {/* Arrows */}
          <line x1="110" y1="70" x2="170" y2="70" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
          <line x1="230" y1="70" x2="290" y2="70" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
          <line x1="350" y1="70" x2="410" y2="70" stroke="#00ff8f" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Null at end */}
          <text x="490" y="75" fill="#ffffff" textAnchor="middle">NULL</text>
        </svg>
      ),
      code: `// Linked List Implementation
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add element to end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert at position
  insertAt(data, index) {
    if (index < 0 || index > this.size) return false;

    const newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }
}`
    },
    // Add other data structures similarly...
  ];

  return (
    <section className="dsa-section">
      <h1>
        <FontAwesomeIcon icon={faBrain} /> <FontAwesomeIcon icon={faDiagramProject} /> Data Structures & Algorithms
      </h1>

      {dataStructures.map((ds) => (
        <div className={`accordion ${activeAccordion === ds.id ? 'active' : ''}`} id={ds.id} key={ds.id}>
          <div className="accordion-header" onClick={() => toggleAccordion(ds.id)}>
            <h2><FontAwesomeIcon icon={ds.icon} /> {ds.title}</h2>
            <div className="accordion-icon">{activeAccordion === ds.id ? '-' : '+'}</div>
          </div>
          {activeAccordion === ds.id && (
            <div className="accordion-content">
              <div className="algorithm-info">
                <p>{ds.description}</p>
              </div>

              <div className="time-complexity">
                Time Complexities:<br />
                Access: <span>{ds.timeComplexity.access}</span><br />
                Search: <span>{ds.timeComplexity.search}</span><br />
                Insertion: <span>{ds.timeComplexity.insertion}</span><br />
                Deletion: <span>{ds.timeComplexity.deletion}</span>
              </div>

              <div className="visualization">
                {ds.visualization}
              </div>

              <div className="code-block">
                {ds.code.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default DSASection;