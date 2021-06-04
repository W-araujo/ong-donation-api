

# Ong-donation-api


<a href="http://github.com/W-araujo">
<p>Author: Wesley Araujo</p>
</a>

<h1> ➡ Contents </h1>
<ul>
    <li>
    <a href="#technologies">Technologies</a>
    </li>
    <li>
     <a href="#features">Features</a>
    </li>
    <li>
      <a href="#intallation">Installation</a>
    </li>
    <li>
     <a href="#getting-started">Getting Started</a>
    </li>
</ul>

<h1 href="#technologies">⬇ Technologies</h1>

<h4>Back-end</h4>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>typescript</li>
  <li>typeorm</li>
  <li>dotEnv</li>
  <li>yup</li>
  <li>jest</li>
  <li>JWT</li>
  <li>bcrypt</li>
  </ul>
  
<h1 href="#features">⬇ Features</h1>
   <ul>
        <li>(Back-end) register/list/update/delete Ongs</li>
        <li>(Back-end) register/list/delete Types/Category</li>
        <li>(Back-end) register/list/delete Donations</li>
    </ul>
    
<h1 href="#installation">⬇ Installation </h1>
<h4>You need to install Node.js and Yarn first and then, to clone the project via HTTPS, run this command:</h4>

<p><code>git clone https://github.com/W-araujo/ong-donation-api.git</code></p>

<h4>(Back-end) Install dependecies</h4>

<p><code>npm install</code></p>

<p><code>yarn install</code></p>


<h1 href="#getting-started">⬇ Getting Started </h1>

<h4>Back-end</h4>
  <ul>
       <li>
        Create your enviroment variables based on the examples of .env.example
        </li>
           <li>
            Run this code to create the database tables
            <code>npm run typeorm migration:run</code>
        </li>
        <li>
        (optional) To delete the database tables use the command
        <code>npm run typeorm migration:revert</code>
        </li>
        <li>
           To start the server with docker
           <code>docker-compose up</code>
           if not, install the docker
        </li>
   </ul>


    
 
