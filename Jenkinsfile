pipeline {
    agent any

    tools {
        // Name of the Node.js tool configured in Jenkins Global Tool Configuration
        nodejs 'node'
    }

    environment {
        // --- Deployment Connection Configuration ---
        // 1. For SSH Connection (Option 1):
        SSH_CREDENTIALS_ID = 'server-ssh-key' // Jenkins Credentials ID for SSH private key
        SERVER_USER        = 'ubuntu'
        SERVER_IP          = '192.168.1.100'
        DEPLOY_PATH        = '/var/www/portfolio'

        // 2. For Docker Connection (Option 2):
        // DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        // DOCKER_IMAGE = 'your-docker-username/portfolio'

        // 3. For Vercel Connection (Option 3):
        // VERCEL_TOKEN_CREDENTIALS_ID = 'vercel-token'
        // VERCEL_PROJECT_ID = 'project_xxxxxx'
        // VERCEL_ORG_ID = 'team_xxxxxx'
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                runCmd('npm ci')
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint...'
                runCmd('npm run lint')
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                runCmd('npm run build')
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    // --- SELECT YOUR DEPLOYMENT METHOD ---
                    
                    // EXAMPLE A: SSH Deployment
                    // sshagent([SSH_CREDENTIALS_ID]) {
                    //     runCmd("rsync -avz --exclude 'node_modules' --exclude '.git' . ${SERVER_USER}@${SERVER_IP}:${DEPLOY_PATH}")
                    //     runCmd("ssh ${SERVER_USER}@${SERVER_IP} 'cd ${DEPLOY_PATH} && npm install --production && pm2 restart portfolio || pm2 start npm --name portfolio -- start'")
                    // }

                    // EXAMPLE B: Docker Deployment
                    // withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    //     runCmd("docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}")
                    //     runCmd("docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .")
                    //     runCmd("docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}")
                    // }

                    // EXAMPLE C: Vercel Deployment
                    // withCredentials([string(credentialsId: VERCEL_TOKEN_CREDENTIALS_ID, variable: 'VERCEL_TOKEN')]) {
                    //     runCmd("npx vercel --token ${VERCEL_TOKEN} --prod --yes")
                    // }
                    
                    echo 'Pipeline ran successfully. Configure the deploy stage with your credentials as shown in the examples above.'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Cleaning workspace...'
            cleanWs()
        }
        success {
            echo 'Build and Deployment Succeeded!'
        }
        failure {
            echo 'Pipeline Failed!'
        }
    }
}

// Helper function to run commands on both Unix (sh) and Windows (bat) agents dynamically
def runCmd(String command) {
    if (isUnix()) {
        sh command
    } else {
        bat command
    }
}
