# LabWatcher

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

**LabWatcher** is a lightweight, open-source telemetry and server monitoring service specifically designed for homelab environments.

Unlike resource-intensive monitoring stacks, LabWatcher is built with a focus on simplicity and efficiency. It operates as a minimal Node.js REST API that exposes essential hardware metrics, facilitating straightforward integration with external applications, custom dashboards, and automated scripts.

## Key Features

- **Minimal Resource Consumption:** Designed to operate with a negligible system footprint, ensuring the host server is not burdened by the monitoring process.
- **RESTful API Architecture:** Exposes real-time hardware data systematically via standard `GET` requests.
- **Hardware Monitoring:** Calculates a 5-second average for CPU load and provides accurate, real-time memory usage statistics.
- **Telegram Bot Integration (Optional):** Includes a supplementary Python client allowing administrators to query server status remotely via the Telegram messaging platform.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Python 3.x](https://www.python.org/) _(Optional, required only for the Telegram bot client)_

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/keremdemirgun/LabWatcher.git
   cd LabWatcher
   ```

2. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

3. **Start the API Server:**
   ```bash
   # For production environments
   npm start

   # For development environments (with watch mode enabled)
   npm run dev
   ```
   The server will initialize on `http://localhost:3000` (or the `PORT` specified in your `.env` file).

## API Endpoints

LabWatcher provides structured endpoints for seamless system integration.

| Endpoint       | Method | Description                                                | Response Example                               |
| :------------- | :----: | :--------------------------------------------------------- | :--------------------------------------------- |
| `/cpu/average` | `GET`  | Returns the server's 5-second average CPU load percentage. | `12.45`                                        |
| `/ram/usage`   | `GET`  | Returns the total and currently available RAM in bytes.    | `{ "total": 16503902208, "free": 4503902208 }` |

_Example usage via cURL:_

```bash
curl http://localhost:3000/cpu/average
```

## Telegram Bot (Optional Client)

The repository includes a Python-based Telegram bot (`tg-bot.py`) functioning as a proof-of-concept client. This component enables remote verification of the server status.

1. **Install Python requirements:**

   ```bash
   pip install pyTelegramBotAPI requests python-dotenv
   ```

2. **Configuration:**
   Create a `.env` file in the root directory and define your bot token:

   ```env
   TOKEN=your_telegram_bot_token_here
   ```

3. **Execution:**
   ```bash
   python tg-bot.py
   ```

_Available Commands:_ `/cpu`, `/ram`

## Roadmap

LabWatcher is currently under active development. Planned enhancements include:

- [ ] **Dockerization:** Implementation of Docker support for streamlined, containerized deployments.
- [ ] **Container Monitoring:** Integration of metrics tracking for active Docker containers.
- [ ] **Advanced Bot Features:** Expansion of the Python bot to include automated alerting mechanisms and detailed reporting.
- [ ] **Storage Metrics:** Introduction of disk usage and I/O monitoring capabilities.

## Contributing

Contributions, issue reports, and feature requests are welcome. Please refer to the [issues page](https://github.com/keremdemirgun/LabWatcher/issues) for ongoing discussions and contribution guidelines.

## License

This software is distributed under the **ISC License**.
