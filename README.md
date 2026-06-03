# 🔄 CI/CD Pipeline App

> A Node.js (Express) application with a fully automated CI/CD pipeline built using GitHub Actions and Docker. Every push to `main` automatically builds, tests, containerizes, and publishes the app to Docker Hub — no manual deployment steps.

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

## 📋 Overview

Manually building and deploying applications is slow and inconsistent. This project demonstrates a complete CI/CD workflow that automates the entire process — from code checkout to publishing a Docker image — triggered automatically on every push to the main branch.

## 🛠️ Tech Stack

- **CI/CD Tool:** GitHub Actions
- **Containerization:** Docker
- **Runtime:** Node.js 20
- **Framework:** Express
- **Registry:** Docker Hub

## ⚙️ Pipeline Workflow

The pipeline (`.github/workflows/ci.yml`) runs on every push or pull request to `main`:

1. **Checkout code** — pulls the latest source
2. **Set up Node.js 20** — prepares the runtime environment
3. **Install dependencies** — runs `npm install`
4. **Run tests** — executes the test step
5. **Login to Docker Hub** — authenticates securely using GitHub Secrets
6. **Build & push Docker image** — builds the container and pushes it to Docker Hub

## 🌐 API Endpoints

| Endpoint  | Method | Description                  |
| --------- | ------ | ---------------------------- |
| `/`       | GET    | Returns app status & version |
| `/health` | GET    | Health check endpoint        |

## 📁 Project Structure

```
cicd-pipeline-app/
├── .github/
│   └── workflows/
│       └── ci.yml       # CI/CD pipeline definition
├── app.js               # Express application
├── package.json         # Dependencies & scripts
├── Dockerfile           # Container image definition
└── README.md            # Project documentation
```

## 🔐 Required Secrets

To run the pipeline, configure these secrets in your repo
(**Settings → Secrets and variables → Actions**):

| Secret               | Description                  |
| -------------------- | ---------------------------- |
| `DOCKERHUB_USERNAME` | Your Docker Hub username     |
| `DOCKERHUB_TOKEN`    | Your Docker Hub access token |

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/isuruchathushka724-dev/cicd-pipeline-app
cd cicd-pipeline-app

# Install dependencies
npm install

# Run the app
npm start

# Or build & run with Docker
docker build -t cicd-pipeline-app .
docker run -p 3000:3000 cicd-pipeline-app
```

The app will be available at `http://localhost:3000`.

## ✅ Best Practices Used

- Credentials stored as GitHub Secrets — never hardcoded
- Pipeline triggers on both push and pull requests
- Containerized for consistent, portable deployments
- Pinned action versions (`@v4`, `@v5`) for reproducible builds
- Includes a `/health` endpoint for container health checks

## 👨‍💻 Author

**Isuru Chathushka** — Undergraduate @ Horizon Campus LK
🔗 [LinkedIn](https://www.linkedin.com/in/isuru-chathushka)
