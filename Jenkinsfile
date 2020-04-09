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
                sh 'ansible-playbook deploy/deploy.yml --extra-vars "ansible_ssh_user=tamsir"' 
            }
        }

        
    }
}