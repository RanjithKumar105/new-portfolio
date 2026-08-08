pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint...'
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Next.js application...'
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed!'
        }

        always {
            echo 'Pipeline finished.'
        }
    }
}