# Kubernetes Deployment — Next.js Portfolio

Local Kubernetes deployment using **Minikube** on **WSL 2** with **Docker**.

---

## Prerequisites

- WSL 2 (Ubuntu) installed and running
- Docker Desktop installed (with WSL 2 integration enabled)
- Minikube installed inside WSL 2
- kubectl installed inside WSL 2

> **Note:** This guide assumes Minikube and kubectl are already installed.  
> If not, follow the official docs:  
> - [Minikube Installation](https://minikube.sigs.k8s.io/docs/start/)  
> - [kubectl Installation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

---

## 1. Start Minikube

```bash
minikube start --driver=docker
```

Verify the cluster is running:

```bash
minikube status
```

Expected output:

```
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

---

## 2. Build the Docker Image Inside Minikube

Minikube runs its own Docker daemon. To make your local image available to Minikube, you must build **inside Minikube's Docker environment**.

### Step 1: Point your shell to Minikube's Docker daemon

```bash
eval $(minikube docker-env)
```

### Step 2: Build the Docker image

Navigate to the portfolio project root (where the `Dockerfile` is located):

```bash
docker build -t portfolio:test .
```

### Step 3: Verify the image exists in Minikube

```bash
docker images | grep portfolio
```

You should see `portfolio` with tag `test`.

---

## 3. Deploy to Kubernetes

Apply the Kubernetes manifests:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Or apply all files in the `k8s/` directory at once:

```bash
kubectl apply -f k8s/
```

---

## 4. Verify the Deployment

### Check the Pod

```bash
kubectl get pods
```

Expected output:

```
NAME                                    READY   STATUS    RESTARTS   AGE
portfolio-deployment-xxxxxxxxxx-xxxxx   1/1     Running   0          30s
```

If the pod is not in `Running` state, check the logs:

```bash
kubectl logs -l app=portfolio
```

Or describe the pod for detailed events:

```bash
kubectl describe pod -l app=portfolio
```

### Check the Deployment

```bash
kubectl get deployments
```

Expected output:

```
NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
portfolio-deployment   1/1     1            1           1m
```

### Check the Service

```bash
kubectl get services
```

Expected output:

```
NAME                TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
portfolio-service   NodePort   10.x.x.x        <none>        80:30080/TCP   1m
```

---

## 5. Access the Portfolio in the Browser

Use the Minikube service command to open the portfolio:

```bash
minikube service portfolio-service
```

This will automatically open the portfolio in your default browser.

Alternatively, get the URL manually:

```bash
minikube service portfolio-service --url
```

This prints a URL like `http://192.168.49.2:30080` — open it in your browser.

---

## 6. Remove the Deployment

To remove all Kubernetes resources:

```bash
kubectl delete -f k8s/
```

Or delete individually:

```bash
kubectl delete -f k8s/deployment.yaml
kubectl delete -f k8s/service.yaml
```

To stop Minikube:

```bash
minikube stop
```

To delete the Minikube cluster entirely:

```bash
minikube delete
```

---

## Quick Reference

| Command | Description |
|---|---|
| `minikube start --driver=docker` | Start Minikube cluster |
| `minikube status` | Check cluster status |
| `eval $(minikube docker-env)` | Use Minikube's Docker daemon |
| `docker build -t portfolio:test .` | Build image inside Minikube |
| `kubectl apply -f k8s/` | Deploy all manifests |
| `kubectl get pods` | List pods |
| `kubectl get deployments` | List deployments |
| `kubectl get services` | List services |
| `kubectl logs -l app=portfolio` | View pod logs |
| `kubectl describe pod -l app=portfolio` | Describe pod details |
| `minikube service portfolio-service` | Open portfolio in browser |
| `kubectl delete -f k8s/` | Remove all resources |
| `minikube stop` | Stop the cluster |
| `minikube delete` | Delete the cluster |

---

## Architecture

```
┌──────────────────────────────────────────────┐
│              Minikube Cluster                 │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │       portfolio-service (NodePort)     │  │
│  │       Port 80 → Container Port 3000   │  │
│  │       NodePort: 30080                 │  │
│  └──────────────────┬─────────────────────┘  │
│                     │                        │
│  ┌──────────────────▼─────────────────────┐  │
│  │       portfolio-deployment             │  │
│  │       Replicas: 1                      │  │
│  │  ┌─────────────────────────────────┐   │  │
│  │  │  Pod: portfolio                 │   │  │
│  │  │  Image: portfolio:test          │   │  │
│  │  │  Port: 3000                     │   │  │
│  │  └─────────────────────────────────┘   │  │
│  └────────────────────────────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
        ▲
        │ minikube service portfolio-service
        │
   Browser (http://192.168.49.2:30080)
```
