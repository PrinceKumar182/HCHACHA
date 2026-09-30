# 🛒 HCHACHA – MERN Stack E-Commerce Platform

A full-stack e-commerce web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). [HCHACHA](https://github.com/PrinceKumar182/HCHACHA) provides an end-to-end digital commerce solution featuring JWT-based authentication, product management, shopping cart state persistence, order processing, and an administrative control panel.

---

## 📌 Product Overview

Traditional offline retail stores encounter friction when expanding into digital commerce due to fragmented catalog systems, complex inventory handling, and lack of role-restricted admin tools. 

**HCHACHA** solves this by providing a unified web platform that integrates catalog management, shopping workflows, order tracking, and administrative controls into a single cohesive architecture.

### Primary Workflows Supported:
- **Customer Shopping Lifecycle**: Catalog discovery, item filtering, persistent shopping cart management, checkout, and historical order tracking.
- **Administrative Control Lifecycle**: Restricted admin access for catalog management (creating, updating, and removing products/categories) and order status monitoring.
- **Authentication & Authorization**: Token-based security isolating general user endpoints from administrative actions.

---

## 🏗️ System Architecture

The project leverages a client-server architecture where a Node/Express backend provides RESTful API endpoints, interacts with MongoDB via Mongoose, and serves a pre-compiled React frontend build directly from `client/build`:

```mermaid
flowchart TD
    Client[React.js Frontend Client] <-->|HTTP / REST API| Express[Express.js / Node.js Server]
    
    subgraph Express Backend Layer
        Express --> AuthMW[JWT & Admin Middleware]
        AuthMW --> Controllers[API Controllers]
        Controllers --> Helpers[Encryption & Helper Functions]
    end
    
    Controllers <-->|Mongoose ODM| DB[(MongoDB Database)]
