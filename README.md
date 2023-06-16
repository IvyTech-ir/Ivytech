<style>
    em
    {
        color:gray;
    }
</style>

# Whitebox (Shahab's Sample Architecht)



## Requirements
<ol>
    <li>
        how you would set up a project?
    </li>
    <li>how you structure your code?</li>
    <li>how a clean solution would look from your perspective?</li>
    <li>which design pattern you’d choose?</li>
</ol>
<strong>Note:</strong> The project should demonstrate the standards you expect from a clean solution. 
<hr/>

## 1- How I set up a project
### The main goals of my dream solution
<ul>
    <li>Easy to Develop
        <ul>
            <li>
                Base Standard React Architecht <em> so every newbie can onboard easy and fast</em>
            </li>
            <li>
                ability plug in everything from the internet world<em> as an  encapsulated module to avoid complexity</em>
            </li>
            <li>
                the less complexity the less dependency to developers
            </li>
            <li>
                united syntax and structure (using prettier)
            </li>
            <li>Modularity <em>to easily add members to team</em></li>
        </ul>
    </li>
    <li>Easy to test
        <ul>
            <li>
                End 2 End test (pupeeteer)
            </li>
            <li>
                Automatic Unit tests (Jest)
            </li>
        </ul>
    </li>
    <li>Easy to maintenace
        <ul>
            <li>
                powerfull monitoring (newrelic)
            </li>
            <li>
                Unexpected Error Handling (newRelic)
            </li>
        </ul>
    </li>
    <li>Best Possible Performanc
        <ul>
            <li>
                avoid react bottle nech (rendering componets)
            </li>
            <li>
                using latest best practices in react (hooks)
            </li>
        </ul>
    </li>
    <li>UX 
        <ul>
            <li>
                track user behaviour (using webtrekk)
            </li>
            <li>
                design first (Figma)
            </li>
        </ul>
    </li>
</ul> 

## 2- How I structure my code?
### The Main goals of my structure
<ul>
    <li>
        Easy to understand (Structure Map) <em>helps to assosiate the UI to the Source</em>
    </li>
    <li>
        meaningfull naming according to convesion
    </li>
    <li>
        Modularity <em>to best maintenance of third party modules</em>
    </li>
    <li>
        Integrity  <em>make everything in one place to easy deployment </em>
    </li>
    <li>
        Thirdparty Wrappers <em>to avoid breakdown</em>
    </li>
</ul>

## 3- How a clean solution is look from my perspective?
<ul>
    <li>
        No Extra Components, Configuration, Function,Element, Line, Letter
    </li>
     <li>
        Unit Format in all places (Hyrerchy, File Names, File Path, function names, class names, variable names)
    </li>
    <li>
        Easy to find reusable components to use or wrap it
    </li>
</ul>

## 4- which design pattern you’d choose?
### base on the situation I will use mix of below design patterns
<ul>
    <li>
        Provider Pattern <em>almost every project</em>
    </li>
     <li>
        the HOC Pattern <em>mostly for thirdparties</em>
    </li>
    <li>
        React-Redux <em>almost every projects</em>
    </li>
    <li>
        React-Hook <em>almost every project</em>
    </li>
     <li>
        NexJS Pattern <em>if the project needs server side rendering, e.g SEO dependent project</em>
    </li>
</ul>
<hr>

# Structure 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Performanc: Web-vitals
## User Tracking: Web-trekker
## Error Monitoring: NewRelic
## State Management: Redux
## Integrity: plugin something
## Clean Code: prettier, Sonar Cloud, Chromatic
## Modularity: Encapsulated Repository for Components, Whitebox-DesignSystem, Storybook
## MultiBorower Support
## Performanc: React-snapshots
## Test, Jest, E2E (Pupetter),React testing library
## React Context Provider
## React Theme Provider
## React Trekk Provider
## Webpack
## npmrc
## env management