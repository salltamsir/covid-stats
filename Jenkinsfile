pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }

        stage('Deploy') { 
            steps {
                sh 'sudo ansible-playbook deploy/deploy.yml' 
            }
        }

        
    }
}