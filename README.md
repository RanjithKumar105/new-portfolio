# Next.js Portfolio Project

A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. 
This project features a fully automated DevOps pipeline using Jenkins, Docker, and Kubernetes.

## 🚀 Technologies Used

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion
- **Language:** TypeScript
- **CI/CD Pipeline:** GitHub Webhooks → Jenkins → Docker → Kubernetes
- **Monitoring:** Prometheus & Grafana (Planned)

## 🛠️ Getting Started Locally

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🐳 Docker Deployment

This project uses a highly optimized multi-stage Dockerfile leveraging Next.js `standalone` mode to keep the image size minimal.

To build the Docker image locally:
```bash
docker build -t portfolio:latest .
```

To run the container:
```bash
docker run -p 3000:3000 portfolio:latest
```

## ⚙️ DevOps Pipeline (Jenkins)

The included `Jenkinsfile` handles the Continuous Integration pipeline:
1. **Install Dependencies:** `npm ci`
2. **Lint:** `npm run lint`
3. **Build:** `npm run build`
4. **Docker Build:** `docker build -t portfolio:latest .`
5. **Cleanup:** `cleanWs()` clears the workspace after execution.

## 📁 Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components and sections
- `/data` - Centralized content and configuration
- `/public` - Static assets (images, fonts, resume)