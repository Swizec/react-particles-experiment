# Animating with React, Redux, and d3

![Gif](https://raw.githubusercontent.com/Swizec/react-particles-experiment/master/particles-step-5.gif)

That's a particle generator. It makes tiny circles fly out of where you click. Hold down your mouse and move around. The particles keep flying out of your cursor.

On mobile and only have a finger? That works, too.

I'm a nerd, so this is what I consider fun. Your mileage may vary. Please do click in the embed and look at those circles fly. Ain't it cool?

## Here's how it works

The whole thing is built with React, Redux, and d3. No tricks for animation; just a bit of cleverness.

Here's the general approach:

We use **React to render everything**: the page, the SVG element, the particles inside. All of it is built with React components that take some props and return some DOM. This lets us tap into React's algorithms that decide which nodes to update and when to garbage collect old nodes.

Then we use some **d3 calculations and event detection**. D3 has great random generators, so we take advantage of that. D3's mouse and touch event handlers calculate coordinates relative to our SVG. We need those, and React can't do it. React's click handlers are based on DOM nodes, which don't correspond to `(x, y)` coordinates. D3 looks at real cursor position on screen.

All **particle coordinates are in a Redux store**. Each particle also has a movement vector. The store holds some useful flags and general parameters, too. This lets us treat animation as data transformations. I'll show you what I mean in a bit.

We use **actions to communicate user events** like creating particles, starting the animation, changing mouse position, and so on. On each requestAnimationFrame, we **dispatch an "advance animation" action**.

On each action, the **reducer calculates a new state** for the whole app. This includes **new particle positions** for each step of the animation.

When the store updates, **React flushes changes** via props and because **coordinates are state, the particles move**.

The result is smooth animation.

[Keep reading to learn the details](http://swizec.com/blog/animating-with-react-redux-and-d3/swizec/6775).

A version of this article will be featured as a chapter in my upcoming [React+d3js ES6 book](http://swizec.com/reactd3js/).
