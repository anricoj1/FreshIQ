<style>
    .header {
        padding-top: 30px;
        color: orange;
    }

</style>

# FreshIQ
<h1 class="header">Commands</h1>
<ul>
    <li>Run a Postman Collection</li>
    <ul>
        <li><code>npm run collection</code></li>
        <li>JSON Response Files</li>
    </ul>
    <li>Run Insert Query On Collection</li>
    <ul>
        <li><code>npm run query</code></li>
    </ul>
    <li>Run JSON To CSV Converion</li>
    <ul>
        <li><code>npm run csv</code></li>
    </ul>
</ul>


<h1 class="header">Requirements</h1>
<ul>
    <li><a href="https://nodejs.org/en/">Node.js 14.15.5 LTS</a></li>
    <ul>
        <li>This will install <code>node & npm</code></li>
        <li>In root directory run <code>npm install</code></li>
    </ul>
    <li><a href="https://www.python.org/downloads/">Python 3.9.1</a></li>
    <ul>
        <li>Install Python on PATH & disable PATH limit</li>
        <li><code>pip install pyodbc</code> - db connector</li>
        <li><code>pip install python-dotenv</code> - environment variables</li>
        <li><code>pip install pandas</code></li>
    </ul>
</ul>


<h1 class="header">Guide</h1>
<ul>
    <li>npm is a package manager for JavaScript</li>
    <li>In root directory:</li>
    <ul>
        <li>I will send a directory named <code>collections</code></li>
        <ul>
            <li>Placed in <code>src</code></li>
        </ul>
        <li>I will also send a file named <code>.env</code> for environment variables</li>
        <ul>
            <li>Placed in <code>src</code></li>
        </ul>
        <li>Create 2 directories</li>
        <ul>
            <li><code>files (json response files)</code></li>
            <li><code>csvs (csv response files)</code></li>
        </ul>
        <li>These are necessary to run the collections</li>
        <li><code>npm install</code></li>
        <ul>
            <li>This will install all necessary dependencies</li>
            <li>Creates a directory <code>node_modules</code></li>
            <li>This file is added to our .gitignore as we dont need it on GitHub</li>
            <li>The <code>package.json</code> file controls all the commands</li>
            <ul>
                <li><code>npm run collection</code></li>
                <ul>
                    <li>runs <code>freshIQ.mjs</code> in <code>scripts</code>
                    <li>Writes collection to files
                </ul>
                <li><code>npm run query</code></li>
                <ul>
                    <li>runs <code>query.py</code> in <code>scripts</code>
                </ul>
                <li><code>npm run csv</code></li>
                <ul>
                    <li>runs <code>toCSV.py</code> in <code>scripts</code>
                </ul>
            </ul>
        </ul>
    </ul>
<ul>