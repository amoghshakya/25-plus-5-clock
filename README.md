# Markdown Previewer - FCC

> *This is one of the 5 projects required for the completion of the course [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries).*

**Objective**: Build an app that is functionally similar to this: https://25--5-clock.freecodecamp.rocks.

**Instructions:**\
You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

# What is a 25 + 5 clock?

A 25 + 5 clock or a pomodoro clock is a time management system that encourages people to work with the time they have, rather than against it. Using this method, you break your work into 25-minute chunks separated by 5-minute breaks.

## About this project

This was made in React with TypeScript and TailwindCSS (and heroicons). If you go through the code, you should realize that I should have used a state management system like Redux, but I didn't because it felt like a hassle to set all that up. So, instead I passed states and dispatches among components. [^1]

[^1]: this just makes the code look ugly (lots of props)

## Run on your machine locally

Clone this repo and run

```bash
npm install
# or
pnpm install
# or 
bun install
```