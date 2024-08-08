pipeline {
    agent any
    
    stages {
        stage('Checkout Frontend') {
            steps {
                script {
                    def frontendDir = 'FR'
                    if (fileExists(frontendDir)) {
                        // If the FR folder exists, pull changes
                        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://alebdaaAlarabi@dev.azure.com/alebdaaAlarabi/Project_Management/_git/front-end']]])
                    } else {
                        // If the FR folder doesn't exist, clone the repository
                        git branch: 'master', url: 'https://alebdaaAlarabi@dev.azure.com/alebdaaAlarabi/Project_Management/_git/front-end'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'npm i -f'
                bat 'npm run build-prod'
            }
        } 
        stage('Checkout Backend') {
            steps {
                script {
                    def backendDir = 'BE'
                    if (fileExists(backendDir)) {
                        // If the BE folder exists, pull changes
                        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://alebdaaAlarabi@dev.azure.com/alebdaaAlarabi/Project_Management/_git/Project_Management']]])
                    } else {
                        // If the BE folder doesn't exist, clone the repository
                        git branch: 'master', url: 'https://alebdaaAlarabi@dev.azure.com/alebdaaAlarabi/Project_Management/_git/Project_Management'
                    }
                }
            }
        }
        
        stage('Publish Backend') {
            steps {
                bat 'dotnet publish -c Release -r win-x64 --output ..\\build'
            }
        }
    }
}
