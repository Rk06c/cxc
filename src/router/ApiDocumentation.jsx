import React from "react";
import '../styles/apidocumentation.css'; 

const ApiDocumentation = () => {
  return (
    <div className="api-container">
      <div className="api-header">
        <h1 className="api-title">
          <i className="fas fa-server"></i> Advanced REST API Service{" "}
          <span className="badge badge-api">RESTful</span>
          <span className="badge badge-version">v2.1</span>
        </h1>
      </div>

      {/* Overview Section */}
      <div className="api-section">
        <h2 className="section-title">
          <i className="fas fa-info-circle"></i> Overview
        </h2>
        <p>
          A high-performance REST API service built with Node.js, Express, and
          MongoDB. Features JWT authentication, rate limiting, request
          validation, and comprehensive documentation. Designed for scalability
          and security.
        </p>
      </div>

      {/* Authentication Section */}
      <div className="api-section">
        <h2 className="section-title">
          <i className="fas fa-key"></i> Authentication
        </h2>
        <p>
          All endpoints require authentication except where noted. Use JWT
          tokens in the Authorization header:
        </p>

        <div className="code-block">
          Authorization: Bearer &lt;your_jwt_token&gt;
        </div>
      </div>

      {/* API Endpoints */}
      <div className="api-section">
        <h2 className="section-title">
          <i className="fas fa-exchange-alt"></i> API Endpoints
        </h2>

        {/* Users Endpoint */}
        <div className="endpoint">
          <div>
            <span className="endpoint-method get">GET</span>
            <span className="endpoint-path">/api/v1/users</span>
          </div>
          <p className="endpoint-description">
            Retrieve a list of all users (Admin only)
          </p>

          <h3 className="response-title">Query Parameters</h3>
          <table className="param-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>limit</td>
                <td>number</td>
                <td>No</td>
                <td>Number of results per page (default: 10)</td>
              </tr>
              <tr>
                <td>page</td>
                <td>number</td>
                <td>No</td>
                <td>Page number (default: 1)</td>
              </tr>
            </tbody>
          </table>

          <h3 className="response-title">Success Response</h3>
          <div className="code-block">
            {`{
  "success": true,
  "count": 25,
  "pagination": { ... },
  "data": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    ...
  ]
}`}
          </div>
        </div>

        {/* Login Endpoint */}
        <div className="endpoint">
          <div>
            <span className="endpoint-method post">POST</span>
            <span className="endpoint-path">/api/v1/auth/login</span>
          </div>
          <p className="endpoint-description">
            Authenticate user and receive JWT token
          </p>

          <h3 className="response-title">Request Body</h3>
          <div className="code-block">
            {`{
  "email": "user@example.com",
  "password": "yourpassword"
}`}
          </div>

          <h3 className="response-title">Success Response</h3>
          <div className="code-block">
            {`{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": "24h"
}`}
          </div>
        </div>

        {/* Create Resource Endpoint */}
        <div className="endpoint">
          <div>
            <span className="endpoint-method post">POST</span>
            <span className="endpoint-path">/api/v1/resources</span>
          </div>
          <p className="endpoint-description">
            Create a new resource (Authenticated users only)
          </p>

          <h3 className="response-title">Request Body</h3>
          <table className="param-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>Yes</td>
                <td>Resource title (max 100 chars)</td>
              </tr>
              <tr>
                <td>description</td>
                <td>string</td>
                <td>No</td>
                <td>Detailed description</td>
              </tr>
              <tr>
                <td>tags</td>
                <td>string[]</td>
                <td>No</td>
                <td>Array of tags</td>
              </tr>
            </tbody>
          </table>

          <h3 className="response-title">Success Response (201 Created)</h3>
          <div className="code-block">
            {`{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "title": "New Resource",
    "description": "Detailed description...",
    "createdAt": "2023-07-15T10:00:00.000Z"
  }
}`}
          </div>
        </div>
      </div>

      {/* Example Request */}
      <div className="api-section">
        <h2 className="section-title">
          <i className="fas fa-code"></i> Example Request
        </h2>
        <div className="code-block">
          {`// Using fetch in JavaScript
const response = await fetch('https://api.example.com/v1/resources', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
  body: JSON.stringify({
    title: 'New API Resource',
    description: 'Example description'
  })
});

const data = await response.json();
console.log(data);`}
        </div>
      </div>

      {/* Error Handling */}
      <div className="api-section">
        <h2 className="section-title">
          <i className="fas fa-exclamation-triangle"></i> Error Handling
        </h2>
        <p>All errors follow the same response format:</p>

        <div className="code-block">
          {`{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { ... } // Optional additional details
  }
}`}
        </div>

        <h3 className="response-title">Common Error Codes</h3>
        <table className="param-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>HTTP Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UNAUTHORIZED</td>
              <td>401</td>
              <td>Invalid or missing authentication</td>
            </tr>
            <tr>
              <td>FORBIDDEN</td>
              <td>403</td>
              <td>Authenticated but not authorized</td>
            </tr>
            <tr>
              <td>NOT_FOUND</td>
              <td>404</td>
              <td>Resource not found</td>
            </tr>
            <tr>
              <td>VALIDATION_ERROR</td>
              <td>400</td>
              <td>Request validation failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiDocumentation;
