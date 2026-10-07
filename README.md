# LabWatcher

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**LabWatcher** is a lightweight, modular RESTful API and client system designed to monitor hardware resources and services within a homelab environment. Built with Node.js and Express, it serves real-time system metrics to a dedicated client application.

## Features

- **Real-Time Monitoring:** Retrieves accurate, up-to-the-second data regarding CPU load and memory utilization.
- **Modular Architecture:** Implements a strict separation of concerns utilizing Routes, Controllers, and Services.
- **Homelab Optimized:** Maintains a minimal resource footprint, specifically designed for headless execution on Linux server environments.
- **Extensible REST API:** Provides standard JSON endpoints suitable for consumption by any external client application or dashboard.

## Architecture

LabWatcher is structured upon a decoupled architecture:

1. **API Server (Node.js/Express):** Functions as the core engine. It utilizes the `systeminformation` package to directly query the host operating system for hardware metrics and exposes this data via REST endpoints.
2. **Client Script (Python):** (In Development) A lightweight client designed to fetch, format, and display metrics from the API server.

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/keremdemirgun/labwatcher.git
   cd labwatcher
   ```
