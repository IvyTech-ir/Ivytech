# Shahab's Sample Architecht

## Requirements

<ol>
    <li>
        how you would set up a project?
    </li>
    <li>how you structure your code?</li>
    <li>how a clean solution would look from your perspective?</li>
    <li>which design pattern you’d choose?</li>
</ol>
<hr/>

## 1- How I set up a project

### The main goals of my solution

<ul>
    <li>Easy to Develop
        <ul>
            <li>
                Based on Standard React Architecht <br><em> so every newbie can onboard easy and fast</em>
                <ul>
                    <li>
                        The official Redux+TS template for <a href="https://github.com/facebook/create-react-app" >Create React App </a>
                    </li>
                </ul>
            </li>
            <li>
                Encapsulated Thirdparties  <br><em>ability plug in everything from the internet's world as an encapsulated module to avoid complexity</em>
                 <ul>
                    <li>
                        Design Systems (Bootstrap,...)
                    </li>
                    <li>
                        Performance Monitoring (Newrelic, webvitals, ...)
                    </li>
                     <li>
                        Customised Components (Our Internal Design System)<br><em>the less complexity the less dependency to developers</em>
                    </li>
                </ul>
            </li>
            <li>
                United syntax and structure (Sonar Cloud, Prettier)
            </li>
            <li>Modularity <em>to easily grow the team</em></li>
        </ul>
    </li>
    <li>Easy to Automatic test
        <ul>
            <li>
                End 2 End tests (Pupeeteer)
            </li>
            <li>
                Unit tests (Jest)
            </li>
            <li>
                Code Coverage Control (using Jest)
            </li>
            <li>
                Snapshot Control (using Jest)
            </li>
        </ul>
    </li>
    <li>Easy to Maintenace
        <ul>
            <li>
                User Journey Monitoring (Hotjar)
            </li>
            <li>
                Unexpected Error Handling (newRelic)
            </li>
        </ul>
    </li>
    <li>Best Possible Performanc
        <ul>
            <li>
                Avoid react bottle nechs, e.g rendering componets (Latest React Design Patterns, e.g Hooks)
            </li>
            <li>
                SEO Awarness (e.g Next.js)
            </li>
        </ul>
    </li>
    <li>UX 
        <ul>
            <li>
                Track user behaviour (Hotjar)
            </li>
            <li>
                United Design System (Figma)
            </li>
        </ul>
    </li>
</ul>

## 2- How I structure my code?

### The Main goals of my structure

<ul>
    <li>Encapsulate Development with Build and API Integration</li>
    <li>
        Easy to understand (Structure Map) <em>helps to assosiate the UI to the Source</em>
    </li>
    <li>
        Meaningfull naming according to concepts in projects
    </li>
    <li>
        Modularity <em>to best maintenance of each concept and third party modules</em>
    </li>
    <li>
        Integrity  <em>make everything in one place to easy access </em>
    </li>
    <li>
        Thirdparty Wrappers <em>to avoid breakdown and multiple syntax</em>
    </li>
</ul>

## 3- How a clean solution is look from my perspective?

<ul>
     <li>
        Automatic and Manual Cleaning <br><em> not only by automatic analyzev (e.g Sonar Cloud) but also aligning with structre map (which we create it internally) based on project concepts</em>
    </li>
    <li>
        No Extra Components, Configuration, Function,Element, Line, Letter
        <br><em>how beutiful is the explorer view</em>
    </li>
     <li>
        Unit Format in all places <br><em> Hyrerchy, File Names, File Path, function names, class names, variable names</em>
    </li>
    <li>
        Easy to find reusable components to use or wrap it
    </li>
  
</ul>

## 4- which design pattern you’d choose?

### base on the situation I will use mix of below design patterns

<ul>
    <li>
        React-Hook <em>Customised Hooks helps alot to reusablity and readability </em>
    </li>
    <li>
        React-Redux <em>State Management and api free development</em>
    </li>
    <li>
        Provider Pattern <em>Managing Theme, Translation, Authentication</em>
    </li>
     <li>
        HOC Pattern <em>Avoid conflict with thirdarties</em>
    </li>
    <li>
        NexJS Pattern <em>if the project needs server side rendering, e.g SEO dependent project</em>
    </li>
</ul>
<hr>

# Tools List
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.
## NewRelic
Error Monitoring, web vitals
#### State Management: Redux
#### Clean Code: prettier, Sonar Cloud, Chromatic
## Pupeteer
MultiBorower Support, E2E
## Jest
Unit Test, Snapshot test, code coverage, Scenario Base 
## Webpack
minify output
## Web-trekker
User Tracking
# Patterns
## React-Context
Theme Provider, Auth Providers, ...
## Wrapup Export Pattern

# Other to consider
## env management
## Post CSS 
## Security Configuration


