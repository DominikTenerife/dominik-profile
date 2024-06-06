const certificatesData = [
  {
    id: 20240525,
    type: "certificate",
    name: "Microsoft Certified: Azure Administrator Associate",
    description: "Certificate obtained by passing proctored examination",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/DominikPiskorski-6222/EAC9B950B207FA47?sharingId=845F97E9AA4FCE87"
  },

  {
    id: 13,
    type: "certificate",
    name: "IBM DevOps and Software Engineering Professional Certificate",
    description: "Professional Certificate consisting of 14 modules / courses",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SNQ5PLDLL5ZA"
  },

  {
    id: 118,
    type: "certificate",
    name: "IBM Back-End Development Professional Certificate",
    description: "Professional Certificate consisting of 11 modules / courses",
    link: "https://coursera.org/share/a5bf032c9fde530196ab2a940cfdff32"
  },

  {
    id: 1,
    type: "certificate",
    name: "The Frontend Developer Career Path, by SCRIMBA",
    description: "Professional Certificate consisting of 12 modules. HTML, CSS, JavaScript, React, UI design, code review and other",
    link: "https://scrimba.com/certificate/uGa3a5Hv/gfrontend"
  },
  {
    id: 11,
    type: "course",
    name: "Advanced React, by SCRIMBA",
    description: "13 hours of a course + practical challenges and solo projects; reusability, routing (React Router 6), performance, Firebase integration",
    link: "https://scrimba.com/certificate/uGa3a5Hv/greact"
  },
  {
    id: 12,
    type: "course",
    name: "The AI Engineer Path, by SCRIMBA",
    description: "113 lessons + practical challenges and solo projects; LLM, embeddings, vector databases, Langchain, RAG",
    link: "https://scrimba.com/certificate/uGa3a5Hv/gaiengineer"
  },
  {
    id: 8,
    type: "course",
    name: "Python for Data Science, AI & Development, by IBM",
    description: "23 hours approx.; using Python libraries (Pandas, Numpy, Beautiful Soup), web scraping, data science",
    link: "https://www.coursera.org/account/accomplishments/certificate/B2HGRQTT2CDW"
  },
  {
    id: 117,
    type: "course",
    name: "Django Application Development with SQL and Databases, by IBM",
    description: "14 hours approx.; creating full stack Django web app to persist, process, and present data",
    link: "https://www.coursera.org/account/accomplishments/verify/7LS2RSWCTXXB"
  },
  
  {
    id: 115,
    type: "course",
    name: "Continuous Integration and Continuous Delivery (CI/CD), by IBM",
    description: "14 hours approx. CI/CD, GitHub Actions, Tekton, Terraform, Jenkins, .yaml files",
    link: "https://www.coursera.org/account/accomplishments/verify/7VUAHAXL2BWJ"
  },

  {
    id: 9,
    type: "course",
    name: "Developing AI Applications with Python and Flask, by IBM",
    description: "10 hours approx.; creating and deploying an AI-based application onto a web server using IBM Watson AI Libraries and Flask",
    link: "https://www.coursera.org/account/accomplishments/certificate/RD8BV9ZBVFKL"
  },

  {
    id: 112,
    type: "course",
    name: "Application Development using Microservices and Serverless, by IBM",
    description: "15 hours approx.; creating and deploying microservices using Docker, create REST API endpoints, Postman, SwaggerUI",
    link: "https://www.coursera.org/account/accomplishments/verify/AXMVHYCHDLSN"
  },
  {
    id: 113,
    type: "course",
    name: "Application Security for Developers and DevOps Professionals, by IBM",
    description: "17 hours approx.; secure design, defensive coding, OWASP principles, Static and Dynamic Analisis, SQL injections",
    link: "https://www.coursera.org/account/accomplishments/verify/8G7A5CHG53LW"
  },
  {
    id: 111,
    type: "course",
    name: "Monitoring and Observability for Development and DevOps, by IBM",
    description: "16 hours approx.; Prometheus, Grafana, Mezmo (LogDNA), Instana, OpenTelemetry",
    link: "https://www.coursera.org/account/accomplishments/certificate/PKXY4HA4ZT8U"
  },
    
    {
      id: 2,
      type: "course",
      name: "Introduction to Software Engineering, by IBM",
      description: "approx. 14 hours; Software Development Lifecycle, applications architecture and design, deployment architectures",
      link: "https://www.coursera.org/account/accomplishments/verify/2B6Y495YDVMV"
    },
    {
      id: 3,
      type: "course",
      name: "Introduction to DevOps, by IBM",
      description: "approx. 9 hours; DevOps, Cloud Native, CI/CD, agile, TDD/BDD",
      link: "https://www.coursera.org/account/accomplishments/verify/5HKUU55RVQQS"
    },
    {
      id: 4,
      type: "course",
      name: "Introduction to Agile Development and Scrum, by IBM",
      description: "9 hours approx.; Agile Software Development, Scrum Methodology, Sprint planning, Kanban, Zenhub",
      link: "https://www.coursera.org/account/accomplishments/certificate/LH9Y8PKPWY7X"
    },
    {
      id: 5,
      type: "course",
      name: "Getting Started with Git and GitHub, by IBM",
      description: "8 hours approx.; Distributed Version Control (DRCS), Git(software), Github",
      link: "https://www.coursera.org/account/accomplishments/certificate/HAB6G7X6426E"
    },
    {
      id: 6,
      type: "course",
      name: "Hands-on Introduction to Linux Commands and Shell Scripting, by IBM",
      description: "14 hours approx.; Linux commands, Bash(Unix shell), Extract Transform and Load (ETL), shell script, cron jobs scheduling",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~W2WXVHB5YMGL/CERTIFICATE_LANDING_PAGE~W2WXVHB5YMGL.jpeg"
    },
    {
      id: 7,
      type: "course",
      name: "Introduction to Cloud Computing, by IBM",
      description: "approx. 12 hours; cloud infrastructure components, deployment & service models, Cloud Native, Microservices, Serverless",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2CTCHNB6KAJH/CERTIFICATE_LANDING_PAGE~2CTCHNB6KAJH.jpeg"
    },
   
    {
      id: 10,
      type: "course",
      name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift, by IBM",
      description: "13 hours approx.; containers, Docker, Kubernetes, Cloud Native, OpenShift",
      link: "https://www.coursera.org/account/accomplishments/certificate/URJEJM6GJDZ2"
    },
    
    
    {
      id: 116,
      type: "course",
      name: "Introduction to Test and Behavior Driven Development, by IBM",
      description: "19 hours approx.; TDD & BDD methodology and application, Nosetests",
      link: "https://www.coursera.org/account/accomplishments/verify/3MLAV9XC62NW"
    },
    
    {
      id: 114,
      type: "course",
      name: "DevOps Capstone Project, by IBM",
      description: "13 hours approx. create a RESTful microservice-based Flask application, deploying it to Kubernetes with automated CI/CD pipeline",
      link: "https://www.coursera.org/account/accomplishments/verify/ZCS7P6BJ572K"
    },

    {
      id: 119,
      type: "course",
      name: "Back-end Application Development Capstone Project, by IBM",
      description: "18 hours approx. create Django web app along with microservices and deploying them using Code Engine, OpenShift, and Kubernetes.",
      link: "https://www.coursera.org/account/accomplishments/verify/PSZ2UDSHH7UU"
    },
    

  ];
  
    

  export default certificatesData
  
  