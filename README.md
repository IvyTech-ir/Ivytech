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

Note: to answer each question I mentioned the goals and the tools I'll use to reach it.

## 1- How do I set up a project

The main goals of my solution

<ul>
    <li>Easy to Develop
        <ul>
            <li>
                Bases on The official Redux+TS template for <a href="https://github.com/facebook/create-react-app" >Create React App </a> <em> so every newbie can onboard easy and fast</em>
            </li>
            <li>
                Standard Design Patterns (Tailswind)
                <em>powerfull documentation helps to develop faster</em>
            </li>
            <li>
                Encapsulated Development Area (Storybook, Chromatic)
                <em>Makes Development and tracking of mistakes Easy </em>
            </li>
            <li>
                United syntax and code style (Sonar Cloud, Prettier, StyledComponent)
            </li>
        </ul>
    </li>
    <li>Easy to Automatic test
        <ul>
            <li>
                Unit tests,E2E Test, snapshot test, Scenario base Tests, Multi Browser Test, Code Coverage Control (Jest, pupeeter)
            </li>
        </ul>
    </li>
    <li>Easy to Enhance UX
        <ul>
            <li>
                User Journey Monitoring, Heatmaps for UX development(Hotjar)
            </li>
            <li>
                Unexpected Error Handling (newRelic)
            </li>
        </ul>
    </li>
    <li>Best Possible Performanc
        <ul>
            <li>
                Consider high scale React problems, e.g rendering componets (Latest React Design Patterns, e.g Hooks)
            </li>
            <li>
            Web vitals monitoring (newRelic)
            </li>
            <li>
                Optimised Output (Webpack)
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
            UnExpected Error Hadling (newRelic)
            </li>
            <li>
                United Design System (Figma)
            </li>
        </ul>
    </li>
</ul>

## 2- How I structure my code?

<ul>
    <li>
    Encapsulate main parts (Development, Build, Integration, Thirdparties)</li>
    <li>
        Semantic Structure Map <em>helps to assosiate the UI to the Source</em>
    </li>
    <li>
        Integrity  <em>make everything in one place to easy access </em>
    </li>
</ul>

## 3- How a clean solution is look from my perspective?

Tools:Tailswind, StyledComponents, Sonar Cloud, Chromatic, Prettier

<ul>
     <li>
        Automatic and Manual Cleaning <br><em> not only by automatic analyzes (e.g Sonar Cloud, Prettier) but also aligning with semantice structre map (which we create it internally) based on project concepts</em>
    </li>
     <li>
    Prettier Code, Uglified output, reusable design system, optimised CSS output
    </li>
     <li>
        UX/UI final checking using chromatic
    </li>
    <li>
        Development Experience (DX) (e.g. Easy to find reusable components)
    </li>
    <li>
        No Extra Components, Configuration, Function,Element, Line, Letter
        <br><em>how beutiful is the explorer view</em>
    </li>
     <li>
        Unit Format in all places <br><em> Hyrerchy, File Names, File Path, function names, class names, variable names</em>
    </li>
   
</ul>

## 4- which design pattern you’d choose?

base on the situation I will use mix of below design patterns

<ul>
    <li>
        React-Hooks: <em>Customised Hooks helps alot to reusablity and readability </em>
    </li>
    <li>
        React-Redux: <em>State Management and api free development</em>
    </li>
    <li>
        Provider Pattern: <em>Managing Theme, Translation, Authentication</em>
    </li>
    <li>
        NexJS Pattern: <em>if the project needs server side rendering, e.g SEO dependent project</em>
    </li>
</ul>
<hr>

# What else?

<ul>
<li>
Advanced Webpack configuration like routbase distribution

</li>
<li>
Security Configuration
</li>
</ul>
